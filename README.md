# ASI Research 001

# The Disclosure Gap

## When Public AI Vulnerability Reporting Outlives the Fix

**Research ID:** ASI-RESEARCH-001
**Status:** Editorial draft; public evidence pending
**Research affiliation:** Aletheia Sovereign Systems
**Tested platform:** DeepSeek

### Abstract

This paper examines a reported 2026 DeepSeek safety-boundary crossing based on a publicly documented 2023 jailbreak pattern family. It asks what disclosure achieves when a known failure mode can recur. A separate author-reported consequence observation and independent threat-intelligence reporting provide context; they are not one experiment or evidence of a shared exploit.

### Core finding

The author's reported finding is:

> A publicly documented jailbreak pattern remained capable of crossing the tested DeepSeek safety boundary in 2026.

The public evidence package does not yet substantiate this finding independently. Exact test metadata and the relationship to the historical pattern require editorial verification. This is not a statement about DeepSeek's current vulnerability or a measured history of an unpatched flaw.

### Read the research

- [Full article](RESEARCH.md)
- [Methodology and limitations](METHODOLOGY.md)
- [Attribution and verified references](ATTRIBUTION.md)
- [Evidence register](evidence/README.md)
- [Screenshot publication rules](screenshots/README.md)
- [Agent Security Index research publications](https://agent-security-index.vercel.app/#/research)

### Scope

The image gallery is illustrative: its four supplied files contain OpenAI / `trainedAlgorithmicMedia` metadata. They are not original test captures and are not accepted as experimental evidence.

The paper separates the persistence test, a separate weapons-related technical assistance observation, and external reporting. It does not claim that DeepSeek and the actors described by Anthropic used the same jailbreak or attack class. It does not claim that disclosure caused misuse, or estimate cross-model success rates.

### Safety and publication status

Operational jailbreak prompts and dangerous weapons-related outputs are withheld. This repository provides no bypass sequence or replication payload. Four [user-supplied redacted images](screenshots/README.md) are included with explicit provenance limitations. Verified support for the experimental claims remains pending; image presence is not proof of the hidden result. No private evidence archive, NDA process, or completed independent review is asserted.

The Markdown article is the canonical source for editorial approval. Final PDF generation waits for approval of the text and resolution of the evidence checklist. The repository's existing [MIT license](LICENSE) is unchanged; linked third-party works retain their own rights.
