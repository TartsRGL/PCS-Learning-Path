# Lesson 16 – CSS Architecture & Organization

This folder contains the HTML and CSS code for **Lesson 16** of the *PCScss* series.

It demonstrates:

- A **scalable CSS architecture** based on responsibility separation.
- Clear distinction between **Base**, **Layout**, **Components**, and **Utilities**.
- The use of **naming conventions** (`l-`, `c-`, `u-`) for predictability.
- Introducing **design tokens** via CSS custom properties.
- Preparing CSS for future growth (SCSS, theming, refactoring).

Each commit adds one architectural layer step-by-step.

---

## 📌 Commits overview

```bash
git commit -m "feat: Add base HTML structure for blog layout"
git commit -m "feat: Introduce layout namespace (header, main, footer)"
git commit -m "refactor: Separate content and sidebar layout regions"
git commit -m "feat: Establish core layout rules (flex, widths, spacing)"
git commit -m "feat: Add utility helper classes for spacing and alignment"
git commit -m "feat: Introduce component base styles (nav, article, sidebar)"
git commit -m "feat: Add design tokens and base typography via CSS variables"
git commit -m "docs: Add README.md with architecture overview"
```

---

## 🧠 Key learning outcome

Lesson 16 is intentionally **not about visual design**.

The main takeaway is understanding **where styles belong** and **why**:

- Layout controls structure, not appearance.
- Components define internal rhythm, not positioning.
- Utilities remain explicit and single-purpose.
- Design decisions are deferred until the architecture is stable.

A visually simple result is a **correct and desired outcome**.

---

## 🚀 What’s next

- Apply this architecture in real projects
- Extend it with SCSS modules
- Reuse it in **PCShtml**
- Add design safely on top of a solid foundation

---

📁 Back to repo: [PCS-CSS](https://github.com/TartsRGL/PCS-Learning-Path/tree/work/pcs-learning-path/PCS-CSS)

---

## 🙏 Acknowledgment

Special thanks to [Praha Coding School](https://prahacoding.cz/) and  
[Mr. Wernerdweight](https://github.com/wernerdweight) for their guidance and inspiration.
