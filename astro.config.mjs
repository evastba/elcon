import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.elcon-connected.de',
  integrations: [
    tailwind({
      // Das bestehende Design nutzt eigene CSS-Variablen/Klassen (siehe src/styles/global.css).
      // Tailwinds Basis-Reset bleibt deaktiviert, damit sich beide Systeme nicht in die Quere kommen;
      // Tailwind-Utility-Klassen (flex, grid, p-4, ...) stehen für neue Abschnitte trotzdem voll zur Verfügung.
      applyBaseStyles: false,
    }),
  ],
});
