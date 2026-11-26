import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest sign for the door of a haunted server room:
// a ghost in Rack 4 who fixed last night's outage and moved in.
const ENTRY =
  "CAUTION: The ghost in Rack 4 fixed last night's outage at 3am and now refuses to leave. Please feed him RAM.";

const text = ENTRY.trim();
if (text.length < 1 || text.length > 120 || text.includes("\n")) {
  throw new Error(
    `entry must be one line of 1-120 characters, got ${text.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
