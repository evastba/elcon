/**
 * Inhalte der Startseitenabschnitte, deutsch und englisch.
 *
 * Die Startseite besteht aus neun Abschnitten mit je eigener Aufgabe in der
 * Vertriebsdramaturgie. Ihre Texte stehen hier und nicht im Markup: Sonst
 * müsste jede Formulierung zweimal gepflegt werden, und die Fassungen liefen
 * mit der Zeit auseinander.
 *
 * Grundsatz für alle Angaben: Nur, was aus dem vorhandenen Datenbestand oder
 * den Unterlagen des Auftraggebers belegt ist. Keine Superlative, keine
 * Gegenwartsversprechen ohne Beleg.
 */

import type { Lang } from './ui';

export interface Kennzahl {
  /** Zahl oder Kernbegriff. */
  wert: string;
  /** Zielwert für die Zähleranimation; ohne Angabe wird nicht animiert. */
  zaehler?: number;
  suffix?: string;
  label: string;
}

export interface Kompetenzfeld {
  titel: string;
  nutzen: string;
  /** Höchstens fünf Begriffe. */
  begriffe: string[];
  /** Ziel auf der Leistungsseite. */
  href: string;
  /** Schlüssel des Symbols, siehe Kompetenzfelder.astro. */
  icon: 'elektro' | 'tga' | 'automation';
}

export interface Vorteil {
  titel: string;
  text: string;
  icon: 'ansprechpartner' | 'wege' | 'betrieb' | 'lebenszyklus' | 'international';
}

export interface Schritt {
  titel: string;
  text: string;
}

export interface Startseite {
  meta: { titel: string; beschreibung: string };
  hero: {
    eyebrow: string;
    h1: string[];
    lead: string;
    vertrauen: string;
    ctaPrimaer: string;
    ctaSekundaer: string;
    bildAlt: string;
  };
  kennzahlen: { eyebrow: string; werte: Kennzahl[] };
  kompetenz: { eyebrow: string; titel: string; intro: string; felder: Kompetenzfeld[]; alle: string };
  projekte: {
    eyebrow: string;
    titel: string;
    intro: string;
    alle: string;
    kurzreferenz: string;
  };
  warum: { eyebrow: string; titel: string; intro: string; vorteile: Vorteil[] };
  ablauf: { eyebrow: string; titel: string; schritte: Schritt[]; cta: string };
  finder: { eyebrow: string; titel: string; intro: string };
  unternehmen: { eyebrow: string; titel: string; text: string; link: string };
  partner: {
    eyebrow: string;
    titel: string;
    intro: string;
    sitzLabel: string;
    websiteLabel: string;
  };
}

export const STARTSEITE: Record<Lang, Startseite> = {
  de: {
    meta: {
      titel: 'ELCON — Generalunternehmer für technische Gebäudeausrüstung',
      beschreibung:
        'Elektrotechnik, Gebäudetechnik und Automation aus einer Verantwortung — für Industrie, Gewerbe und Bestandsprojekte. In Deutschland verankert, international projekterfahren, seit 1993.',
    },
    hero: {
      eyebrow: 'Generalunternehmer für technische Gebäudeausrüstung',
      h1: ['Komplexe Projekte', 'aus einer Hand', 'mit 30+ Jahren Expertise'],
      lead:
        'ELCON plant, baut und betreut die technische Ausrüstung von Industrie- und Gewerbebauten: Elektrotechnik, Heizung, Klima, Lüftung, Sanitär sowie Mess-, Steuer- und Regeltechnik. Ein Projektteam koordiniert die Gewerke — auch im laufenden Betrieb.',
      vertrauen: 'In Deutschland verankert mit internationaler Projekterfahrung.',
      ctaPrimaer: 'Projekt besprechen',
      ctaSekundaer: 'Projekte ansehen',
      bildAlt: 'Modernes Gewerbegebäude mit technischer Gebäudeausrüstung',
    },
    kennzahlen: {
      eyebrow: 'ELCON in Zahlen',
      werte: [
        { wert: '1993', label: 'eigenständig als ELCON LED GmbH' },
        { wert: '30+', zaehler: 30, suffix: '+', label: 'Jahre Projekterfahrung' },
        { wert: '60+', zaehler: 60, suffix: '+', label: 'dokumentierte Projekte im Firmenarchiv' },
        { wert: '3', zaehler: 3, label: 'Kontinente mit Projekterfahrung' },
      ],
    },
    kompetenz: {
      eyebrow: 'Drei Kompetenzfelder. Ein verantwortlicher Partner.',
      titel: 'Technische Lösungen über alle entscheidenden Gewerke',
      intro:
        'Von der Energieversorgung über die Gebäudetechnik bis zur Automation koordiniert ELCON komplexe technische Anforderungen in einem verantwortlichen Projektteam.',
      alle: 'Alle Leistungen ansehen',
      felder: [
        {
          titel: 'Elektrotechnik und Energie',
          nutzen:
            'Von der Mittelspannungsanlage bis zur Steckdose — Energieversorgung, Verteilung und Beleuchtung aus einer Planung.',
          begriffe: ['Mittel- und Niederspannung', 'Energieverteilung', 'Beleuchtung', 'Netzwerktechnik', 'Kommunikationssysteme'],
          href: '/leistungen/#leistungsfelder',
          icon: 'elektro',
        },
        {
          titel: 'Technische Gebäudeausrüstung',
          nutzen:
            'Heizung, Klima, Lüftung und Sanitär abgestimmt geplant und montiert, inklusive Brandschutz und Gewerkekoordination.',
          begriffe: ['Heizung', 'Klima und Lüftung', 'Sanitär', 'Brandschutz', 'Gewerkekoordination'],
          href: '/leistungen/#leistungsfelder',
          icon: 'tga',
        },
        {
          titel: 'Automation, Projektmanagement und Betrieb',
          nutzen:
            'Steuerung, Inbetriebnahme und Betreuung — damit die Anlage nicht nur läuft, sondern dauerhaft wirtschaftlich läuft.',
          begriffe: ['MSR- und Gebäudeautomation', 'Technische Planung', 'Projektsteuerung', 'Inbetriebnahme', 'Wartung und Optimierung'],
          href: '/leistungen/#anlagentechnik',
          icon: 'automation',
        },
      ],
    },
    projekte: {
      eyebrow: 'Aktuelle Projekte',
      titel: 'Technische Kompetenz im laufenden Betrieb',
      intro:
        'Ausgewählte Projekte zeigen, wie ELCON technische Anforderungen in Industrie, Produktion und anspruchsvollen Bestandsumgebungen umsetzt.',
      alle: 'Alle Referenzprojekte ansehen',
      kurzreferenz: 'Kurzreferenz',
    },
    warum: {
      eyebrow: 'Warum ELCON?',
      titel: 'Technische Gesamtverantwortung mit kurzen Wegen',
      intro:
        'Komplexe Gebäudetechnik braucht klare Zuständigkeiten. ELCON verbindet fachliche Breite mit persönlicher Projektverantwortung und pragmatischer Umsetzung.',
      vorteile: [
        {
          titel: 'Ein Ansprechpartner über alle Gewerke',
          text: 'ELCON koordiniert die relevanten technischen Disziplinen und reduziert damit die Schnittstellen, die Sie selbst steuern müssen.',
          icon: 'ansprechpartner',
        },
        {
          titel: 'Kurze Entscheidungswege',
          text: 'Persönliche Betreuung und pragmatische Entscheidungen — ohne die Abstimmungsketten großer Konzernstrukturen.',
          icon: 'wege',
        },
        {
          titel: 'Erfahrung im laufenden Betrieb',
          text: 'Arbeiten in Produktions-, Gewerbe- und Bestandsumgebungen, in denen Verfügbarkeit und Abstimmung über den Termin entscheiden.',
          icon: 'betrieb',
        },
        {
          titel: 'Planung, Ausführung und Betreuung',
          text: 'Verantwortung von der Projektierung über Montage und Inbetriebnahme bis zu Wartung und Optimierung.',
          icon: 'lebenszyklus',
        },
        {
          titel: 'Internationale Projekterfahrung',
          text: 'Mehrsprachige Projektdokumentation und interkulturelle Erfahrung aus Vorhaben in Europa, Zentralasien und Ostafrika — heute von Deutschland aus, mit Planungen bis nach Südostasien.',
          icon: 'international',
        },
      ],
    },
    ablauf: {
      eyebrow: 'So arbeiten wir',
      titel: 'Von der ersten Anfrage bis zum zuverlässigen Betrieb',
      cta: 'Projekt besprechen',
      schritte: [
        { titel: 'Erstgespräch', text: 'Wir klären Aufgabenstellung, Standort, Zeitrahmen und beteiligte Gewerke.' },
        { titel: 'Technische Prüfung', text: 'ELCON bewertet Anforderungen, vorhandene Unterlagen, Schnittstellen und mögliche Lösungswege.' },
        { titel: 'Konzept, Angebot und Terminplan', text: 'Leistungsumfang, Verantwortlichkeiten, kaufmännische Grundlage und nächste Schritte werden transparent abgestimmt.' },
        { titel: 'Projektierung und Koordination', text: 'Planung, technische Abstimmung sowie Material- und Einsatzplanung werden gewerkeübergreifend koordiniert.' },
        { titel: 'Ausführung und Inbetriebnahme', text: 'Montage, Prüfung, Inbetriebnahme und Abstimmung mit den Projektbeteiligten erfolgen aus einer klaren Verantwortung.' },
        { titel: 'Dokumentation, Wartung und Optimierung', text: 'Nach der Abnahme begleitet ELCON die Anlage bei Bedarf mit Dokumentation, Wartung und technischer Weiterentwicklung.' },
      ],
    },
    finder: {
      eyebrow: 'Ihr Vorhaben',
      titel: 'Welche technische Lösung benötigen Sie?',
      intro:
        'Beantworten Sie drei kurze Fragen. Der Leistungsfinder ordnet Ihr Vorhaben den passenden ELCON-Kompetenzen und Referenzen zu.',
    },
    unternehmen: {
      eyebrow: 'ELCON heute',
      titel: 'Erfahrung ist wertvoll, wenn sie persönlich verfügbar bleibt',
      text:
        'Die ELCON LED GmbH ist seit 1993 eigenständig tätig und hat ihren Sitz in Lehrte bei Hannover. Auftraggeber erhalten einen festen Kontakt, der technische und organisatorische Schnittstellen zusammenführt — statt für jedes Gewerk einen anderen.',
      link: 'Mehr über ELCON erfahren',
    },
    partner: {
      eyebrow: 'Partnerunternehmen',
      titel: 'Technische Reichweite über das eigene Haus hinaus',
      intro:
        'Für Aufgaben, die über die eigenen Gewerke hinausgehen, arbeitet ELCON mit spezialisierten Unternehmen dauerhaft zusammen.',
      sitzLabel: 'Sitz',
      websiteLabel: 'Website',
    },
  },

  en: {
    meta: {
      titel: 'ELCON — main contractor for building services engineering',
      beschreibung:
        'Electrical, mechanical and automation systems under one responsibility — for industrial, commercial and existing-building projects. Rooted in Germany, internationally experienced, since 1993.',
    },
    hero: {
      eyebrow: 'Main contractor for building services engineering',
      h1: ['Complex projects', 'from a single source', 'with 30+ years of expertise'],
      lead:
        'ELCON designs, builds and maintains the technical services of industrial and commercial buildings: electrical installations, heating, air conditioning, ventilation, plumbing and control technology. One project team coordinates the trades — including during ongoing operation.',
      vertrauen: 'Rooted in Germany, with international project experience.',
      ctaPrimaer: 'Discuss your project',
      ctaSekundaer: 'View projects',
      bildAlt: 'Modern commercial building with technical building services',
    },
    kennzahlen: {
      eyebrow: 'ELCON in figures',
      werte: [
        { wert: '1993', label: 'independent as ELCON LED GmbH' },
        { wert: '30+', zaehler: 30, suffix: '+', label: 'years of project experience' },
        { wert: '60+', zaehler: 60, suffix: '+', label: 'documented projects in the company archive' },
        { wert: '3', zaehler: 3, label: 'continents with project experience' },
      ],
    },
    kompetenz: {
      eyebrow: 'Three areas of expertise. One responsible partner.',
      titel: 'Technical solutions across every decisive trade',
      intro:
        'From power supply through building services to automation, ELCON coordinates complex technical requirements within one responsible project team.',
      alle: 'View all services',
      felder: [
        {
          titel: 'Electrical engineering and power',
          nutzen:
            'From medium-voltage switchgear to the socket outlet — power supply, distribution and lighting from a single design.',
          begriffe: ['Medium and low voltage', 'Power distribution', 'Lighting', 'Network technology', 'Communication systems'],
          href: '/leistungen/#leistungsfelder',
          icon: 'elektro',
        },
        {
          titel: 'Mechanical building services',
          nutzen:
            'Heating, air conditioning, ventilation and plumbing designed and installed in step with one another, including fire protection and trade coordination.',
          begriffe: ['Heating', 'Air conditioning and ventilation', 'Plumbing', 'Fire protection', 'Trade coordination'],
          href: '/leistungen/#leistungsfelder',
          icon: 'tga',
        },
        {
          titel: 'Automation, project management and operation',
          nutzen:
            'Control, commissioning and support — so the installation does not merely run, but runs economically over the long term.',
          begriffe: ['Instrumentation and building automation', 'Technical design', 'Project control', 'Commissioning', 'Servicing and optimisation'],
          href: '/leistungen/#anlagentechnik',
          icon: 'automation',
        },
      ],
    },
    projekte: {
      eyebrow: 'Current projects',
      titel: 'Technical capability in live environments',
      intro:
        'Selected projects show how ELCON delivers technical requirements in industry, production and demanding existing-building environments.',
      alle: 'View all reference projects',
      kurzreferenz: 'Short reference',
    },
    warum: {
      eyebrow: 'Why ELCON?',
      titel: 'Overall technical responsibility with short routes',
      intro:
        'Complex building services need clear responsibilities. ELCON combines technical breadth with personal project ownership and pragmatic delivery.',
      vorteile: [
        {
          titel: 'One contact across every trade',
          text: 'ELCON coordinates the relevant technical disciplines and reduces the number of interfaces you have to manage yourself.',
          icon: 'ansprechpartner',
        },
        {
          titel: 'Short decision routes',
          text: 'Personal support and pragmatic decisions — without the approval chains of large corporate structures.',
          icon: 'wege',
        },
        {
          titel: 'Experience in live environments',
          text: 'Work in production, commercial and existing-building environments where availability and coordination determine the deadline.',
          icon: 'betrieb',
        },
        {
          titel: 'Design, delivery and support',
          text: 'Responsibility from engineering through installation and commissioning to servicing and optimisation.',
          icon: 'lebenszyklus',
        },
        {
          titel: 'International project experience',
          text: 'Multilingual project documentation and cross-cultural experience from projects in Europe, Central Asia and East Africa — today from a base in Germany, with planning reaching into South-East Asia.',
          icon: 'international',
        },
      ],
    },
    ablauf: {
      eyebrow: 'How we work',
      titel: 'From the first enquiry to reliable operation',
      cta: 'Discuss your project',
      schritte: [
        { titel: 'Initial discussion', text: 'We clarify the task, the location, the timescale and the trades involved.' },
        { titel: 'Technical review', text: 'ELCON assesses the requirements, the available documents, the interfaces and possible approaches.' },
        { titel: 'Concept, quotation and schedule', text: 'Scope of work, responsibilities, commercial basis and next steps are agreed transparently.' },
        { titel: 'Engineering and coordination', text: 'Design, technical coordination and the planning of materials and labour are managed across all trades.' },
        { titel: 'Delivery and commissioning', text: 'Installation, testing, commissioning and coordination with all parties take place under one clear responsibility.' },
        { titel: 'Documentation, servicing and optimisation', text: 'After handover, ELCON supports the installation as required with documentation, servicing and technical development.' },
      ],
    },
    finder: {
      eyebrow: 'Your project',
      titel: 'Which technical solution do you need?',
      intro:
        'Answer three short questions. The service finder matches your project to the relevant ELCON capabilities and references.',
    },
    unternehmen: {
      eyebrow: 'ELCON today',
      titel: 'Experience is valuable when it stays personally available',
      text:
        'ELCON LED GmbH has operated independently since 1993 and is based in Lehrte near Hannover. Clients get one dedicated contact who brings the technical and organisational interfaces together — rather than a different one for every trade.',
      link: 'More about ELCON',
    },
    partner: {
      eyebrow: 'Partner companies',
      titel: 'Technical reach beyond our own trades',
      intro:
        'For work that goes beyond our own trades, ELCON cooperates with specialised companies on a lasting basis.',
      sitzLabel: 'Based in',
      websiteLabel: 'Website',
    },
  },
};
