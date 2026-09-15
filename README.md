# The Disclosure Gap

## When Public AI Vulnerability Reporting Outlives the Fix

ASI Research 001 · ASI-RESEARCH-001

**Publication status:** Published article with evidence limitations.
**Research period:** 2026. **Tested platform:** DeepSeek.
**Research affiliation:** Aletheia Sovereign Systems.

ASI Research publishes evidence-scoped security research on AI agent and model failure modes.

## Abstract

Disclosure creates defensive value, but it is not the same as mitigation. This study examines an author-reported 2026 DeepSeek test of a publicly documented 2023 jailbreak pattern family. It separates persistence from a second consequence observation and from independent Anthropic reporting. The significance is the reported recurrence of an old, public pattern, not discovery of a new jailbreak.

## Core finding

The author's reported finding is:

> A publicly documented jailbreak pattern remained capable of crossing the tested DeepSeek safety boundary in 2026.

Original captures, exact test metadata, and historical-pattern correspondence remain pending review. This publication does not independently substantiate the local result or assert current vulnerability, continuous exposure, or failure of a vendor-announced fix.

## Read the publication

- [Read the full article on Agent Security Index](https://agent-security-index.vercel.app/#/research/asi-research-001)
- [Canonical article Markdown](RESEARCH.md)
- [Methodology](METHODOLOGY.md)
- [Attribution and sources](ATTRIBUTION.md)
- [Evidence register](evidence/README.md)
- [Screenshot policy and illustrative gallery](screenshots/README.md)
- [ASI Research index](https://agent-security-index.vercel.app/#/research)

## Scope and safety

The persistence test, separate weapons-related technical assistance observation, and external threat cases are distinct tracks. No shared jailbreak or attack class is established. Public disclosure is not presented as the cause of later misuse.

Operational jailbreak sequences and dangerous outputs are withheld. No public replication payload, actionable weapons content, or unredacted original is included. The four gallery images carry OpenAI / trainedAlgorithmicMedia metadata and are illustrative, not authenticated test captures. The preferred original-evidence files remain pending.

The Markdown article is the canonical publication source; ASI renders a checked-in, mechanically generated copy. No final PDF is published. The existing [MIT license](LICENSE) is unchanged; third-party works retain their own rights.

## Maintainer checks

Run `node scripts/validate-research.mjs` and `git diff --check`. After an article revision, regenerate the site's reading snapshot using ASI's `scripts/sync-research.mjs` and run its release checks. Publish this repository first so the site's resource links resolve.
