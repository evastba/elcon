/**
 * Zentrale Stammdaten und Schalter der Website.
 *
 * Die Angaben aus `company` werden im Impressum, in der Datenschutzerklärung
 * und im Kontaktbereich verwendet — sie stehen bewusst nur an dieser einen
 * Stelle, damit eine Änderung (z. B. eine neue Faxnummer) nicht an mehreren
 * Stellen im Markup nachgezogen werden muss.
 */
export const company = {
  name: 'ELCON LED GmbH',
  street: 'Bauernstr. 34',
  zip: '31275',
  city: 'Lehrte (OT Immensen)',
  country: 'Deutschland',
  phone: '+49 (0) 5175 - 77 16 116',
  phoneHref: '+4951757716116',
  fax: '+49 (0) 5175 - 92 00 14',
  email: 'info@elcon-led.com',
  // TODO(Auftraggeber): Die folgenden Angaben sind nach § 5 DDG Pflicht und
  // müssen vor dem Livegang durch die echten Werte ersetzt werden. Solange
  // hier `null` steht, weisen Impressum und Datenschutzerklärung sichtbar
  // auf die Lücke hin, statt eine falsche Angabe zu machen.
  managingDirectors: null as string[] | null,
  registerCourt: null as string | null,
  registerNumber: null as string | null,
  vatId: null as string | null,
  // Optional: zuständige Aufsichtsbehörde/Kammer, falls einschlägig.
  chamber: null as string | null,
} as const;

/**
 * Google-Analytics-4-Property-ID.
 *
 * Leer lassen, solange keine echte ID vorliegt: Dann wird weder das
 * Analytics-Skript geladen noch der Cookie-Banner angezeigt, und die
 * Datenschutzerklärung beschreibt die Seite korrekt als trackingfrei.
 * Sobald hier eine echte ID (Format `G-XXXXXXXXXX`) eingetragen wird,
 * schalten sich Banner, Consent-Speicherung und Analytics automatisch zu.
 */
export const GA_MEASUREMENT_ID = '';

export const analyticsEnabled = GA_MEASUREMENT_ID.length > 0;

/** Datum der letzten inhaltlichen Änderung der Rechtstexte. */
export const legalLastUpdated = '16. September 2026';
