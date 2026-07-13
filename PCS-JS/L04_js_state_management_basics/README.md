# L04 — State Management Basics

## Lesson Goal

Introduce `appState` as the internal source of truth for the Project Discovery form.

The data flow in this lesson is intentionally small and explicit:

- user input produces an `input` event,
- `fieldIntent` identifies the edited discovery field,
- the field intent maps to a matching `appState` key,
- the raw `field.value` updates only that state property.

---

## Why This Layer Matters

The DOM is the interaction surface, while `appState` stores the application data used by later layers.

- **Clear data ownership:** Form values are stored in one explicit object instead of being treated as scattered DOM state.
- **Semantic state keys:** camelCase state properties remain independent from hyphenated `data-js` hook names.
- **Predictable updates:** Each edited field maps to one matching property in `appState`.
- **Preparation for later layers:** Validation and rendering can later read from one consistent source of truth.

L04 introduces state storage only. It does not yet validate or render that state.

---

## Commit Plan

| Commit | Added capability |
|--------|------------------|
| C1 | Introduce the initial `appState` object as the application source of truth. |
| C2 | Map `fieldIntent` values to matching `appState` keys. |
| C3 | Read `field.value` and store it in the corresponding state property. |
| C4 | Finalize and document the state-management rules. |

---

## Lesson Boundaries

L04 is limited to basic application-state management.

It does not include:

- validation,
- error or success messages,
- rendering state into the page,
- DOM output updates,
- mutation of `submissionStatus`,
- asynchronous behaviour,
- API calls,
- `console.log`,
- CSS.

`submissionStatus` exists in the initial state but remains `'idle'` throughout L04.

---

## Final Result

At the end of L04:

- `appState` stores the current Project Discovery form values,
- discovery-field intent maps to semantic camelCase state keys,
- each input event updates only the matching state property,
- submit still prevents the default page reload,
- validation, feedback and rendering remain outside this lesson.

The application now has a small internal source of truth that later lessons can validate and render.

---

## How to Test the Final Snapshot

1. Open:

   `PCS-JS/L04_js_state_management_basics/L04_C4.html`

2. Open the browser developer tools and go to **Sources**.

3. In `L04_C4.js`, place a breakpoint immediately after:

   ```js
   appState[stateKey] = fieldValue;
   ```

4. Type into each discovery field.

5. Verify that:
   - `fieldIntent` matches the edited `data-js` hook,
   - `stateKey` matches the corresponding camelCase `appState` property,
   - `fieldValue` contains the raw field value,
   - `appState` updates only the matching property.

6. Submit the form and verify:
   - the page does not reload,
   - `submissionStatus` remains `'idle'`,
   - the console stays free of errors.

---

## Next Lesson

L05 will use the application state to introduce form validation, accessible feedback and submission status.