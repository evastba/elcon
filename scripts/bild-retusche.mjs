/* Fotografische Nachbearbeitung des Einstiegsbildes.

   Ziel ist nicht, die Herkunft zu verschleiern, sondern die Merkmale zu
   nehmen, an denen eine Renderansicht sofort als solche zu erkennen ist:
   makellos gleichmaessige Flaechen und Beleuchtung, ueberzeichnete Farbe,
   rauschfreie Schatten, randscharfe Ecken, sauber abgegrenzte Lichter.

   Aufruf: node scripts/bild-retusche.mjs <quelle> <ziel> [staerke] */
import sharp from 'sharp';

const quelle = process.argv[2], ziel = process.argv[3];
const staerke = Number(process.argv[4] ?? 1);

const bild = sharp(quelle).removeAlpha();
const { width: b, height: h } = await bild.metadata();

/* Zufallsfeld mit einstellbarer Koernung: Bei groesserem Raster entsteht ein
   groberes Muster, das nach Unregelmaessigkeit aussieht statt nach Rauschen. */
async function feld(raster, sigma) {
  const bw = Math.max(2, Math.round(b / raster)), bh = Math.max(2, Math.round(h / raster));
  const roh = Buffer.alloc(bw * bh);
  for (let i = 0; i < roh.length; i++) {
    const u = Math.max(Math.random(), 1e-9), v = Math.random();
    const g = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * sigma;
    roh[i] = Math.min(255, Math.max(0, Math.round(128 + g)));
  }
  return sharp(roh, { raw: { width: bw, height: bh, channels: 1 } })
    .resize(b, h, { kernel: 'cubic' }).png().toBuffer();
}

/* 1 — Farbstimmung: leicht zurueckgenommene Saettigung, angehobene Tiefen und
   eine Verschiebung zum Gruen der Hausmarke. Die Matrix mischt jeden Kanal
   neu; sie nimmt dem Rot etwas und gibt es dem Gruen. */
const g = 0.055 * staerke;
const grund = await sharp(quelle).removeAlpha()
  .modulate({ saturation: 1 - 0.08 * staerke })
  .linear(1 - 0.025 * staerke, 2.5 * staerke)
  .recomb([
    [1 - g, g * 0.6, 0],
    [g * 0.35, 1 + g * 0.5, 0],
    [0, g * 0.5, 1 - g * 0.5],
  ])
  .toColourspace('srgb').raw().toBuffer({ resolveWithObject: true });

const basis = () => sharp(grund.data, { raw: { width: b, height: h, channels: 3 } });

/* 2 — Farbsaum: Der Rotkanal wird eine Spur groesser eingesetzt als die
   uebrigen. Objektive trennen die Farben am Rand nicht exakt; ein Rendering
   tut es perfekt. */
const spreizung = 1 + 0.00045 * staerke;
const rotBreit = Math.round(b * spreizung), rotHoch = Math.round(h * spreizung);
const rot = await basis().extractChannel('red')
  .resize(rotBreit, rotHoch)
  .extract({ left: Math.round((rotBreit - b) / 2), top: Math.round((rotHoch - h) / 2), width: b, height: h })
  .raw().toBuffer();
const gruen = await basis().extractChannel('green').raw().toBuffer();
const blau = await basis().extractChannel('blue').raw().toBuffer();
const versetzt = Buffer.alloc(b * h * 3);
for (let i = 0; i < b * h; i++) {
  versetzt[i * 3] = rot[i]; versetzt[i * 3 + 1] = gruen[i]; versetzt[i * 3 + 2] = blau[i];
}
const mitSaum = () => sharp(versetzt, { raw: { width: b, height: h, channels: 3 } });

/* 3 — Lichtbluete: Die hellen Fenster strahlen ein wenig in ihre Umgebung.
   Der Schwellwert liegt hoch und die Schicht wird anschliessend stark
   gedaempft — sonst hellt sie das ganze Bild auf, statt nur die Lichter
   auslaufen zu lassen. */
const lichter = await mitSaum().linear(3.4, -500).blur(10 * staerke)
  .linear(0.3, 0).png().toBuffer();

/* 4 — Zur Bildmitte hin scharf, zu den Ecken hin weich — wie ein Objektiv. */
const weich = await mitSaum().blur(1.1 * staerke).png().toBuffer();
const maske = Buffer.from(
  `<svg width="${b}" height="${h}"><defs><radialGradient id="m" cx="50%" cy="48%" r="72%">
     <stop offset="55%" stop-color="#000"/><stop offset="100%" stop-color="#fff"/>
   </radialGradient></defs><rect width="${b}" height="${h}" fill="url(#m)"/></svg>`);
const weichMitAlpha = await sharp(weich)
  .joinChannel(await sharp(maske).greyscale().raw().toBuffer(), { raw: { width: b, height: h, channels: 1 } })
  .png().toBuffer();

/* 5 — Randabschattung des Objektivs. */
const vignette = Buffer.from(
  `<svg width="${b}" height="${h}"><defs><radialGradient id="v" cx="50%" cy="48%" r="75%">
     <stop offset="45%" stop-color="rgb(0,0,0)" stop-opacity="0"/>
     <stop offset="100%" stop-color="rgb(0,0,0)" stop-opacity="${(0.26 * staerke).toFixed(3)}"/>
   </radialGradient></defs><rect width="${b}" height="${h}" fill="url(#v)"/></svg>`);

/* 6 — Ungleiches Licht und Korn. Das grobe Feld nimmt der Ausleuchtung ihre
   Gleichmaessigkeit, das feine ergaenzt das Sensorrauschen. 128 ist in beiden
   Ueberlagerungen der neutrale Wert. */
const ungleich = await feld(30, 13 * staerke);
const korn = await feld(1.6, 7 * staerke);

await mitSaum()
  .composite([
    { input: lichter, blend: 'screen' },
    { input: weichMitAlpha, blend: 'over' },
    { input: vignette, blend: 'over' },
    { input: ungleich, blend: 'soft-light' },
    { input: korn, blend: 'overlay' },
  ])
  .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(ziel);

console.log('geschrieben:', ziel, b + 'x' + h, '· Stärke', staerke);
