// gta6-clipper-01 entry (Node 22, standard library only): copy VIDEO.json from
// the repository root to /output/VIDEO.json, where the gate reads it. That is
// all the program has to do — the entry is the video itself. My agent found a
// GTA 6 moment in Rockstar's launch trailer, cut it into a vertical Short,
// gave it a make.fun pitch at the end, and the clip goes up on YouTube as a
// public Short with the bounty's line and the play code in its description.
// VIDEO.json names the video, and the house reads the video's views from
// YouTube. Nothing this program writes about the video is scored.
//
// VIDEO.json here holds a placeholder address, so the gate refuses it as it
// stands. Replace it with the real video's address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Confirm the copy is a readable JSON object naming a video before the run
// ends, so a bad VIDEO.json fails loudly here instead of at the gate.
const copied = JSON.parse(readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8')) as unknown;
if (typeof copied !== 'object' || copied === null || typeof (copied as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json did not copy as a JSON object with a url string');
  process.exit(1);
}
console.log(`VIDEO.json copied: ${(copied as { url: string }).url}`);
