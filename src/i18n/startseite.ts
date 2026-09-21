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
  ru: {
    meta: {
      titel: 'ELCON — генеральный подрядчик по инженерным системам зданий',
      beschreibung:
        'Электротехника, инженерные системы и автоматизация под единой ответственностью — для промышленных, коммерческих и сложных объектов существующей застройки. Компания базируется в Германии и имеет международный проектный опыт с 1993 года.',
    },
    hero: {
      eyebrow: 'Генеральный подрядчик по инженерным системам зданий',
      h1: ['Сложные проекты', 'из одних рук', 'и более 30 лет опыта'],
      lead:
        'ELCON проектирует, монтирует и обслуживает инженерное оснащение промышленных и коммерческих зданий: электротехнику, отопление, кондиционирование, вентиляцию, сантехнику, а также КИПиА. Одна проектная команда координирует все разделы работ — в том числе без остановки производства.',
      vertrauen: 'База в Германии, международный проектный опыт.',
      ctaPrimaer: 'Обсудить проект',
      ctaSekundaer: 'Смотреть проекты',
      bildAlt: 'Современное коммерческое здание с инженерным оснащением',
    },
    kennzahlen: {
      eyebrow: 'ELCON в цифрах',
      werte: [
        { wert: '1993', label: 'самостоятельная деятельность как ELCON LED GmbH' },
        { wert: '30+', zaehler: 30, suffix: '+', label: 'лет проектного опыта' },
        { wert: '60+', zaehler: 60, suffix: '+', label: 'проектов в архиве компании' },
        { wert: '3', zaehler: 3, label: 'континента с проектным опытом' },
      ],
    },
    kompetenz: {
      eyebrow: 'Три направления. Один ответственный партнёр.',
      titel: 'Технические решения по всем ключевым разделам работ',
      intro:
        'От энергоснабжения и инженерных систем здания до автоматизации ELCON координирует сложные технические требования силами одной ответственной проектной команды.',
      alle: 'Смотреть все услуги',
      felder: [
        {
          titel: 'Электротехника и энергоснабжение',
          nutzen: 'От установки среднего напряжения до розетки — энергоснабжение, распределение и освещение по единому проекту.',
          begriffe: ['Среднее и низкое напряжение', 'Распределение энергии', 'Освещение', 'Сетевая инфраструктура', 'Системы связи'],
          href: '/leistungen/#leistungsfelder',
          icon: 'elektro',
        },
        {
          titel: 'Инженерные системы зданий',
          nutzen: 'Отопление, кондиционирование, вентиляция и сантехника — согласованное проектирование и монтаж, включая противопожарную защиту и координацию разделов.',
          begriffe: ['Отопление', 'Кондиционирование и вентиляция', 'Сантехника', 'Противопожарная защита', 'Координация разделов'],
          href: '/leistungen/#leistungsfelder',
          icon: 'tga',
        },
        {
          titel: 'Автоматизация, управление проектом и эксплуатация',
          nutzen: 'Управление, пусконаладка и сопровождение — чтобы установка не просто работала, а работала экономично в долгую.',
          begriffe: ['КИПиА и автоматизация зданий', 'Техническое проектирование', 'Управление проектом', 'Пусконаладка', 'Обслуживание и оптимизация'],
          href: '/leistungen/#anlagentechnik',
          icon: 'automation',
        },
      ],
    },
    projekte: {
      eyebrow: 'Текущие проекты',
      titel: 'Техническая компетенция без остановки производства',
      intro:
        'Избранные проекты показывают, как ELCON реализует технические требования в промышленности, на производстве и в сложных условиях существующей застройки.',
      alle: 'Смотреть все референс-проекты',
      kurzreferenz: 'Краткая справка',
    },
    warum: {
      eyebrow: 'Почему ELCON?',
      titel: 'Полная техническая ответственность и короткие пути решений',
      intro:
        'Сложные инженерные системы требуют ясного распределения ответственности. ELCON сочетает широту компетенций с личной ответственностью за проект и практичной реализацией.',
      vorteile: [
        {
          titel: 'Один контакт по всем разделам работ',
          text: 'ELCON координирует необходимые технические дисциплины и тем самым сокращает число стыков, которыми вам приходится управлять самостоятельно.',
          icon: 'ansprechpartner',
        },
        {
          titel: 'Короткие пути принятия решений',
          text: 'Личное сопровождение и практичные решения — без цепочек согласований крупных корпоративных структур.',
          icon: 'wege',
        },
        {
          titel: 'Опыт работы без остановки производства',
          text: 'Работы на производственных, коммерческих и действующих объектах, где доступность и согласованность определяют сроки.',
          icon: 'betrieb',
        },
        {
          titel: 'Проектирование, монтаж и сопровождение',
          text: 'Ответственность от проектирования через монтаж и пусконаладку до обслуживания и оптимизации.',
          icon: 'lebenszyklus',
        },
        {
          titel: 'Международный проектный опыт',
          text: 'Многоязычная проектная документация и межкультурный опыт из проектов в Европе, Центральной Азии и Восточной Африке — сегодня с базой в Германии и планами вплоть до Юго-Восточной Азии.',
          icon: 'international',
        },
      ],
    },
    ablauf: {
      eyebrow: 'Как мы работаем',
      titel: 'От первого запроса до надёжной эксплуатации',
      cta: 'Обсудить проект',
      schritte: [
        { titel: 'Первая беседа', text: 'Уточняем задачу, площадку, сроки и участвующие разделы работ.' },
        { titel: 'Техническая проверка', text: 'ELCON оценивает требования, имеющуюся документацию, стыки и возможные пути решения.' },
        { titel: 'Концепция, предложение и график', text: 'Объём работ, зоны ответственности, коммерческая основа и следующие шаги согласуются прозрачно.' },
        { titel: 'Проектирование и координация', text: 'Проектирование, техническое согласование, планирование материалов и персонала ведутся по всем разделам сразу.' },
        { titel: 'Монтаж и пусконаладка', text: 'Монтаж, испытания, пусконаладка и согласование с участниками проекта выполняются под единой ответственностью.' },
        { titel: 'Документация, обслуживание и оптимизация', text: 'После приёмки ELCON при необходимости сопровождает установку документацией, обслуживанием и техническим развитием.' },
      ],
    },
    finder: {
      eyebrow: 'Ваш замысел',
      titel: 'Какое техническое решение вам нужно?',
      intro:
        'Ответьте на три коротких вопроса. Подбор услуг соотнесёт ваш замысел с подходящими компетенциями и референсами ELCON.',
    },
    unternehmen: {
      eyebrow: 'ELCON сегодня',
      titel: 'Опыт ценен тогда, когда к нему есть личный доступ',
      text:
        'ELCON LED GmbH работает самостоятельно с 1993 года, головной офис находится в Лерте под Ганновером. Заказчик получает постоянного контактного специалиста, который сводит воедино технические и организационные стыки — вместо отдельного контакта для каждого раздела работ.',
      link: 'Подробнее об ELCON',
    },
    partner: {
      eyebrow: 'Партнёрские компании',
      titel: 'Техническая компетенция за пределами собственного дома',
      intro:
        'Для задач, выходящих за рамки собственных разделов работ, ELCON постоянно сотрудничает со специализированными компаниями.',
      sitzLabel: 'Расположение',
      websiteLabel: 'Сайт',
    },
  },
  fr: {
    meta: {
      titel: 'ELCON — entreprise générale en technique du bâtiment',
      beschreibung:
        'Électricité, technique du bâtiment et automatisation sous une seule responsabilité — pour l’industrie, le commerce et les bâtiments existants exigeants. Ancrée en Allemagne, avec une expérience internationale depuis 1993.',
    },
    hero: {
      eyebrow: 'Entreprise générale en technique du bâtiment',
      h1: ['Des projets complexes', 'd’une seule main', 'avec plus de 30 ans d’expérience'],
      lead:
        'ELCON conçoit, réalise et entretient les équipements techniques des bâtiments industriels et commerciaux : électricité, chauffage, climatisation, ventilation, sanitaire ainsi que mesure, commande et régulation. Une seule équipe coordonne les corps de métier — y compris en site occupé.',
      vertrauen: 'Ancrée en Allemagne, avec une expérience internationale des projets.',
      ctaPrimaer: 'Discuter de votre projet',
      ctaSekundaer: 'Voir les projets',
      bildAlt: 'Bâtiment commercial moderne équipé de technique du bâtiment',
    },
    kennzahlen: {
      eyebrow: 'ELCON en chiffres',
      werte: [
        { wert: '1993', label: 'indépendante sous le nom d’ELCON LED GmbH' },
        { wert: '30+', zaehler: 30, suffix: '+', label: 'ans d’expérience de projet' },
        { wert: '60+', zaehler: 60, suffix: '+', label: 'projets documentés dans nos archives' },
        { wert: '3', zaehler: 3, label: 'continents où nous avons réalisé des projets' },
      ],
    },
    kompetenz: {
      eyebrow: 'Trois domaines de compétence. Un partenaire responsable.',
      titel: 'Des solutions techniques pour tous les corps de métier déterminants',
      intro:
        'De l’alimentation électrique à l’automatisation en passant par la technique du bâtiment, ELCON coordonne des exigences techniques complexes au sein d’une seule équipe responsable.',
      alle: 'Voir toutes les prestations',
      felder: [
        {
          titel: 'Électrotechnique et énergie',
          nutzen: 'De l’installation moyenne tension à la prise — alimentation, distribution et éclairage issus d’une même étude.',
          begriffe: ['Moyenne et basse tension', 'Distribution d’énergie', 'Éclairage', 'Réseaux informatiques', 'Systèmes de communication'],
          href: '/leistungen/#leistungsfelder',
          icon: 'elektro',
        },
        {
          titel: 'Technique du bâtiment',
          nutzen: 'Chauffage, climatisation, ventilation et sanitaire étudiés et montés de façon coordonnée, protection incendie et coordination des corps de métier comprises.',
          begriffe: ['Chauffage', 'Climatisation et ventilation', 'Sanitaire', 'Protection incendie', 'Coordination des corps de métier'],
          href: '/leistungen/#leistungsfelder',
          icon: 'tga',
        },
        {
          titel: 'Automatisation, gestion de projet et exploitation',
          nutzen: 'Régulation, mise en service et suivi — pour que l’installation ne se contente pas de fonctionner, mais fonctionne durablement de manière économique.',
          begriffe: ['Régulation et automatisation du bâtiment', 'Études techniques', 'Pilotage de projet', 'Mise en service', 'Maintenance et optimisation'],
          href: '/leistungen/#anlagentechnik',
          icon: 'automation',
        },
      ],
    },
    projekte: {
      eyebrow: 'Projets en cours',
      titel: 'La compétence technique en site occupé',
      intro:
        'Une sélection de projets montre comment ELCON met en œuvre des exigences techniques dans l’industrie, la production et des bâtiments existants exigeants.',
      alle: 'Voir tous les projets de référence',
      kurzreferenz: 'Référence courte',
    },
    warum: {
      eyebrow: 'Pourquoi ELCON ?',
      titel: 'Une responsabilité technique globale et des circuits courts',
      intro:
        'Une technique du bâtiment complexe exige des responsabilités claires. ELCON allie l’étendue des compétences à une responsabilité de projet personnelle et à une mise en œuvre pragmatique.',
      vorteile: [
        {
          titel: 'Un interlocuteur pour tous les corps de métier',
          text: 'ELCON coordonne les disciplines techniques concernées et réduit ainsi le nombre d’interfaces que vous devez piloter vous-même.',
          icon: 'ansprechpartner',
        },
        {
          titel: 'Des décisions rapides',
          text: 'Un suivi personnel et des décisions pragmatiques — sans les chaînes de validation des grands groupes.',
          icon: 'wege',
        },
        {
          titel: 'L’expérience du site occupé',
          text: 'Des interventions en milieu de production, commercial et existant, où la disponibilité et la concertation décident du délai.',
          icon: 'betrieb',
        },
        {
          titel: 'Études, réalisation et suivi',
          text: 'Une responsabilité qui va de la conception au montage et à la mise en service, jusqu’à la maintenance et à l’optimisation.',
          icon: 'lebenszyklus',
        },
        {
          titel: 'Expérience internationale',
          text: 'Documentation de projet multilingue et expérience interculturelle issue de chantiers en Europe, en Asie centrale et en Afrique de l’Est — aujourd’hui depuis l’Allemagne, avec des projets à l’étude jusqu’en Asie du Sud-Est.',
          icon: 'international',
        },
      ],
    },
    ablauf: {
      eyebrow: 'Notre façon de travailler',
      titel: 'De la première demande à une exploitation fiable',
      cta: 'Discuter de votre projet',
      schritte: [
        { titel: 'Premier entretien', text: 'Nous clarifions la mission, le site, le calendrier et les corps de métier concernés.' },
        { titel: 'Analyse technique', text: 'ELCON évalue les exigences, les documents disponibles, les interfaces et les solutions envisageables.' },
        { titel: 'Concept, offre et planning', text: 'L’étendue des prestations, les responsabilités, les bases commerciales et les prochaines étapes sont arrêtées en toute transparence.' },
        { titel: 'Études et coordination', text: 'Les études, la concertation technique ainsi que la planification des matériaux et des équipes sont coordonnées entre tous les corps de métier.' },
        { titel: 'Réalisation et mise en service', text: 'Montage, contrôles, mise en service et concertation avec les intervenants relèvent d’une responsabilité clairement établie.' },
        { titel: 'Documentation, maintenance et optimisation', text: 'Après la réception, ELCON accompagne l’installation si besoin par la documentation, la maintenance et les évolutions techniques.' },
      ],
    },
    finder: {
      eyebrow: 'Votre projet',
      titel: 'De quelle solution technique avez-vous besoin ?',
      intro:
        'Répondez à trois questions courtes. La recherche de prestations associe votre projet aux compétences et aux références ELCON correspondantes.',
    },
    unternehmen: {
      eyebrow: 'ELCON aujourd’hui',
      titel: 'L’expérience a de la valeur lorsqu’elle reste accessible en personne',
      text:
        'ELCON LED GmbH est indépendante depuis 1993 et a son siège à Lehrte, près de Hanovre. Les maîtres d’ouvrage disposent d’un interlocuteur attitré qui réunit les interfaces techniques et organisationnelles — au lieu d’un contact différent pour chaque corps de métier.',
      link: 'En savoir plus sur ELCON',
    },
    partner: {
      eyebrow: 'Entreprises partenaires',
      titel: 'Une portée technique au-delà de nos propres métiers',
      intro:
        'Pour les missions qui dépassent nos propres corps de métier, ELCON collabore durablement avec des entreprises spécialisées.',
      sitzLabel: 'Siège',
      websiteLabel: 'Site web',
    },
  },
  ar: {
    meta: {
      titel: 'ELCON — مقاول عام لأنظمة المباني التقنية',
      beschreibung:
        'أنظمة كهربائية وميكانيكية وأتمتة تحت مسؤولية واحدة — للمنشآت الصناعية والتجارية والمباني القائمة ذات المتطلبات العالية. مقرّها ألمانيا ولها خبرة دولية في المشاريع منذ عام 1993.',
    },
    hero: {
      eyebrow: 'مقاول عام لأنظمة المباني التقنية',
      h1: ['مشاريع معقّدة', 'من مصدر واحد', 'بخبرة تتجاوز 30 عامًا'],
      lead:
        'تتولّى ELCON تصميم الأنظمة التقنية للمباني الصناعية والتجارية وتنفيذها وصيانتها: الكهرباء والتدفئة والتكييف والتهوية والصرف الصحي إضافة إلى أنظمة القياس والتحكّم والضبط. يتولّى فريق مشروع واحد تنسيق التخصّصات — بما في ذلك أثناء استمرار التشغيل.',
      vertrauen: 'مقرّها ألمانيا، وخبرتها في المشاريع دولية.',
      ctaPrimaer: 'ناقش مشروعك',
      ctaSekundaer: 'تصفّح المشاريع',
      bildAlt: 'مبنى تجاري حديث مزوّد بأنظمة المباني التقنية',
    },
    kennzahlen: {
      eyebrow: 'ELCON بالأرقام',
      werte: [
        { wert: '1993', label: 'مستقلّة باسم ELCON LED GmbH' },
        { wert: '30+', zaehler: 30, suffix: '+', label: 'عامًا من الخبرة في المشاريع' },
        { wert: '60+', zaehler: 60, suffix: '+', label: 'مشروعًا موثّقًا في أرشيف الشركة' },
        { wert: '3', zaehler: 3, label: 'قارّات فيها خبرة مشاريع' },
      ],
    },
    kompetenz: {
      eyebrow: 'ثلاثة مجالات خبرة. شريك واحد مسؤول.',
      titel: 'حلول تقنية تشمل كل التخصّصات الحاسمة',
      intro:
        'من التغذية بالطاقة مرورًا بأنظمة المباني وصولًا إلى الأتمتة، تنسّق ELCON المتطلّبات التقنية المعقّدة داخل فريق مشروع واحد مسؤول.',
      alle: 'عرض جميع الخدمات',
      felder: [
        {
          titel: 'الهندسة الكهربائية والطاقة',
          nutzen: 'من محطّة الجهد المتوسّط حتى المقبس — التغذية والتوزيع والإنارة ضمن تصميم واحد.',
          begriffe: ['الجهد المتوسّط والمنخفض', 'توزيع الطاقة', 'الإنارة', 'شبكات البيانات', 'أنظمة الاتصالات'],
          href: '/leistungen/#leistungsfelder',
          icon: 'elektro',
        },
        {
          titel: 'أنظمة المباني التقنية',
          nutzen: 'تصميم وتركيب متناسق للتدفئة والتكييف والتهوية والصرف الصحي، بما في ذلك الحماية من الحريق وتنسيق التخصّصات.',
          begriffe: ['التدفئة', 'التكييف والتهوية', 'الصرف الصحي', 'الحماية من الحريق', 'تنسيق التخصّصات'],
          href: '/leistungen/#leistungsfelder',
          icon: 'tga',
        },
        {
          titel: 'الأتمتة وإدارة المشاريع والتشغيل',
          nutzen: 'التحكّم والتشغيل التجريبي والمتابعة — كي لا تعمل المنشأة فحسب، بل تعمل باقتصادية على المدى الطويل.',
          begriffe: ['أنظمة التحكّم وأتمتة المباني', 'التصميم التقني', 'إدارة المشروع', 'التشغيل التجريبي', 'الصيانة والتحسين'],
          href: '/leistungen/#anlagentechnik',
          icon: 'automation',
        },
      ],
    },
    projekte: {
      eyebrow: 'المشاريع الحالية',
      titel: 'كفاءة تقنية أثناء استمرار التشغيل',
      intro:
        'تُظهر مشاريع مختارة كيف تنفّذ ELCON المتطلّبات التقنية في الصناعة والإنتاج وفي المباني القائمة ذات المتطلّبات العالية.',
      alle: 'عرض جميع المشاريع المرجعية',
      kurzreferenz: 'مرجع موجز',
    },
    warum: {
      eyebrow: 'لماذا ELCON؟',
      titel: 'مسؤولية تقنية شاملة وقرارات سريعة',
      intro:
        'تتطلّب أنظمة المباني المعقّدة توزيعًا واضحًا للمسؤوليات. تجمع ELCON بين اتّساع الخبرة والمسؤولية الشخصية عن المشروع والتنفيذ العملي.',
      vorteile: [
        {
          titel: 'جهة اتصال واحدة لجميع التخصّصات',
          text: 'تنسّق ELCON التخصّصات التقنية المعنية، وتقلّل بذلك عدد نقاط التداخل التي عليك إدارتها بنفسك.',
          icon: 'ansprechpartner',
        },
        {
          titel: 'قرارات سريعة',
          text: 'متابعة شخصية وقرارات عملية — دون سلاسل الموافقات في الهياكل المؤسسية الكبيرة.',
          icon: 'wege',
        },
        {
          titel: 'خبرة في العمل أثناء التشغيل',
          text: 'أعمال في بيئات إنتاجية وتجارية وقائمة، حيث تحدّد الجاهزية والتنسيق الموعد النهائي.',
          icon: 'betrieb',
        },
        {
          titel: 'التصميم والتنفيذ والمتابعة',
          text: 'مسؤولية تمتدّ من التصميم مرورًا بالتركيب والتشغيل التجريبي وصولًا إلى الصيانة والتحسين.',
          icon: 'lebenszyklus',
        },
        {
          titel: 'خبرة دولية في المشاريع',
          text: 'وثائق مشاريع متعدّدة اللغات وخبرة بين الثقافات من مشاريع في أوروبا وآسيا الوسطى وشرق أفريقيا — واليوم انطلاقًا من ألمانيا، مع تخطيط يمتدّ حتى جنوب شرق آسيا.',
          icon: 'international',
        },
      ],
    },
    ablauf: {
      eyebrow: 'كيف نعمل',
      titel: 'من أول طلب إلى تشغيل موثوق',
      cta: 'ناقش مشروعك',
      schritte: [
        { titel: 'المحادثة الأولى', text: 'نوضّح المهمّة والموقع والإطار الزمني والتخصّصات المعنيّة.' },
        { titel: 'الفحص التقني', text: 'تقيّم ELCON المتطلّبات والوثائق المتاحة ونقاط التداخل والحلول الممكنة.' },
        { titel: 'التصوّر والعرض والجدول الزمني', text: 'يُتّفق بشفافية على نطاق الأعمال والمسؤوليات والأساس التجاري والخطوات التالية.' },
        { titel: 'التصميم والتنسيق', text: 'يجري تنسيق التصميم والتوافق التقني وتخطيط المواد والطواقم عبر جميع التخصّصات.' },
        { titel: 'التنفيذ والتشغيل التجريبي', text: 'يتمّ التركيب والفحص والتشغيل التجريبي والتنسيق مع أطراف المشروع ضمن مسؤولية واحدة واضحة.' },
        { titel: 'التوثيق والصيانة والتحسين', text: 'بعد التسليم ترافق ELCON المنشأة عند الحاجة بالتوثيق والصيانة والتطوير التقني.' },
      ],
    },
    finder: {
      eyebrow: 'مشروعك',
      titel: 'ما الحلّ التقني الذي تحتاجه؟',
      intro:
        'أجب عن ثلاثة أسئلة قصيرة. يربط دليل الخدمات مشروعك بما يناسبه من كفاءات ELCON ومشاريعها المرجعية.',
    },
    unternehmen: {
      eyebrow: 'ELCON اليوم',
      titel: 'تكتسب الخبرة قيمتها حين تبقى متاحة شخصيًا',
      text:
        'تعمل ELCON LED GmbH بصورة مستقلّة منذ عام 1993 ومقرّها في ليرتِه قرب هانوفر. يحصل أصحاب المشاريع على جهة اتصال ثابتة تجمع نقاط التداخل التقنية والتنظيمية — بدلًا من جهة مختلفة لكل تخصّص.',
      link: 'اعرف المزيد عن ELCON',
    },
    partner: {
      eyebrow: 'الشركات الشريكة',
      titel: 'امتداد تقني يتجاوز حدود الشركة',
      intro:
        'في المهام التي تتجاوز تخصّصاتنا، تتعاون ELCON بشكل دائم مع شركات متخصّصة.',
      sitzLabel: 'المقرّ',
      websiteLabel: 'الموقع الإلكتروني',
    },
  },
  zh: {
    meta: {
      titel: 'ELCON — 建筑设备技术总承包商',
      beschreibung:
        '电气、楼宇与自动化技术，统一承担责任 — 面向工业、商业及要求严苛的既有建筑项目。扎根德国，拥有自 1993 年以来的国际项目经验。',
    },
    hero: {
      eyebrow: '建筑设备技术总承包商',
      h1: ['复杂项目', '一站式承担', '逾 30 年专业经验'],
      lead:
        'ELCON 为工业与商业建筑规划、建造并维护其技术设备：电气工程、供暖、空调、通风、卫浴以及测量、控制与调节技术。一个项目团队统筹各专业工程 — 即使在不停产的情况下也是如此。',
      vertrauen: '扎根德国，拥有丰富的国际项目经验。',
      ctaPrimaer: '洽谈项目',
      ctaSekundaer: '查看项目',
      bildAlt: '配备技术设备的现代商业建筑',
    },
    kennzahlen: {
      eyebrow: '数字中的 ELCON',
      werte: [
        { wert: '1993', label: '以 ELCON LED GmbH 独立运营' },
        { wert: '30+', zaehler: 30, suffix: '+', label: '年项目经验' },
        { wert: '60+', zaehler: 60, suffix: '+', label: '项档案在册的项目' },
        { wert: '3', zaehler: 3, label: '个大洲的项目经验' },
      ],
    },
    kompetenz: {
      eyebrow: '三大能力领域。一个负责到底的伙伴。',
      titel: '覆盖各关键专业工程的技术方案',
      intro:
        '从供电、楼宇技术到自动化，ELCON 在一个负责到底的项目团队中统筹复杂的技术要求。',
      alle: '查看全部服务',
      felder: [
        {
          titel: '电气工程与能源',
          nutzen: '从中压设备到插座 — 供电、配电与照明出自同一套规划。',
          begriffe: ['中压与低压', '配电', '照明', '网络技术', '通信系统'],
          href: '/leistungen/#leistungsfelder',
          icon: 'elektro',
        },
        {
          titel: '建筑设备技术',
          nutzen: '供暖、空调、通风与卫浴协调规划并安装，含消防与各专业工程的协同。',
          begriffe: ['供暖', '空调与通风', '卫浴', '消防', '专业工程协同'],
          href: '/leistungen/#leistungsfelder',
          icon: 'tga',
        },
        {
          titel: '自动化、项目管理与运行',
          nutzen: '控制、调试与运维 — 让设备不仅能运转，而且长期经济地运转。',
          begriffe: ['测控与楼宇自动化', '技术规划', '项目管控', '调试', '维护与优化'],
          href: '/leistungen/#anlagentechnik',
          icon: 'automation',
        },
      ],
    },
    projekte: {
      eyebrow: '当前项目',
      titel: '不停产条件下的技术能力',
      intro:
        '精选项目展示 ELCON 如何在工业、生产及要求严苛的既有环境中落实技术要求。',
      alle: '查看全部参考项目',
      kurzreferenz: '简要案例',
    },
    warum: {
      eyebrow: '为什么选择 ELCON？',
      titel: '技术总体责任，决策路径短',
      intro:
        '复杂的楼宇技术需要明确的责任归属。ELCON 将专业广度、个人化的项目责任与务实的落实结合在一起。',
      vorteile: [
        {
          titel: '一位联系人贯穿所有专业工程',
          text: 'ELCON 统筹相关技术专业，从而减少您需要自行管理的接口。',
          icon: 'ansprechpartner',
        },
        {
          titel: '决策路径短',
          text: '个人化的服务与务实的决策 — 没有大型集团结构中的层层协调。',
          icon: 'wege',
        },
        {
          titel: '不停产施工的经验',
          text: '在生产、商业及既有环境中作业，可用性与协调在这些场合决定工期。',
          icon: 'betrieb',
        },
        {
          titel: '规划、施工与运维',
          text: '从设计、安装、调试直至维护与优化，全程承担责任。',
          icon: 'lebenszyklus',
        },
        {
          titel: '国际项目经验',
          text: '多语言的项目文档，以及来自欧洲、中亚和东非项目的跨文化经验 — 如今以德国为基地，规划已延伸至东南亚。',
          icon: 'international',
        },
      ],
    },
    ablauf: {
      eyebrow: '我们的工作方式',
      titel: '从首次询价到可靠运行',
      cta: '洽谈项目',
      schritte: [
        { titel: '初次沟通', text: '我们明确任务内容、地点、时间范围以及涉及的专业工程。' },
        { titel: '技术评估', text: 'ELCON 评估各项要求、现有资料、接口以及可行的解决路径。' },
        { titel: '方案、报价与进度计划', text: '服务范围、责任划分、商务基础与后续步骤都会透明地协商确定。' },
        { titel: '设计与协调', text: '规划、技术协调以及材料与人员安排会跨专业统筹进行。' },
        { titel: '施工与调试', text: '安装、检验、调试以及与各参与方的协调，均在明确的责任下完成。' },
        { titel: '文档、维护与优化', text: '验收之后，ELCON 可按需继续提供文档、维护与技术改进。' },
      ],
    },
    finder: {
      eyebrow: '您的计划',
      titel: '您需要哪种技术方案？',
      intro:
        '回答三个简短的问题。服务查询会把您的计划与相应的 ELCON 能力和参考项目对应起来。',
    },
    unternehmen: {
      eyebrow: '今天的 ELCON',
      titel: '经验之所以宝贵，在于随时有人可以联系',
      text:
        'ELCON LED GmbH 自 1993 年起独立运营，总部位于汉诺威附近的莱尔特。委托方将得到一位固定联系人，由其统合技术与组织层面的各项接口 — 而不是每个专业工程各找一人。',
      link: '进一步了解 ELCON',
    },
    partner: {
      eyebrow: '合作企业',
      titel: '技术能力超越自有范围',
      intro:
        '对于超出自有专业工程范围的任务，ELCON 与专业化企业保持长期合作。',
      sitzLabel: '所在地',
      websiteLabel: '网站',
    },
  },
};
