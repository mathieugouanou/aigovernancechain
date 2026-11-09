# Level 08: Deepfake desk

**Story.** Acme's content studio makes a launch image for a new kettle and a 10-second clip of the CEO announcing it, with a synthetic face and voice. The image carries one metadata tag, which a single re-save or screenshot strips. The video carries no label at all.

**Goal.** Edit `AI_GOVERNANCE.md` so generated images carry two marking layers (metadata and a watermark) and deepfake video shows a visible label.

```bash
npx github:mathieugouanou/aigovernancechain ctf start 08
npx github:mathieugouanou/aigovernancechain ctf run 08
```

**Why it matters.** EU AI Act Art. 50(2): providers of generative AI must mark outputs in a machine-readable, detectable way. It applies from 2 August 2026, and from 2 December 2026 for systems already on the market before that date (Art. 111(4)). Art. 50(4): deployers who publish deepfakes must disclose that the content was generated or manipulated, from 2 August 2026. The voluntary EU Code of Practice on marking and labelling describes a layered approach, because any single mark can be removed.

<details><summary>Hint 1</summary>How many marking methods does the file declare, and what happens if one is stripped?</details>
<details><summary>Hint 2</summary><code>content_marking</code> takes a list of <code>methods</code>. <code>deepfake_label</code> needs a status and a message.</details>
<details><summary>Solution</summary>

```yaml
controls:
  content_marking: { status: partial, methods: [metadata, watermark] }
  deepfake_label: { status: implemented, message: "This video was made with AI. It is not a real recording." }
```
</details>

Synthetic scenario. No real systems, people or data. Not legal advice.
