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

/* Reihenfolge im Sprachumschalter: zuerst die lateinisch gesetzten
   Sprachen, danach die mit eigener Schrift. */
export const LANGS = ['de', 'en', 'ru', 'fr', 'ar', 'zh'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'de';

/** Sprachen mit Rechts-nach-links-Satz. */
export const RTL_LANGS: ReadonlyArray<Lang> = ['ar'];
export const istRtl = (lang: Lang) => RTL_LANGS.includes(lang);

/** Adresspräfix je Sprache; Deutsch liegt ohne Präfix in der Wurzel. */
const PRAEFIX: Record<Lang, string> = { de: '', en: '/en', zh: '/zh', ar: '/ar', ru: '/ru', fr: '/fr' };

/** Sprache aus der Adresse ableiten. Ohne bekanntes Präfix gilt Deutsch. */
export function getLang(url: URL | string): Lang {
  const pfad = typeof url === 'string' ? url : url.pathname;
  const treffer = pfad.match(/^\/(en|zh|ar|ru|fr)(\/|$)/);
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
  { de: '/', en: '/en/', zh: '/zh/', ar: '/ar/', ru: '/ru/', fr: '/fr/' },
  { de: '/leistungen/', en: '/en/services/', zh: '/zh/services/', ar: '/ar/services/', ru: '/ru/services/', fr: '/fr/services/' },
  { de: '/projekte/', en: '/en/projects/', zh: '/zh/projects/', ar: '/ar/projects/', ru: '/ru/projects/', fr: '/fr/projects/' },
  { de: '/unternehmen/', en: '/en/company/', zh: '/zh/company/', ar: '/ar/company/', ru: '/ru/company/', fr: '/fr/company/' },
  { de: '/kontakt/', en: '/en/contact/', zh: '/zh/contact/', ar: '/ar/contact/', ru: '/ru/contact/', fr: '/fr/contact/' },
  { de: '/impressum/', en: '/en/imprint/', zh: '/zh/imprint/', ar: '/ar/imprint/', ru: '/ru/imprint/', fr: '/fr/imprint/' },
  { de: '/datenschutz/', en: '/en/privacy/', zh: '/zh/privacy/', ar: '/ar/privacy/', ru: '/ru/privacy/', fr: '/fr/privacy/' },
];

/** Verzeichnis der Projektdetailseiten je Sprache. */
const PROJEKTBASIS: Record<Lang, string> = {
  de: '/projekte/',
  en: '/en/projects/',
  zh: '/zh/projects/',
  ar: '/ar/projects/',
  ru: '/ru/projects/',
  fr: '/fr/projects/',
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
  zh: {
    htmlLang: 'zh-Hans',
    ogLocale: 'zh_CN',
    dir: 'ltr',
    sprachname: '中文',
    /* Eigene Schrift statt eines lateinischen Kürzels: „CH" liest sich
       ausserdem als Landeskennung der Schweiz. */
    sprachkuerzel: '中文',
    zumInhalt: '跳转到主要内容',
    navLabel: '主导航',
    menueOeffnen: '打开菜单',
    zurStartseite: 'ELCON — 返回首页',
    nav: [
      { href: '/zh/services/', label: '服务' },
      {
        href: '/zh/projects/',
        label: '项目',
        sub: [
          { href: '/zh/projects/#selected-projects', label: '精选项目' },
          { href: '/zh/projects/#client-directory', label: '客户一览' },
          { href: '/zh/projects/#client-feedback', label: '客户评价' },
        ],
      },
      { href: '/zh/company/', label: '公司' },
      { href: '/zh/contact/', label: '联系' },
    ],
    footerNavTitel: '导航',
    footer: {
      leistungen: '服务',
      leistungenLinks: [
        { href: '/zh/services/#leistungsfelder', label: '电气工程' },
        { href: '/zh/services/#leistungsfelder', label: '供暖、空调、通风与卫浴' },
        { href: '/zh/services/#anlagentechnik', label: '楼宇自动化与测控技术' },
        { href: '/zh/services/#anlagentechnik', label: '消防与安防技术' },
        { href: '/zh/services/#leistungsfelder', label: '项目管理与咨询' },
      ],
      unternehmen: '公司与项目',
      unternehmenLinks: [
        { href: '/zh/company/', label: '公司' },
        { href: '/zh/#aktuelle-projekte', label: '当前项目' },
        { href: '/zh/projects/', label: '全部参考项目' },
        { href: '/zh/#projektablauf', label: '项目流程' },
        { href: '/zh/#leistungsfinder', label: '服务查询' },
      ],
      partnerLink: { href: '/zh/#partnerunternehmen', label: '合作企业' },
      kontakt: '联系',
      cta: '洽谈项目',
      telefon: '电话',
      email: '电子邮件',
      whatsapp: 'WhatsApp',
      whatsappLink: '发送消息',
    },
    footerRechtliches: '法律信息',
    impressum: '法律声明',
    datenschutz: '隐私政策',
    cookieEinstellungen: 'Cookie 设置',
    anrufen: '致电',
    schnellkontakt: '快速联系',
    startseite: '首页',
    brotkrumen: '面包屑导航',
    stand: '更新日期',
    finder: {
      eyebrow: '三步提交询价',
      titel: '您需要哪项服务？',
      intro: '简单说明您的项目，我们会为您展示相关的参考案例并准备询价。',
      fortschritt: ['项目', '专业工程', '阶段'],
      frage1: '这是什么类型的项目？',
      frage2: '希望我们承担哪些专业工程？',
      frage3: '项目目前进展到哪一步？',
      ergebnisTitel: '与您的项目相匹配',
      anfrageVorbereiten: '准备询价',
      vonVorn: '重新开始',
      zurueck: '返回',
      weiter: '下一步',
      ergebnisAnzeigen: '显示结果',
      direkt: '想直接与我们联系？',
      direktLink: '直接前往询价表单',
    },
    marqueeTitel: '企业与机构的信赖之选',
    bewertungen: {
      titel: 'Google 评价',
      intro: '客户公开评价与我们的合作。',
      von: '来自',
      sterne: '（满分 5 星）',
      profil: '在 Google 上查看全部评价',
      quelle: '来源：Google 商家资料。评价在网站构建时获取；访问本页不会与 Google 建立任何连接。',
    },
    kontaktperson: {
      eyebrow: '您的联系人',
      titel: '由谁处理您的询价',
      anrufen: '致电',
      schreiben: '发送邮件',
      sprachen: '语言',
    },
    historisch: {
      ueberschrift: '公司发展历程中的项目实例',
      hinweis:
        '来自 ELCON 国际业务历史的参考项目。相关信息对应所列的实施期间，并不表示当前的业务活动或持续的合作关系。',
      hinweisGruppe:
        '来自 ELCON 国际业务历史的已完成参考项目。相关信息分别对应各自所列的实施期间，并不表示当前的业务活动或持续的合作关系。',
      kurz: '历史参考项目',
    },
    bildhinweis: {
      symbolisch: '示意图 — 由人工智能生成。',
      personen:
        '由人工智能生成的示意图；并非特定 ELCON 项目的照片，也非真实的 ELCON 员工。',
      projekt:
        '由人工智能生成的示意图 — 并非所述项目的实际照片。',
      abschnitt:
        '本节所用图片为人工智能生成的示意图，用于说明我们的业务领域。它们并未呈现具体的参考项目，也未呈现真实的 ELCON 员工。',
    },
    cookie: {
      label: 'Cookie 设置',
      text: '本网站使用 Cookie 及类似技术，以匿名方式分析网站的使用情况并加以改进。您可以接受或拒绝此项分析。详细说明见我们的',
      textLinkText: '隐私政策',
      ablehnen: '拒绝',
      akzeptieren: '接受',
    },
  },
  ar: {
    htmlLang: 'ar',
    ogLocale: 'ar_AE',
    dir: 'rtl',
    sprachname: 'العربية',
    sprachkuerzel: 'عربي',
    zumInhalt: 'تخطَّ إلى المحتوى',
    navLabel: 'التنقّل الرئيسي',
    menueOeffnen: 'فتح القائمة',
    zurStartseite: 'ELCON — العودة إلى الصفحة الرئيسية',
    nav: [
      { href: '/ar/services/', label: 'الخدمات' },
      {
        href: '/ar/projects/',
        label: 'المشاريع',
        sub: [
          { href: '/ar/projects/#selected-projects', label: 'مشاريع مختارة' },
          { href: '/ar/projects/#client-directory', label: 'قائمة العملاء' },
          { href: '/ar/projects/#client-feedback', label: 'آراء العملاء' },
        ],
      },
      { href: '/ar/company/', label: 'الشركة' },
      { href: '/ar/contact/', label: 'اتصل بنا' },
    ],
    footerNavTitel: 'التنقّل',
    footer: {
      leistungen: 'الخدمات',
      leistungenLinks: [
        { href: '/ar/services/#leistungsfelder', label: 'الهندسة الكهربائية' },
        { href: '/ar/services/#leistungsfelder', label: 'التدفئة والتكييف والتهوية والصرف الصحي' },
        { href: '/ar/services/#anlagentechnik', label: 'أتمتة المباني وأنظمة التحكّم' },
        { href: '/ar/services/#anlagentechnik', label: 'الحماية من الحريق وأنظمة الأمن' },
        { href: '/ar/services/#leistungsfelder', label: 'إدارة المشاريع والاستشارات' },
      ],
      unternehmen: 'الشركة والمشاريع',
      unternehmenLinks: [
        { href: '/ar/company/', label: 'الشركة' },
        { href: '/ar/#aktuelle-projekte', label: 'المشاريع الحالية' },
        { href: '/ar/projects/', label: 'جميع المشاريع المرجعية' },
        { href: '/ar/#projektablauf', label: 'مسار المشروع' },
        { href: '/ar/#leistungsfinder', label: 'دليل الخدمات' },
      ],
      partnerLink: { href: '/ar/#partnerunternehmen', label: 'الشركات الشريكة' },
      kontakt: 'اتصل بنا',
      cta: 'ناقش مشروعك',
      telefon: 'الهاتف',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      whatsappLink: 'أرسل رسالة',
    },
    footerRechtliches: 'معلومات قانونية',
    impressum: 'بيان قانوني',
    datenschutz: 'سياسة الخصوصية',
    cookieEinstellungen: 'إعدادات ملفات تعريف الارتباط',
    anrufen: 'اتصل بنا',
    schnellkontakt: 'اتصال سريع',
    startseite: 'الصفحة الرئيسية',
    brotkrumen: 'مسار التنقّل',
    stand: 'آخر تحديث',
    finder: {
      eyebrow: 'ثلاث خطوات نحو طلبك',
      titel: 'ما الخدمة التي تحتاجها؟',
      intro: 'أخبرنا باختصار بطبيعة مشروعك — وسنعرض عليك مشاريع مرجعية مناسبة ونجهّز طلبك.',
      fortschritt: ['المشروع', 'التخصّصات', 'المرحلة'],
      frage1: 'ما نوع المشروع؟',
      frage2: 'ما التخصّصات التي تريد أن نتولّاها؟',
      frage3: 'إلى أي مرحلة وصل المشروع؟',
      ergebnisTitel: 'هذا ما يناسب مشروعك',
      anfrageVorbereiten: 'تجهيز الطلب',
      vonVorn: 'البدء من جديد',
      zurueck: 'رجوع',
      weiter: 'التالي',
      ergebnisAnzeigen: 'عرض النتيجة',
      direkt: 'تفضّل المراسلة مباشرة؟',
      direktLink: 'الانتقال مباشرة إلى نموذج الطلب',
    },
    marqueeTitel: 'موضع ثقة الشركات والمؤسسات',
    bewertungen: {
      titel: 'التقييمات على Google',
      intro: 'ما يكتبه العملاء علنًا عن التعامل معنا.',
      von: 'بقلم',
      sterne: 'من 5 نجوم',
      profil: 'عرض جميع التقييمات على Google',
      quelle: 'المصدر: الملف التعريفي للنشاط التجاري على Google. تُجلب التقييمات عند بناء الموقع، ولا تنشأ عن زيارة هذه الصفحة أي صلة بـ Google.',
    },
    kontaktperson: {
      eyebrow: 'جهة الاتصال',
      titel: 'من سيتولّى طلبك',
      anrufen: 'اتصال',
      schreiben: 'إرسال بريد إلكتروني',
      sprachen: 'اللغات',
    },
    historisch: {
      ueberschrift: 'أمثلة من مشاريع تاريخ الشركة',
      hinweis:
        'مشروع مرجعي من تاريخ ELCON الدولي. تتعلّق المعلومات بفترة التنفيذ المذكورة ولا تدلّ على نشاط حالي أو علاقة عمل قائمة.',
      hinweisGruppe:
        'مشاريع مرجعية منجزة من تاريخ ELCON الدولي. تتعلّق المعلومات بفترة التنفيذ المذكورة في كل حالة ولا تدلّ على نشاط حالي أو علاقة عمل قائمة.',
      kurz: 'مشروع مرجعي تاريخي',
    },
    bildhinweis: {
      symbolisch: 'تصوير رمزي — من إنتاج الذكاء الاصطناعي.',
      personen:
        'تصوير من إنتاج الذكاء الاصطناعي؛ وليس صورة لمشروع محدّد من مشاريع ELCON ولا لموظفين حقيقيين لديها.',
      projekt:
        'تصوير رمزي من إنتاج الذكاء الاصطناعي — وليس صورة للمشروع المذكور.',
      abschnitt:
        'الصور المستخدمة في هذا القسم من إنتاج الذكاء الاصطناعي وتخدم توضيح مجالات خبرتنا. وهي لا تُظهر مشاريع مرجعية محدّدة ولا موظفين حقيقيين لدى ELCON.',
    },
    cookie: {
      label: 'إعدادات ملفات تعريف الارتباط',
      text: 'يستخدم هذا الموقع ملفات تعريف الارتباط وتقنيات مشابهة لتحليل طريقة استخدام الموقع بصورة مجهّلة الهوية وتحسينه. يمكنك قبول هذا التحليل أو رفضه. التفاصيل مذكورة في ',
      textLinkText: 'سياسة الخصوصية',
      ablehnen: 'رفض',
      akzeptieren: 'قبول',
    },
  },
  ru: {
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    dir: 'ltr',
    sprachname: 'Русский',
    sprachkuerzel: 'RU',
    zumInhalt: 'Перейти к содержанию',
    navLabel: 'Основная навигация',
    menueOeffnen: 'Открыть меню',
    zurStartseite: 'ELCON — на главную страницу',
    nav: [
      { href: '/ru/services/', label: 'Услуги' },
      {
        href: '/ru/projects/',
        label: 'Проекты',
        sub: [
          { href: '/ru/projects/#selected-projects', label: 'Избранные проекты' },
          { href: '/ru/projects/#client-directory', label: 'Список заказчиков' },
          { href: '/ru/projects/#client-feedback', label: 'Отзывы заказчиков' },
        ],
      },
      { href: '/ru/company/', label: 'Компания' },
      { href: '/ru/contact/', label: 'Контакты' },
    ],
    footerNavTitel: 'Навигация',
    footer: {
      leistungen: 'Услуги',
      leistungenLinks: [
        { href: '/ru/services/#leistungsfelder', label: 'Электротехника' },
        { href: '/ru/services/#leistungsfelder', label: 'Отопление, вентиляция, кондиционирование, сантехника' },
        { href: '/ru/services/#anlagentechnik', label: 'Автоматизация зданий и КИПиА' },
        { href: '/ru/services/#anlagentechnik', label: 'Противопожарная защита и системы безопасности' },
        { href: '/ru/services/#leistungsfelder', label: 'Управление проектами и консалтинг' },
      ],
      unternehmen: 'Компания и проекты',
      unternehmenLinks: [
        { href: '/ru/company/', label: 'Компания' },
        { href: '/ru/#aktuelle-projekte', label: 'Текущие проекты' },
        { href: '/ru/projects/', label: 'Все референс-проекты' },
        { href: '/ru/#projektablauf', label: 'Ход проекта' },
        { href: '/ru/#leistungsfinder', label: 'Подбор услуг' },
      ],
      partnerLink: { href: '/ru/#partnerunternehmen', label: 'Партнёрские компании' },
      kontakt: 'Контакты',
      cta: 'Обсудить проект',
      telefon: 'Телефон',
      email: 'Эл. почта',
      whatsapp: 'WhatsApp',
      whatsappLink: 'Написать сообщение',
    },
    footerRechtliches: 'Правовая информация',
    impressum: 'Выходные данные',
    datenschutz: 'Политика конфиденциальности',
    cookieEinstellungen: 'Настройки cookie',
    anrufen: 'Позвонить',
    schnellkontakt: 'Быстрая связь',
    startseite: 'Главная',
    brotkrumen: 'Навигационная цепочка',
    stand: 'Актуально на',
    finder: {
      eyebrow: 'Три шага к запросу',
      titel: 'Какая услуга вам нужна?',
      intro: 'Коротко опишите ваш проект — мы покажем подходящие референсы и подготовим запрос.',
      fortschritt: ['Проект', 'Разделы работ', 'Стадия'],
      frage1: 'О каком проекте идёт речь?',
      frage2: 'Какие разделы работ нам взять на себя?',
      frage3: 'На какой стадии находится проект?',
      ergebnisTitel: 'Это подходит вашему проекту',
      anfrageVorbereiten: 'Подготовить запрос',
      vonVorn: 'Начать заново',
      zurueck: 'Назад',
      weiter: 'Далее',
      ergebnisAnzeigen: 'Показать результат',
      direkt: 'Хотите написать сразу?',
      direktLink: 'Перейти к форме запроса',
    },
    marqueeTitel: 'Нам доверяют компании и организации',
    bewertungen: {
      titel: 'Отзывы в Google',
      intro: 'Что заказчики публично пишут о работе с нами.',
      von: 'от',
      sterne: 'из 5 звёзд',
      profil: 'Смотреть все отзывы в Google',
      quelle: 'Источник: профиль компании в Google. Отзывы загружаются при сборке сайта; посещение этой страницы не создаёт соединения с Google.',
    },
    kontaktperson: {
      eyebrow: 'Ваш контакт',
      titel: 'Кто займётся вашим запросом',
      anrufen: 'Позвонить',
      schreiben: 'Написать письмо',
      sprachen: 'Языки',
    },
    historisch: {
      ueberschrift: 'Примеры проектов из истории компании',
      hinweis:
        'Референс-проект из международной истории ELCON. Сведения относятся к указанному периоду выполнения и не свидетельствуют о текущей деятельности или действующих деловых отношениях.',
      hinweisGruppe:
        'Завершённые референс-проекты из международной истории ELCON. Сведения относятся к указанному в каждом случае периоду выполнения и не свидетельствуют о текущей деятельности или действующих деловых отношениях.',
      kurz: 'Исторический референс-проект',
    },
    bildhinweis: {
      symbolisch: 'Символическая визуализация — создано искусственным интеллектом.',
      personen:
        'Визуализация, созданная искусственным интеллектом; это не снимок конкретного проекта ELCON и не реальные сотрудники ELCON.',
      projekt:
        'Символическая визуализация, созданная искусственным интеллектом, — не снимок указанного проекта.',
      abschnitt:
        'Изображения в этом разделе — визуализации, созданные искусственным интеллектом. Они иллюстрируют направления нашей работы и не показывают конкретные референс-проекты или реальных сотрудников ELCON.',
    },
    cookie: {
      label: 'Настройки cookie',
      text: 'Этот сайт использует файлы cookie и сопоставимые технологии, чтобы анонимно анализировать использование сайта и улучшать его. Вы можете принять или отклонить такой анализ. Подробности изложены в нашей ',
      textLinkText: 'политике конфиденциальности',
      ablehnen: 'Отклонить',
      akzeptieren: 'Принять',
    },
  },
  fr: {
    htmlLang: 'fr-CH',
    ogLocale: 'fr_CH',
    dir: 'ltr',
    sprachname: 'Français',
    sprachkuerzel: 'FR',
    zumInhalt: 'Aller au contenu',
    navLabel: 'Navigation principale',
    menueOeffnen: 'Ouvrir le menu',
    zurStartseite: 'ELCON — retour à l’accueil',
    nav: [
      { href: '/fr/services/', label: 'Prestations' },
      {
        href: '/fr/projects/',
        label: 'Projets',
        sub: [
          { href: '/fr/projects/#selected-projects', label: 'Projets sélectionnés' },
          { href: '/fr/projects/#client-directory', label: 'Liste des clients' },
          { href: '/fr/projects/#client-feedback', label: 'Avis des clients' },
        ],
      },
      { href: '/fr/company/', label: 'Entreprise' },
      { href: '/fr/contact/', label: 'Contact' },
    ],
    footerNavTitel: 'Navigation',
    footer: {
      leistungen: 'Prestations',
      leistungenLinks: [
        { href: '/fr/services/#leistungsfelder', label: 'Électrotechnique' },
        { href: '/fr/services/#leistungsfelder', label: 'Chauffage, climatisation, ventilation, sanitaire' },
        { href: '/fr/services/#anlagentechnik', label: 'Automatisation du bâtiment et régulation' },
        { href: '/fr/services/#anlagentechnik', label: 'Protection incendie et sécurité' },
        { href: '/fr/services/#leistungsfelder', label: 'Gestion de projet et conseil' },
      ],
      unternehmen: 'Entreprise et projets',
      unternehmenLinks: [
        { href: '/fr/company/', label: 'Entreprise' },
        { href: '/fr/#aktuelle-projekte', label: 'Projets en cours' },
        { href: '/fr/projects/', label: 'Tous les projets de référence' },
        { href: '/fr/#projektablauf', label: 'Déroulement du projet' },
        { href: '/fr/#leistungsfinder', label: 'Recherche de prestations' },
      ],
      partnerLink: { href: '/fr/#partnerunternehmen', label: 'Entreprises partenaires' },
      kontakt: 'Contact',
      cta: 'Discuter de votre projet',
      telefon: 'Téléphone',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      whatsappLink: 'Envoyer un message',
    },
    footerRechtliches: 'Informations légales',
    impressum: 'Mentions légales',
    datenschutz: 'Protection des données',
    cookieEinstellungen: 'Paramètres des cookies',
    anrufen: 'Appeler',
    schnellkontakt: 'Contact rapide',
    startseite: 'Accueil',
    brotkrumen: 'Fil d’Ariane',
    stand: 'Mise à jour',
    finder: {
      eyebrow: 'Votre demande en trois étapes',
      titel: 'De quelle prestation avez-vous besoin ?',
      intro: 'Décrivez brièvement votre projet — nous vous montrons les références correspondantes et préparons votre demande.',
      fortschritt: ['Projet', 'Corps de métier', 'Avancement'],
      frage1: 'De quel type de projet s’agit-il ?',
      frage2: 'Quels corps de métier devons-nous prendre en charge ?',
      frage3: 'Où en est le projet ?',
      ergebnisTitel: 'Cela correspond à votre projet',
      anfrageVorbereiten: 'Préparer la demande',
      vonVorn: 'Recommencer',
      zurueck: 'Retour',
      weiter: 'Suivant',
      ergebnisAnzeigen: 'Afficher le résultat',
      direkt: 'Vous préférez écrire directement ?',
      direktLink: 'Aller directement au formulaire de demande',
    },
    marqueeTitel: 'La confiance d’entreprises et d’institutions',
    bewertungen: {
      titel: 'Avis sur Google',
      intro: 'Ce que les clients écrivent publiquement sur notre collaboration.',
      von: 'par',
      sterne: 'sur 5 étoiles',
      profil: 'Voir tous les avis sur Google',
      quelle: 'Source : fiche d’établissement Google. Les avis sont récupérés lors de la génération du site ; la consultation de cette page n’établit aucune connexion avec Google.',
    },
    kontaktperson: {
      eyebrow: 'Votre interlocuteur',
      titel: 'Qui traitera votre demande',
      anrufen: 'Appeler',
      schreiben: 'Envoyer un e-mail',
      sprachen: 'Langues',
    },
    historisch: {
      ueberschrift: 'Exemples de projets issus de l’histoire de l’entreprise',
      hinweis:
        'Projet de référence issu de l’histoire internationale d’ELCON. Les informations se rapportent à la période d’exécution indiquée et ne traduisent ni une activité actuelle ni une relation d’affaires en cours.',
      hinweisGruppe:
        'Projets de référence achevés, issus de l’histoire internationale d’ELCON. Les informations se rapportent à la période d’exécution indiquée dans chaque cas et ne traduisent ni une activité actuelle ni une relation d’affaires en cours.',
      kurz: 'Projet de référence historique',
    },
    bildhinweis: {
      symbolisch: 'Visualisation symbolique — générée par intelligence artificielle.',
      personen:
        'Visualisation générée par intelligence artificielle ; il ne s’agit ni d’un projet ELCON précis ni de collaborateurs réels d’ELCON.',
      projekt:
        'Visualisation symbolique générée par intelligence artificielle — il ne s’agit pas d’une photo du projet mentionné.',
      abschnitt:
        'Les images de cette section sont des visualisations générées par intelligence artificielle destinées à illustrer nos domaines de compétence. Elles ne représentent ni des projets de référence précis ni des collaborateurs réels d’ELCON.',
    },
    cookie: {
      label: 'Paramètres des cookies',
      text: 'Ce site utilise des cookies et des technologies comparables afin d’analyser son utilisation de manière anonymisée et de l’améliorer. Vous pouvez accepter ou refuser cette analyse. Les détails figurent dans notre ',
      textLinkText: 'politique de confidentialité',
      ablehnen: 'Refuser',
      akzeptieren: 'Accepter',
    },
  },
};

/** Kurzform für den Zugriff im Markup: `const t = useUi(Astro.url);` */
export function useUi(url: URL | string): UiTexte {
  return UI[getLang(url)];
}
