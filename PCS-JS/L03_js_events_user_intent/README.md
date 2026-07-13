# L03 — Events & User Intent

## Lesson Goal

Recognize user intent by handling browser events from the Project Discovery form.

L03 introduces submit and input events without reading form values or storing application state. The lesson focuses on identifying what the user is trying to do and which discovery field produced the interaction.

---

## Why This Layer Matters

Verified DOM references become useful when the application can respond to user actions.

- **Submit intent:** The form `submit` event identifies an attempt to submit the discovery form.
- **Input intent:** A delegated `input` listener detects editing across all discovery fields.
- **Event delegation:** One listener on the form handles input events from multiple related controls.
- **Semantic identification:** `event.target` and stable `data-js` hooks identify the field that produced the event.

L03 recognises intent only. It does not yet read, validate or store the entered values.

---

## Commit Plan

| Commit | Added capability |
|--------|------------------|
| C1 | Recognize form submit intent and prevent the default page reload. |
| C2 | Add delegated input-event handling and filter valid discovery fields with `isDiscoveryField()`. |
| C3 | Identify the edited discovery field with `getDiscoveryFieldIntent()`. |
| C4 | Finalize and document the event and user-intent rules. |

---

## Lesson Boundaries

L03 is limited to browser events and user-intent recognition.

It does not include:

- reading `field.value`,
- application state,
- mapping field intent to state keys,
- validation,
- error or success messages,
- rendering or DOM output updates,
- asynchronous behaviour,
- API calls,
- `console.log`,
- CSS changes.

The form submit handler prevents the default reload, but it does not process or store submitted data.

---

## Final Result

At the end of L03:

- the form recognises submit intent,
- the default form reload is prevented,
- one delegated `input` listener handles all discovery fields,
- `isDiscoveryField()` filters unrelated event targets,
- `getDiscoveryFieldIntent()` identifies the edited field through its `data-js` hook,
- no field value is read or stored.

The project can now recognise user actions while keeping events, values and state as separate layers.

---

## How to Test the Final Snapshot

1. Open:

   `PCS-JS/L03_js_events_user_intent/L03_C4.html`

2. Open the browser developer tools and go to **Sources**.

3. Find `L03_C4.js`.

4. Place a breakpoint inside `handleFormInput(event)` immediately after:

   ```js
   const fieldIntent = getDiscoveryFieldIntent(field);
   ```

5. Type into each Project Discovery field.

6. Verify that:

   - the breakpoint activates for each discovery field,
   - `event.target` references the edited control,
   - `fieldIntent` matches the control’s `data-js` value,
   - unrelated elements are rejected by `isDiscoveryField()`.

7. Submit the form and verify that:

   - the page does not reload,
   - the entered text remains visible in the fields,
   - the console contains no errors.

8. Confirm that no field value is read into JavaScript and no application state is created.

---

## Next Lesson

L04 will map field intent to semantic state keys and store the current form values in `appState`.
