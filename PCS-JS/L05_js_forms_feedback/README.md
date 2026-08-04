# L05 — Forms & Feedback

## Lesson Goal

Add state-driven validation, accessible error communication, and form feedback to the Project Discovery form.

L05 connects `appState` with accessible feedback. On submit, the app evaluates a pure validation model, updates `submissionStatus` to `'invalid'` or `'ready'`, and renders targeted error messages and ARIA attributes without reloading the page.

---

## Why This Layer Matters

Validating input and communicating form status requires separating state rules from DOM updates.

- **Separation of concerns:** A pure validation function inspects `appState` without mutating the DOM.
- **Trimmed validation safety:** Validation checks trimmed strings without modifying raw input values typed by the user.
- **Accessible error communication:** Associating field errors via `aria-describedby` and setting `aria-invalid` allows screen readers to report invalid inputs.
- **Polite status feedback:** An `aria-live="polite"` element informs users of overall submission status.
- **State-driven submission flow:** `submissionStatus` reflects whether form data is `'invalid'` or `'ready'`.

---

## Commit Plan

| Commit | Added capability |
|--------|------------------|
| C1 | Establish accessible feedback and field-error DOM elements contract. |
| C2 | Implement a pure validation model for `appState` and update `submissionStatus` on submit. |
| C3 | Render field error messages, clear stale errors, update `aria-invalid` states, and show form feedback. |
| C4 | Add valid-submission success feedback when `submissionStatus` is `'ready'`. |

---

## Lesson Boundaries

L05 is limited to client-side validation logic and accessible interface feedback.

It does not include:

- backend or API submission,
- asynchronous behaviour,
- persistent browser storage,
- resetting form inputs or clearing typed values,
- CSS styling or visual layout changes,
- new HTML structural elements.

Form submission prevents default page reloading and handles feedback in local state.

---

## Final Result

At the end of L05:

- `appState` maintains raw user input while `validateDiscoveryForm()` evaluates trimmed values for `projectName`, `projectGoal`, `targetUser`, and `coreProblem`,
- submit intent updates `appState.submissionStatus` to `'invalid'` when required fields are missing or `'ready'` when all fields are valid,
- invalid submissions display specific Czech error messages (`"Zadejte název projektu."`, `"Popište hlavní cíl projektu."`, `"Uveďte, pro koho je projekt určen."`, `"Popište problém, který projekt řeší."`),
- invalid fields receive `aria-invalid="true"`, while valid fields receive `aria-invalid="false"`,
- `dom.formFeedback` displays `"Opravte prosím označená pole formuláře."` on invalid submit and `"Formulář je připraven k odeslání."` on valid submit,
- form submission prevents page reload without clearing user input.

---

## How to Test the Final Snapshot

1. Open `PCS-JS/L05_js_forms_feedback/L05_C4.html`.

2. Test empty submission:
   - Click **Uložit odpovědi** with empty fields.
   - Confirm page reload is prevented.
   - Verify four field-error paragraphs display Czech error messages.
   - Confirm `aria-invalid="true"` on each field.
   - Verify form feedback displays `"Opravte prosím označená pole formuláře."`.

3. Test valid submission:
   - Fill all four fields and click **Uložit odpovědi**.
   - Confirm error messages clear and fields receive `aria-invalid="false"`.
   - Verify form feedback displays `"Formulář je připraven k odeslání."`.
   - Confirm entered text remains in form fields.

---

## Next Lesson

L06 will build on the validated application state to introduce data rendering for the Project Discovery interface.
