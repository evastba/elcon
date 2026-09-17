/**
 * Auflösung von Bildpfaden für astro:assets.
 *
 * Die Seite verwendet über 60 verschiedene Bilder. Statt sie in jeder Datei
 * einzeln zu importieren, lädt ein Glob-Import alle Metadaten auf einmal und
 * asset() schlägt sie über den vertrauten Pfad "/assets/…" nach. Die Dateien
 * liegen in src/assets und laufen dadurch durch Astros Bildpipeline; aus
 * public/ ausgelieferte Bilder würden sie umgehen.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/**/*.{jpg,jpeg,png}',
  { eager: true },
);

export function asset(path: string): ImageMetadata {
  const key = '../assets/' + path.replace(/^\/assets\//, '');
  const mod = modules[key];
  if (!mod) throw new Error(`Bild nicht gefunden: ${path}`);
  return mod.default;
}
