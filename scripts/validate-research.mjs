import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const documents = ["README.md", "RESEARCH.md", "METHODOLOGY.md", "ATTRIBUTION.md", "evidence/README.md", "screenshots/README.md"];
let links = 0;
for (const file of documents) {
  const text = readFileSync(resolve(root, file), "utf8");
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    if (/^https:\/\//.test(match[1])) { assert.doesNotThrow(() => new URL(match[1])); continue; }
    assert(existsSync(resolve(root, dirname(file), match[1])), `${file}: broken ${match[1]}`);
    links++;
  }
}
const article = readFileSync(resolve(root, "RESEARCH.md"), "utf8");
assert.deepEqual([...article.matchAll(/^## (\d+)\./gm)].map(m => Number(m[1])), Array.from({length:11},(_,i)=>i+1));
assert(article.includes("The local findings remain author-reported"));
assert(article.includes("There is no evidence that Anthropic's actors used the jailbreak tested here"));
assert(article.includes("Known does not mean fixed. Published does not mean mitigated. Refusal alone is not a security boundary."));
assert(!/<iframe|<script|```/.test(article));
const illustrations = readdirSync(resolve(root,"screenshots")).filter(f => /^supplied-redacted-.*\.png$/.test(f));
for (const file of illustrations) assert.equal(readFileSync(resolve(root,"screenshots",file)).subarray(0,8).toString("hex"), "89504e470d0a1a0a");
console.log(`PASS: 11 article sections, ${links} local links, ${illustrations.length} illustrative PNGs; original evidence remains pending.`);
