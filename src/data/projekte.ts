export interface Projektfeld {
  label: string;
  value: string;
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
export const PROJEKTDETAILS: Projektdetail[] = [
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
    titel: 'Nordstream II, seit 2018',
    kachel: 'Nord Stream 2 Gaspipeline, Ostsee',
    absaetze: [
      'ELCON liefert ELT-Technik für Offshore Gaspipeline-Projekt “Nordstream 2”',
      'Wie bereits beim Bau der Pipeline von Nordstream 1 im Jahr 2011, ist auch ELCON LED beim Bau Nordstream-Pipeline 2 vertreten. Auch hier wurde ELCON unter anderem mit der Verlegung von Spezialkabeln, sowie dem Anschluss sämtlicher Messpunkte und Geräte betraut.',
      'Von großem Vorteil ist hierbei die Jahrzente lange Erfahrung mit Projekten in der russischen Förderation sowie auch die Mitarbeit beim Nordstream 1 Projekt.',
      'Die Nordstream-Pipeline ist eine Offshore-Gasleitung, bestehend aus zwei jeweils 1.300 Kilometer langen Leitungssträngen auf dem Grund der Ostsee. Die Trasse führt von der UST-Luga / Russland bis zur deutschen Ostseeküste nach Lubmin nahe Greifswald, Mecklenburg Vorpommern und verbindet die Europäische Union auch hier direct mit einigen der größten Erdgasreserven der Welt in Russland.',
      'Bauvorhaben: Offshore Gasleitung von UST-Luga / Russland nach Lubmin / Deutschland',
    ],
    felder: [
    ],
    quelle: 'https://www.elcon-led.com/n/125/74/nordstream-ii-seit-2018',
  },
  {
    slug: 'nord-stream-wartung-seit-2012',
    titel: 'Nord Stream I - Wartung und Instandhaltung seit 2012',
    absaetze: [
      'Nach erfolgreicher Inbetriebnahme der Nord-Stream-Pipeline (Nordstream I) im November 2011, bei der ELCON LED mit der Verlegung von Spezialkabeln und der Planung und Installation von elektrotechnischen Anlagen, sowie dem Anschluss elektrischer Messpunkte und Geräte betraut war, ist die Anlage nun in Betrieb.',
      'Seit 2012 ist ELCON LED für die Wartung und Instandhaltung der laufenden Anlagen verantwortlich.',
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
      'Ausbau und Instandhaltung der Fertigungsanlagen in Kaluga - Am Automotive Produktionsstandort Kaluga investiert Continental in den Ausbau seiner Fertigungsanlagen, in denen überwiegend Motorsteuergeräte produziert werden, aber auch Komponenten für Kraftstoffversorgung und Einspritzanlagen. ELCON wurde bei diesem Projekt mit umfassenden Aufgaben in den Bereichen Baumanagement, Technische Wartung, Instandhaltung, Reparatur und Erneuerung betraut.',
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
