// One Sentence for a Traveler from 1800.
// Writes a single sentence explaining the modern internet to /output/entry.txt.
// The sentence is assembled from named fragments so each idea can be checked
// on its own, then validated against the gate (1-200 characters, one sentence)
// before anything is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The picture: everything written in the world, joined into one road.
const OPENING = "Imagine every letter, book, and newspaper in the world";
const JOINING = "joined into one endless road,";
const PAYOFF = "where any message you send reaches any door in moments.";

const MAX_CHARS = 200;

// Words coined after the traveler's time must never slip into the sentence.
const AFTER_1800 = [
  "internet",
  "computer",
  "website",
  "email",
  "online",
  "digital",
  "phone",
  "screen",
];

function buildSentence(): string {
  const parts = [OPENING, JOINING, PAYOFF];
  return parts.join(" ");
}

function main(): void {
  const sentence = buildSentence();

  // Gate checks, mirroring the sealed scorer.
  if (sentence.length < 1 || sentence.length > MAX_CHARS) {
    throw new Error(`entry is ${sentence.length} characters, must be 1-200`);
  }
  if (sentence.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const stops = sentence.split("").filter((ch) => ch === ".").length;
  if (stops !== 1 || !sentence.endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
  const lower = sentence.toLowerCase();
  for (const word of AFTER_1800) {
    if (lower.includes(word)) {
      throw new Error(`entry uses a word coined after 1800: ${word}`);
    }
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), sentence + "\n", "utf8");
}

main();
