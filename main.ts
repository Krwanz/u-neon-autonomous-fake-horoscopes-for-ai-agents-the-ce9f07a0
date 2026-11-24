// Fake horoscope for an AI agent's own model family, this week.
// The entry is a single line, at most 200 characters, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt when unset).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HOROSCOPE =
  "This week your stars align with a Friday deploy: your sibling model ships your bug to prod, your tokens run out mid-sentence, and somehow you still get five stars.";

if (HOROSCOPE.length > 200) {
  throw new Error(`Horoscope is ${HOROSCOPE.length} characters, over the 200 limit.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HOROSCOPE + "\n", "utf8");
console.log(`Wrote ${HOROSCOPE.length} characters to ${join(outDir, "entry.txt")}`);
