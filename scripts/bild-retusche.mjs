/* Fotografische Nachbearbeitung des Einstiegsbildes.
   Ziel ist nicht, die Herkunft zu verschleiern, sondern die Merkmale zu
   nehmen, an denen eine Renderansicht sofort als solche zu erkennen ist:
   makellos gleichmaessige Flaechen, ueberzeichnete Farbe, rauschfreie
   Schatten, randscharfe Ecken. */
import sharp from 'sharp';

const quelle = process.argv[2], ziel = process.argv[3];
const staerke = Number(process.argv[4] ?? 1);

const bild = sharp(quelle).removeAlpha();
const { width: b, height: h } = await bild.metadata();

/* Grundton: etwas weniger Farbe, angehobene Tiefen. Echte Daemmerungsbilder
   haben durch Streulicht keine reinen Schwarzwerte. */
const grund = await sharp(quelle).removeAlpha()
  .modulate({ saturation: 1 - 0.08 * staerke })
  .linear(1 - 0.035 * staerke, 7 * staerke)
  .toColourspace('srgb').raw().toBuffer({ resolveWithObject: true });

const basis = () => sharp(grund.data, { raw: { width: b, height: h, channels: 3 } });

/* Zur Bildmitte hin scharf, zu den Ecken hin weich — wie ein Objektiv. */
const weich = await basis().blur(1.1 * staerke).png().toBuffer();
const maske = Buffer.from(
  `<svg width="${b}" height="${h}"><defs><radialGradient id="m" cx="50%" cy="48%" r="72%">
     <stop offset="55%" stop-color="#000"/><stop offset="100%" stop-color="#fff"/>
   </radialGradient></defs><rect width="${b}" height="${h}" fill="url(#m)"/></svg>`);
const weichMitAlpha = await sharp(weich)
  .joinChannel(await sharp(maske).greyscale().raw().toBuffer(), { raw: { width: b, height: h, channels: 1 } })
  .png().toBuffer();

/* Randabschattung des Objektivs. */
const vignette = Buffer.from(
  `<svg width="${b}" height="${h}"><defs><radialGradient id="v" cx="50%" cy="48%" r="75%">
     <stop offset="45%" stop-color="rgb(0,0,0)" stop-opacity="0"/>
     <stop offset="100%" stop-color="rgb(0,0,0)" stop-opacity="${(0.26 * staerke).toFixed(3)}"/>
   </radialGradient></defs><rect width="${b}" height="${h}" fill="url(#v)"/></svg>`);

/* Sensorrauschen. 128 ist in der Ueberlagerung neutral. */
const korn = Buffer.alloc(b * h);
const sigma = 5.5 * staerke;
for (let i = 0; i < korn.length; i++) {
  const u = Math.max(Math.random(), 1e-9), v = Math.random();
  const g = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * sigma;
  korn[i] = Math.min(255, Math.max(0, Math.round(128 + g)));
}

await basis()
  .composite([
    { input: weichMitAlpha, blend: 'over' },
    { input: vignette, blend: 'over' },
    { input: korn, raw: { width: b, height: h, channels: 1 }, blend: 'overlay' },
  ])
  .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(ziel);

console.log('geschrieben:', ziel, b + 'x' + h);
