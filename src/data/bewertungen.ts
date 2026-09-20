/**
 * Google-Bewertungen, abgerufen beim Bauen der Seite.
 *
 * Bewusst nicht im Browser: Ein Abruf aus der laufenden Seite würde die
 * IP-Adresse jedes Besuchers an Google übertragen. Das wäre nach § 25 Abs. 1
 * TDDDG einwilligungsbedürftig, machte einen Cookie-Banner nötig und würde
 * die Datenschutzerklärung unrichtig machen, die diese Seite zutreffend als
 * trackingfrei beschreibt.
 *
 * Stattdessen fragt der Build-Server die Bewertungen ab und schreibt sie fest
 * ins HTML. Für Besucher ist das eine ganz normale Seite ohne
 * Fremdverbindung; die Inhalte kommen trotzdem automatisch von Google und
 * aktualisieren sich mit jedem Deploy.
 *
 * Eingerichtet wird das über zwei Umgebungsvariablen (siehe .env.example):
 *
 *   GOOGLE_PLACES_API_KEY   Schlüssel aus der Google Cloud Console,
 *                           Places API (New) muss aktiviert sein
 *   GOOGLE_PLACE_ID         Kennung des Unternehmensprofils
 *
 * Fehlt eine der beiden, bleibt die Liste leer und der Abschnitt entfällt auf
 * der Seite. Der Build bricht nie ab — eine nicht erreichbare Schnittstelle
 * darf keine Website verhindern.
 */

export interface Bewertung {
  /** Anzeigename des Verfassers, wie Google ihn ausgibt. */
  autor: string;
  /** Verweis auf das Google-Profil des Verfassers, für die Quellenangabe. */
  autorUrl: string | null;
  /** Profilbild bei Google; wird nicht eingebunden, siehe unten. */
  sterne: number;
  text: string;
  /** Sprache des Textes, als ISO-Kürzel. */
  sprache: string | null;
  /** Zeitpunkt in ISO-Form, für <time datetime>. */
  datum: string | null;
  /** Von Google formulierte Zeitangabe, z. B. "vor 2 Monaten". */
  datumText: string | null;
}

export interface Bewertungsstand {
  /** Durchschnitt, z. B. 4.8 — null, wenn Google keinen liefert. */
  schnitt: number | null;
  /** Gesamtzahl der Bewertungen. */
  anzahl: number;
  /** Bis zu fünf Einzelbewertungen; mehr gibt die Schnittstelle nicht her. */
  bewertungen: Bewertung[];
  /** Link auf das Unternehmensprofil bei Google. */
  profilUrl: string | null;
  /** Ist die Schnittstelle überhaupt eingerichtet? */
  eingerichtet: boolean;
}

const LEER: Bewertungsstand = {
  schnitt: null,
  anzahl: 0,
  bewertungen: [],
  profilUrl: null,
  eingerichtet: false,
};

/** Kappt zu lange Bewertungstexte an einer Satz- oder Wortgrenze. */
function kuerzen(text: string, max = 420): string {
  if (text.length <= max) return text;
  const schnitt = text.slice(0, max);
  const satz = Math.max(schnitt.lastIndexOf('. '), schnitt.lastIndexOf('! '), schnitt.lastIndexOf('? '));
  if (satz > max * 0.5) return schnitt.slice(0, satz + 1);
  const luecke = schnitt.lastIndexOf(' ');
  return (luecke > max * 0.5 ? schnitt.slice(0, luecke) : schnitt).replace(/[,;:\s-]+$/, '') + ' …';
}

let zwischenspeicher: Bewertungsstand | null = null;

/**
 * Holt den Bewertungsstand. Das Ergebnis wird für den Lauf gemerkt, damit
 * nicht jede Seite die Schnittstelle erneut anspricht.
 */
export async function ladeBewertungen(): Promise<Bewertungsstand> {
  if (zwischenspeicher) return zwischenspeicher;

  const schluessel = import.meta.env.GOOGLE_PLACES_API_KEY;
  const platz = import.meta.env.GOOGLE_PLACE_ID;

  if (!schluessel || !platz) {
    zwischenspeicher = LEER;
    return LEER;
  }

  try {
    const antwort = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(platz)}`,
      {
        headers: {
          'X-Goog-Api-Key': schluessel,
          'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
        },
      },
    );

    if (!antwort.ok) {
      console.warn(`[Bewertungen] Google antwortete mit ${antwort.status}; Abschnitt bleibt leer.`);
      zwischenspeicher = { ...LEER, eingerichtet: true };
      return zwischenspeicher;
    }

    const daten = (await antwort.json()) as {
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: {
        rating?: number;
        text?: { text?: string; languageCode?: string };
        originalText?: { text?: string; languageCode?: string };
        authorAttribution?: { displayName?: string; uri?: string };
        publishTime?: string;
        relativePublishTimeDescription?: string;
      }[];
    };

    const bewertungen: Bewertung[] = (daten.reviews ?? [])
      .filter((r) => (r.text?.text ?? r.originalText?.text ?? '').trim().length > 0)
      .map((r) => ({
        autor: r.authorAttribution?.displayName?.trim() || 'Google-Nutzer',
        autorUrl: r.authorAttribution?.uri ?? null,
        sterne: Math.round(r.rating ?? 0),
        text: kuerzen((r.text?.text ?? r.originalText?.text ?? '').trim()),
        sprache: r.text?.languageCode ?? r.originalText?.languageCode ?? null,
        datum: r.publishTime ?? null,
        datumText: r.relativePublishTimeDescription ?? null,
      }));

    zwischenspeicher = {
      schnitt: typeof daten.rating === 'number' ? daten.rating : null,
      anzahl: daten.userRatingCount ?? 0,
      bewertungen,
      profilUrl: daten.googleMapsUri ?? null,
      eingerichtet: true,
    };
    return zwischenspeicher;
  } catch (fehler) {
    /* Eine nicht erreichbare Schnittstelle darf den Build nicht verhindern. */
    console.warn('[Bewertungen] Abruf fehlgeschlagen; Abschnitt bleibt leer.', fehler);
    zwischenspeicher = { ...LEER, eingerichtet: true };
    return zwischenspeicher;
  }
}
