# ELCON Connected Building Engineering — Astro-Projekt

Dies ist die Astro-Version der ELCON-Homepage, migriert aus dem bisherigen
Single-File-Prototyp. Inhalt und Design sind 1:1 übernommen; die Seite läuft
jetzt aber über einen echten Build-Prozess (Astro + Tailwind CSS) statt als
einzelne HTML-Datei.

## Projektstruktur

```
elcon-astro/
├── src/
│   ├── layouts/
│   │   └── Layout.astro      Grundgerüst (Head, Meta-Tags, Google Fonts)
│   ├── pages/
│   │   └── index.astro       Die eigentliche Seite (Inhalt + Interaktions-Skript)
│   └── styles/
│       └── global.css        Design-System (Farben, Typografie, Komponenten)
│                              + Tailwind-Direktiven für zukünftige Abschnitte
├── public/
│   └── assets/                Alle Bilder, Logos und Fotos
├── astro.config.mjs           Astro-Konfiguration (Tailwind-Integration)
└── tailwind.config.mjs        Tailwind-Konfiguration (Farbpalette gespiegelt)
```

## Zweisprachigkeit (Deutsch / Englisch)

Die Seite gibt es vollständig in beiden Sprachen. Die deutsche Fassung liegt
unter `/`, die englische unter `/en/`:

| Deutsch          | Englisch         |
| ---------------- | ---------------- |
| `/`              | `/en/`           |
| `/leistungen/`   | `/en/services/`  |
| `/projekte/`     | `/en/projects/`  |
| `/unternehmen/`  | `/en/company/`   |
| `/kontakt/`      | `/en/contact/`   |
| `/impressum/`    | `/en/imprint/`   |
| `/datenschutz/`  | `/en/privacy/`   |

Projektdetailseiten tragen in beiden Sprachen denselben Slug, also etwa
`/projekte/nord-stream-2011/` und `/en/projects/nord-stream-2011/`.

Wo was gepflegt wird:

- **`src/i18n/ui.ts`** — Bausteine, die auf jeder Seite vorkommen (Navigation,
  Fußzeile, Beschriftungen des Leistungsfinders, Cookie-Hinweis) sowie die
  Zuordnung der Seitenpaare. Wer eine neue Seite anlegt, trägt sie dort in
  `SEITENPAARE` ein — daraus entstehen Sprachumschalter und `hreflang`-Angaben.
- **`src/pages/…`** und **`src/pages/en/…`** — die Fließtexte je Sprache.
- **`src/data/projekte.ts`** — Projekttexte; die englische Fassung steht in
  `UEBERSETZUNGEN`, zugeordnet über den Slug.
- **`src/data/finder.ts`** — Auswahlmöglichkeiten des Leistungsfinders, mit
  `label`/`labelEn` nebeneinander.

Welche Sprache gilt, wird nicht durchgereicht, sondern an der Adresse
abgelesen (`getLang` in `src/i18n/ui.ts`). Komponenten brauchen deshalb keine
zusätzliche Eigenschaft, und eine vergessene Weitergabe kann keine halb
übersetzte Seite erzeugen.

Anfragen aus dem englischen Formular tragen ein verstecktes Feld `lang=en`; der
Endpunkt in `functions/api/anfrage.js` vermerkt das in der E-Mail, damit in der
richtigen Sprache geantwortet wird.

## Voraussetzungen

- [Node.js](https://nodejs.org) Version 18 oder neuer

## Erste Schritte

```bash
npm install       # Abhängigkeiten installieren
npm run dev       # lokalen Entwicklungsserver starten (http://localhost:4321)
npm run build     # fertige, statische Seite in ./dist erzeugen
npm run preview   # den Build lokal testen
```

## Hosting

Das Ergebnis von `npm run build` (der Ordner `dist/`) ist eine fertige,
statische Website. Sie kann direkt bei Anbietern wie Vercel, Netlify,
Cloudflare Pages oder auf einem eigenen Webspace per Upload gehostet werden.

Bei Vercel/Netlify reicht es in der Regel, das Repository zu verbinden —
Build-Befehl `npm run build`, Ausgabe-Ordner `dist`.

## Was noch offen ist (siehe Hinweisbanner auf der Seite selbst)

- Kundenlogos: aktuell Beispiel-/Platzhalter-Grafiken, echte Logo-Dateien vom
  jeweiligen Kunden einholen bzw. Nutzungsrechte klären.
- Kontaktformular sendet ohne Anhänge per `mailto:`; mit Anhängen über die
  Cloudflare-Function `functions/api/anfrage.js` (dafür sind die dort
  beschriebenen Umgebungsvariablen nötig).
- Rechtstexte (Impressum, Datenschutzerklärung) fehlen noch.
- Cookie-Consent-Banner nutzt eine Platzhalter-Property-ID für Analytics —
  vor Livegang durch die echte ID ersetzen.

## Tailwind CSS

Tailwind ist vollständig eingerichtet und einsatzbereit. Das bestehende
Design nutzt weiterhin die eigenen CSS-Klassen und -Variablen aus
`global.css` (damit nichts optisch kaputtgeht) — für neue Abschnitte oder
Unterseiten können ab sofort ganz normal Tailwind-Utility-Klassen direkt im
Markup verwendet werden, z. B. `class="flex items-center gap-4 bg-ink text-white p-6 rounded-lg"`.
