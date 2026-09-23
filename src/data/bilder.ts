/**
 * Herkunftsregister der verwendeten Bilder.
 *
 * Seit dem 2. August 2026 verlangt Art. 50 EU AI Act, dass KI-erzeugte Bild-,
 * Ton- und Videoinhalte als solche erkennbar sind. Unabhängig davon wäre es
 * irreführend, eine KI-Visualisierung so zu zeigen, als sei sie die Aufnahme
 * eines tatsächlich ausgeführten ELCON-Projekts oder tatsächlicher
 * Mitarbeitender.
 *
 * Dieses Register hält für jedes Motiv fest, was es ist. Die Seiten lesen
 * daraus, welcher Hinweis nötig ist; ohne Eintrag gilt ein Bild als
 * ungeklärt.
 *
 * Grundlage der Einordnung:
 *
 *  - Die Projektfotos der Nord-Stream-Baustelle tragen Kamera-Metadaten
 *    (Canon, Olympus, Bearbeitung in Photoshop CS3). Sie sind damit als reale
 *    Aufnahmen belegt.
 *  - Die Referenzschreiben sind Scans echter Dokumente aus dem Firmenarchiv.
 *  - Die Motive, die bisher das Overlay "AI generated" trugen, sind vom
 *    Auftraggeber selbst als KI-generiert gekennzeichnet worden und enthalten
 *    keinerlei Aufnahmemetadaten.
 *  - Für die übrigen Motive ohne Metadaten und ohne bisherige Kennzeichnung
 *    ist die Herkunft nicht belegt; sie stehen auf 'ungeklaert'.
 *
 * Nichts hiervon ist hinzuerfunden. Wo die Herkunft offen ist, steht das so
 * im Register und in LIVEGANG_CHECKLISTE.md.
 */

/**
 * Art des Motivs.
 *
 * 'echt'        — reale Unternehmens- oder Projektaufnahme bzw. Dokumentscan
 * 'ki-illustrativ' — KI-generiert, erkennbar illustrativ oder abstrakt
 * 'ki-technik'  — fotorealistische KI-Visualisierung von Technik/Gebäuden
 * 'ki-personen' — fotorealistische KI-Visualisierung mit dargestellten Personen
 * 'ki-projekt'  — KI-Motiv im Umfeld eines konkreten Referenzprojekts
 * 'ungeklaert'  — Herkunft nicht belegt
 * 'logo'        — Wort-/Bildmarke eines Dritten
 * 'grafik'      — eigene Grafik ohne Abbildungscharakter
 */
export type Bildart =
  | 'echt'
  | 'ki-illustrativ'
  | 'ki-technik'
  | 'ki-personen'
  | 'ki-projekt'
  | 'ungeklaert'
  | 'logo'
  | 'grafik';

export interface Bildeintrag {
  /** Pfad unterhalb von src/assets. */
  datei: string;
  art: Bildart;
  /** Worauf die Einordnung beruht. */
  beleg: string;
  /** Wird das Motiv derzeit auf der Website verwendet? */
  verwendet: boolean;
  /** Wo es steht, sofern verwendet. */
  einsatzort: string | null;
  /** Zugehöriges Projekt oder Leistungsfeld. */
  bezug: string | null;
  /** Urheber oder Rechteinhaber, soweit bekannt. */
  rechteinhaber: string | null;
  /** Darf das Motiv verwendet werden? */
  nutzungsfreigabe: Bildfreigabe;
  /** Darf es öffentlich gezeigt werden? */
  veroeffentlichungsfreigabe: Bildfreigabe;
  /** Empfehlung, das Motiv durch eine reale Aufnahme zu ersetzen. */
  ersatzEmpfohlen: boolean;
  /**
   * Dringlichkeit des Ersatzes, 1 (höchste) bis 6.
   * Reihenfolge: aktuelle deutsche Referenzen, aktuelle Projektdetailseiten,
   * Unternehmens- und Teambereich, Leistungsseite, historische
   * Projektdetailseiten, dekorative Bereiche.
   */
  ersatzPrioritaet: 1 | 2 | 3 | 4 | 5 | 6 | null;
}

/** Freigabestand eines Motivs. */
export type Bildfreigabe = 'erteilt' | 'offen' | 'entfaellt';

const kiPerson = 'Bisher mit dem Overlay "AI generated" gekennzeichnet; keine Aufnahmemetadaten. Zeigt Personen.';
const kiTechnik = 'Bisher mit dem Overlay "AI generated" gekennzeichnet; keine Aufnahmemetadaten.';

export const BILDREGISTER: Bildeintrag[] = [
  /* --- Reale Aufnahmen ------------------------------------------------- */
  { datei: 'projekte/nord-stream-elcon-liefert-elt-te-01.jpg', art: 'echt', beleg: 'EXIF: Canon PowerShot A520, Adobe Photoshop CS3.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Projektdetailseite Nord Stream 2011, Galerie', bezug: 'Nord Stream, Ostsee, 2011', rechteinhaber: 'ELCON LED GmbH (Firmenarchiv)', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'projekte/nord-stream-elcon-liefert-elt-te-02.jpg', art: 'echt', beleg: 'EXIF: Canon EOS-1D Mark III, Adobe Photoshop CS3.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Projektdetailseite Nord Stream 2011, Galerie', bezug: 'Nord Stream, Ostsee, 2011', rechteinhaber: 'ELCON LED GmbH (Firmenarchiv)', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'projekte/nord-stream-elcon-liefert-elt-te-03.jpg', art: 'echt', beleg: 'EXIF: Canon EOS-1D Mark III, Adobe Photoshop CS3.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Projektdetailseite Nord Stream 2011, Galerie', bezug: 'Nord Stream, Ostsee, 2011', rechteinhaber: 'ELCON LED GmbH (Firmenarchiv)', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'projekte/nord-stream-elcon-liefert-elt-te-04.jpg', art: 'echt', beleg: 'EXIF: Canon EOS-1D Mark III, Adobe Photoshop CS3.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Projektdetailseite Nord Stream 2011, Galerie', bezug: 'Nord Stream, Ostsee, 2011', rechteinhaber: 'ELCON LED GmbH (Firmenarchiv)', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'projekte/nord-stream-elcon-liefert-elt-te-05.jpg', art: 'echt', beleg: 'EXIF: Canon EOS-1D Mark III, Adobe Photoshop CS3.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Projektdetailseite Nord Stream 2011, Galerie', bezug: 'Nord Stream, Ostsee, 2011', rechteinhaber: 'ELCON LED GmbH (Firmenarchiv)', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'projekte/nord-stream-elcon-liefert-elt-te-06.jpg', art: 'echt', beleg: 'EXIF: Canon EOS-1D Mark III, Adobe Photoshop CS3.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Projektdetailseite Nord Stream 2011, Galerie', bezug: 'Nord Stream, Ostsee, 2011', rechteinhaber: 'ELCON LED GmbH (Firmenarchiv)', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'projekte/nord-stream-elcon-liefert-elt-te-07.jpg', art: 'echt', beleg: 'EXIF: Olympus uD800/S800.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Projektdetailseite Nord Stream 2011, Galerie', bezug: 'Nord Stream, Ostsee, 2011', rechteinhaber: 'ELCON LED GmbH (Firmenarchiv)', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'projekte/nord-stream-elcon-liefert-elt-te-08.jpg', art: 'ungeklaert', beleg: 'Teil derselben Bildserie, trägt aber keine Aufnahmemetadaten — Herkunft nicht unabhängig belegt.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Projektdetailseite Nord Stream 2011, Galerie', bezug: 'Nord Stream, Ostsee, 2011', rechteinhaber: null, nutzungsfreigabe: 'offen', veroeffentlichungsfreigabe: 'offen', ersatzPrioritaet: null },

  /* --- Fotorealistische KI-Motive mit Personen -------------------------- */
  { datei: 'leistungen/baustelle-messung.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: false, ersatzEmpfohlen: true, einsatzort: null, bezug: 'Leistungsfeld Gebäudeautomation', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'leistungen/beratung-anlage.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: true, ersatzEmpfohlen: true, einsatzort: 'Leistungsseite, Lebenszyklus-Band', bezug: 'Leistungsfeld Wartung und Betrieb', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'leistungen/hebebuehne-verkabelung.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: false, ersatzEmpfohlen: true, einsatzort: null, bezug: 'Leistungsfeld Niederspannung', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'leistungen/kommunikationssysteme-rack.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: false, ersatzEmpfohlen: true, einsatzort: null, bezug: 'Leistungsfeld Kommunikationstechnik', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'leistungen/mittelspannung-schneider.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: false, ersatzEmpfohlen: true, einsatzort: null, bezug: 'Leistungsfeld Mittelspannung', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'leistungen/msr-handheld.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: true, ersatzEmpfohlen: true, einsatzort: 'Leistungsseite, Leistungsfelder', bezug: 'Leistungsfeld MSR-Technik', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'leistungen/planbesprechung-baustelle.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: true, ersatzEmpfohlen: true, einsatzort: 'Leistungsseite, Projektphase 01', bezug: 'Leistungsfeld Projektierung', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'leistungen/team-montage.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: true, ersatzEmpfohlen: true, einsatzort: 'Leistungsseite, Projektphase 02', bezug: 'Leistungsfeld Montage', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'leistungen/thermografie.jpg', art: 'ki-personen', beleg: kiPerson, verwendet: true, ersatzEmpfohlen: true, einsatzort: 'Leistungsseite, Projektphase 03', bezug: 'Leistungsfeld Wartung', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },
  { datei: 'unternehmen/team-planung.jpg', art: 'ki-personen', beleg: kiPerson + ' Steht im Unternehmensabschnitt und könnte als ELCON-Team gelesen werden.', verwendet: true, ersatzEmpfohlen: true, einsatzort: 'Unternehmensseite, Leitbild-Band', bezug: 'Unternehmensdarstellung', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 3 },

  /* --- Fotorealistische KI-Motive ohne Personen ------------------------- */
  {
    datei: 'hero-building.jpg',
    art: 'ki-technik',
    beleg:
      kiTechnik +
      ' Wird auf Entscheidung des Auftraggebers ohne Hinweis am Bild gezeigt: generisches Gebäude ohne Personen und ohne Bezug auf ein konkretes Projekt. Abgedeckt durch den Sammelnachweis im Impressum.' +
      ' Fotografisch nachbearbeitet (scripts/bild-retusche.mjs): Farbe zurückgenommen, Tiefen angehoben, Randabschattung, weiche Ecken, Korn. Unbearbeitete Fassung: hero-building.png.',
    verwendet: true,
    einsatzort: 'Startseite, Einstieg',
    bezug: 'Unternehmensdarstellung',
    rechteinhaber: 'KI-Erzeugnis, Auftraggeber',
    nutzungsfreigabe: 'erteilt',
    veroeffentlichungsfreigabe: 'erteilt',
    ersatzEmpfohlen: true,
    ersatzPrioritaet: 6,
  },
  { datei: 'leistungen/kabeltrasse.jpg', art: 'ki-technik', beleg: kiTechnik, verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Leistungsseite, Leistungsfelder', bezug: 'Leistungsfeld Netzwerktechnik', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: 4 },

  /* --- KI-Motiv im Referenzumfeld --------------------------------------- */
  {
    datei: 'offer/technik-msr.jpg',
    art: 'ki-projekt',
    beleg: kiTechnik + ' Steht im Referenzbereich der Projektübersicht und könnte als Projektnachweis gelesen werden.',
    verwendet: true,
    einsatzort: 'Projektübersicht, Referenzband',
    bezug: 'Referenzbereich allgemein',
    rechteinhaber: 'KI-Erzeugnis, Auftraggeber',
    nutzungsfreigabe: 'erteilt',
    veroeffentlichungsfreigabe: 'erteilt',
    ersatzEmpfohlen: true,
    ersatzPrioritaet: 2,
  },

  /* --- Derzeit nicht verwendet, Herkunft nicht belegt -------------------- */
  { datei: 'hero-building.png', art: 'ki-technik', beleg: 'PNG-Fassung desselben Motivs wie hero-building.jpg.', verwendet: false, ersatzEmpfohlen: false, einsatzort: null, bezug: 'Unternehmensdarstellung', rechteinhaber: 'KI-Erzeugnis, Auftraggeber', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'offer/atrium.jpg', art: 'ungeklaert', beleg: 'Keine Metadaten, keine bisherige Kennzeichnung, derzeit nicht eingebunden.', verwendet: false, ersatzEmpfohlen: false, einsatzort: null, bezug: null, rechteinhaber: null, nutzungsfreigabe: 'offen', veroeffentlichungsfreigabe: 'offen', ersatzPrioritaet: null },
  { datei: 'offer/pv-dach.jpg', art: 'ungeklaert', beleg: 'Keine Metadaten, keine bisherige Kennzeichnung, derzeit nicht eingebunden.', verwendet: false, ersatzEmpfohlen: false, einsatzort: null, bezug: null, rechteinhaber: null, nutzungsfreigabe: 'offen', veroeffentlichungsfreigabe: 'offen', ersatzPrioritaet: null },
  { datei: 'unternehmen/tga-gebaeudetechnik.png', art: 'ungeklaert', beleg: 'Keine Metadaten, derzeit nicht eingebunden.', verwendet: false, ersatzEmpfohlen: false, einsatzort: null, bezug: null, rechteinhaber: null, nutzungsfreigabe: 'offen', veroeffentlichungsfreigabe: 'offen', ersatzPrioritaet: null },

  /* --- Eigene Grafik ---------------------------------------------------- */
  { datei: 'logo-icon-v2.png', art: 'grafik', beleg: 'Bildmarke der ELCON LED GmbH. Seit der Umstellung auf die neue Bildmarke nicht mehr eingebunden.', verwendet: false, ersatzEmpfohlen: false, einsatzort: 'Kopf- und Fußzeile', bezug: 'Bildmarke', rechteinhaber: 'ELCON LED GmbH', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
  { datei: 'og-vorschau.png', art: 'grafik', beleg: 'Vorschaubild für geteilte Links.', verwendet: true, ersatzEmpfohlen: false, einsatzort: 'Vorschaubild geteilter Links', bezug: 'Bildmarke', rechteinhaber: 'ELCON LED GmbH', nutzungsfreigabe: 'erteilt', veroeffentlichungsfreigabe: 'erteilt', ersatzPrioritaet: null },
];

/* Referenzschreiben und Fremdlogos werden nicht einzeln aufgeführt: Die
   Schreiben sind durchgängig Scans echter Archivdokumente, die Logos
   durchgängig Marken Dritter. Ihre Freigaben werden in data/referenzen.ts
   geführt, nicht hier. */

const registerNachDatei = new Map(BILDREGISTER.map((b) => [b.datei, b]));

/** Eintrag zu einem Pfad der Form "/assets/…" oder "leistungen/…". */
export function bildart(pfad: string): Bildeintrag | undefined {
  return registerNachDatei.get(pfad.replace(/^\/assets\//, ''));
}

/** Motive, deren Herkunft noch zu klären ist. */
export const ungeklaerteBilder = BILDREGISTER.filter((b) => b.art === 'ungeklaert');

/** Motive, für die eine reale Aufnahme empfohlen wird. */
export const ersatzEmpfohlen = BILDREGISTER.filter((b) => b.ersatzEmpfohlen);

/** Motive, für die noch eine reale Aufnahme gebraucht wird, nach Dringlichkeit. */
export const ersatzbedarf = BILDREGISTER
  .filter((b) => b.ersatzEmpfohlen && b.verwendet)
  .sort((a, z) => (a.ersatzPrioritaet ?? 9) - (z.ersatzPrioritaet ?? 9));

/** Motive ohne geklärte Nutzungs- oder Veröffentlichungsfreigabe. */
export const offeneBildfreigaben = BILDREGISTER.filter(
  (b) => b.nutzungsfreigabe === 'offen' || b.veroeffentlichungsfreigabe === 'offen',
);

/** Braucht das Motiv einen sichtbaren Hinweis im Nutzungskontext? */
export const brauchtHinweis = (art: Bildart) =>
  art === 'ki-technik' || art === 'ki-personen' || art === 'ki-projekt';
