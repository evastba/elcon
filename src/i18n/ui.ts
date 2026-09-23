/**
 * Mehrsprachigkeit der Website.
 *
 * Die deutsche Fassung liegt unter "/", die übrigen unter "/en/", "/ar/" und
 * "/zh/". Welche Sprache gilt, wird nicht durchgereicht, sondern an der
 * Adresse abgelesen: So muss keine Komponente eine zusätzliche Eigenschaft
 * entgegennehmen, und eine vergessene Weitergabe kann keine halb übersetzte
 * Seite erzeugen.
 *
 * Fließtexte stehen weiterhin in den Seiten selbst — hier stehen nur die
 * Bausteine, die auf jeder Seite auftauchen (Navigation, Fußzeile, Formular-
 * bausteine des Finders und der Rechtslayouts).
 */

export const LANGS = ['de', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'de';

/** Adresspräfix je Sprache; Deutsch liegt ohne Präfix in der Wurzel. */
const PRAEFIX: Record<Lang, string> = { de: '', en: '/en' };

/** Sprache aus der Adresse ableiten. Ohne bekanntes Präfix gilt Deutsch. */
export function getLang(url: URL | string): Lang {
  const pfad = typeof url === 'string' ? url : url.pathname;
  const treffer = pfad.match(/^\/(en)(\/|$)/);
  return treffer ? (treffer[1] as Lang) : 'de';
}

/**
 * Gegenstücke der Seiten in allen Sprachen.
 *
 * Die Adressen der übersetzten Fassungen sind lateinisch benannt
 * ("/ar/services/" statt einer arabischen Schreibung): Arabische und
 * chinesische Schriftzeichen müssten in der Adresse prozentkodiert werden
 * und wären damit weder lesbar noch gut zu teilen. Die Zuordnung hier ist
 * die einzige Stelle, an der die Fassungen verknüpft sind — der
 * Sprachumschalter und die hreflang-Angaben lesen sie aus.
 */
const SEITEN: ReadonlyArray<Record<Lang, string>> = [
  { de: '/', en: '/en/' },
  { de: '/leistungen/', en: '/en/services/' },
  { de: '/projekte/', en: '/en/projects/' },
  { de: '/unternehmen/', en: '/en/company/' },
  { de: '/kontakt/', en: '/en/contact/' },
  { de: '/impressum/', en: '/en/imprint/' },
  { de: '/datenschutz/', en: '/en/privacy/' },
];

/** Verzeichnis der Projektdetailseiten je Sprache. */
const PROJEKTBASIS: Record<Lang, string> = {
  de: '/projekte/',
  en: '/en/projects/',
};

export const projektBasis = (lang: Lang) => PROJEKTBASIS[lang];

const normalisiere = (pfad: string) => (pfad.endsWith('/') ? pfad : pfad + '/');

/**
 * Dieselbe Seite in einer anderen Sprache.
 *
 * Projektdetailseiten tragen in allen Sprachen denselben Slug; sie werden
 * deshalb über das Verzeichnis umgerechnet statt einzeln aufgeführt. Gibt es
 * kein Gegenstück, führt der Verweis auf die Startseite der Zielsprache —
 * ein Sprachwechsel soll nie ins Leere laufen.
 */
export function anderePfad(pfad: string, ziel: Lang): string {
  const p = normalisiere(pfad);

  for (const zeile of SEITEN) {
    if (LANGS.some((l) => zeile[l] === p)) return zeile[ziel];
  }

  for (const lang of LANGS) {
    const basis = PROJEKTBASIS[lang];
    if (p.startsWith(basis) && p.length > basis.length) {
      return PROJEKTBASIS[ziel] + p.slice(basis.length);
    }
  }

  return SEITEN[0][ziel];
}

/** Adresse eines Pfads in der jeweiligen Sprache, für Verweise im Markup. */
export function pfad(schluessel: string, lang: Lang): string {
  const zeile = SEITEN.find((z) => z.de === schluessel);
  return zeile ? zeile[lang] : schluessel;
}

/**
 * Anker innerhalb einer übersetzten Seite.
 *
 * Verweise der Fußzeile tragen deutsche Pfade mit Sprungmarke
 * ("/leistungen/#anlagentechnik"). Hier wird der Pfadteil in die Zielsprache
 * übersetzt und die Marke unverändert angehängt.
 */
export function pfadMitAnker(ziel: string, lang: Lang): string {
  const [basis, anker] = ziel.split('#');
  return pfad(basis, lang) + (anker ? '#' + anker : '');
}

/** Präfix einer Sprache, etwa für Verweise, die kein Gegenstück haben. */
export const sprachPraefix = (lang: Lang) => PRAEFIX[lang];

interface NavLink {
  href: string;
  label: string;
  sub?: { href: string; label: string }[];
}

export interface UiTexte {
  htmlLang: string;
  ogLocale: string;
  /** Leserichtung des Satzes. */
  dir: 'ltr' | 'rtl';
  /** Eigenname der Sprache, für den Sprachumschalter. */
  sprachname: string;
  /** Kürzel im Sprachumschalter. */
  sprachkuerzel: string;
  zumInhalt: string;
  nav: NavLink[];
  navLabel: string;
  menueOeffnen: string;
  zurStartseite: string;
  footerNavTitel: string;
  /** Erweiterte Fußzeile. */
  footer: {
    leistungen: string;
    leistungenLinks: { href: string; label: string }[];
    unternehmen: string;
    unternehmenLinks: { href: string; label: string }[];
    /** Verweis auf den Partnerabschnitt; erscheint nur, wenn dieser sichtbar ist. */
    partnerLink: { href: string; label: string };
    kontakt: string;
    cta: string;
    telefon: string;
    email: string;
    whatsapp: string;
    whatsappLink: string;
  };
  footerRechtliches: string;
  impressum: string;
  datenschutz: string;
  cookieEinstellungen: string;
  anrufen: string;
  schnellkontakt: string;
  startseite: string;
  brotkrumen: string;
  stand: string;
  /** Leistungsfinder */
  finder: {
    eyebrow: string;
    titel: string;
    intro: string;
    fortschritt: [string, string, string];
    frage1: string;
    frage2: string;
    frage3: string;
    ergebnisTitel: string;
    anfrageVorbereiten: string;
    vonVorn: string;
    zurueck: string;
    weiter: string;
    ergebnisAnzeigen: string;
    direkt: string;
    direktLink: string;
  };
  marqueeTitel: string;
  /** Google-Bewertungen. */
  bewertungen: {
    titel: string;
    intro: string;
    von: string;
    sterne: string;
    profil: string;
    quelle: string;
  };
  /** Ansprechpartner-Komponente. */
  kontaktperson: { eyebrow: string; titel: string; anrufen: string; schreiben: string; sprachen: string };
  /** Einordnung abgeschlossener Projekte der Unternehmenshistorie. */
  historisch: { ueberschrift: string; hinweis: string; hinweisGruppe: string; kurz: string };
  /** Kennzeichnung KI-generierter Motive, je nach Nutzungskontext. */
  bildhinweis: {
    symbolisch: string;
    personen: string;
    projekt: string;
    abschnitt: string;
  };
  cookie: {
    label: string;
    text: string;
    textLinkText: string;
    ablehnen: string;
    akzeptieren: string;
  };
}

export const UI: Record<Lang, UiTexte> = {
  de: {
    htmlLang: 'de',
    ogLocale: 'de_DE',
    dir: 'ltr',
    sprachname: 'Deutsch',
    sprachkuerzel: 'DE',
    zumInhalt: 'Zum Inhalt springen',
    navLabel: 'Hauptnavigation',
    menueOeffnen: 'Menü öffnen',
    zurStartseite: 'ELCON — zur Startseite',
    nav: [
      { href: '/leistungen/', label: 'Leistungen' },
      {
        href: '/projekte/',
        label: 'Projekte',
        sub: [
          { href: '/projekte/#generalunternehmer', label: 'Ausgewählte Projekte' },
          { href: '/projekte/#refVerzeichnis', label: 'Kundenübersicht' },
          { href: '/projekte/#kundenfeedback', label: 'Kundenfeedback' },
        ],
      },
      { href: '/unternehmen/', label: 'Unternehmen' },
      { href: '/kontakt/', label: 'Kontakt' },
    ],
    footerNavTitel: 'Navigation',
    footer: {
      leistungen: 'Leistungen',
      leistungenLinks: [
        { href: '/leistungen/#leistungsfelder', label: 'Elektrotechnik' },
        { href: '/leistungen/#leistungsfelder', label: 'Heizung, Klima, Lüftung, Sanitär' },
        { href: '/leistungen/#anlagentechnik', label: 'Gebäudeautomation und MSR' },
        { href: '/leistungen/#anlagentechnik', label: 'Brandschutz und Sicherheitstechnik' },
        { href: '/leistungen/#leistungsfelder', label: 'Projektmanagement und Consulting' },
      ],
      unternehmen: 'Unternehmen & Projekte',
      unternehmenLinks: [
        { href: '/unternehmen/', label: 'Unternehmen' },
        { href: '/#aktuelle-projekte', label: 'Aktuelle Projekte' },
        { href: '/projekte/', label: 'Alle Referenzprojekte' },
        { href: '/#projektablauf', label: 'Projektablauf' },
        { href: '/#leistungsfinder', label: 'Leistungsfinder' },
      ],
      partnerLink: { href: '/#partnerunternehmen', label: 'Partnerunternehmen' },
      kontakt: 'Kontakt',
      cta: 'Projekt besprechen',
      telefon: 'Telefon',
      email: 'E-Mail',
      whatsapp: 'WhatsApp',
      whatsappLink: 'Nachricht schreiben',
    },
    footerRechtliches: 'Rechtliches',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    cookieEinstellungen: 'Cookie-Einstellungen',
    anrufen: 'Anrufen',
    schnellkontakt: 'Schnellkontakt',
    startseite: 'Startseite',
    brotkrumen: 'Brotkrumennavigation',
    stand: 'Stand',
    finder: {
      eyebrow: 'In drei Schritten zur Anfrage',
      titel: 'Welche Leistung brauchen Sie?',
      intro: 'Sagen Sie uns kurz, worum es geht — wir zeigen Ihnen passende Referenzen und bereiten Ihre Anfrage vor.',
      fortschritt: ['Vorhaben', 'Gewerke', 'Stand'],
      frage1: 'Um was für ein Vorhaben geht es?',
      frage2: 'Welche Gewerke sollen wir übernehmen?',
      frage3: 'Wie weit ist das Vorhaben?',
      ergebnisTitel: 'Das passt zu Ihrem Vorhaben',
      anfrageVorbereiten: 'Anfrage vorbereiten',
      vonVorn: 'Von vorn beginnen',
      zurueck: 'Zurück',
      weiter: 'Weiter',
      ergebnisAnzeigen: 'Ergebnis anzeigen',
      direkt: 'Besser gleich schreiben?',
      direktLink: 'Direkt zum Anfrageformular',
    },
    marqueeTitel: 'Vertrauen von Unternehmen und Institutionen',
    bewertungen: {
      titel: 'Bewertungen bei Google',
      intro: 'Was Auftraggeber öffentlich über die Zusammenarbeit schreiben.',
      von: 'von',
      sterne: 'von 5 Sternen',
      profil: 'Alle Bewertungen bei Google ansehen',
      quelle: 'Quelle: Google-Unternehmensprofil. Die Bewertungen werden beim Erstellen der Seite abgerufen; beim Aufruf dieser Seite entsteht keine Verbindung zu Google.',
    },
    kontaktperson: {
      eyebrow: 'Ihr Ansprechpartner',
      titel: 'Wer Ihre Anfrage entgegennimmt',
      anrufen: 'Anrufen',
      schreiben: 'E-Mail schreiben',
      sprachen: 'Sprachen',
    },
    historisch: {
      ueberschrift: 'Projektbeispiele aus der Unternehmenshistorie',
      hinweis:
        'Historisches Referenzprojekt aus der internationalen Unternehmensgeschichte von ELCON. Die Angaben beziehen sich auf den jeweils genannten Ausführungszeitraum und stellen keine Aussage über eine gegenwärtige Tätigkeit oder Geschäftsbeziehung dar.',
      hinweisGruppe:
        'Abgeschlossene Referenzprojekte aus der internationalen Unternehmensgeschichte von ELCON. Die Angaben beziehen sich auf den jeweils genannten Ausführungszeitraum und stellen keine Aussage über eine gegenwärtige Tätigkeit oder Geschäftsbeziehung dar.',
      kurz: 'Historisches Referenzprojekt',
    },
    bildhinweis: {
      symbolisch: 'Symbolische Visualisierung – KI-generiert.',
      personen:
        'KI-generierte Visualisierung; keine Aufnahme eines konkreten ELCON-Projekts oder tatsächlicher ELCON-Mitarbeitender.',
      projekt:
        'Symbolische KI-Visualisierung – keine Aufnahme des beschriebenen Referenzprojekts.',
      abschnitt:
        'Die in diesem Abschnitt verwendeten Motive sind KI-generierte Visualisierungen und dienen der beispielhaften Darstellung der Leistungsbereiche. Sie zeigen keine konkreten Referenzprojekte oder tatsächlichen ELCON-Mitarbeitenden.',
    },
    cookie: {
      label: 'Cookie-Einstellungen',
      text: 'Diese Website verwendet Cookies bzw. vergleichbare Technologien, um die Nutzung der Seite anonymisiert auszuwerten und sie so zu verbessern. Sie können der Analyse zustimmen oder sie ablehnen. Details finden Sie in unserer ',
      textLinkText: 'Datenschutzerklärung',
      ablehnen: 'Ablehnen',
      akzeptieren: 'Akzeptieren',
    },
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    dir: 'ltr',
    sprachname: 'English',
    sprachkuerzel: 'EN',
    zumInhalt: 'Skip to content',
    navLabel: 'Main navigation',
    menueOeffnen: 'Open menu',
    zurStartseite: 'ELCON — back to the home page',
    nav: [
      { href: '/en/services/', label: 'Services' },
      {
        href: '/en/projects/',
        label: 'Projects',
        sub: [
          { href: '/en/projects/#selected-projects', label: 'Selected projects' },
          { href: '/en/projects/#client-directory', label: 'Client directory' },
          { href: '/en/projects/#client-feedback', label: 'Client feedback' },
        ],
      },
      { href: '/en/company/', label: 'Company' },
      { href: '/en/contact/', label: 'Contact' },
    ],
    footerNavTitel: 'Navigation',
    footer: {
      leistungen: 'Services',
      leistungenLinks: [
        { href: '/en/services/#leistungsfelder', label: 'Electrical engineering' },
        { href: '/en/services/#leistungsfelder', label: 'Heating, air conditioning, ventilation, plumbing' },
        { href: '/en/services/#anlagentechnik', label: 'Building automation and control' },
        { href: '/en/services/#anlagentechnik', label: 'Fire protection and security systems' },
        { href: '/en/services/#leistungsfelder', label: 'Project management and consulting' },
      ],
      unternehmen: 'Company & projects',
      unternehmenLinks: [
        { href: '/en/company/', label: 'Company' },
        { href: '/en/#aktuelle-projekte', label: 'Current projects' },
        { href: '/en/projects/', label: 'All reference projects' },
        { href: '/en/#projektablauf', label: 'How we work' },
        { href: '/en/#leistungsfinder', label: 'Service finder' },
      ],
      partnerLink: { href: '/en/#partnerunternehmen', label: 'Partner companies' },
      kontakt: 'Contact',
      cta: 'Discuss your project',
      telefon: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      whatsappLink: 'Send a message',
    },
    footerRechtliches: 'Legal',
    impressum: 'Legal notice',
    datenschutz: 'Privacy',
    cookieEinstellungen: 'Cookie settings',
    anrufen: 'Call us',
    schnellkontakt: 'Quick contact',
    startseite: 'Home',
    brotkrumen: 'Breadcrumb',
    stand: 'Last updated',
    finder: {
      eyebrow: 'Three steps to your enquiry',
      titel: 'Which service do you need?',
      intro: 'Tell us briefly what your project involves — we will show you matching references and prepare your enquiry.',
      fortschritt: ['Project', 'Trades', 'Stage'],
      frage1: 'What kind of project is it?',
      frage2: 'Which trades should we take on?',
      frage3: 'How far along is the project?',
      ergebnisTitel: 'This matches your project',
      anfrageVorbereiten: 'Prepare enquiry',
      vonVorn: 'Start over',
      zurueck: 'Back',
      weiter: 'Next',
      ergebnisAnzeigen: 'Show result',
      direkt: 'Prefer to write straight away?',
      direktLink: 'Go directly to the enquiry form',
    },
    marqueeTitel: 'Trusted by companies and institutions',
    bewertungen: {
      titel: 'Reviews on Google',
      intro: 'What clients write publicly about working with us.',
      von: 'by',
      sterne: 'out of 5 stars',
      profil: 'See all reviews on Google',
      quelle: 'Source: Google Business Profile. The reviews are retrieved when the site is built; visiting this page does not establish any connection to Google.',
    },
    kontaktperson: {
      eyebrow: 'Your contact',
      titel: 'Who will handle your enquiry',
      anrufen: 'Call',
      schreiben: 'Send an email',
      sprachen: 'Languages',
    },
    historisch: {
      ueberschrift: 'Project examples from our corporate history',
      hinweis:
        'Historical reference project from ELCON\u2019s international corporate history. The information relates to the stated period of execution and does not indicate any current activity or ongoing business relationship.',
      hinweisGruppe:
        'Completed reference projects from ELCON\u2019s international corporate history. The information relates to the period of execution stated in each case and does not indicate any current activity or ongoing business relationship.',
      kurz: 'Historical reference project',
    },
    bildhinweis: {
      symbolisch: 'Symbolic visualisation – AI-generated.',
      personen:
        'AI-generated visualisation; not an image of a specific ELCON project or actual ELCON employees.',
      projekt:
        'Symbolic AI-generated visualisation – not an image of the referenced project.',
      abschnitt:
        'The images used in this section are AI-generated visualisations and serve to illustrate our areas of expertise. They do not depict specific reference projects or actual ELCON employees.',
    },
    cookie: {
      label: 'Cookie settings',
      text: 'This website uses cookies and comparable technologies to analyse how the site is used, on an anonymised basis, and to improve it. You can accept or decline this analysis. Details are set out in our ',
      textLinkText: 'privacy policy',
      ablehnen: 'Decline',
      akzeptieren: 'Accept',
    },
  },
};

/** Kurzform für den Zugriff im Markup: `const t = useUi(Astro.url);` */
export function useUi(url: URL | string): UiTexte {
  return UI[getLang(url)];
}
