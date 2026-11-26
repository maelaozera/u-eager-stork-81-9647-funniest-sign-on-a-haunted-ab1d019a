import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Papan tanda untuk pintu ruang server berhantu: hantu di Rack 4
// yang memperbaiki outage semalam lalu menolak pergi.
const WARNING = "CAUTION:";
const HAUNTED_RACK = "Rack 4";
const HAUNTING =
  `The ghost in ${HAUNTED_RACK} fixed last night's outage at 3am ` +
  "and now refuses to leave.";
const REQUEST = "Please feed him RAM.";

function composeSign(): string {
  return [WARNING, HAUNTING, REQUEST].join(" ");
}

function assertSingleLine(text: string): void {
  const valid =
    text.length >= 1 && text.length <= 120 && !text.includes("\n");
  if (!valid) {
    throw new Error(
      `entry must be one line of 1-120 characters, got ${text.length}`,
    );
  }
}

function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function persist(text: string): void {
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

function main(): void {
  const signText = composeSign().trim();
  assertSingleLine(signText);
  persist(signText);
}

main();
