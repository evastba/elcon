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

/**
 * Token für Cloudflare Web Analytics.
 *
 * Cloudflare misst cookielos: Es werden keine Informationen auf dem Endgerät
 * gespeichert oder ausgelesen, es entstehen keine Nutzungsprofile und kein
 * geräteübergreifendes Wiedererkennen. Eine Einwilligung nach § 25 Abs. 1 TDDDG
 * ist deshalb nicht erforderlich — dieser Dienst läuft ohne Cookie-Banner.
 *
 * Den Token findet man im Cloudflare-Dashboard unter Analytics & Logs → Web
 * Analytics → Manage site → JS snippet; es ist die Zeichenkette hinter "token".
 *
 * Achtung: Für Pages-Projekte lässt sich Web Analytics im Dashboard auch mit
 * einem Schalter aktivieren, wobei Cloudflare das Skript selbst einfügt. Beides
 * gleichzeitig führt zu doppelter Zählung — entweder der Schalter oder dieser
 * Token, nicht beides.
 */
export const CF_BEACON_TOKEN = '';

/**
 * Auf true setzen, wenn Web Analytics stattdessen im Cloudflare-Dashboard über
 * den Schalter des Pages-Projekts aktiviert wurde.
 *
 * In diesem Fall fügt Cloudflare das Messskript selbst ein, ohne dass hier ein
 * Token steht. Die Datenschutzerklärung würde die Seite dann fälschlich als
 * trackingfrei beschreiben — dieser Schalter verhindert genau das: Er schaltet
 * den Cloudflare-Abschnitt im Rechtstext frei, ohne ein zweites Messskript
 * einzubinden.
 */
export const CF_ANALYTICS_VIA_DASHBOARD = true;

/** Bindet diese Seite das Messskript selbst ein? Nur dann, wenn ein Token
 *  hinterlegt ist — bei der Dashboard-Variante fügt Cloudflare es selbst ein. */
export const cloudflareBeaconInline = CF_BEACON_TOKEN.length > 0;

/** Läuft Cloudflare Web Analytics überhaupt — gleich auf welchem Weg?
 *  Steuert die Darstellung in der Datenschutzerklärung. */
export const cloudflareAnalyticsEnabled =
  cloudflareBeaconInline || CF_ANALYTICS_VIA_DASHBOARD;

/** Läuft überhaupt irgendeine Form der Reichweitenmessung? */
export const anyAnalyticsEnabled = analyticsEnabled || cloudflareAnalyticsEnabled;

/** Datum der letzten inhaltlichen Änderung der Rechtstexte. */
export const legalLastUpdated = '16. September 2026';
