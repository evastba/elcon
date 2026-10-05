/* Stellt die gelieferte Logodatei frei: Der weisse Hintergrund wird
   durchsichtig, die weissen Quadrate der Bildmarke bleiben deckend.

   Ein einfacher Schwellwert reicht dafuer nicht — er traefe beides. Deshalb
   werden alle zusammenhaengenden hellen Bereiche gesammelt und danach
   unterschieden, was sie umgibt: Was ringsum vom Orange des Zeichens
   eingefasst ist und die Groesse eines Rasterfeldes hat, gehoert zum Logo.
   Die Punzen der Buchstaben liegen in Gruen oder sind klein und werden
   durchsichtig, damit das Logo auch auf farbigem Grund stimmt.

   Aufruf: node scripts/logo-freistellen.mjs <quelle> <ziel> */
import sharp from 'sharp';
import fs from 'node:fs';

const quelle = process.argv[2], ziel = process.argv[3];

const getrimmt = await sharp(quelle).trim({ threshold: 12 }).png().toBuffer();
const { data, info } = await sharp(getrimmt).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const B = info.width, H = info.height, N = B * H;

const rgb = (i) => [data[i * 3], data[i * 3 + 1], data[i * 3 + 2]];
const hell = (i) => Math.min(...rgb(i)) > 225;
/* Farbort statt fester Schwellen: Das trifft auch die weichen Mischpixel an
   den Kanten. */
const istOrange = (i) => { const [r, g, b] = rgb(i); return r > g && g > b && r - b > 60 && g - b > 20; };
const istGruen = (i) => { const [r, g, b] = rgb(i); return g > r && g > b && g - r > 25; };

const gruppe = new Int32Array(N).fill(-1);
const gruppen = [];
for (let s = 0; s < N; s++) {
  if (gruppe[s] !== -1 || !hell(s)) continue;
  const id = gruppen.length, feld = [];
  let orange = 0, gruen = 0, randBeruehrt = false;
  const stapel = [s]; gruppe[s] = id;
  while (stapel.length) {
    const i = stapel.pop(); feld.push(i);
    const x = i % B, y = (i / B) | 0;
    if (x === 0 || y === 0 || x === B - 1 || y === H - 1) randBeruehrt = true;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= B || ny >= H) continue;
      const j = ny * B + nx;
      if (hell(j)) { if (gruppe[j] === -1) { gruppe[j] = id; stapel.push(j); } }
      else if (istOrange(j)) orange++; else if (istGruen(j)) gruen++;
    }
  }
  gruppen.push({ feld, orange, gruen, randBeruehrt });
}

const behalten = new Uint8Array(N);
let felder = 0;
for (const g of gruppen) {
  const imZeichen = !g.randBeruehrt && g.gruen === 0 && g.orange > 50 && g.feld.length > 3000;
  if (imZeichen) { felder++; for (const i of g.feld) behalten[i] = 1; }
}

const rgba = Buffer.alloc(N * 4);
for (let i = 0; i < N; i++) {
  const [r, g, b] = rgb(i);
  rgba[i * 4] = r; rgba[i * 4 + 1] = g; rgba[i * 4 + 2] = b;
  if (hell(i) && !behalten[i]) { rgba[i * 4 + 3] = 0; continue; }
  const x = i % B, y = (i / B) | 0;
  let amRand = false;
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const nx = x + dx, ny = y + dy;
    if (nx < 0 || ny < 0 || nx >= B || ny >= H) continue;
    const j = ny * B + nx;
    if (hell(j) && !behalten[j]) amRand = true;
  }
  rgba[i * 4 + 3] = amRand ? Math.max(0, Math.min(255, Math.round((255 - Math.min(r, g, b)) * 1.6))) : 255;
}

await sharp(rgba, { raw: { width: B, height: H, channels: 4 } }).png({ compressionLevel: 9 }).toFile(ziel);
console.log(`${ziel}: ${B}×${H}, ${Math.round(fs.statSync(ziel).size / 1024)} KB · ${felder} weiße Felder im Zeichen erhalten`);
