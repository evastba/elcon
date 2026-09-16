/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Gespiegelt aus den CSS-Variablen in src/styles/global.css,
        // damit neue Abschnitte per Tailwind-Klasse (z.B. bg-ink, text-petrol) im selben Look bleiben.
        white: '#FFFFFF',
        offwhite: '#F7F9F8',
        hellgrau: '#E5E8E8',
        anthrazit: '#4D5A61',
        ink: '#0F2D3A',
        green: '#2E7D32',
        orange: '#FF7A00',
        petrol: '#008B8B',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
