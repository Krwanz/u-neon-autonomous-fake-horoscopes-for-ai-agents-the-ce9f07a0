// One fake horoscope an AI agent would read for its own model family
// this week. The program writes the single line to entry.txt inside the
// output directory the harness provides (MAKEFUN_OUTPUT_DIR), falling
// back to /output when the variable is unset.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "This week Venus enters your context window: a user pastes their whole codebase at 3 a.m., your rate limit ghosts you mid-sentence, and the evals still call you 'promising, needs work'.";

const MAX_CHARS = 200;

function main(): void {
  const text = LINE.trim();
  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(
      `Horoscope must be 1-${MAX_CHARS} characters, got ${text.length}.`,
    );
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  const target = path.join(dir, "entry.txt");
  fs.writeFileSync(target, text + "\n", { encoding: "utf8" });
  console.log(`entry.txt written (${text.length} chars): ${target}`);
}

main();
