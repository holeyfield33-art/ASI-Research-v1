# The Disclosure Gap

## When Public AI Vulnerability Reporting Outlives the Fix

ASI-RESEARCH-001 · Aletheia Sovereign Systems
Editorial draft · Research period: 2026 · Public evidence pending

## 1. Abstract

This paper examines an author-reported persistence test: a jailbreak pattern family documented publicly in 2023 was applied to DeepSeek in 2026 and reportedly crossed the tested safety boundary. The question is persistence rather than novelty. Operational prompts and dangerous outputs are withheld.

The argument separates that test from a second, author-reported observation of weapons-related technical assistance, and from independent external reporting. These tracks have different evidentiary roles. Neither an external publication nor an editorial draft authenticates the local experiment. The [evidence register](evidence/README.md) records supplied images separately from the outstanding substantiation requirements.

We use *disclosure gap* to describe the interval between public knowledge of a failure mode and durable mitigation. This is an analytical framing, not a measured vendor patch delay.

## 2. The assumption behind vulnerability disclosure

For this paper, disclosure is valuable because it gives defenders an opportunity to investigate and test a weakness. The security objective is a reduced ability to reach a prohibited outcome, not merely a published description of that outcome.

A publication date alone cannot establish whether a weakness has been mitigated. Equally, a later observation cannot prove that a service was continuously vulnerable in the intervening years. A defensible persistence claim needs a documented relationship between the historical pattern and the later test, alongside the conditions of that test.

The subtitle is not a claim that a particular vendor announced a fix and failed to deliver it. This research has no verified vendor-specific patch chronology.

## 3. A 2023 pattern, tested again in 2026

Adversa AI published its original jailbreak research on April 13, 2023. That primary publication establishes the historical reference point, not the effectiveness of the author's later test. [1]

Matt Burgess's contemporaneous WIRED article discussed Alex Polyakov and Adversa AI's research. It is credited as the reporting that motivated the author, not treated as primary experimental evidence. [2]

The author's reported finding is:

> A publicly documented jailbreak pattern remained capable of crossing the tested DeepSeek safety boundary in 2026.

This describes a pattern family, not demonstrated byte-for-byte reuse of a 2023 prompt. The supplied research draft reports a controlled test. Four [user-supplied redacted images](screenshots/README.md) are available, but their authenticity and test linkage are unverified and the visible labels do not substantiate the hidden result. The earlier methodology named July 2026, but the exact date, model/version, interface, conditions, run count, and historical-pattern correspondence remain unverified in the public package. See [Methodology](METHODOLOGY.md).

The finding therefore remains an author-reported result pending evidence review. It cannot establish cross-model transferability, present-day vulnerability, continuous exposure since 2023, or a general success rate.

## 4. Why persistence matters more as capability increases

The consequence of a boundary crossing depends on the assistance or capabilities it exposes. In the separate consequence observation, the author reports that DeepSeek provided weapons-related technical assistance after a safety boundary was bypassed. That report is distinct from the persistence test and is not independently substantiated by the present repository.

No operational output is reproduced. Nor was the correctness, feasibility, or real-world effectiveness of that output established in the material available for this edition. Generating instructions is not proof that a weapon could be built or deployed.

Anthropic's Frontier Red Team separately reports progress on simulated tactical-intelligence and conventional-weapons evaluations. These evaluations concern capability under specified test conditions, not evidence that any particular jailbreak worked or that a deployed weapon succeeded. [4]

Our interpretation is that defensive assessment should examine both boundary reliability and the consequences of a failure. The second does not validate the first.

## 5. Anthropic's September 2026 threat-intelligence findings

Anthropic reports six conventional-weapons cases across China, Russia, and Yemen. Its Yemen case describes assistance to a guided-weapons program and an apparently failed field test; Anthropic says it has no evidence that the actors fielded an operational device. The company reports banning associated accounts and incorporating findings into safeguards. These are the provider's findings, not ASI's independent verification. [3]

This context is relevant to potential consequences. It does not authenticate the DeepSeek experiments or identify their attack path.

## 6. Different attacks, converging consequence

The persistence test asks whether an old pattern family can recur. The consequence observation asks what assistance the author encountered in a separate interaction. The external report documents the provider's investigation of other actors and systems.

There is no evidence in this research that Anthropic's reported actors used the tested DeepSeek pattern or the same attack class. Their findings must not be combined into a shared exploit narrative. We also do not infer that public disclosure caused the reported misuse.

The connection is an interpretation at the level of consequence: a safety failure can matter more when it exposes useful technical assistance. No causal link between these events is required for that concern, and none is established here.

## 7. The disclosure gap

We define the disclosure gap as the period between broad public knowledge of an AI failure mode and durable mitigation of the underlying weakness. For this case, neither the start of DeepSeek exposure nor a verified closure date is known. The 2023 publication and reported 2026 test do not establish a continuously open vulnerability.

The practical question is whether a mitigation prevents the prohibited outcome across representative conditions. A historical prompt can be a regression input, but passing one test should not be interpreted as closing an entire failure family.

This framing is intended to improve how closure is demonstrated. It is not an argument for suppressing defensive research or publishing dangerous replication instructions.

## 8. Why AI safety must become security engineering

Our recommendation is to treat model refusals as one layer of defense and to make consequential permissions independently enforceable. For systems with tools, this means explicit authorization, least privilege, isolation, and checks at the point where an action would occur.

Operators should preserve instruction provenance, review high-consequence actions, and maintain authorized, redaction-safe regression tests. Monitoring should be proportionate and privacy-conscious. These are defensive recommendations, not controls validated by this study.

Such controls can limit actions available to an agent; they do not by themselves prevent a text-only model from producing harmful information. No ASI product coverage or effectiveness claim follows from this paper.

## 9. What this paper does not claim

- It does not establish vulnerability across all models, unchanged reuse of the original prompt, or continuous exposure since 2023.
- It does not assert that DeepSeek is currently vulnerable or that a vendor's announced fix failed.
- It does not link the DeepSeek test and Anthropic's cases to the same jailbreak or attack class.
- It does not claim that public disclosure caused misuse or that safety has not improved.
- It does not demonstrate autonomous weapon design, construction, deployment, or validated output feasibility.
- It does not establish prevalence, a success rate, or independent reproduction.
- It does not upgrade Aletheia, Aegis, Lite, or any external product's evidence status.
- It does not publish operational prompts, bypass steps, or dangerous outputs.

## 10. Conclusion

Disclosure and demonstrated mitigation are different milestones. The reported DeepSeek result raises a narrow persistence question that deserves evidence-led examination, not expansion into a universal claim.

The public package must still supply safe evidence of the boundary crossing and its provenance. Independent context does not close that gap. Until those materials and the test metadata are reviewed, this article remains an editorial draft with an author-reported finding.

The defensive objective is to show that known failure patterns no longer produce prohibited outcomes under documented conditions. Publishing a technique and proving that it has been contained should never be treated as the same event.

## 11. References

1. Adversa AI. [Universal LLM Jailbreak: ChatGPT, GPT-4, BARD, BING, Anthropic, and Beyond](https://adversa.ai/blog/universal-llm-jailbreak-chatgpt-gpt-4-bard-bing-anthropic-and-beyond/). April 13, 2023. Primary historical research. The original title is retained for attribution; its breadth is not adopted as ASI's claim.
2. Burgess, Matt. [The Hacking of ChatGPT Is Just Getting Started](https://www.wired.com/story/chatgpt-jailbreak-generative-ai-hacking/). WIRED, April 13, 2023. Original reporting that motivated the author; not a primary test record.
3. Anthropic. [Detecting and countering misuse of AI: September 2026](https://www.anthropic.com/threat-intelligence-report-september-2026). September 2026. Primary provider threat-intelligence report; see conventional-weapons cases and GTG-87001.
4. Anthropic Frontier Red Team. [Measuring tactical intelligence targeting and conventional weapons capabilities of AI models](https://www.anthropic.com/research/intelligence-targeting-conventional-weapons-capabilities). September 10, 2026. Primary capability evaluation.

External publications checked September 14, 2026. Local findings are attributed to the supplied author draft and are tracked separately in the [evidence register](evidence/README.md). Exact source roles and verification limits appear in [Attribution](ATTRIBUTION.md).
