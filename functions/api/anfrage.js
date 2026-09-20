/**
 * Gegenstelle des Anfrageformulars — läuft als Cloudflare Pages Function.
 *
 * Ein mailto:-Link kann keine Dateien mitnehmen. Sobald einer Anfrage
 * Unterlagen beiliegen, sendet das Formular sie deshalb hierher; der Endpunkt
 * stellt daraus eine E-Mail mit Anhängen zusammen.
 *
 * Voraussetzung ist ein Versanddienst. Eingerichtet wird er über zwei
 * Umgebungsvariablen im Cloudflare-Dashboard (Pages-Projekt → Settings →
 * Environment variables):
 *
 *   RESEND_API_KEY   Schlüssel von resend.com
 *   ANFRAGE_AN       Empfangsadresse, z. B. info@elcon-led.com
 *   ANFRAGE_VON      Absenderadresse einer bei Resend verifizierten Domain
 *
 * Fehlt der Schlüssel, antwortet der Endpunkt mit 503. Das Formular fängt das
 * ab und weist den Besucher auf den Weg per E-Mail hin — es entsteht also kein
 * stiller Datenverlust.
 */

const MAX_GESAMT = 15 * 1024 * 1024;

const ERLAUBT = [
  'application/pdf', 'application/zip', 'application/x-zip-compressed',
  'image/jpeg', 'image/png', 'image/webp',
  'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/octet-stream', '',
];

const text = (s) => String(s ?? '').trim();

function escapeHtml(s) {
  return text(s).replace(/[&<>"']/g, (z) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[z]);
}

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY) {
    return Response.json(
      { fehler: 'Versanddienst nicht eingerichtet: RESEND_API_KEY fehlt.' },
      { status: 503 },
    );
  }

  let daten;
  try {
    daten = await request.formData();
  } catch {
    return Response.json({ fehler: 'Anfrage nicht lesbar.' }, { status: 400 });
  }

  const name = text(daten.get('name'));
  const email = text(daten.get('email'));
  const nachricht = text(daten.get('message'));

  if (!name || !email || !nachricht) {
    return Response.json({ fehler: 'Name, E-Mail und Projektbeschreibung sind erforderlich.' }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ fehler: 'Die E-Mail-Adresse ist ungültig.' }, { status: 400 });
  }

  const dateien = daten.getAll('files').filter((f) => f && typeof f === 'object' && f.size > 0);
  const gesamt = dateien.reduce((s, f) => s + f.size, 0);
  if (gesamt > MAX_GESAMT) {
    return Response.json({ fehler: 'Die Anhänge überschreiten 15 MB.' }, { status: 413 });
  }
  if (dateien.some((f) => !ERLAUBT.includes(f.type))) {
    return Response.json({ fehler: 'Ein Dateityp ist nicht zugelassen.' }, { status: 415 });
  }

  /* Das Anfrageformular steht in zwei Sprachen, die Nachricht landet aber in
     demselben Postfach. Das versteckte Feld "lang" hält fest, aus welcher
     Fassung die Anfrage kam, damit in der richtigen Sprache geantwortet wird. */
  const sprache = daten.get('lang') === 'en' ? 'Englisch' : 'Deutsch';

  const felder = [
    ['Name', name],
    ['Unternehmen', text(daten.get('company'))],
    ['E-Mail', email],
    ['Telefon', text(daten.get('phone'))],
    ['Standort', text(daten.get('location'))],
    ['Sprache der Anfrage', sprache],
  ].filter(([, wert]) => wert);

  const html =
    '<h2>Projektanfrage über die Website</h2><table cellpadding="6">' +
    felder.map(([b, w]) => `<tr><td><strong>${escapeHtml(b)}</strong></td><td>${escapeHtml(w)}</td></tr>`).join('') +
    '</table><h3>Projektbeschreibung</h3><p>' +
    escapeHtml(nachricht).replace(/\n/g, '<br>') +
    '</p>' +
    (dateien.length ? `<p><strong>${dateien.length} Anhang/Anhänge</strong></p>` : '');

  const anhaenge = await Promise.all(
    dateien.map(async (f) => ({
      filename: f.name,
      content: btoa(String.fromCharCode(...new Uint8Array(await f.arrayBuffer()))),
    })),
  );

  const antwort = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.ANFRAGE_VON || 'website@elcon-led.com',
      to: [env.ANFRAGE_AN || 'info@elcon-led.com'],
      reply_to: email,
      subject: `Projektanfrage über die Website — ${name}`,
      html,
      attachments: anhaenge,
    }),
  });

  if (!antwort.ok) {
    return Response.json({ fehler: 'Der Versanddienst hat die Nachricht abgelehnt.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
