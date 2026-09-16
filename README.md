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
- Kontaktformular sendet aktuell per `mailto:` (kein Server-Backend).
- Rechtstexte (Impressum, Datenschutzerklärung) fehlen noch.
- Cookie-Consent-Banner nutzt eine Platzhalter-Property-ID für Analytics —
  vor Livegang durch die echte ID ersetzen.

## Tailwind CSS

Tailwind ist vollständig eingerichtet und einsatzbereit. Das bestehende
Design nutzt weiterhin die eigenen CSS-Klassen und -Variablen aus
`global.css` (damit nichts optisch kaputtgeht) — für neue Abschnitte oder
Unterseiten können ab sofort ganz normal Tailwind-Utility-Klassen direkt im
Markup verwendet werden, z. B. `class="flex items-center gap-4 bg-ink text-white p-6 rounded-lg"`.
