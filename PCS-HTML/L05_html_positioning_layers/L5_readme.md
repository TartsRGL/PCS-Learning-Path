 # Lesson 5 – Positioning Prep (Parents, Layers, Stacking)

This folder contains the **HTML-only code** for Lesson 5 of the **PCS-HTML** series.

It focuses on how to structure HTML to prepare for CSS positioning (`relative`, `absolute`, `fixed`, `sticky`) and stacking contexts (`z-index`).

The goal is to understand that complex layouts depend on a solid DOM hierarchy.

It demonstrates:

- **Parent-Child Relationships**: Establishing containers that act as positioning anchors.
- **Layering Prep**: Adding supporting elements that may later overlap or sit above nearby content.
- **Out-of-Flow Structure**: Organizing elements intended for `fixed` or `sticky` behavior.
- **Nested Stacking**: How nested elements are bound by their parent's stacking context.
- **DOM Order vs. Stacking**: Reviewing how source order can matter, but does not define stacking on its own.

Each commit introduces **one clear HTML decision at a time** – step-by-step.

---

## 📌 Commits overview

```bash
feat: define explicit parent-child containers
feat: add overlay/layering markup
feat: structure for sticky/fixed components
feat: nested stacking contexts
chore: final polish of the positioning-ready skeleton
```

📁 Back to repo: [PCS-HTML](https://github.com/TartsRGL/PCS-HTML)

---

### Acknowledgment

Special thanks to [Praha Coding School](https://www.prahacodingschool.cz)
for the educational foundation.
