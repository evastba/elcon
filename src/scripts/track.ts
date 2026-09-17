/**
 * Meldet ein Ereignis an die Webanalyse.
 *
 * Die Meldung läuft bewusst über ein DOM-Event statt über einen direkten Aufruf:
 * Die Seite muss dadurch nicht wissen, ob und welche Analyse eingebunden ist.
 * Ob aus dem Ereignis eine Messung wird, entscheidet allein die Komponente
 * CookieConsent — sie wird nur ausgeliefert, wenn in src/config.ts eine
 * GA4-Property-ID hinterlegt ist, und wertet Ereignisse erst nach erteilter
 * Einwilligung aus. Ohne beides laufen die Aufrufe folgenlos ins Leere.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  document.dispatchEvent(new CustomEvent('elcon:track', { detail: { name, params } }));
}
