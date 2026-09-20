export interface Projektfeld {
  label: string;
  value: string;
}

/** Übersetzte Textbestandteile eines Projekts für die englische Fassung. */
export interface ProjektdetailEn {
  titel: string;
  kachel?: string;
  absaetze: string[];
  felder: Projektfeld[];
}

export interface Projektdetail {
  /** Adresse der Detailseite: /projekte/<slug>/ */
  slug: string;
  titel: string;
  /** Überschrift der zugehörigen Kachel in der Projektübersicht, falls vorhanden. */
  kachel?: string;
  absaetze: string[];
  felder: Projektfeld[];
  /** Dateinamen in src/assets/projekte. */
  bilder?: string[];
  /** Herkunft der Angaben auf der bisherigen Unternehmenswebsite. */
  quelle: string;
  /**
   * Englische Fassung der Texte, unter /en/projects/<slug>/ ausgegeben.
   * Wird aus ÜBERSETZUNGEN zusammengeführt — Slug, Bilder und Quelle gelten
   * für beide Sprachen und stehen deshalb nur einmal oben.
   */
  en?: ProjektdetailEn;
}

/**
 * Projektdetails, übernommen von www.elcon-led.com.
 *
 * Texte und Datenfelder stammen von den dortigen Projektseiten. Angepasst
 * wurden ausschließlich: Verweise auf die Bildergalerie der alten Seite, die es
 * hier nicht gibt, sowie vier Wörter in alter Rechtschreibung und zwei
 * Tippfehler. Inhaltlich ist nichts verändert. Fotos liegen nur für das Nord-Stream-Projekt 2011
 * vor — die übrigen Quellseiten enthalten keine.
 */
const PROJEKTE: Projektdetail[] = [
  {
    slug: 'nord-stream-2011',
    titel: 'Nord Stream - ELCON liefert ELT-Technik für Offshore Gaspipeline, 2011',
    kachel: 'Nord Stream Gaspipeline, Ostsee',
    absaetze: [
      'Im Rahmen des Baus der Nord-Stream-Pipeline von Russland nach Deutschland wurde ELCON u. a. mit der Verlegung von Spezialkabeln, sowie dem Anschluss sämtlicher Messpunkte und Geräte betraut. Im Auftragsvolumen enthalten war ebenfalls Testing und Commissioning. Von großem Vorteil war hierbei die jahrzehnte lange Erfahrung mit Projekten in der Russischen Föderation.',
      'Die Nord Stream-Pipeline ist eine Offshore-Gasleitung, bestehend aus zwei jeweils 1.224 Kilometer langen Leitungssträngen auf dem Grund der Ostsee. Die Trasse führt von der Bucht von Portovaja nahe Wyborg/Russland bis zur deutschen Ostseeküste nach Lubmin nahe Greifswald, Mecklenburg-Vorpommern und verbindet die Europäische Union direkt mit einigen der größten Erdgasreserven der Welt in Russland.',
    ],
    felder: [
      { label: 'Bauvorhaben', value: 'Offshore Gasleitung von Wyborg/Russland nach Greifswald/Deutschland' },
      { label: 'Auftraggeber', value: 'Nord Stream AG' },
      { label: 'Leistungsumfang', value: 'Im Rahmen dieses Projektes war ELCON mit ELT - Arbeiten beauftragt:\nFolgende Leistungen wurden ausgeführt:\n- Verlegung der Rohre für die Kabel\n- Verlegung von 170 km stahlarmiertem Kabel\n- Verarbeitung und Verlegung explosionsgeschützter Ausführung\n- Anschluss sämtlicher Messpunkte\n- Anschluss aller Geräte\n- Testen\n- Kommissionierung' },
      { label: 'Besonderheiten', value: 'Für die Leistungserbringung stand ein Zeitraum von ca 7 Monaten zur Verfügung. Die Arbeiten wurde im Schichtbetrieb 24 Stunden täglich bei 7 Tage die Woche ausgeführt. Dabei wurden 160 Arbeitskräfte am Bauvorhaben eingesetzt.' },
      { label: 'Mitarbeiter', value: 'Für dieses Projekt wurden 160 ELCON-Mitarbeiter und 4 ELCON Projektleiter eingesetzt.' },
    ],
    bilder: [
      'nord-stream-elcon-liefert-elt-te-01.jpg',
      'nord-stream-elcon-liefert-elt-te-02.jpg',
      'nord-stream-elcon-liefert-elt-te-03.jpg',
      'nord-stream-elcon-liefert-elt-te-04.jpg',
      'nord-stream-elcon-liefert-elt-te-05.jpg',
      'nord-stream-elcon-liefert-elt-te-06.jpg',
      'nord-stream-elcon-liefert-elt-te-07.jpg',
      'nord-stream-elcon-liefert-elt-te-08.jpg',
    ],
    quelle: 'https://www.elcon-led.com/n/1/74/nord-stream-elcon-liefert-elt-technik-fuer-offshore-gaspipeline-2011',
  },
  {
    slug: 'nord-stream-2-seit-2018',
    titel: 'Nord Stream 2, ab 2018',
    kachel: 'Nord Stream 2 Gaspipeline, Ostsee',
    absaetze: [
      'ELCON lieferte ELT-Technik für das Offshore-Gaspipeline-Projekt „Nord Stream 2“.',
      'Wie bereits beim Bau der Pipeline Nord Stream 1 im Jahr 2011 war ELCON LED auch am Bau der Pipeline Nord Stream 2 beteiligt. Auch hier wurde ELCON unter anderem mit der Verlegung von Spezialkabeln sowie dem Anschluss sämtlicher Messpunkte und Geräte betraut.',
      'Von großem Vorteil war hierbei die jahrzehntelange Erfahrung mit Projekten in der Russischen Föderation sowie die Mitarbeit am Projekt Nord Stream 1.',
      'Die Nordstream-Pipeline ist eine Offshore-Gasleitung, bestehend aus zwei jeweils 1.300 Kilometer langen Leitungssträngen auf dem Grund der Ostsee. Die Trasse führt von Ust-Luga in Russland bis zur deutschen Ostseeküste nach Lubmin nahe Greifswald, Mecklenburg-Vorpommern, und verbindet die Europäische Union auch hier direkt mit einigen der größten Erdgasreserven der Welt in Russland.',
      'Bauvorhaben: Offshore Gasleitung von UST-Luga / Russland nach Lubmin / Deutschland',
    ],
    felder: [
    ],
    quelle: 'https://www.elcon-led.com/n/125/74/nordstream-ii-seit-2018',
  },
  {
    slug: 'nord-stream-wartung-seit-2012',
    titel: 'Nord Stream I — Wartung und Instandhaltung ab 2012',
    absaetze: [
      'Nach erfolgreicher Inbetriebnahme der Nord-Stream-Pipeline (Nordstream I) im November 2011, bei der ELCON LED mit der Verlegung von Spezialkabeln und der Planung und Installation von elektrotechnischen Anlagen, sowie dem Anschluss elektrischer Messpunkte und Geräte betraut war, ging die Anlage in Betrieb.',
      'Ab 2012 war ELCON LED für die Wartung und Instandhaltung der Anlagen verantwortlich.',
    ],
    felder: [
    ],
    quelle: 'https://www.elcon-led.com/n/15/74/nord-stream-i-wartung-und-instandhaltung-seit-2012',
  },
  {
    slug: 'deutsche-botschaft-kiew-2005',
    titel: 'Deutsche Botschaft in Kiew, 2005',
    kachel: 'Deutsche Botschaft, Kiew',
    absaetze: [
      'Gebäudetechnik: Nach den Terroranschlägen der Al Qaida am 11. September 2001 auf das World Trade Center in New York City und das Pentagon in Arlington, Virginia, bei denen über 3000 Menschen getötet wurden, mussten die Sicherheitskonzepte der Botschaften überarbeitet und verbessert werden.\nIn diesem Zusammenhang hat ELCON die Elektrotechnik, technische Gebäudeausrüstung, sowie die Sicherheitstechnik auf den neuesten Stand der Sicherheitstechnik gebracht.',
      'Neues Sicherheitsgebäude für das Visa-Amt',
      'Gesamte Elektro-, Haus- und Sicherheitstechnik',
      'Nach dem 11. September ist das Sicherheitskonzept der Botschaften neu überarbeitet worden. Wir haben auf kleinem Raum einen sehr hohen Sicherheitsstandard geschaffen und in kurzer Zeit realisiert ohne Störung des laufenden Betriebes.',
    ],
    felder: [
      { label: 'Projekt', value: 'Deutsche Botschaft in Kiew' },
      { label: 'Beschreibung', value: 'Neues Sicherheitsgebäude für das Visa-Amt' },
      { label: 'Baubeginn', value: '2005' },
      { label: 'Bauzeit', value: 'ca. 6 Monate' },
      { label: 'Auftraggeber', value: 'Auswärtiges Amt' },
      { label: 'Generalunternehmer', value: 'Fa. Bautech' },
      { label: 'ELCON Auftrag', value: 'Gesamte Elektro-, Haus- und Sicherheitstechnik' },
      { label: 'Besonderheiten', value: 'Nach dem 11. September ist das Sicherheitskonzept der Botschaften neu überarbeitet worden. Wir haben auf kleinem Raum einen sehr hohen Sicherheitsstandard geschaffen und in kurzer Zeit realisiert ohne Störung des laufenden Betriebes.' },
    ],
    quelle: 'https://www.elcon-led.com/n/50/74/deutsche-botschaft-in-kiew-2005',
  },
  {
    slug: 'brauerei-almaty-sosnadar-2006',
    titel: 'Brauerei Almaty Sosnadar, 2006',
    kachel: 'Brauerei Almaty Sosnadar',
    absaetze: [
    ],
    felder: [
      { label: 'Projekt', value: 'Brauerei Almaty Sosnadar' },
      { label: 'Auftrag', value: 'Planung Elektrotechnik: Brauerei Almaty Sosnadar' },
      { label: 'Baubeginn', value: 'Januar 2006' },
      { label: 'Auftraggeber', value: 'Fa. Huppmann' },
      { label: 'Generalunternehmer', value: 'Fa. Huppmann' },
      { label: 'Besonderheiten', value: 'Die Brauerei durfte nicht abgeschaltet werden. Der Betrieb ging weiter.' },
    ],
    quelle: 'https://www.elcon-led.com/n/55/74/brauerei-almaty-sosnadar-2006',
  },
  {
    slug: 'schweizer-botschaft-kiew-2005',
    titel: 'Schweizer Botschaft Kiew, 2005',
    kachel: 'Schweizer Botschaft, Kiew',
    absaetze: [
      'Komplette Elektrotechnik und HKLS-Technik (Heizung, Klima, Lüftung, Sanitär) neu installiert. Alle Installationen werden nach dem neuesten Stand in der Gebäudetechnik ausgeführt!',
      'Die gesamte Technik als technischer GU.',
      'Ein altes freistehendes Gebäude wurde komplett erneuert und auf einen technisch hohen Standard gebracht mit Sicherheitsschleuse, Visa-Amt, Botschaft und Botschafterwohnung. ELCON lieferte auch alle haustechnischen Komponenten.',
    ],
    felder: [
      { label: 'Projekt', value: 'Schweizer Botschaft in Kiew' },
      { label: 'Beschreibung', value: 'Komplette Elektrotechnik und HKLS-Technik (Heizung, Klima, Lüftung, Sanitär) neu installiert. Alle Installationen werden nach dem neuesten Stand in der Gebäudetechnik ausgeführt!' },
      { label: 'Baubeginn', value: 'September 2005' },
      { label: 'Bauzeit', value: '11 Monate' },
      { label: 'Auftraggeber', value: 'Schweiz' },
      { label: 'Generalunternehmer', value: 'Fa. Lei AG' },
      { label: 'ELCON Auftrag', value: 'Die gesamte Technik als technischer GU.' },
      { label: 'Montagedauer', value: '8 Monate' },
      { label: 'Besonderheiten', value: 'Ein altes freistehendes Gebäude wurde komplett erneuert und auf einen technisch hohen Standard gebracht mit Sicherheitsschleuse, Visa-Amt, Botschaft und Botschafterwohnung. ELCON lieferte auch alle haustechnischen Komponenten.' },
    ],
    quelle: 'https://www.elcon-led.com/n/52/74/schweizer-botschaft-kiew-2005',
  },
  {
    slug: 'porsche-zentrum-moskau-2006',
    titel: 'Porsche Zentrale in Moskau, 2006',
    kachel: 'Neubau Porsche-Zentrum, Moskau',
    absaetze: [
      'Neubau des Porsche Autozentrums in Moskau\nGroßzügige Ausstellungsflächen, anspruchsvoller Showroom, repräsentative Ausstattung, das sind die Merkmale des Porsche Autozentrums in Moskau. Elcon ist hier für die Ausführung der gesamten technischen Gebäudeausrüstung mit einem Anteil von 3,5 Mio Euro am Gesamt Projektvolumen von ca. 10 Mio. Euro. zuständig.',
    ],
    felder: [
      { label: 'Projekt', value: 'Porsche Zentrale in Moskau' },
      { label: 'Beschreibung', value: 'Neubau des Porsche Autozentrums in Moskau' },
      { label: 'Projekt-Volumen', value: 'Ca. 10 Mio\nElcon-Anteil 3,5 Mio Euro' },
      { label: 'Baubeginn', value: 'Mai 2006' },
      { label: 'Bauzeit', value: '12 Monate' },
      { label: 'Auftraggeber', value: 'Fa. Unger Stahlbau' },
      { label: 'Generalunternehmer', value: 'Fa. Unger Stahlbau' },
      { label: 'ELCON Auftrag', value: 'Ausführung von Technischer Gebäudeausrüstung' },
      { label: 'Montagedauer', value: '12 Monate' },
    ],
    quelle: 'https://www.elcon-led.com/n/60/74/porsche-zentrale-in-moskau-2006',
  },
  {
    slug: 'general-motors-hauptquartier-moskau-2008',
    titel: 'Hauptquartier General Motors Moskau, 2008',
    kachel: 'GM Headquarters, Moskau',
    absaetze: [
      'Komplettausbau der 9. und 10. Etage im Northern Tower mit einer Nutzfläche von ca. 4500 qm.',
      'Im Rahmen dieses Projektes wurde das neue Hauptquartier von General Motors mit hochwertigen Büroeinheiten im neuen International Business Center in Bezirk Moskau City realisiert.\nDer Leistungsumfang enthielt den Komplettausbau der 9. und 10. Etage im Northern Tower mit einer Nutzfläche von ca. 4500 qm.',
      'Die Übergabe neuen Hauptzentrale an General Motor erfolgte zum vereinbarten Termin.',
    ],
    felder: [
      { label: 'Bauvorhaben', value: 'Headquarter General Motors Moskau, Northern Tower , Moskau City' },
      { label: 'Auftraggeber', value: 'General Motors Auto' },
      { label: 'Bauvolumen', value: '4,5 Mio. Euro' },
      { label: 'Bauzeit', value: '3 Monate' },
      { label: 'Leistungsumfang', value: 'Im Rahmen dieses Projektes wurde das neue Hauptquartier von General Motors mit hochwertigen Büroeinheiten im neuen International Business Center in Bezirk Moskau City realisiert.\nDer Leistungsumfang enthielt den Komplettausbau der 9. und 10. Etage im Northern Tower mit einer Nutzfläche von ca. 4500 qm.\nFolgende Leistungen wurden ausgeführt:\n- Trockenbau und abgehängte Decken\n- Doppelboden\n- Maler- und Spachtelarbeiten\n- Innentüren, Glastrennwände und Einbaumöbel\n- Elektroanlage\n- Lüftungsanlage\n- Klimaanlage\n- Sanitäranlagen\n- Sonnenschutz\n- Brandmeldeanlage\n- Gaslöschanlagen' },
      { label: 'Besonderheiten', value: 'Für die Leistungserbringung stand ein Zeitraum von 3 Monaten zur Verfügung. Auf Grund der kurzen Bauzeit wurden die Arbeiten im Schichtbetrieb über 24 Stunden täglich ausgeführt. In Spitzenzeiten waren bis zu 175 Arbeitskräfte am Bauvorhaben aktiv.' },
    ],
    quelle: 'https://www.elcon-led.com/n/62/74/hauptquartier-general-motors-moskau-2008',
  },
  {
    slug: 'selgros-einkaufsmaerkte-2008',
    titel: 'SELGROS: technische Gebäudeausrüstung für SELGROS Einkaufsmärkte in Russland, 2008',
    kachel: 'Selgros Cash & Carry, Kotelniki',
    absaetze: [
      'Für SELGROS Cash & Carry ist Russland ein riesiger Markt mit viel Potenzial. Schon im Dezember 2008 wurde der erste SELGROS-Markt in Kotelniki nahe Moskau eröffnet. Zahlreiche weitere Märkte in verschiedenen Städten folgten. Als erfahrener Gebäudeausrüster mit jahrelanger Erfahrung in Russland hat ELCON LED in den Städten Moskau, Kasan / Tatarstan an der Wolga, in Rjasan, in Wolgograd und in Rostow am Don die technische Gebäudeausrüstung der neuen Einkaufsmärkte geplant, projektiert und installiert.',
    ],
    felder: [
    ],
    quelle: 'https://www.elcon-led.com/n/13/74/selgros-technische-gebaeudeausruestung-fuer-selgros-einkaufsmaerkte-in-russland-2008',
  },
  {
    slug: 'schweizer-konsulat-st-petersburg-2006',
    titel: 'Schweizer Konsulat in St. Petersburg, 2006',
    kachel: 'Schweizer Konsulat, St. Petersburg',
    absaetze: [
      'Schweizer Botschaft in St. Petersburg',
      'Gesamte Sicherheitstechnik, Beleuchtung, Schalter, Steckdosen, EDV, Schleusensteuerung, etc.',
      'In einem alten Gebäude die gesamte Elt-Technik in einer sehr kurzen Zeit komplett erneuern',
    ],
    felder: [
      { label: 'Projekt', value: 'Schweizer Botschaft in St. Petersburg' },
      { label: 'Baubeginn', value: 'März 2006' },
      { label: 'Bauzeit', value: 'März bis Juli 2006' },
      { label: 'Auftraggeber', value: 'Schweizer Eidgenossenschaft' },
      { label: 'Generalunternehmer', value: 'Lei AG' },
      { label: 'ELCON Auftrag', value: 'Gesamte Sicherheitstechnik, Beleuchtung, Schalter, Steckdosen, EDV, Schleusensteuerung, etc.' },
      { label: 'Montagedauer', value: 'ca. 3 Monate' },
      { label: 'Besonderheiten', value: 'In einem alten Gebäude die gesamte Elt-Technik in einer sehr kurzen Zeit komplett erneuern' },
    ],
    quelle: 'https://www.elcon-led.com/n/58/74/schweizer-konsulat-in-st-petersburg-2006',
  },
  {
    slug: 'schweizer-botschaft-moskau-2005',
    titel: 'Schweizer Botschaft in Moskau, 2005',
    kachel: 'Schweizer Botschaft, Moskau',
    absaetze: [
      'Ca. 600.000 Euro\nElcon-Anteil 100.000 Euro',
      'Planung und Ausführung der elektrischen Anlagen und des PC-Netzes',
    ],
    felder: [
      { label: 'Projekt', value: 'Schweizer Botschaft in Moskau' },
      { label: 'Beschreibung', value: 'Renovierung Visaamt' },
      { label: 'Projekt-Volumen', value: 'Ca. 600.000 Euro\nElcon-Anteil 100.000 Euro' },
      { label: 'Baubeginn', value: 'Juni 2005' },
      { label: 'Bauzeit', value: '5 Monate' },
      { label: 'Auftraggeber', value: 'Fa. Lei AG' },
      { label: 'Generalunternehmer', value: 'Fa. Lei AG' },
      { label: 'ELCON Auftrag', value: 'Planung und Ausführung der elektrischen Anlagen und des PC-Netzes' },
      { label: 'Montagedauer', value: '5 Monate' },
    ],
    quelle: 'https://www.elcon-led.com/n/51/74/schweizer-botschaft-in-moskau-2005',
  },
  {
    slug: 'continental-automotive-kaluga-2011',
    titel: 'Fertigungsanlagen Continental Automotive Systems Rus, 2011',
    kachel: 'Continental Automotive Systems, Kaluga',
    absaetze: [
      'Ausbau und Instandhaltung der Fertigungsanlagen in Kaluga — am Automotive-Produktionsstandort Kaluga investierte Continental in den Ausbau seiner Fertigungsanlagen, in denen überwiegend Motorsteuergeräte produziert werden, aber auch Komponenten für Kraftstoffversorgung und Einspritzanlagen. ELCON wurde bei diesem Projekt mit umfassenden Aufgaben in den Bereichen Baumanagement, Technische Wartung, Instandhaltung, Reparatur und Erneuerung betraut.',
      '- mehrsprachige Projektdokumentation',
    ],
    felder: [
      { label: 'Bauvorhaben', value: 'Ausbau, Renovierung und Instandhaltung der Fertigungsstätten' },
      { label: 'Auftraggeber', value: 'Continental Automotive Systems Rus' },
      { label: 'Leistungsumfang', value: 'Im Rahmen dieses Projektes hat ELCON zusätzlich zu den auszuführenden Arbeiten in den einzelnen Gewerken das Baumanagement für alle Baumaßnahmen übernommen.\nFolgende Leistungen wurden ausgeführt:\n- schlüsselfertige Dienstleistungen für alle aufgeführten Bereiche\n- Baumanagement für alle Baumaßnahmen\nz. B. Fenster,Türen, Malerarbeiten, Wandarbeiten.\n\nAusführung von Arbeiten in den Bereichen:\n- Heizungstechnik\n- Klimatechnik\n- Lüftungstechnik\n- Sanitärinstallationen, Bäder, Fliesenarbeiten\n- Elektrotechnik\n- Netzwerktechnik\n- EDV-Anlage mit Doppelboden, Server, Hardware, Software\n- Motage von Reinstarbeitsplätzen\n- Reinigung und Enthärtung des Wassers für Platinen-Produktion\n- Materialbeschaffung zu 90% aus Deutschland\n- Logistik- mehrsprachige Projektdokumentation' },
      { label: 'Besonderheiten', value: 'Die Montage der Reinstarbeitsplätze und die Aufbereitung des Wassers für die Platinen-Produktion erfordert Spezialwissen- und Spezialausrüstung.' },
    ],
    quelle: 'https://www.elcon-led.com/n/49/74/fertigungsanlagen-continental-automotive-systems-rus-2011',
  },
  {
    slug: 'vw-werk-kaluga-2008',
    titel: 'VW Werk in Kaluga, Russland, 2008-2009',
    kachel: 'Volkswagen-Werk, Kaluga',
    absaetze: [
      'Fernmelde- und Dateninstallation im Volkswagenwerk',
      'Kaluga liegt im Zentrum des europäischen Teils Russlands rund 160 Kilometer südwestlich von Moskau. Kaluga gilt als bedeutende Forschungs- und Industriestadt und ist Verwaltungssitz der Landesregierung Kaluga. Hier entstand in den letzten Jahren in zwei Bauabschnitten das neue Volkswagenwerk, in dem ELCON mit der Installation der Fernmelde- und Dateninstallation beauftragt war.',
    ],
    felder: [
      { label: 'Kategorie', value: 'Industrie/Gewerbe' },
      { label: 'Projekt', value: 'Neubau Montage- und Fertigungswerk in Kaluga, der neu entstehenden Autometropole Russlands.\nGeplante Jahres-Kapazität ab 2009: bis zu 150.000 Fahrzeuge. Durch VW-Soginvestitionen in der Dienstleistungs- und Zulieferindustrie entstehen insgesamt rund 10.000 neue Arbeitsplätze.' },
      { label: 'Beschreibung', value: 'Fernmelde- und Dateninstallation im Volkswagenwerk in Kaluga, Technopark "Grabzevo"' },
      { label: 'Projekt-Volumen', value: 'mehr als 500 Mio Euro davon ca. 3 Mio. Euro Elcon-Auftrag' },
      { label: 'Baubeginn Elcon', value: 'März 2008' },
      { label: 'Bauzeit', value: '2 Bauabschnitte - bis Dezember 2009' },
      { label: 'Auftraggeber', value: 'Volkswagen Russia' },
      { label: 'Generalunternehmer', value: 'Volkswagen' },
      { label: 'ELCON Auftrag', value: 'Ausführung von Fernmelde- und Dateninstallationen\n- komplette Installation der Serverräume\n- Klimatisierung der Serverräume' },
      { label: 'Beteiligte Fachkräfte', value: '3' },
      { label: 'Beteiligte Monteure', value: '35' },
    ],
    quelle: 'https://www.elcon-led.com/n/63/74/vw-werk-in-kaluga-russland-2008-2009',
  },
  {
    slug: 'benteler-kaluga-2011',
    titel: 'Betriebsstätte Benteler Automobiltechnik in Kaluga, 2011',
    kachel: 'Benteler Automobiltechnik, Kaluga',
    absaetze: [
      'Elektrotechnik für Automobilzulieferer',
    ],
    felder: [
      { label: 'Bauvorhaben', value: 'Neubau einer Betriebsstätte in Kaluga mit Lackierstraße, Presswerk neben dem bereits vorhandenen Werk' },
      { label: 'Auftraggeber', value: 'Benteler Automobiltechnik' },
      { label: 'Baubeginn', value: 'April / Mai 2011' },
      { label: 'Bauzeit Elcon', value: '7 Monate' },
      { label: 'Leistungsumfang', value: 'Im Rahmen dieses Projektes war ELCON mit den Themen Elektrotechnik, Netzwerktechnik, Montage des Stark- und Schwachstromnetz befasst:\nFolgende Leistungen wurden ausgeführt:\n- Elektrotechnik\n- Netzwerktechnik\n- EDV\n- Starkstromnetz und -Anschlüsse\n- Schwachstromnetz und -Anschlüsse\n- Materialbeschaffung\n- Logistik\n- Projektdokumentation in Russisch und Englisch' },
      { label: 'Besonderheiten', value: 'Für die Leistungserbringung stand ein Zeitraum von ca 7 Monaten zur Verfügung.' },
    ],
    quelle: 'https://www.elcon-led.com/n/64/74/betriebsstaette-benteler-automobiltechnik-in-kaluga-2011',
  },
  {
    slug: 'ambassador-hotel-kaluga-2008',
    titel: 'Ambassador - Hotel und Boardinghouse in Kaluga, Russland, 2008',
    kachel: 'Ambassador Hotel & Boardinghouse, Kaluga',
    absaetze: [
      'Auf 18.000 m² ist in Kaluga ein riesiger Hotelkomplex mit angegliedertem Boardinghouse und Sport- und Wellnessbereich entstanden.\nELCON war bei diesem Großprojekt mit Gebäudetechnik und elektrischen Installationen betraut.',
      'Auf einem 9000 m² großen Grundstück wird ein Hotel mit insgesamt 138 Zimmern in Komfort-, Premium-, oder Delux Standard, sowie mit 2 Suiten errichtet. Die Räume sind auf 4 Geschosse mit einer Gesamtfläche von über 5600 m² verteilt.\n\nHinzu kommt ein großzügiger öffentlicher Bereich mit Foyer, Restaurant, Bar und Besprechungsräumen, sowie Fitnessbereich im EG und ca. 100 Stellplätze im Außenbereich.',
      'Die Doppelzimmer haben in der Komfortklasse 18 m², in der Premiumklasse 22 m² und in der Deluxklasse 25 m². Ebenfalls die behinderten- gerecht augestatteten DZ haben 25 m². Die Suiten bieten großzügige 55 m² .',
      'Auf einer Fläche von 7500m² entsteht das dazu gehörige Boardinghouse. Hier sind 51 zwei- und drei Zimmer Wohnungen mit 38 m² bzw. 50 m² und 23 Studios mit ca. 25 m² untergebracht. Im EG wird es Gemeinschaftsflächen, wie z. B. Club-Räume und Shops geben, sowie 67 Einstellplätze im Außenbereich.',
      'Die gegenüber liegende Sports Bar umfasst auf einem Grundstück von 1500 m² Bar-, Club- und Wellness - Bereich mit Freisitz, Spielplatz und Saunagarten.',
    ],
    felder: [
    ],
    quelle: 'https://www.elcon-led.com/n/61/74/ambassador-hotel-und-boardinghouse-in-kaluga-russland-2008',
  },
  {
    slug: 'billa-einkaufsmaerkte-moskau',
    titel: 'BILLA Einkaufsmärkte Moskau',
    kachel: 'BILLA Einkaufsmärkte, Moskau',
    absaetze: [
      'Einkaufsmärkte: Billa, Moskau: gemeinsam mit der russischen Holding Marta etabliert Rewe das Billa Supermarktnetz, um an insgesamt 21 Standorten im Sektor Lebensmittel - Discount in der Region Moskau präsent zu sein. Elcon ist bei diesem Projekt für die Planung und für die Ausführung der gesamten Gebäudetechnik zuständig.',
      'Im Juli 2004 hat die Rewe-Gruppe begonnen, den russischen Markt zu erschließen. Im Rahmen eines Joint Venture mit der Marta-Gruppe aus Moskau wird eine Supermarktkette in der Russischen Föderation aufgebaut. Die beiden Unternehmen werden in den nächsten drei bis fünf Jahren gemeinsam eine halbe Milliarde Dollar in dieses Projekt investieren. Bereits 17 Billa-Supermärkte wurden eröffnet. Die Märkte bieten auf Verkaufsflächen von bis zu 2.500 Quadratmetern ein umfassendes Lebensmittelsortiment. Gerade für die qualitative Nahversorgung der Bevölkerung rechnet sich Rewe für den Billa-Supermarkt gute Zukunftschancen im wachsenden Wettbewerb mit anderen Vertriebsformaten sowie nationalen und internationalen Konkurrenten auf dem russischen Markt aus.',
    ],
    felder: [
    ],
    quelle: 'https://www.elcon-led.com/n/54/74/billa-einkaufsmaerkte-moskau',
  },
  {
    slug: 'schubbeize-lipetsk-2006',
    titel: 'Schubbeize in Lipetsk, Russland 2006',
    absaetze: [
      'Elektrotechnische Anlagen für eine Schubbeize in Lipetsk, Russland. Mittelspannungsanlagentechnik, Trafos, Schaltschränke usw.',
    ],
    felder: [
      { label: 'Projekt', value: 'Schubbeize in Lipetsk' },
      { label: 'Beschreibung', value: 'Beizanlage' },
      { label: 'Projektvolumen', value: 'ca. 360.000 €' },
      { label: 'Baubeginn', value: 'Oktober 2006' },
      { label: 'Bauzeit', value: 'lt. Bauzeitenplan bis März 2007' },
      { label: 'Elcon Auftrag', value: 'Installation der Mittelspannung, Trafos, Schaltschränke, sowie der gesamten Elektrotechnik' },
      { label: 'Monatagedauer', value: 'ca. 6 Monate' },
      { label: 'Besonderheiten', value: 'Der Betrieb der anderen Anlagenteile läuft weiter und darf nicht gestört werden.' },
    ],
    quelle: 'https://www.elcon-led.com/n/59/74/schubbeize-in-lipetsk-russland-2006',
  },
  {
    slug: 'ziegelwerk-kiprewo-2006',
    titel: 'Ziegelwerk in Kiprewo, Russland, 2006',
    absaetze: [
    ],
    felder: [
      { label: 'Beschreibung', value: 'Neubau einer Anlage zur Ziegelproduktion' },
      { label: 'Projektvolumen', value: '40 Mio Euro' },
      { label: 'ELCON-Anteil', value: '13,5 Mio Euro' },
      { label: 'Baubeginn', value: 'April 2006' },
      { label: 'Bauzeit', value: '2 Jahre' },
      { label: 'Auftraggeber', value: 'Fa. Wienerberger' },
      { label: 'ElCON Auftrag', value: 'Planung und Ausführung von Elektroversorgung inklusive Trafostation und Beleuchtung' },
      { label: 'Montagedauer', value: '8 Monate' },
    ],
    quelle: 'https://www.elcon-led.com/n/57/74/ziegelwerk-in-kiprewo-russland-2006',
  },
  {
    slug: 'villa-benilux-2006',
    titel: 'Villa Benilux, 2006',
    absaetze: [
      'Komplette Planung der gesamten Haustechnik inkl. Schwachstrom, Schwimmbadtechnik und der gesamten Regenwasserentwässerung auf dem Gelände mit tiefen Schächten.',
      'Da es in diesem Wohngebiet einen Mangel an Elektroenergie gibt, planen wir ein Blockheizkraftwerk und eine Steuerung ein, die den Energieverbrauch optimiert. Es werden Energiesparleuchten und Geräte mit einem hohen Wirkungsgrad und langer Lebensdauer eingebaut',
    ],
    felder: [
      { label: 'Projekt', value: 'Villa Benilux' },
      { label: 'Beschreibung', value: 'Neubau einer repräsentativen Villa mit einer Poollandschaft, Arena und ca. 1.600 m² Wohnfläche' },
      { label: 'Auftraggeber', value: 'Fa. Elit Stroj' },
      { label: 'Generalunternehmer', value: 'ELCON LED' },
      { label: 'ELCON Auftrag', value: 'Komplette Planung der gesamten Haustechnik inkl. Schwachstrom, Schwimmbadtechnik und der gesamten Regenwasserentwässerung auf dem Gelände mit tiefen Schächten.' },
      { label: 'Besonderheiten', value: 'Da es in diesem Wohngebiet einen Mangel an Elektroenergie gibt, planen wir ein Blockheizkraftwerk und eine Steuerung ein, die den Energieverbrauch optimiert. Es werden Energiesparleuchten und Geräte mit einem hohen Wirkungsgrad und langer Lebensdauer eingebaut' },
    ],
    quelle: 'https://www.elcon-led.com/n/56/74/villa-benilux-2006',
  },
  {
    slug: 'villa-rublowskoe-schosse-moskau-2005',
    titel: 'Villa Rublowskoe Schosse, Moskau, 2005',
    absaetze: [
      'ca. 10 Mio Euro\nElcon Anteil 1,2 Mio Euro',
      'Planung und Ausführung aller technischen Anlagen',
    ],
    felder: [
      { label: 'Projekt', value: 'private Villa' },
      { label: 'Beschreibung', value: 'Neubau' },
      { label: 'Projekt-Volumen', value: 'ca. 10 Mio Euro\nElcon Anteil 1,2 Mio Euro' },
      { label: 'Baubeginn', value: 'September 2005' },
      { label: 'Bauzeit', value: '2 Jahre' },
      { label: 'Auftraggeber', value: 'Elit-Stroj' },
      { label: 'Generalunternehmer', value: 'Elit-Stroj' },
      { label: 'ELCON Auftrag', value: 'Planung und Ausführung aller technischen Anlagen' },
      { label: 'Montagedauer', value: '12 Monate' },
    ],
    quelle: 'https://www.elcon-led.com/n/53/74/villa-rublowskoe-schosse-moskau-2005',
  },
];

/**
 * Englische Fassung der Projekttexte, nach Slug zugeordnet.
 *
 * Bewusst getrennt von den deutschen Angaben gehalten: Slug, Bildnamen und
 * Quellenangabe gelten für beide Sprachen und stehen deshalb nur einmal oben.
 * Übersetzt wurden Titel, Fließtext und die Beschriftungen der Datenfelder;
 * Eigennamen, Beträge und Zeiträume bleiben unverändert. Die Vorlagen sind
 * teils in flüchtigem Deutsch verfasst — die Übersetzung gibt die Aussage
 * wieder, ohne Angaben hinzuzufügen, die im Original nicht stehen.
 */
const UEBERSETZUNGEN: Record<string, ProjektdetailEn> = {
  'nord-stream-2011': {
    titel: 'Nord Stream — ELCON supplies electrical engineering for an offshore gas pipeline, 2011',
    kachel: 'Nord Stream gas pipeline, Baltic Sea',
    absaetze: [
      'During construction of the Nord Stream pipeline from Russia to Germany, ELCON was entrusted with laying special cables and connecting all measuring points and devices, among other tasks. Testing and commissioning were also part of the contract. Decades of experience with projects in the Russian Federation proved a considerable advantage here.',
      'The Nord Stream pipeline is an offshore gas pipeline consisting of two strings, each 1,224 kilometres long, running along the bed of the Baltic Sea. The route runs from Portovaya Bay near Vyborg, Russia, to the German Baltic coast at Lubmin near Greifswald, Mecklenburg-Western Pomerania, connecting the European Union directly with some of the world’s largest natural gas reserves in Russia.',
    ],
    felder: [
      { label: 'Project', value: 'Offshore gas pipeline from Vyborg, Russia, to Greifswald, Germany' },
      { label: 'Client', value: 'Nord Stream AG' },
      { label: 'Scope of work', value: 'ELCON was commissioned with the electrical works on this project.\nThe following services were carried out:\n- laying the conduits for the cables\n- laying 170 km of steel-armoured cable\n- fabrication and installation of explosion-proof designs\n- connection of all measuring points\n- connection of all devices\n- testing\n- commissioning' },
      { label: 'Particular challenges', value: 'A period of approximately 7 months was available for delivery. The work was carried out in shifts, 24 hours a day, 7 days a week. 160 workers were deployed on the project.' },
      { label: 'Staff', value: '160 ELCON employees and 4 ELCON project managers were deployed on this project.' },
    ],
  },
  'nord-stream-2-seit-2018': {
    titel: 'Nord Stream 2, from 2018',
    kachel: 'Nord Stream 2 gas pipeline, Baltic Sea',
    absaetze: [
      'ELCON supplied electrical engineering for the offshore gas pipeline project “Nord Stream 2”.',
      'As on the Nord Stream 1 pipeline in 2011, ELCON LED was also involved in the construction of the Nord Stream 2 pipeline. Here too, ELCON was entrusted with laying special cables and connecting all measuring points and devices, among other tasks.',
      'Decades of experience with projects in the Russian Federation, together with the work on the Nord Stream 1 project, were a considerable advantage here.',
      'The Nord Stream pipeline is an offshore gas pipeline consisting of two strings, each 1,300 kilometres long, running along the bed of the Baltic Sea. The route runs from Ust-Luga, Russia, to the German Baltic coast at Lubmin near Greifswald, Mecklenburg-Western Pomerania, and here too connects the European Union directly with some of the world’s largest natural gas reserves in Russia.',
      'Project: offshore gas pipeline from Ust-Luga, Russia, to Lubmin, Germany',
    ],
    felder: [],
  },
  'nord-stream-wartung-seit-2012': {
    titel: 'Nord Stream I — servicing and maintenance from 2012',
    absaetze: [
      'Following the successful commissioning of the Nord Stream pipeline (Nord Stream I) in November 2011 — a project in which ELCON LED was entrusted with laying special cables, designing and installing electrical systems and connecting electrical measuring points and devices — the installation went into operation.',
      'From 2012, ELCON LED was responsible for servicing and maintaining the installations.',
    ],
    felder: [],
  },
  'deutsche-botschaft-kiew-2005': {
    titel: 'German Embassy in Kyiv, 2005',
    kachel: 'German Embassy, Kyiv',
    absaetze: [
      'Building services: after the Al-Qaeda terrorist attacks of 11 September 2001 on the World Trade Center in New York City and the Pentagon in Arlington, Virginia, in which more than 3,000 people were killed, the security concepts of embassies had to be revised and improved.\nIn this context, ELCON brought the electrical installations, the building services and the security systems up to the latest state of the art in security technology.',
      'New security building for the visa section',
      'All electrical, mechanical and security systems',
      'After 11 September, the security concept for embassies was revised. In a confined space we created a very high security standard and implemented it within a short time, without disrupting ongoing operations.',
    ],
    felder: [
      { label: 'Project', value: 'German Embassy in Kyiv' },
      { label: 'Description', value: 'New security building for the visa section' },
      { label: 'Start of construction', value: '2005' },
      { label: 'Construction period', value: 'approx. 6 months' },
      { label: 'Client', value: 'German Federal Foreign Office' },
      { label: 'Main contractor', value: 'Bautech' },
      { label: 'ELCON scope', value: 'All electrical, mechanical and security systems' },
      { label: 'Particular challenges', value: 'After 11 September, the security concept for embassies was revised. In a confined space we created a very high security standard and implemented it within a short time, without disrupting ongoing operations.' },
    ],
  },
  'brauerei-almaty-sosnadar-2006': {
    titel: 'Almaty Sosnadar brewery, 2006',
    kachel: 'Almaty Sosnadar brewery',
    absaetze: [],
    felder: [
      { label: 'Project', value: 'Almaty Sosnadar brewery' },
      { label: 'Commission', value: 'Electrical design: Almaty Sosnadar brewery' },
      { label: 'Start of construction', value: 'January 2006' },
      { label: 'Client', value: 'Huppmann' },
      { label: 'Main contractor', value: 'Huppmann' },
      { label: 'Particular challenges', value: 'The brewery could not be shut down. Production continued throughout.' },
    ],
  },
  'schweizer-botschaft-kiew-2005': {
    titel: 'Swiss Embassy in Kyiv, 2005',
    kachel: 'Swiss Embassy, Kyiv',
    absaetze: [
      'All electrical and mechanical services (heating, air conditioning, ventilation, plumbing) newly installed. All installations are carried out to the latest standard in building services engineering.',
      'All building services as technical main contractor.',
      'An old detached building was completely refurbished and brought up to a high technical standard, with a security airlock, visa section, embassy and ambassador’s residence. ELCON also supplied all mechanical services components.',
    ],
    felder: [
      { label: 'Project', value: 'Swiss Embassy in Kyiv' },
      { label: 'Description', value: 'All electrical and mechanical services (heating, air conditioning, ventilation, plumbing) newly installed. All installations are carried out to the latest standard in building services engineering.' },
      { label: 'Start of construction', value: 'September 2005' },
      { label: 'Construction period', value: '11 months' },
      { label: 'Client', value: 'Switzerland' },
      { label: 'Main contractor', value: 'Lei AG' },
      { label: 'ELCON scope', value: 'All building services as technical main contractor.' },
      { label: 'Installation period', value: '8 months' },
      { label: 'Particular challenges', value: 'An old detached building was completely refurbished and brought up to a high technical standard, with a security airlock, visa section, embassy and ambassador’s residence. ELCON also supplied all mechanical services components.' },
    ],
  },
  'porsche-zentrum-moskau-2006': {
    titel: 'Porsche centre in Moscow, 2006',
    kachel: 'New Porsche centre, Moscow',
    absaetze: [
      'New Porsche car centre in Moscow\nGenerous exhibition areas, a sophisticated showroom and prestigious fittings are the hallmarks of the Porsche car centre in Moscow. ELCON is responsible here for delivering the complete building services, accounting for 3.5 million euros of the total project volume of approximately 10 million euros.',
    ],
    felder: [
      { label: 'Project', value: 'Porsche centre in Moscow' },
      { label: 'Description', value: 'New Porsche car centre in Moscow' },
      { label: 'Project volume', value: 'approx. 10 million euros\nELCON share 3.5 million euros' },
      { label: 'Start of construction', value: 'May 2006' },
      { label: 'Construction period', value: '12 months' },
      { label: 'Client', value: 'Unger Stahlbau' },
      { label: 'Main contractor', value: 'Unger Stahlbau' },
      { label: 'ELCON scope', value: 'Delivery of the building services' },
      { label: 'Installation period', value: '12 months' },
    ],
  },
  'general-motors-hauptquartier-moskau-2008': {
    titel: 'General Motors headquarters, Moscow, 2008',
    kachel: 'GM headquarters, Moscow',
    absaetze: [
      'Complete fit-out of the 9th and 10th floors of the Northern Tower, with a usable area of approximately 4,500 m².',
      'This project created the new General Motors headquarters, with high-quality office units in the new International Business Center in the Moscow City district.\nThe scope of work covered the complete fit-out of the 9th and 10th floors of the Northern Tower, with a usable area of approximately 4,500 m².',
      'The new headquarters was handed over to General Motors on the agreed date.',
    ],
    felder: [
      { label: 'Project', value: 'General Motors headquarters Moscow, Northern Tower, Moscow City' },
      { label: 'Client', value: 'General Motors Auto' },
      { label: 'Construction volume', value: '4.5 million euros' },
      { label: 'Construction period', value: '3 months' },
      { label: 'Scope of work', value: 'This project created the new General Motors headquarters, with high-quality office units in the new International Business Center in the Moscow City district.\nThe scope of work covered the complete fit-out of the 9th and 10th floors of the Northern Tower, with a usable area of approximately 4,500 m².\nThe following services were carried out:\n- drywall construction and suspended ceilings\n- raised flooring\n- painting and plastering\n- internal doors, glass partitions and fitted furniture\n- electrical installations\n- ventilation systems\n- air conditioning\n- sanitary installations\n- solar shading\n- fire alarm system\n- gas extinguishing systems' },
      { label: 'Particular challenges', value: 'A period of 3 months was available for delivery. Because of the short construction time, the work was carried out in shifts around the clock. At peak times, up to 175 workers were active on the project.' },
    ],
  },
  'selgros-einkaufsmaerkte-2008': {
    titel: 'SELGROS: building services for SELGROS cash and carry stores in Russia, 2008',
    kachel: 'Selgros Cash & Carry, Kotelniki',
    absaetze: [
      'For SELGROS Cash & Carry, Russia is a vast market with a great deal of potential. The first SELGROS store opened as early as December 2008 in Kotelniki near Moscow, and numerous further stores in various cities followed. As an experienced building services contractor with years of experience in Russia, ELCON LED planned, engineered and installed the building services for the new stores in Moscow, Kazan in Tatarstan on the Volga, Ryazan, Volgograd and Rostov-on-Don.',
    ],
    felder: [],
  },
  'schweizer-konsulat-st-petersburg-2006': {
    titel: 'Swiss Consulate in St Petersburg, 2006',
    kachel: 'Swiss Consulate, St Petersburg',
    absaetze: [
      'Swiss mission in St Petersburg',
      'All security systems, lighting, switches, socket outlets, IT infrastructure, airlock control and more.',
      'Completely renewing all electrical installations in an old building within a very short time.',
    ],
    felder: [
      { label: 'Project', value: 'Swiss mission in St Petersburg' },
      { label: 'Start of construction', value: 'March 2006' },
      { label: 'Construction period', value: 'March to July 2006' },
      { label: 'Client', value: 'Swiss Confederation' },
      { label: 'Main contractor', value: 'Lei AG' },
      { label: 'ELCON scope', value: 'All security systems, lighting, switches, socket outlets, IT infrastructure, airlock control and more.' },
      { label: 'Installation period', value: 'approx. 3 months' },
      { label: 'Particular challenges', value: 'Completely renewing all electrical installations in an old building within a very short time.' },
    ],
  },
  'schweizer-botschaft-moskau-2005': {
    titel: 'Swiss Embassy in Moscow, 2005',
    kachel: 'Swiss Embassy, Moscow',
    absaetze: [
      'Approx. 600,000 euros\nELCON share 100,000 euros',
      'Design and delivery of the electrical installations and the computer network',
    ],
    felder: [
      { label: 'Project', value: 'Swiss Embassy in Moscow' },
      { label: 'Description', value: 'Refurbishment of the visa section' },
      { label: 'Project volume', value: 'approx. 600,000 euros\nELCON share 100,000 euros' },
      { label: 'Start of construction', value: 'June 2005' },
      { label: 'Construction period', value: '5 months' },
      { label: 'Client', value: 'Lei AG' },
      { label: 'Main contractor', value: 'Lei AG' },
      { label: 'ELCON scope', value: 'Design and delivery of the electrical installations and the computer network' },
      { label: 'Installation period', value: '5 months' },
    ],
  },
  'continental-automotive-kaluga-2011': {
    titel: 'Production facilities, Continental Automotive Systems Rus, 2011',
    kachel: 'Continental Automotive Systems, Kaluga',
    absaetze: [
      'Expansion and maintenance of the production facilities in Kaluga — at its Kaluga automotive production site, Continental invested in expanding facilities that mainly produce engine control units, but also components for fuel supply and injection systems. On this project, ELCON was entrusted with wide-ranging tasks in construction management, technical servicing, maintenance, repair and renewal.',
      '- multilingual project documentation',
    ],
    felder: [
      { label: 'Project', value: 'Expansion, refurbishment and maintenance of the production facilities' },
      { label: 'Client', value: 'Continental Automotive Systems Rus' },
      { label: 'Scope of work', value: 'On this project, in addition to the works to be carried out in the individual trades, ELCON took on construction management for all building measures.\nThe following services were carried out:\n- turnkey services for all of the areas listed\n- construction management for all building measures,\ne.g. windows, doors, painting, wall works.\n\nWorks carried out in the following areas:\n- heating systems\n- air conditioning\n- ventilation systems\n- sanitary installations, bathrooms, tiling\n- electrical engineering\n- network technology\n- IT installations with raised flooring, servers, hardware, software\n- installation of cleanroom workstations\n- purification and softening of the water for circuit board production\n- 90% of materials procured from Germany\n- logistics\n- multilingual project documentation' },
      { label: 'Particular challenges', value: 'Installing the cleanroom workstations and treating the water for circuit board production call for specialist knowledge and specialist equipment.' },
    ],
  },
  'vw-werk-kaluga-2008': {
    titel: 'Volkswagen plant in Kaluga, Russia, 2008–2009',
    kachel: 'Volkswagen plant, Kaluga',
    absaetze: [
      'Telecommunications and data installations at the Volkswagen plant',
      'Kaluga lies in the centre of the European part of Russia, around 160 kilometres south-west of Moscow. It is regarded as an important research and industrial city and is the seat of the Kaluga regional government. The new Volkswagen plant was built here over recent years in two construction phases; ELCON was commissioned with the telecommunications and data installations.',
    ],
    felder: [
      { label: 'Category', value: 'Industry/commerce' },
      { label: 'Project', value: 'New assembly and production plant in Kaluga, Russia’s emerging automotive centre.\nPlanned annual capacity from 2009: up to 150,000 vehicles. Through Volkswagen’s co-investment in the service and supplier industries, a total of around 10,000 new jobs are being created.' },
      { label: 'Description', value: 'Telecommunications and data installations at the Volkswagen plant in Kaluga, “Grabtsevo” technology park' },
      { label: 'Project volume', value: 'more than 500 million euros, of which approx. 3 million euros is the ELCON contract' },
      { label: 'ELCON start on site', value: 'March 2008' },
      { label: 'Construction period', value: '2 construction phases — until December 2009' },
      { label: 'Client', value: 'Volkswagen Russia' },
      { label: 'Main contractor', value: 'Volkswagen' },
      { label: 'ELCON scope', value: 'Delivery of telecommunications and data installations\n- complete installation of the server rooms\n- air conditioning of the server rooms' },
      { label: 'Specialists involved', value: '3' },
      { label: 'Fitters involved', value: '35' },
    ],
  },
  'benteler-kaluga-2011': {
    titel: 'Benteler Automobiltechnik production site in Kaluga, 2011',
    kachel: 'Benteler Automobiltechnik, Kaluga',
    absaetze: [
      'Electrical engineering for an automotive supplier',
    ],
    felder: [
      { label: 'Project', value: 'New production site in Kaluga with a paint line and press shop, next to the existing plant' },
      { label: 'Client', value: 'Benteler Automobiltechnik' },
      { label: 'Start of construction', value: 'April/May 2011' },
      { label: 'ELCON construction period', value: '7 months' },
      { label: 'Scope of work', value: 'On this project, ELCON was responsible for electrical engineering, network technology and the installation of the power and low-voltage signal networks.\nThe following services were carried out:\n- electrical engineering\n- network technology\n- IT installations\n- power network and connections\n- low-voltage signal network and connections\n- materials procurement\n- logistics\n- project documentation in Russian and English' },
      { label: 'Particular challenges', value: 'A period of approximately 7 months was available for delivery.' },
    ],
  },
  'ambassador-hotel-kaluga-2008': {
    titel: 'Ambassador — hotel and boarding house in Kaluga, Russia, 2008',
    kachel: 'Ambassador hotel & boarding house, Kaluga',
    absaetze: [
      'A large hotel complex with an adjoining boarding house and a sports and wellness area has been built in Kaluga on 18,000 m².\nOn this major project, ELCON was entrusted with the building services and the electrical installations.',
      'On a 9,000 m² site, a hotel is being built with a total of 138 rooms in comfort, premium and deluxe categories, plus 2 suites. The rooms are spread across 4 storeys with a total area of more than 5,600 m².',
      'Added to this is a generous public area with a foyer, restaurant, bar and meeting rooms, as well as a fitness area on the ground floor and around 100 parking spaces outside.',
      'The double rooms measure 18 m² in the comfort category, 22 m² in the premium category and 25 m² in the deluxe category. The accessible double rooms also measure 25 m². The suites offer a generous 55 m².',
      'The associated boarding house is being built on an area of 7,500 m². It houses 51 two- and three-room apartments of 38 m² and 50 m² respectively, and 23 studios of approximately 25 m². The ground floor will contain communal areas such as club rooms and shops, along with 67 parking spaces outside.',
      'Opposite, the sports bar occupies a 1,500 m² site and comprises bar, club and wellness areas with an outdoor terrace, playground and sauna garden.',
    ],
    felder: [],
  },
  'billa-einkaufsmaerkte-moskau': {
    titel: 'BILLA supermarkets, Moscow',
    kachel: 'BILLA supermarkets, Moscow',
    absaetze: [
      'Supermarkets: BILLA, Moscow — together with the Russian holding company Marta, Rewe is establishing the BILLA supermarket network in order to be present at a total of 21 locations in the food discount sector in the Moscow region. On this project, ELCON is responsible for the design and delivery of all building services.',
      'In July 2004, the Rewe Group began opening up the Russian market. A supermarket chain is being built up in the Russian Federation as part of a joint venture with the Marta Group of Moscow. Over the next three to five years, the two companies will jointly invest half a billion dollars in this project. Seventeen BILLA supermarkets have already opened. The stores offer a comprehensive range of food on sales areas of up to 2,500 square metres. Rewe sees good prospects for the BILLA supermarket format, particularly in quality local food supply, amid growing competition with other retail formats and with national and international competitors on the Russian market.',
    ],
    felder: [],
  },
  'schubbeize-lipetsk-2006': {
    titel: 'Pickling line in Lipetsk, Russia, 2006',
    absaetze: [
      'Electrical installations for a pickling line in Lipetsk, Russia. Medium-voltage switchgear, transformers, control cabinets and more.',
    ],
    felder: [
      { label: 'Project', value: 'Pickling line in Lipetsk' },
      { label: 'Description', value: 'Pickling plant' },
      { label: 'Project volume', value: 'approx. €360,000' },
      { label: 'Start of construction', value: 'October 2006' },
      { label: 'Construction period', value: 'until March 2007 as per the construction schedule' },
      { label: 'ELCON scope', value: 'Installation of the medium-voltage equipment, transformers and control cabinets, plus all electrical engineering' },
      { label: 'Installation period', value: 'approx. 6 months' },
      { label: 'Particular challenges', value: 'The other parts of the plant continue in operation and must not be disrupted.' },
    ],
  },
  'ziegelwerk-kiprewo-2006': {
    titel: 'Brickworks in Kiprevo, Russia, 2006',
    absaetze: [],
    felder: [
      { label: 'Description', value: 'New brick production plant' },
      { label: 'Project volume', value: '40 million euros' },
      { label: 'ELCON share', value: '13.5 million euros' },
      { label: 'Start of construction', value: 'April 2006' },
      { label: 'Construction period', value: '2 years' },
      { label: 'Client', value: 'Wienerberger' },
      { label: 'ELCON scope', value: 'Design and delivery of the power supply including the transformer station and lighting' },
      { label: 'Installation period', value: '8 months' },
    ],
  },
  'villa-benilux-2006': {
    titel: 'Villa Benilux, 2006',
    absaetze: [
      'Complete design of all building services including low-voltage systems, swimming pool technology and the entire rainwater drainage system across the site, with deep shafts.',
      'As there is a shortage of electrical power in this residential area, we are designing in a combined heat and power unit and a control system that optimises energy consumption. Energy-saving luminaires and appliances with high efficiency and a long service life are being installed.',
    ],
    felder: [
      { label: 'Project', value: 'Villa Benilux' },
      { label: 'Description', value: 'New prestigious villa with a pool landscape, arena and approximately 1,600 m² of living space' },
      { label: 'Client', value: 'Elit Stroj' },
      { label: 'Main contractor', value: 'ELCON LED' },
      { label: 'ELCON scope', value: 'Complete design of all building services including low-voltage systems, swimming pool technology and the entire rainwater drainage system across the site, with deep shafts.' },
      { label: 'Particular challenges', value: 'As there is a shortage of electrical power in this residential area, we are designing in a combined heat and power unit and a control system that optimises energy consumption. Energy-saving luminaires and appliances with high efficiency and a long service life are being installed.' },
    ],
  },
  'villa-rublowskoe-schosse-moskau-2005': {
    titel: 'Villa on Rublyovskoye Shosse, Moscow, 2005',
    absaetze: [
      'approx. 10 million euros\nELCON share 1.2 million euros',
      'Design and delivery of all technical installations',
    ],
    felder: [
      { label: 'Project', value: 'Private villa' },
      { label: 'Description', value: 'New build' },
      { label: 'Project volume', value: 'approx. 10 million euros\nELCON share 1.2 million euros' },
      { label: 'Start of construction', value: 'September 2005' },
      { label: 'Construction period', value: '2 years' },
      { label: 'Client', value: 'Elit-Stroj' },
      { label: 'Main contractor', value: 'Elit-Stroj' },
      { label: 'ELCON scope', value: 'Design and delivery of all technical installations' },
      { label: 'Installation period', value: '12 months' },
    ],
  },
};

/**
 * Deutsche Angaben mit ihrer englischen Fassung zusammengeführt.
 *
 * Fehlt eine Übersetzung, bleibt `en` leer; die englischen Seiten fallen dann
 * sichtbar auf den deutschen Text zurück, statt einen leeren Eintrag zu zeigen.
 */
export const PROJEKTDETAILS: Projektdetail[] = PROJEKTE.map((p) => ({
  ...p,
  en: UEBERSETZUNGEN[p.slug],
}));
