/**
 * Zentrale Stammdaten und Schalter der Website.
 *
 * Alles, was an mehreren Stellen erscheint — Anschrift, Rufnummern,
 * Registerangaben, Ansprechpartner —, steht hier und nur hier. Impressum,
 * Datenschutzerklärung, Kontaktbereich und Fußzeile lesen daraus; eine
 * Änderung muss deshalb nicht im Markup nachgezogen werden.
 *
 * Angaben, die noch nicht vorliegen, stehen bewusst auf `null` statt auf einem
 * erfundenen Platzhalter. Die betroffenen Abschnitte entfallen dann auf der
 * Website ersatzlos — ein sichtbarer Hinweis auf die Lücke wäre für Besucher
 * irritierend und gehört nicht auf eine veröffentlichte Seite. Was fehlt,
 * steht stattdessen in LIVEGANG_CHECKLISTE.md, und `npm run build` gibt es im
 * Protokoll aus.
 */

export const company = {
  /** Vollständige Firmierung inklusive Rechtsform. */
  name: 'ELCON LED GmbH',

  /* Ladungsfähige Anschrift. */
  street: 'Bauernstr. 34',
  zip: '31275',
  city: 'Lehrte (OT Immensen)',
  country: 'Deutschland',
  /** Landesname für die englische Fassung der Anschrift. */
  countryEn: 'Germany',

  phone: '+49 (0) 5175 - 77 16 116',
  phoneHref: '+4951757716116',
  fax: '+49 (0) 5175 - 92 00 14',
  email: 'info@elcon-led.com',
  /** Rufnummer für WhatsApp, ohne Zeichen und führendes Plus. */
  whatsapp: '4951757716116',

  /* ------------------------------------------------------------------ *
   * Pflichtangaben nach § 5 DDG — noch nicht belegt.
   *
   * Diese Felder sind vor dem Livegang mit den echten Werten aus dem
   * Handelsregisterauszug zu füllen. Solange sie auf `null` stehen, gilt das
   * Impressum als unvollständig; der Build weist darauf hin.
   * ------------------------------------------------------------------ */

  /** Namen der vertretungsberechtigten Geschäftsführung, z. B. ['Max Mustermann']. */
  managingDirectors: null as string[] | null,
  /** Registergericht, z. B. 'Amtsgericht Hildesheim'. */
  registerCourt: null as string | null,
  /** Handelsregisternummer, z. B. 'HRB 12345'. */
  registerNumber: null as string | null,
  /** Umsatzsteuer-Identifikationsnummer nach § 27a UStG, z. B. 'DE123456789'. */
  vatId: null as string | null,
  /** Zuständige Kammer oder Aufsichtsbehörde, falls einschlägig. */
  chamber: null as string | null,
  /** Berufsrechtliche Bezeichnung und Staat der Verleihung, falls einschlägig. */
  professionalTitle: null as string | null,
  /** Inhaltlich Verantwortlicher, falls abweichend von der Geschäftsführung. */
  contentResponsible: null as string | null,
} as const;

/** Pflichtangaben nach § 5 DDG, die noch fehlen — Schlüssel und Klartext. */
export const fehlendePflichtangaben: { feld: string; de: string; en: string }[] = [
  !company.managingDirectors && {
    feld: 'managingDirectors',
    de: 'Vertretungsberechtigte Geschäftsführung',
    en: 'Authorised managing director(s)',
  },
  !company.registerCourt && {
    feld: 'registerCourt',
    de: 'Registergericht',
    en: 'Register court',
  },
  !company.registerNumber && {
    feld: 'registerNumber',
    de: 'Handelsregisternummer',
    en: 'Commercial register number',
  },
  !company.vatId && {
    feld: 'vatId',
    de: 'Umsatzsteuer-Identifikationsnummer (§ 27a UStG)',
    en: 'VAT identification number',
  },
].filter(Boolean) as { feld: string; de: string; en: string }[];

/** Gilt das Impressum als vollständig? */
export const impressumVollstaendig = fehlendePflichtangaben.length === 0;

/**
 * Bezeichnung der Geschäftsführung, abhängig von der Anzahl.
 *
 * Im Deutschen unterscheidet sich die Einzahl von der Mehrzahl; im Englischen
 * ist "Managing Director" die übliche Entsprechung zum GmbH-Geschäftsführer.
 * Das Geschlecht der Personen ist nicht bekannt, deshalb steht in der
 * Einzahl die geschlechtsneutrale Form.
 */
export function geschaeftsfuehrungLabel(anzahl: number, lang: 'de' | 'en'): string {
  if (lang === 'en') return anzahl === 1 ? 'Managing Director' : 'Managing Directors';
  return anzahl === 1 ? 'Geschäftsführung' : 'Geschäftsführung';
}

/* ====================================================================== *
 * Ansprechpartner
 * ====================================================================== */

export interface Ansprechpartner {
  /** Interner Schlüssel, erscheint nicht auf der Website. */
  id: string;
  vorname: string;
  nachname: string;
  /** Funktionsbezeichnung, deutsch und englisch. */
  funktion: string;
  funktionEn: string;
  /** Verantwortungsbereich in Stichworten, deutsch und englisch. */
  bereich: string | null;
  bereichEn: string | null;
  /** Durchwahl in lesbarer Form; `telefonHref` ohne Zeichen für den Link. */
  telefon: string | null;
  telefonHref: string | null;
  email: string | null;
  /** Dateiname in src/assets/personen; ohne Foto wird eine Initialenfläche gezeigt. */
  foto: string | null;
  /** Gesprochene Sprachen, als ISO-Kürzel, z. B. ['de', 'en']. */
  sprachen: string[];
  /** Auf der Kontaktseite anzeigen. */
  aufKontaktseite: boolean;
  /** In der Fußzeile anzeigen. */
  imFooter: boolean;
  /** Leistungsbereiche, bei denen die Person genannt wird (IDs aus data/finder.ts). */
  leistungsbereiche: string[];
  /** Datensatz gepflegt und aktuell. */
  aktiv: boolean;
  /**
   * Die Person hat der Veröffentlichung ihrer Daten auf der Website
   * zugestimmt. Ohne diese Zustimmung wird der Datensatz nicht ausgegeben,
   * auch wenn er vollständig ist.
   */
  veroeffentlichungsfreigabe: boolean;
}

/**
 * Reale Ansprechpartner der ELCON LED GmbH.
 *
 * Bewusst leer: Es liegen keine belegten Namen, Funktionen oder Durchwahlen
 * vor. Erfundene Personen wären auf einer Unternehmenswebsite eine
 * Falschangabe, deshalb bleibt die Liste leer, bis echte Daten vorliegen —
 * die Kontaktseite zeigt dann die allgemeinen Unternehmensdaten.
 *
 * Gepflegt wird die Liste ausschließlich hier. Ein Eintrag erscheint erst,
 * wenn `aktiv` und `veroeffentlichungsfreigabe` beide auf `true` stehen.
 */
export const ansprechpartner: Ansprechpartner[] = [];

/** Ansprechpartner, die tatsächlich ausgegeben werden dürfen. */
export const sichtbareAnsprechpartner = ansprechpartner.filter(
  (p) => p.aktiv && p.veroeffentlichungsfreigabe,
);

/* ====================================================================== *
 * Reichweitenmessung
 * ====================================================================== */

/**
 * Google-Analytics-4-Property-ID.
 *
 * Leer lassen, solange keine echte ID vorliegt: Dann wird weder das
 * Analytics-Skript geladen noch der Cookie-Banner angezeigt, und die
 * Datenschutzerklärung beschreibt die Seite korrekt als trackingfrei.
 * Sobald hier eine echte ID (Format `G-XXXXXXXXXX`) eingetragen wird,
 * schalten sich Banner, Consent-Speicherung und Analytics automatisch zu.
 */
export const GA_MEASUREMENT_ID = '';

export const analyticsEnabled = GA_MEASUREMENT_ID.length > 0;

/**
 * Token für Cloudflare Web Analytics.
 *
 * Cloudflare misst cookielos: Es werden keine Informationen auf dem Endgerät
 * gespeichert oder ausgelesen, es entstehen keine Nutzungsprofile und kein
 * geräteübergreifendes Wiedererkennen. Eine Einwilligung nach § 25 Abs. 1 TDDDG
 * ist deshalb nicht erforderlich — dieser Dienst läuft ohne Cookie-Banner.
 *
 * Den Token findet man im Cloudflare-Dashboard unter Analytics & Logs → Web
 * Analytics → Manage site → JS snippet; es ist die Zeichenkette hinter "token".
 *
 * Achtung: Für Pages-Projekte lässt sich Web Analytics im Dashboard auch mit
 * einem Schalter aktivieren, wobei Cloudflare das Skript selbst einfügt. Beides
 * gleichzeitig führt zu doppelter Zählung — entweder der Schalter oder dieser
 * Token, nicht beides.
 */
export const CF_BEACON_TOKEN = '';

/**
 * Auf true setzen, wenn Web Analytics stattdessen im Cloudflare-Dashboard über
 * den Schalter des Pages-Projekts aktiviert wurde.
 *
 * In diesem Fall fügt Cloudflare das Messskript selbst ein, ohne dass hier ein
 * Token steht. Die Datenschutzerklärung würde die Seite dann fälschlich als
 * trackingfrei beschreiben — dieser Schalter verhindert genau das: Er schaltet
 * den Cloudflare-Abschnitt im Rechtstext frei, ohne ein zweites Messskript
 * einzubinden.
 */
export const CF_ANALYTICS_VIA_DASHBOARD = true;

/** Bindet diese Seite das Messskript selbst ein? Nur dann, wenn ein Token
 *  hinterlegt ist — bei der Dashboard-Variante fügt Cloudflare es selbst ein. */
export const cloudflareBeaconInline = CF_BEACON_TOKEN.length > 0;

/** Läuft Cloudflare Web Analytics überhaupt — gleich auf welchem Weg?
 *  Steuert die Darstellung in der Datenschutzerklärung. */
export const cloudflareAnalyticsEnabled =
  cloudflareBeaconInline || CF_ANALYTICS_VIA_DASHBOARD;

/** Läuft überhaupt irgendeine Form der Reichweitenmessung? */
export const anyAnalyticsEnabled = analyticsEnabled || cloudflareAnalyticsEnabled;

/* ====================================================================== *
 * Anfrageformular
 * ====================================================================== */

/**
 * Grenzwerte des Anfrageformulars.
 *
 * Sie stehen hier, weil Formular und Endpunkt dieselben Werte brauchen: Das
 * Formular meldet die Überschreitung sofort, der Endpunkt weist sie noch
 * einmal ab. Eine Prüfung allein im Browser wäre wirkungslos, da sich der
 * Endpunkt auch direkt ansprechen lässt.
 */
export const formular = {
  /** Gesamtgröße aller Anhänge zusammen. */
  maxAnhangGesamt: 15 * 1024 * 1024,
  /** Größe einer einzelnen Datei. */
  maxAnhangEinzeln: 10 * 1024 * 1024,
  maxDateien: 10,
  maxLaengeName: 120,
  maxLaengeUnternehmen: 160,
  maxLaengeEmail: 254,
  maxLaengeTelefon: 40,
  maxLaengeOrt: 160,
  maxLaengeNachricht: 8000,
  /** Zulässige Dateiendungen, kleingeschrieben und mit Punkt. */
  erlaubteEndungen: [
    '.pdf', '.doc', '.docx', '.xls', '.xlsx',
    '.jpg', '.jpeg', '.png', '.zip', '.dwg', '.dxf', '.ifc',
  ],
} as const;

/** Datum der letzten inhaltlichen Änderung der Rechtstexte. */
export const legalLastUpdated = '20. September 2026';

/** Dasselbe Datum für die englische Fassung der Rechtstexte. */
export const legalLastUpdatedEn = '20 September 2026';
