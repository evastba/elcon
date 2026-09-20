/**
 * Abgedeckte Anlagentechnik, gruppiert für das Accordion der Leistungsseite.
 *
 * Die Inhalte stammen unverändert aus dem bisherigen Abschnitt „Abgedeckte
 * Anlagentechnik im Detail"; gruppiert und gekürzt wurde die Darstellung,
 * nicht der Leistungsumfang. Die Fachbegriffe bleiben vollständig erhalten —
 * sie sind für Suchmaschinen und für Fachleser gleichermaßen das Entscheidende.
 *
 * Jede Gruppe hat eine `id`; damit lässt sich aus der Fußzeile oder von außen
 * direkt auf eine Gruppe verlinken, die sich beim Aufruf öffnet.
 */

export interface Anlagengruppe {
  id: string;
  titel: string;
  titelEn: string;
  /** Kurze Einordnung über der Aufzählung. */
  einleitung: string;
  einleitungEn: string;
  punkte: string[];
  punkteEn: string[];
}

export const ANLAGENGRUPPEN: Anlagengruppe[] = [
  {
    id: 'energieversorgung',
    titel: 'Energieversorgung und Mittelspannung',
    titelEn: 'Power supply and medium voltage',
    einleitung: 'Einspeisung, Umspannung und Verteilung bis 36 kV.',
    einleitungEn: 'Supply, transformation and distribution up to 36 kV.',
    punkte: [
      'Mittelspannungsschaltanlagen',
      'Trafostationen',
      'Energieerzeugung und -verteilung bis 36 kV',
      'Anlagen bis 10 kV im Innen- und Außenbereich',
    ],
    punkteEn: [
      'Medium-voltage switchgear',
      'Transformer stations',
      'Power generation and distribution up to 36 kV',
      'Indoor and outdoor installations up to 10 kV',
    ],
  },
  {
    id: 'niederspannung',
    titel: 'Niederspannung und elektrische Infrastruktur',
    titelEn: 'Low voltage and electrical infrastructure',
    einleitung: 'Verteilung, Schutz und Erdung bis zur letzten Abgangsklemme.',
    einleitungEn: 'Distribution, protection and earthing down to the last outgoing terminal.',
    punkte: [
      'Niederspannungsschaltanlagen',
      'Starkstromkabel- und Leitungsnetze',
      'Schaltanlagenbau',
      'EMV- und ESE-Technologie',
      'Erdungs- und Potentialausgleichssysteme',
      'Blitz- und Überspannungsschutz',
      'Niedrigenergiehaus-Technik',
    ],
    punkteEn: [
      'Low-voltage switchgear',
      'Power cable and conductor networks',
      'Switchgear manufacture',
      'EMC and ESD technology',
      'Earthing and equipotential bonding systems',
      'Lightning and surge protection',
      'Low-energy building technology',
    ],
  },
  {
    id: 'energieerzeugung',
    titel: 'Energieerzeugung, KWK und Photovoltaik',
    titelEn: 'Power generation, CHP and photovoltaics',
    einleitung: 'Eigenerzeugung und Versorgungssicherheit.',
    einleitungEn: 'On-site generation and security of supply.',
    punkte: [
      'Diesel-Generator-Anlagen',
      'Blockheizkraftwerke',
      'Windkraftanlagen',
      'Solare Energieversorgung',
      'Unterbrechungsfreie Stromversorgung (USV)',
    ],
    punkteEn: [
      'Diesel generator sets',
      'Combined heat and power plants',
      'Wind turbines',
      'Solar power supply',
      'Uninterruptible power supplies (UPS)',
    ],
  },
  {
    id: 'beleuchtung',
    titel: 'Beleuchtungsanlagen',
    titelEn: 'Lighting installations',
    einleitung: 'Von der Allgemeinbeleuchtung bis zur Sonderlösung.',
    einleitungEn: 'From general lighting through to bespoke solutions.',
    punkte: [
      'Innenraumbeleuchtung',
      'Außen-, Straßen-, Wege- und Platzbeleuchtung',
      'Effekt- und Werbebeleuchtung',
      'Ausleuchtung industrieller Anlagen',
    ],
    punkteEn: [
      'Interior lighting',
      'Exterior, street, pathway and open-space lighting',
      'Effect and advertising lighting',
      'Illumination of industrial plants',
    ],
  },
  {
    id: 'kommunikation',
    titel: 'Kommunikations- und Netzwerktechnik',
    titelEn: 'Communications and network technology',
    einleitung: 'Sprache, Daten und Signalisierung in einer Infrastruktur.',
    einleitungEn: 'Voice, data and signalling in one infrastructure.',
    punkte: [
      'Strukturierte Verkabelung und Lichtwellenleiter',
      'Datenfernübertragung (DFÜ) und lokale Netzwerke (LAN)',
      'Aktive Netzwerkkomponenten',
      'Telefon- und Interkomanlagen',
      'Personenrufanlagen',
      'Elektroakustische Lautsprecheranlagen (ELA)',
      'Terrestrische und Satelliten-Empfangsanlagen',
    ],
    punkteEn: [
      'Structured cabling and fibre optics',
      'Remote data transmission and local area networks (LAN)',
      'Active network components',
      'Telephone and intercom systems',
      'Paging systems',
      'Electroacoustic public address systems',
      'Terrestrial and satellite reception systems',
    ],
  },
  {
    id: 'sicherheit',
    titel: 'Sicherheitssysteme und Brandschutz',
    titelEn: 'Security systems and fire protection',
    einleitung: 'Melde- und Zutrittstechnik, abgestimmt mit den Aufsichtsbehörden.',
    einleitungEn: 'Detection and access control, coordinated with the supervisory authorities.',
    punkte: [
      'Brand- und Gasalarmanlagen',
      'Einbruchmeldeanlagen',
      'Videoüberwachung',
      'Zutrittskontrollsysteme',
      'Brandmelde- und Sicherheitssysteme für Gewerbe-, Industrie- und öffentliche Bauten',
    ],
    punkteEn: [
      'Fire and gas alarm systems',
      'Intruder alarm systems',
      'Video surveillance',
      'Access control systems',
      'Fire detection and security systems for commercial, industrial and public buildings',
    ],
  },
  {
    id: 'automation',
    titel: 'Gebäudeautomation und MSR-Technik',
    titelEn: 'Building automation and control technology',
    einleitung: 'Steuerung, Regelung und Dokumentation der Anlagen.',
    einleitungEn: 'Control, regulation and documentation of the installations.',
    punkte: [
      'DDC- und SPS-Steuerungen',
      'Gebäudeautomation',
      'Industrie-Steuerungsanlagen',
      'Individuelle Konzeption',
      'Mehrsprachige Revisionsdokumentation',
    ],
    punkteEn: [
      'DDC and PLC control systems',
      'Building automation',
      'Industrial control installations',
      'Individual engineering',
      'Multilingual as-built documentation',
    ],
  },
];
