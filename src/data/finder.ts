/**
 * Datenbasis des Leistungsfinders.
 *
 * Der Finder führt in drei Schritten zu einer Einordnung des Vorhabens und
 * übergibt das Ergebnis an das Anfrageformular. Die Zuordnung der
 * Referenzprojekte verweist auf Einträge in src/data/projekte.ts; die Slugs
 * müssen dort existieren, sonst entstehen tote Links.
 */

export interface Projektart {
  id: string;
  label: string;
  beschreibung: string;
}

export interface Gewerk {
  id: string;
  label: string;
  beschreibung: string;
  /** Muss einem Eintrag im Auswahlfeld "Leistungsbereich" des Formulars entsprechen. */
  leistungsbereich: string;
  /** Passende Referenzen, als Slug aus PROJEKTDETAILS. */
  projekte: string[];
}

export interface Phase {
  id: string;
  label: string;
  beschreibung: string;
}

export const PROJEKTARTEN: Projektart[] = [
  { id: 'neubau', label: 'Neubau', beschreibung: 'Gebäude entsteht neu, Technik wird von Grund auf geplant.' },
  { id: 'umbau', label: 'Umbau im laufenden Betrieb', beschreibung: 'Produktion oder Nutzung geht weiter, Arbeiten müssen sich einfügen.' },
  { id: 'sanierung', label: 'Sanierung im Bestand', beschreibung: 'Vorhandene Anlagen werden erneuert oder ertüchtigt.' },
  { id: 'betrieb', label: 'Wartung & Betrieb', beschreibung: 'Bestehende Anlagen sollen dauerhaft betreut werden.' },
];

export const GEWERKE: Gewerk[] = [
  {
    id: 'elektro',
    label: 'Elektrotechnik',
    beschreibung: 'Von der Mittelspannung bis zur Steckdose, inklusive Trafos und Schaltanlagen.',
    leistungsbereich: 'Elektrotechnik',
    projekte: ['nord-stream-2011', 'vw-werk-kaluga-2008', 'continental-automotive-kaluga-2011'],
  },
  {
    id: 'hkls',
    label: 'Heizung, Klima, Lüftung, Sanitär',
    beschreibung: 'Versorgungstechnik aller Gewerke, geplant und montiert aus einer Hand.',
    leistungsbereich: 'Heizung, Klima, Lüftung, Sanitär',
    projekte: ['ambassador-hotel-kaluga-2008', 'villa-benilux-2006', 'selgros-einkaufsmaerkte-2008'],
  },
  {
    id: 'msr',
    label: 'MSR- & Automatisierungstechnik',
    beschreibung: 'Mess-, Steuer- und Regeltechnik sowie Gebäudeautomation.',
    leistungsbereich: 'MSR- & Automatisierungstechnik',
    projekte: ['brauerei-almaty-sosnadar-2006', 'ziegelwerk-kiprewo-2006', 'schubbeize-lipetsk-2006'],
  },
  {
    id: 'netzwerk',
    label: 'Netzwerktechnik & IT',
    beschreibung: 'Strukturierte Verkabelung, Kommunikations- und Sicherheitstechnik.',
    leistungsbereich: 'Netzwerktechnik & IT',
    projekte: ['schweizer-botschaft-moskau-2005', 'general-motors-hauptquartier-moskau-2008', 'deutsche-botschaft-kiew-2005'],
  },
  {
    id: 'brandschutz',
    label: 'Brandschutz & Sicherheitstechnik',
    beschreibung: 'Brandmelde-, Alarm- und Zutrittstechnik, abgestimmt mit den Behörden.',
    leistungsbereich: 'Planung & Betrieb / Sonstiges',
    projekte: ['deutsche-botschaft-kiew-2005', 'schweizer-botschaft-kiew-2005', 'schweizer-konsulat-st-petersburg-2006'],
  },
  {
    id: 'alles',
    label: 'Alle Gewerke gebündelt',
    beschreibung: 'Ein Vertrag, ein Ansprechpartner — ELCON übernimmt als Generalunternehmer.',
    leistungsbereich: 'Planung & Betrieb / Sonstiges',
    projekte: ['nord-stream-2011', 'porsche-zentrum-moskau-2006', 'ambassador-hotel-kaluga-2008'],
  },
];

export const PHASEN: Phase[] = [
  { id: 'idee', label: 'Erste Idee', beschreibung: 'Das Vorhaben nimmt Gestalt an, Zahlen stehen noch nicht fest.' },
  { id: 'planung', label: 'Planung läuft', beschreibung: 'Es gibt Pläne oder eine Vorplanung, Details werden geklärt.' },
  { id: 'ausschreibung', label: 'Ausschreibung liegt vor', beschreibung: 'Leistungsverzeichnis ist fertig, ein Angebot wird benötigt.' },
];
