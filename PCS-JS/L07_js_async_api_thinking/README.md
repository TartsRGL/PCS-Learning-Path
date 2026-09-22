# L07 — Async & API Thinking

## Lesson Goal

Establish an asynchronous request lifecycle and accessible feedback layer on top of the validated Project Discovery form.

L07 transitions the application from synchronous form handling to asynchronous thinking. It separates form validation from request status, simulates asynchronous data submission using promises and timeouts, introduces deterministic loading, success, and error states, guards against concurrent submissions, and enables manual request retries without resetting user data.

---

## Why This Layer Matters

Real frontend applications communicate with remote APIs where responses take time and network errors happen. Handling these realities cleanly requires dedicated state management and accessible UI feedback.

- **Separation of concerns:** `submissionStatus` captures the result of the last validation upon submit (`'idle'`, `'invalid'`, `'ready'`; it starts as `'idle'` before the first submit attempt). Typing into fields does not re-trigger validation, so `'ready'` does not mean that currently edited values still satisfy the rules. `requestStatus` independently describes the lifecycle of the last request (`'idle'`, `'loading'`, `'success'`, `'error'`).
- **Data snapshotting:** When a valid submission occurs, a new independent data snapshot object containing the four project values (`projectName`, `projectGoal`, `targetUser`, `coreProblem`) is prepared. Subsequent field edits while a request is inflight update `appState` and the live summary, but never mutate the snapshot already passed to the service. The snapshot is an independent object with four string values; subsequent changes to `appState` do not affect it, but the object is not frozen with `Object.freeze`.
- **Async orchestration:** An asynchronous `handleFormSubmit` coordinator uses `try / catch / finally` to await promise settlement, ensuring that loading indicators, success confirmations, or error messages are rendered consistently and controls are always restored.
- **Concurrency protection:** A submission guard immediately halts duplicate submissions while `requestStatus === 'loading'`, preventing concurrent simulated submissions.
- **Accessible busy UI:** During active requests, the form signals its busy state via `aria-busy="true"` and temporarily disables the submit button and error simulation checkbox, while keeping discovery fields open for editing.
- **Controlled retry:** A failed request can be retried manually by resubmitting the form with an updated snapshot of current input values.
- **Predictable persistence boundaries:** Neither field typing nor checkbox toggles clear the previous `requestStatus`, and an earlier successful response does not mean later field edits have been submitted.

---

## Commit Plan

| Commit | Added capability |
|--------|------------------|
| C1 | Request state and accessible feedback contract. |
| C2 | Simulated async submission with loading and success. |
| C3 | Controlled errors, manual retry and busy UI. |
| C4 | Final snapshot, verification and documentation. |

---

## Lesson Boundaries

L07 focuses strictly on the mechanics of asynchronous state flow and user feedback using local simulation.

It does not include:

- a backend server or real HTTP/`fetch` network requests,
- persistent browser storage (e.g. `localStorage` or `sessionStorage`),
- automatic retry mechanisms or exponential backoff,
- inspecting or transforming payload data inside the simulation service,
- automated form reset on success,
- external libraries, CSS styles, or UI framework abstractions.

---

## Final Result

At the end of L07:

- `appState.requestStatus` models the full asynchronous lifecycle independently of `appState.submissionStatus`,
- `simulateProjectSubmission(projectData, shouldFail)` returns a Promise resolving after 1000 ms or rejecting when simulated failure is requested,
- `handleFormSubmit` captures an independent data snapshot and local `shouldFail` flag before awaiting the submission promise,
- `aria-busy` and `disabled` states provide clear accessible feedback while keeping discovery inputs editable,
- the `#request-feedback` element (`role="status"`) announces status updates outside the busy form area,
- failed requests can be retried manually using the submit button (re-labeled `"Zkusit znovu"`),
- invalid form submissions prevent the service from running and leave prior request feedback undisturbed.

---

## How to Test the Final Snapshot

1. Open `PCS-JS/L07_js_async_api_thinking/L07_C4.html` in a web browser.

2. Test initial load state:
   - Verify `#request-feedback` displays `"Požadavek zatím nebyl odeslán."`.
   - Verify the form has `aria-busy="false"`.
   - Confirm the submit button displays `"Uložit odpovědi"` and is enabled.
   - Confirm the **Simulovat chybu požadavku** checkbox is unchecked and enabled.

3. Test invalid submission:
   - Leave fields blank and click **Uložit odpovědi**.
   - Confirm form validation feedback displays `"Opravte prosím označená pole formuláře."`.
   - Confirm request feedback remains `"Požadavek zatím nebyl odeslán."` and no simulation is triggered.

4. Test valid submission (successful path):
   - Fill in all four fields (e.g. `"Alpha"`, `"Goal"`, `"Users"`, `"Problem"`).
   - Click **Uložit odpovědi**.
   - Immediately observe loading state:
     - Request feedback switches to `"Odesílání požadavku…"`.
     - Submit button text changes to `"Odesílání…"`.
     - Submit button and simulation checkbox become `disabled`.
     - Form attribute updates to `aria-busy="true"`.
   - While still loading:
     - Type into a field (e.g. change name to `"Alpha 2"`).
     - Confirm the Project Summary card updates live, but the current inflight request remains intact.
   - After ~1000 ms:
     - Request feedback switches to `"Požadavek byl úspěšně zpracován."`.
     - Submit button returns to `"Uložit odpovědi"` and becomes enabled.
     - Checkbox becomes enabled and `aria-busy` returns to `"false"`.

5. Test concurrency guard:
   - Fill all four discovery fields and keep error simulation unchecked.
   - Open browser DevTools (Sources tab) and set a breakpoint on the first executable line inside `simulateProjectSubmission`.
   - In the DevTools Console, define:
     ```javascript
     const form = document.querySelector('[data-js="discovery-form"]');
     ```
   - Trigger the first valid submit by clicking **Uložit odpovědi**. The browser pauses at the service breakpoint; verify that `appState.requestStatus` is already `'loading'`.
   - While execution is paused, trigger a second submit in the Console:
     ```javascript
     form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
     ```
   - Verify that the second submission returns immediately at the loading guard and does not re-enter the service or hit its breakpoint again.
   - Resume execution in DevTools, verify that the original operation completes to `'success'`, and remove the breakpoint.
   - Note: Clicking the disabled submit button alone does not verify the JS guard, because disabled HTML buttons natively do not fire click or submit events.

6. Test controlled error and retry path:
   - Check **Simulovat chybu požadavku**.
   - Click **Uložit odpovědi**.
   - Confirm the form enters the loading state for ~1000 ms.
   - When the promise rejects:
     - Request feedback displays `"Požadavek se nepodařilo zpracovat. Zkuste jej odeslat znovu."`.
     - Submit button re-labels to `"Zkusit znovu"` and becomes enabled.
     - Controls are re-enabled and `aria-busy` returns to `"false"`.
     - Existing form field values remain preserved.
   - Click **Zkusit znovu** with the checkbox still checked → confirm it fails again consistently.
   - Uncheck **Simulovat chybu požadavku** and click **Zkusit znovu** → confirm recovery to `"Požadavek byl úspěšně zpracován."` with the button resetting to `"Uložit odpovědi"`.

---

## Next Lesson

L08 will conclude the journey with **Mini App Composition**, bringing all previous layers together into a cohesive Project Discovery mini application.
