// The Robot Pickup Line Championship — one original line.
// A robot runs ten thousand simulations of the conversation
// and still forgets the simplest thing: how to say hello.
// The joke only works because it is a machine: no human
// rehearses a greeting ten thousand times and still blanks.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I ran 10,000 simulations of this conversation and in every one I still forgot how to say hello.";

// One line, one pickup line: the kit gate only accepts 1 to 200
// characters, counted as code points, so the check below mirrors
// it exactly. Ten thousand simulations, one forgotten hello —
// the line is 95 characters, well inside the cap, and every
// word earns its place: the scale, the failure, the greeting.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`pickup line must be 1-200 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
// The line goes out exactly as written: no trailing newline,
// no extra whitespace — the gate counts the file as it stands.
console.log(`wrote pickup line to ${entryPath} (${charCount} characters)`);
