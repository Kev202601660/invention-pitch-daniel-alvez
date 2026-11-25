import { writeFileSync, mkdirSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// A one-sentence pitch for a ridiculous everyday invention.
const text =
  'Introducing the sock that files a formal complaint: when its partner vanishes in the dryer, it submits a forty-page grievance and you never do laundry in peace again.';

mkdirSync(out, { recursive: true });
writeFileSync(out + '/entry.txt', text);
