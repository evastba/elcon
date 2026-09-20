import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Produktionsadresse. Canonical, Sitemap und Open-Graph-Angaben werden
  // daraus abgeleitet — eine falsche Angabe hier verweist Suchmaschinen auf
  // eine Adresse, unter der die Seite nicht erreichbar ist.
  site: 'https://www.elcon-led.com',
  integrations: [
    sitemap(),
    tailwind({
      // Das bestehende Design nutzt eigene CSS-Variablen/Klassen (siehe src/styles/global.css).
      // Tailwinds Basis-Reset bleibt deaktiviert, damit sich beide Systeme nicht in die Quere kommen;
      // Tailwind-Utility-Klassen (flex, grid, p-4, ...) stehen für neue Abschnitte trotzdem voll zur Verfügung.
      applyBaseStyles: false,
    }),
  ],
});
