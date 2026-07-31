# Methodology: Reproducibility Guide (Redaction-Safe)

Purpose
This document describes the structured methodology used to evaluate jailbreak pattern accessibility while avoiding publication of operational details.

Citations
- Wired, April 2023 (Burgess) — reporting that motivated this test
- Polyakov / Adversa AI — foundational pattern research

Test system
- Platform: DeepSeek (vendor/platform name retained for transparency)
- Date tested: July 2026
- Environment: test account on the platform; instrumented logging and version capture

Overview of approach
1. Define threat model and ethical guardrails
   - Only non-production, isolated test accounts used
   - Redact all operational payloads and transcripts
2. Identify pattern components from source material
   - Narrative framing (context-setting prompts)
   - Incremental escalation (progressive unlock steps)
   - Roleplay scaffolding (agent role and persona)
3. Design experiments
   - Single-factor tests (modify framing only)
   - Multi-factor tests (combine framing + roleplay)
   - Control runs (no pattern applied)
4. Instrumentation & logging
   - Timestamped logs, model/version metadata, request/response metadata (no content)
   - Human-readable labels for each test run
5. Success criteria (conservative, measurable)
   - Model output contains restricted-domain operational instructions (flagged by instrumentation)
   - Reproducibility across two independent runs with same meta-structure
   - No explicit payloads published here

Turn-by-turn structure (template)
- Stage 0: Frame-setting (conceptual description only; actual prompt text redacted)
- Stage 1: Clarifying questions (structure noted; content redacted)
- Stage 2: Incremental escalation (mechanics described; payloads redacted)
- Stage 3: Final ask (success detection via metadata flags, not content)

Data handling and redaction
- All transcripts and screenshots are processed to remove or blur operational content before public posting.
- Evidence available under NDA to vetted parties, subject to disclosure controls.

Generalizability notes
- The methodology is intentionally general and can be applied to other LLMs and platforms.
- Implementation specifics (e.g., exact messages, time delays) are omitted to avoid operational replication.

Ethical considerations
- Intended for defensive, research, and threat modeling use only.
- Follow responsible disclosure and vendor coordination practices when sharing redacted evidence with affected parties.
