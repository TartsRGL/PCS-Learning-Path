# L02 — DOM Selection & Meaning

## Lesson Goal

Select the required Project Discovery elements from the DOM using semantic `data-js` hooks.

L02 introduces a stable contract between HTML and JavaScript. The lesson adds named hooks, collects DOM references in one place and stops initialisation safely when a required element is missing.

---

## Why This Layer Matters

JavaScript should not depend on visual styling or fragile selectors when it needs to control behaviour.

- **Semantic hooks:** `data-js` attributes describe JavaScript responsibility without depending on CSS classes.
- **Centralized references:** `getDomReferences()` keeps required DOM elements in one readable object.
- **Required-element guard:** `isDomValid()` prevents the application from continuing when an expected element is missing.
- **Preparation for interaction:** Later lessons can attach event listeners to known and verified elements.

L02 creates the DOM contract only. It does not yet respond to user actions.

---

## Commit Plan

| Commit | Added capability |
|--------|------------------|
| C1 | Add semantic `data-js` hooks to the required HTML elements. |
| C2 | Collect required DOM references in `getDomReferences()`. |
| C3 | Add `isDomValid()` to guard required DOM elements before initialisation continues. |
| C4 | Finalize and document the DOM-selection rules. |

---

## Lesson Boundaries

L02 is limited to DOM selection and required-element guarding.

It does not include:

- user interaction event listeners such as `input`, `change` or `submit`,
- reading form values,
- application state,
- validation,
- rendering or DOM output updates,
- asynchronous behaviour,
- API calls,
- `console.log`,
- CSS changes.

`DOMContentLoaded` remains only the inherited bootstrap event from L01.

---

## Final Result

At the end of L02:

- required HTML elements are marked with semantic `data-js` hooks,
- JavaScript selects those elements from the application root,
- required references are stored in a centralised `dom` object,
- `isDomValid()` checks that the required elements exist,
- initialisation stops safely when the DOM contract is incomplete,
- no user-facing interaction has been added yet.

The project now has a stable DOM reference layer that later lessons can use for events, state and rendering.

---

## How to Test the Final Snapshot

1. Open:

   `PCS-JS/L02_js_dom_selection_meaning/L02_C4.html`

2. Open the browser developer tools and go to **Sources**.

3. Find `L02_C4.js`.

4. Place a breakpoint immediately after:

   ```js
   const dom = getDomReferences(appRoot);
   ```

5. Reload the page and inspect the `dom` object.

6. Verify that:

   - `form` references the Project Discovery form,
   - `projectName` references the project-name input,
   - `projectGoal` references the project-goal textarea,
   - `targetUser` references the target-user input,
   - `coreProblem` references the core-problem textarea,
   - `submitButton` references the form submit button.

7. Continue execution and verify that the page loads without console errors.

8. Confirm that no form interaction, validation, state update or rendering occurs in this lesson.

---

## Next Lesson

L03 will use the verified DOM references to introduce events and user intent.
