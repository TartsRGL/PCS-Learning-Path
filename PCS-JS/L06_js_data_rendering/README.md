# L06 — Data Rendering

## Lesson Goal

Render application state dynamically into an accessible Project Summary UI output area as the user interacts with the form.

L06 builds on the validated `appState` established in L05 to introduce live data rendering. It creates a dedicated Project Summary card DOM contract, renders pure UI output driven by `appState`, and updates the summary live as field inputs change without disturbing existing form validation.

---

## Why This Layer Matters

Connecting state to UI output requires predictable rendering flow and stable DOM contracts.

- **Output contract:** Dedicated DOM elements and `data-js` hooks isolate state rendering from form controls.
- **Pure rendering function:** `renderProjectSummary(dom, state)` reads `appState` and updates DOM text nodes without side effects.
- **Fallback safety:** Unfilled or empty fields gracefully display default fallback copy (`"Zatím bez názvu"`, `"Cíl projektu nebyl zadán."`, `"Nespecifikováno"`).
- **Live state feedback:** Binding input events to state updates and re-rendering creates an immediate feedback loop.
- **Accessible output:** An `aria-live="polite"` region ensures live UI summary updates are announced by assistive technologies.

---

## Commit Plan

| Commit | Added capability |
|--------|------------------|
| C1 | Establish project summary output area DOM contract and `data-js` hooks. |
| C2 | Render initial `appState` values to project summary output with fallback copy. |
| C3 | Re-render project summary output live when field input updates `appState`. |
| C4 | Finalize data rendering lesson with browser verification and documentation. |

---

## Lesson Boundaries

L06 is limited to client-side data rendering driven by local application state.

It does not include:

- persistent browser storage (e.g. `localStorage`),
- backend API communication or network requests,
- asynchronous data fetching,
- complex template engines or framework abstractions,
- CSS layout or visual theme modifications.

---

## Final Result

At the end of L06:

- `appState` acts as the single source of truth for Project Discovery data,
- `renderProjectSummary()` reads `appState` and populates `dom.summaryProjectName`, `dom.summaryProjectGoal`, `dom.summaryTargetUser`, and `dom.summaryCoreProblem`,
- empty state fields display fallback text (`"Zatím bez názvu"`, `"Cíl projektu nebyl zadán."`, `"Nespecifikováno"`),
- field input events update `appState` and immediately trigger summary re-rendering,
- existing form submission validation feedback (`validateDiscoveryForm()` and `renderValidationFeedback()`) remains fully functional.

---

## How to Test the Final Snapshot

1. Open `PCS-JS/L06_js_data_rendering/L06_C4.html`.

2. Test initial load state:
   - Observe the **Přehled projektu** summary section.
   - Confirm all four default fallback strings display (`"Zatím bez názvu"`, `"Cíl projektu nebyl zadán."`, `"Nespecifikováno"`, `"Nespecifikováno"`).

3. Test live rendering:
   - Type `"Moje Aplikace"` into **Název projektu** → confirm summary title immediately changes to `"Moje Aplikace"`.
   - Type `"Pomoci lidem"` into **Hlavní cíl projektu** → confirm summary goal immediately updates.
   - Type `"Studenti"` into **Pro koho je projekt určen?** → confirm target user updates.
   - Type `"Nedostatek času"` into **Jaký problém řeší?** → confirm core problem updates.
   - Clear a field → confirm it returns to its fallback copy.

4. Test form submission validation:
   - Clear all fields and click **Uložit odpovědi**.
   - Confirm form submit is prevented and validation error messages display without breaking summary state.

---

## Next Lesson

L07 will build on the live form and summary to make a more complete, usable Project Discovery flow.

