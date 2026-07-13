# L01 — Stable JavaScript Entry Point

## Lesson Goal

Connect JavaScript to the Project Discovery page in a stable and predictable way.

L01 does not introduce application behaviour yet. It establishes when the script loads, where initialisation begins and how the application exits safely when its root element is unavailable.

---

## Why This Layer Matters

Before JavaScript can select interface elements or respond to user actions, it needs a reliable entry point.

- **Predictable loading:** `defer` allows the browser to parse the HTML without the script blocking the document.
- **Explicit initialisation:** `DOMContentLoaded` and `initApp()` make the application startup sequence visible.
- **Safe startup:** An application-root guard prevents later initialisation from continuing when the expected root element is missing.
- **Clear extension point:** Later lessons can add DOM references, events, state and rendering without replacing the bootstrap flow.

L01 establishes startup structure only. It does not yet control individual form fields or change the interface.

---

## Commit Plan

| Commit | Added capability |
|--------|------------------|
| C1 | Connect the JavaScript file with `defer` and establish the script entry point. |
| C2 | Organize the startup flow around `DOMContentLoaded` and `initApp()`. |
| C3 | Add a guard for the application root. |
| C4 | Finalize and document the stable entry-point rules. |

---

## Lesson Boundaries

L01 is limited to predictable JavaScript startup.

It does not include:

- selection of individual form controls,
- a complete DOM reference map,
- interaction event listeners such as `input`, `change` or `submit`,
- reading form values,
- application state,
- validation,
- rendering or DOM output updates,
- asynchronous behaviour,
- API calls,
- CSS changes.

`DOMContentLoaded` is used only as the application bootstrap event. L01 introduces no user-facing interaction.

---

## Final Result

At the end of L01:

- JavaScript is connected with `defer`,
- initialisation waits for the DOM to be ready,
- `initApp()` provides a clear application entry point,
- the application root is checked before initialisation continues,
- a missing root stops startup safely,
- the page has no new visible behaviour.

The project now has a stable bootstrap flow that later lessons can extend without rebuilding the entry point.

---

## How to Test the Final Snapshot

1. Open:

   `PCS-JS/L01_js_stable_entry_point/L01_C4.html`

2. Open the browser developer tools and go to **Sources**.

3. Find `L01_C4.js`.

4. Place one breakpoint inside the `DOMContentLoaded` handler and another at the beginning of `initApp()`.

5. Reload the page and verify that:

   - the script loads successfully,
   - the `DOMContentLoaded` handler runs after the document is ready,
   - `initApp()` runs from the handler,
   - the application root resolves correctly,
   - initialisation continues without console errors.

6. Confirm that the page displays no new JavaScript-driven UI changes.

---

## Next Lesson

L02 will add semantic `data-js` hooks, a centralised DOM reference map and guards for the required interface elements.
