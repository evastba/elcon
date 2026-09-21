/**
 * Partnerunternehmen der ELCON LED GmbH.
 *
 * Gepflegt wird die Liste ausschließlich hier. Ein Eintrag erscheint erst,
 * wenn er vollständig ist *und* freigegeben wurde — fehlt eines von beidem,
 * bleibt er unsichtbar, statt mit Lücken zu erscheinen. Ist kein Eintrag
 * sichtbar, entfällt der gesamte Abschnitt auf der Startseite.
 *
 * Damit gilt hier dieselbe Regel wie bei Referenzen, Logos und
 * Ansprechpartnern: Nichts erscheint auf der Website, wofür keine Freigabe
 * vorliegt, und nichts wird gelöscht, nur weil die Freigabe noch aussteht.
 */

/** Firmenlogo. Die Datei liegt in src/assets/partner/. */
export interface Partnerlogo {
  datei: string;
  /** Bildbeschreibung für Menschen, die das Logo nicht sehen können. */
  alt: string;
  altEn: string;
}

export interface Partner {
  /** Interner Schlüssel, erscheint nicht auf der Website. */
  id: string;
  /** Firmierung, wie sie im Handelsregister steht. */
  name: string;
  /** Sitz des Unternehmens. */
  sitz: string | null;
  /**
   * Ein bis zwei Stichworte zur Art der Zusammenarbeit, deutsch und
   * englisch. Keine Werbetexte, sondern was das Unternehmen im gemeinsamen
   * Projekt beiträgt.
   */
  stichworte: string[] | null;
  stichworteEn: string[] | null;
  /** Website des Partners; ohne Adresse entfällt die Verlinkung. */
  website: string | null;
  /**
   * Logo. Solange keine Datei und keine Freigabe des Partners vorliegen,
   * bleibt das Feld leer — ein fremdes Firmenlogo ohne Zustimmung zu zeigen
   * ist eine Markenfrage, keine Geschmacksfrage.
   */
  logo: Partnerlogo | null;
  /** Der Partner hat der Nennung auf dieser Website zugestimmt. */
  veroeffentlichungsfreigabe: boolean;
  /** Datensatz gepflegt und aktuell. */
  aktiv: boolean;
}

export const PARTNER: Partner[] = [
  {
    id: 'elektro-deiters',
    name: 'Elektro Deiters',
    /* Der 1953 von Wilhelm Deiters gegründete Elektrofachbetrieb, aus dem
       die ELCON hervorgegangen ist; beide gehören zur Deiters-Gruppe. So
       steht es bereits auf der Unternehmensseite. Firmierung, Sitz und die
       Art der Zusammenarbeit sind noch zu bestätigen. */
    sitz: null,
    stichworte: null,
    stichworteEn: null,
    website: null,
    logo: null,
    veroeffentlichungsfreigabe: false,
    aktiv: true,
  },
  {
    id: 'ampulse',
    name: 'Ampulse GmbH',
    sitz: 'Berlin',
    /* Geschäftsfeld laut eigener Darstellung unter ampulse.energy:
       Ausrüstung für Energieprojekte, unter anderem Hochspannungs-
       transformatoren, Wechselrichter, Hoch- und Mittelspannungskabel sowie
       Batteriespeicher. Wie die Zusammenarbeit mit ELCON im Einzelnen
       aussieht, ist noch zu benennen — deshalb bleibt das Feld leer. */
    stichworte: null,
    stichworteEn: null,
    website: 'https://ampulse.energy/de/',
    logo: null,
    veroeffentlichungsfreigabe: false,
    aktiv: true,
  },
  {
    id: 'northtech',
    name: 'Northtech GmbH',
    /* Registerangaben laut Auftraggeber: Geschäftsführer Klaus Deiters,
       Bauernstraße 34, 31275 Lehrte-Immensen, Amtsgericht Hildesheim
       HRB 207311, USt-IdNr. DE340373438.

       Die Umsatzsteuer-Identifikationsnummer gehört zu diesem Unternehmen
       und darf nicht in das Impressum der ELCON LED GmbH übernommen werden;
       dort fehlt sie weiterhin. Anschrift und Amtsgericht stimmen mit denen
       der ELCON überein — die beiden Gesellschaften teilen sich den
       Standort. */
    sitz: 'Lehrte-Immensen',
    /* Geschäftsfeld und Art der Zusammenarbeit sind noch zu benennen. */
    stichworte: null,
    stichworteEn: null,
    website: null,
    logo: null,
    veroeffentlichungsfreigabe: false,
    aktiv: true,
  },
];

/**
 * Ein Eintrag ist vollständig, wenn Sitz, Stichworte und Logo vorliegen.
 * Ohne diese drei bleibt eine Kachel eine leere Hülle.
 */
export const istVollstaendig = (p: Partner): boolean =>
  Boolean(p.sitz && p.stichworte?.length && p.stichworteEn?.length && p.logo);

/** Partner, die tatsächlich ausgegeben werden dürfen. */
export const sichtbarePartner = PARTNER.filter(
  (p) => p.aktiv && p.veroeffentlichungsfreigabe && istVollstaendig(p),
);

/** Was einem Eintrag noch fehlt — für die Livegang-Checkliste, nicht für die Website. */
export const offenePartnerangaben = PARTNER.filter((p) => p.aktiv).map((p) => ({
  name: p.name,
  fehlt: [
    !p.sitz && 'Sitz',
    !p.stichworte?.length && 'Stichworte zur Zusammenarbeit (deutsch)',
    !p.stichworteEn?.length && 'Stichworte zur Zusammenarbeit (englisch)',
    !p.logo && 'Logodatei und Freigabe',
    !p.veroeffentlichungsfreigabe && 'Zustimmung zur Nennung',
  ].filter(Boolean) as string[],
})).filter((e) => e.fehlt.length > 0);
