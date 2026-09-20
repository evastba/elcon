/**
 * Datenbasis des Leistungsfinders.
 *
 * Der Finder führt in drei Schritten zu einer Einordnung des Vorhabens und
 * übergibt das Ergebnis an das Anfrageformular. Die Zuordnung der
 * Referenzprojekte verweist auf Einträge in src/data/projekte.ts; die Slugs
 * müssen dort existieren, sonst entstehen tote Links.
 *
 * Beschriftungen stehen in beiden Sprachen nebeneinander (`label`/`labelEn`),
 * damit Zuordnung und Slugs nur einmal gepflegt werden müssen: Eine zweite,
 * englische Liste würde bei jeder Änderung auseinanderlaufen.
 */

export interface Projektart {
  id: string;
  label: string;
  labelEn: string;
  beschreibung: string;
  beschreibungEn: string;
}

export interface Gewerk {
  id: string;
  label: string;
  labelEn: string;
  beschreibung: string;
  beschreibungEn: string;
  /** Muss einem Eintrag im Auswahlfeld "Leistungsbereich" des Formulars entsprechen. */
  leistungsbereich: string;
  /** Passende Referenzen, als Slug aus PROJEKTDETAILS. */
  projekte: string[];
}

export interface Phase {
  id: string;
  label: string;
  labelEn: string;
  beschreibung: string;
  beschreibungEn: string;
}

export const PROJEKTARTEN: Projektart[] = [
  {
    id: 'neubau',
    label: 'Neubau',
    labelEn: 'New build',
    beschreibung: 'Gebäude entsteht neu, Technik wird von Grund auf geplant.',
    beschreibungEn: 'A new building, with all services designed from scratch.',
  },
  {
    id: 'umbau',
    label: 'Umbau im laufenden Betrieb',
    labelEn: 'Conversion during ongoing operation',
    beschreibung: 'Produktion oder Nutzung geht weiter, Arbeiten müssen sich einfügen.',
    beschreibungEn: 'Production or occupancy continues; the work has to fit around it.',
  },
  {
    id: 'sanierung',
    label: 'Sanierung im Bestand',
    labelEn: 'Refurbishment of an existing building',
    beschreibung: 'Vorhandene Anlagen werden erneuert oder ertüchtigt.',
    beschreibungEn: 'Existing installations are renewed or upgraded.',
  },
  {
    id: 'betrieb',
    label: 'Wartung & Betrieb',
    labelEn: 'Maintenance & operation',
    beschreibung: 'Bestehende Anlagen sollen dauerhaft betreut werden.',
    beschreibungEn: 'Existing installations are to be looked after on a long-term basis.',
  },
];

export const GEWERKE: Gewerk[] = [
  {
    id: 'elektro',
    label: 'Elektrotechnik',
    labelEn: 'Electrical engineering',
    beschreibung: 'Von der Mittelspannung bis zur Steckdose, inklusive Trafos und Schaltanlagen.',
    beschreibungEn: 'From medium voltage to the socket outlet, including transformers and switchgear.',
    leistungsbereich: 'Elektrotechnik',
    projekte: ['nord-stream-2011', 'vw-werk-kaluga-2008', 'continental-automotive-kaluga-2011'],
  },
  {
    id: 'hkls',
    label: 'Heizung, Klima, Lüftung, Sanitär',
    labelEn: 'Heating, air conditioning, ventilation, plumbing',
    beschreibung: 'Versorgungstechnik aller Gewerke, geplant und montiert aus einer Hand.',
    beschreibungEn: 'Mechanical services across all trades, designed and installed from a single source.',
    leistungsbereich: 'Heizung, Klima, Lüftung, Sanitär',
    projekte: ['ambassador-hotel-kaluga-2008', 'villa-benilux-2006', 'selgros-einkaufsmaerkte-2008'],
  },
  {
    id: 'msr',
    label: 'MSR- & Automatisierungstechnik',
    labelEn: 'Instrumentation, control & automation',
    beschreibung: 'Mess-, Steuer- und Regeltechnik sowie Gebäudeautomation.',
    beschreibungEn: 'Measurement and control technology as well as building automation.',
    leistungsbereich: 'MSR- & Automatisierungstechnik',
    projekte: ['brauerei-almaty-sosnadar-2006', 'ziegelwerk-kiprewo-2006', 'schubbeize-lipetsk-2006'],
  },
  {
    id: 'netzwerk',
    label: 'Netzwerktechnik & IT',
    labelEn: 'Network technology & IT',
    beschreibung: 'Strukturierte Verkabelung, Kommunikations- und Sicherheitstechnik.',
    beschreibungEn: 'Structured cabling, communications and security systems.',
    leistungsbereich: 'Netzwerktechnik & IT',
    projekte: ['schweizer-botschaft-moskau-2005', 'general-motors-hauptquartier-moskau-2008', 'deutsche-botschaft-kiew-2005'],
  },
  {
    id: 'brandschutz',
    label: 'Brandschutz & Sicherheitstechnik',
    labelEn: 'Fire protection & security systems',
    beschreibung: 'Brandmelde-, Alarm- und Zutrittstechnik, abgestimmt mit den Behörden.',
    beschreibungEn: 'Fire detection, alarm and access control, coordinated with the authorities.',
    leistungsbereich: 'Planung & Betrieb / Sonstiges',
    projekte: ['deutsche-botschaft-kiew-2005', 'schweizer-botschaft-kiew-2005', 'schweizer-konsulat-st-petersburg-2006'],
  },
  {
    id: 'alles',
    label: 'Alle Gewerke gebündelt',
    labelEn: 'All trades bundled together',
    beschreibung: 'Ein Vertrag, ein Ansprechpartner — ELCON übernimmt als Generalunternehmer.',
    beschreibungEn: 'One contract, one contact — ELCON takes it on as main contractor.',
    leistungsbereich: 'Planung & Betrieb / Sonstiges',
    projekte: ['nord-stream-2011', 'porsche-zentrum-moskau-2006', 'ambassador-hotel-kaluga-2008'],
  },
];

export const PHASEN: Phase[] = [
  {
    id: 'idee',
    label: 'Erste Idee',
    labelEn: 'First idea',
    beschreibung: 'Das Vorhaben nimmt Gestalt an, Zahlen stehen noch nicht fest.',
    beschreibungEn: 'The project is taking shape; the figures are not yet fixed.',
  },
  {
    id: 'planung',
    label: 'Planung läuft',
    labelEn: 'Design under way',
    beschreibung: 'Es gibt Pläne oder eine Vorplanung, Details werden geklärt.',
    beschreibungEn: 'Drawings or a preliminary design exist; the details are being settled.',
  },
  {
    id: 'ausschreibung',
    label: 'Ausschreibung liegt vor',
    labelEn: 'Tender documents available',
    beschreibung: 'Leistungsverzeichnis ist fertig, ein Angebot wird benötigt.',
    beschreibungEn: 'The bill of quantities is complete and a quotation is required.',
  },
];
