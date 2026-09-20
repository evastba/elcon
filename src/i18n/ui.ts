/**
 * Zweisprachigkeit der Website.
 *
 * Die deutsche Fassung liegt unter "/", die englische unter "/en/". Welche
 * Sprache gilt, wird nicht durchgereicht, sondern an der Adresse abgelesen:
 * So muss keine Komponente eine zusätzliche Eigenschaft entgegennehmen, und
 * eine vergessene Weitergabe kann keine halb übersetzte Seite erzeugen.
 *
 * Fließtexte stehen weiterhin in den Seiten selbst — hier stehen nur die
 * Bausteine, die auf jeder Seite auftauchen (Navigation, Fußzeile, Formular-
 * bausteine des Finders und der Rechtslayouts).
 */

export const LANGS = ['de', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'de';

/** Sprache aus der Adresse ableiten. Alles unterhalb von /en/ ist englisch. */
export function getLang(url: URL | string): Lang {
  const pfad = typeof url === 'string' ? url : url.pathname;
  return /^\/en(\/|$)/.test(pfad) ? 'en' : 'de';
}

/**
 * Gegenstücke der Seiten in beiden Sprachen.
 *
 * Die englischen Adressen sind bewusst englisch benannt ("/en/services/" statt
 * "/en/leistungen/"): Für englischsprachige Besucher und für Suchmaschinen ist
 * das die sprechende Form. Die Zuordnung hier ist die einzige Stelle, an der
 * beide Fassungen verknüpft sind — der Sprachumschalter und die
 * hreflang-Angaben lesen sie aus.
 */
const SEITENPAARE: ReadonlyArray<readonly [string, string]> = [
  ['/', '/en/'],
  ['/leistungen/', '/en/services/'],
  ['/projekte/', '/en/projects/'],
  ['/unternehmen/', '/en/company/'],
  ['/kontakt/', '/en/contact/'],
  ['/impressum/', '/en/imprint/'],
  ['/datenschutz/', '/en/privacy/'],
];

const normalisiere = (pfad: string) => (pfad.endsWith('/') ? pfad : pfad + '/');

/**
 * Dieselbe Seite in der anderen Sprache.
 *
 * Projektdetailseiten tragen in beiden Sprachen denselben Slug; sie werden
 * deshalb über das Präfix umgerechnet statt einzeln aufgeführt. Gibt es kein
 * Gegenstück, führt der Verweis auf die Startseite der anderen Sprache — ein
 * Sprachwechsel soll nie ins Leere laufen.
 */
export function anderePfad(pfad: string, ziel: Lang): string {
  const p = normalisiere(pfad);

  for (const [de, en] of SEITENPAARE) {
    if (p === de) return ziel === 'de' ? de : en;
    if (p === en) return ziel === 'de' ? de : en;
  }

  const projektDe = p.match(/^\/projekte\/(.+\/)$/);
  if (projektDe) return ziel === 'de' ? p : `/en/projects/${projektDe[1]}`;

  const projektEn = p.match(/^\/en\/projects\/(.+\/)$/);
  if (projektEn) return ziel === 'de' ? `/projekte/${projektEn[1]}` : p;

  return ziel === 'de' ? '/' : '/en/';
}

/** Adresse eines Pfads in der jeweiligen Sprache, für Verweise im Markup. */
export function pfad(schluessel: string, lang: Lang): string {
  const paar = SEITENPAARE.find(([de]) => de === schluessel);
  if (!paar) return schluessel;
  return lang === 'de' ? paar[0] : paar[1];
}

interface NavLink {
  href: string;
  label: string;
  sub?: { href: string; label: string }[];
}

export interface UiTexte {
  htmlLang: string;
  ogLocale: string;
  /** Name der Sprache in der jeweils anderen Sprache, für den Umschalter. */
  spracheUmschalten: string;
  zumInhalt: string;
  nav: NavLink[];
  navLabel: string;
  menueOeffnen: string;
  zurStartseite: string;
  footerNavTitel: string;
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
    spracheUmschalten: 'Switch to English',
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
      direkt: 'Lieber gleich schreiben?',
      direktLink: 'Direkt zum Anfrageformular',
    },
    marqueeTitel: 'Vertrauen von Unternehmen und Institutionen',
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
    spracheUmschalten: 'Zur deutschen Fassung wechseln',
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
