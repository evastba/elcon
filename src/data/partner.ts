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
  /**
   * Untergrund, auf dem das Logo lesbar ist.
   *
   * Firmenlogos liegen oft nur in einer Fassung vor — mal dunkel auf hell,
   * mal weiß für dunkle Flächen. Statt sie einzufärben, was die Marke
   * verändern würde, bekommt jede Kachel die Fläche, für die ihr Logo
   * gemacht ist.
   */
  hintergrund: 'hell' | 'dunkel';
  /**
   * Optischer Ausgleich, Standard 1.
   *
   * Gestapelte Zeichen — Bildmarke über Schriftzug — wirken bei gleicher
   * Höhe kleiner als breit laufende Schriftzüge. Der Faktor gleicht das aus,
   * ohne die Kachelhöhe zu verändern; die Kacheln bleiben damit auf einer
   * Linie.
   */
  skalierung?: number;
}

export interface Partner {
  /** Interner Schlüssel, erscheint nicht auf der Website. */
  id: string;
  /** Firmierung, wie sie im Handelsregister steht. */
  name: string;
  /** Sitz des Unternehmens. */
  sitz: string | null;
  /** Englische Fassung des Sitzes, falls sie abweicht — etwa beim Land. */
  sitzEn?: string | null;
  /**
   * Ein bis zwei Stichworte zur Art der Zusammenarbeit, deutsch und
   * englisch. Keine Werbetexte, sondern was das Unternehmen im gemeinsamen
   * Projekt beiträgt.
   */
  stichworte: string[] | null;
  stichworteEn: string[] | null;
  /**
   * Der Knopf „Website" entfällt bei diesem Eintrag ganz, statt als Text ohne
   * Verweis zu erscheinen.
   */
  ohneWebsiteKnopf?: boolean;
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
    id: 'ampulse',
    name: 'Ampulse GmbH',
    sitz: 'Berlin',
    /* Geschäftsfeld laut eigener Darstellung unter ampulse.energy:
       Ausrüstung für Energieprojekte, unter anderem Hochspannungs-
       transformatoren, Wechselrichter, Hoch- und Mittelspannungskabel sowie
       Batteriespeicher. Wie die Zusammenarbeit mit ELCON im Einzelnen
       aussieht, ist noch zu benennen — deshalb bleibt das Feld leer. */
    stichworte: ['Ausrüstung für Energieprojekte', 'Transformatoren, Kabel und Batteriespeicher'],
    stichworteEn: ['Equipment for energy projects', 'Transformers, cables and battery storage'],
    website: 'https://ampulse.energy/',
    /* Logo und Angaben auf Weisung des Auftraggebers von ampulse.energy
       übernommen. Die Datei liegt nur in weißer Fassung vor, deshalb die
       dunkle Kachel. */
    logo: {
      datei: 'ampulse.png',
      alt: 'Logo der Ampulse GmbH',
      altEn: 'Logo of Ampulse GmbH',
      hintergrund: 'dunkel',
    },
    veroeffentlichungsfreigabe: true,
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
    sitz: 'Region Hannover',
    /* Art der Zusammenarbeit laut Auftraggeber. Auf der Website der Ampulse
       GmbH wird die Northtech GmbH zudem als ausführender Partner geführt. */
    stichworte: ['Ausrüstung für Energieprojekte', 'Zusammenarbeit bei internationalen Projekten'],
    stichworteEn: ['Equipment for energy projects', 'Cooperation on international projects'],
    /* Ohne Website: Die Kachel zeigt deshalb keinen Knopf. */
    website: null,
    ohneWebsiteKnopf: true,
    /* Vom Auftraggeber geliefert. Die Datei war randlos beschnitten; ein
       durchsichtiger Rand von vier Prozent haelt das Zeichen von der
       Kachelkante fort. */
    logo: {
      datei: 'northtech.png',
      alt: 'Logo der Northtech GmbH',
      altEn: 'Logo of Northtech GmbH',
      hintergrund: 'hell',
      skalierung: 1.3,
    },
    veroeffentlichungsfreigabe: true,
    aktiv: true,
  },
  {
    id: 'elektro-deiters',
    name: 'Elektro Deiters',
    /* Der 1953 von Wilhelm Deiters gegründete Elektrofachbetrieb, aus dem
       die ELCON hervorgegangen ist; beide gehören zur Deiters-Gruppe. So
       steht es bereits auf der Unternehmensseite. Firmierung, Sitz und die
       Art der Zusammenarbeit sind noch zu bestätigen. */
    sitz: 'Region Hannover',
    /* Leistungen laut elektro-deiters.de. */
    stichworte: ['Elektroinstallation und Gebäudetechnik', 'Photovoltaik und Ladeinfrastruktur'],
    stichworteEn: ['Electrical installation and building services', 'Photovoltaics and charging infrastructure'],
    website: 'https://www.elektro-deiters.de/',
    /* Das Zeichen bringt seine eigene dunkle Flaeche mit und steht deshalb
       auf hellem Untergrund. */
    logo: {
      datei: 'elektro-deiters.png',
      alt: 'Logo von Elektro Deiters',
      altEn: 'Logo of Elektro Deiters',
      hintergrund: 'hell',
    },
    veroeffentlichungsfreigabe: true,
    aktiv: true,
  },
  {
    id: 'electra-me-deutschland',
    name: 'Electra M&E Deutschland GmbH',
    /* Angaben laut electra-me.de: Gesamtdienstleister der technischen
       Gebäudeausrüstung, rund 100 Mitarbeitende, Hauptniederlassung München
       (Anna-Sigmund-Straße 1, 82061 Neuried). */
    sitz: 'Neuried bei München',
    sitzEn: 'Neuried near Munich',
    stichworte: ['Technische Gebäudeausrüstung', 'Rohrleitungsbau und Prüfstandstechnik'],
    stichworteEn: ['Building services engineering', 'Piping and test bench technology'],
    website: 'https://www.electra-me.de/',
    logo: {
      datei: 'electra-me-deutschland.png',
      alt: 'Logo der Electra M&E Deutschland GmbH',
      altEn: 'Logo of Electra M&E Deutschland GmbH',
      hintergrund: 'hell',
    },
    veroeffentlichungsfreigabe: true,
    aktiv: true,
  },
  {
    id: 'electra-me-polska',
    name: 'Electra M&E Polska',
    /* Angaben laut electra.co.pl: technische Installationen und technisches
       Facility Management. Sitz Warschau, gegründet im April 2016. */
    sitz: 'Warschau',
    sitzEn: 'Warsaw',
    stichworte: ['Technische Installationen', 'Gebäudeleittechnik und Facility Management'],
    stichworteEn: ['Technical installations', 'Building management and facility services'],
    website: 'https://www.electra.co.pl/',
    logo: {
      datei: 'electra-me-polska.png',
      alt: 'Logo von Electra M&E Polska',
      altEn: 'Logo of Electra M&E Polska',
      hintergrund: 'hell',
    },
    veroeffentlichungsfreigabe: true,
    aktiv: true,
  },
];

/**
 * Ein Eintrag ist vollständig, wenn Sitz und Stichworte vorliegen.
 *
 * Das Logo ist ausdrücklich keine Bedingung: Liegt keine Datei vor, zeigt die
 * Kachel den Firmennamen ohne Zeichen. Ein Eintrag ohne Sitz und ohne
 * Stichworte bliebe dagegen eine leere Hülle.
 */
export const istVollstaendig = (p: Partner): boolean =>
  Boolean(p.sitz && p.stichworte?.length && p.stichworteEn?.length);

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
