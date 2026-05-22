# FAPP Frontend Prototype

A standalone, browser-only interactive prototype of FAPP (Project Value Architect by BotCentralHub) designed for AI, Web, and Automation project discovery and proposal generation.

## How to Run It

This is a zero-dependency frontend application. To run it:
1. Open the directory `PCS-FAPP/prototype/` on your computer.
2. Double-click the `index.html` file to open it directly in any modern web browser.
*Alternatively, you can serve the directory using a simple local HTTP server (e.g. `npx serve` or Python's `python -m http.server`).*

## Current Features

- **Project Track Discovery**: Choose from three pre-defined tracks (AI Solution, Web Application, Automation Pipeline). Each track dynamically loads its own questionnaire.
- **Completeness & Clarity Assistant**: Measures discovery questionnaire progress in real-time, assigning a clarity rating (Low, Medium, or High).
- **Proposal Quality Assistant**: Analyzes answered questions in JavaScript, flagging weak areas (responses shorter than 25 characters) and displaying context-specific follow-up questions.
- **Inline Proposal Editing**: Users can click the **Edit Proposal** button to edit the generated sections inline via custom `contenteditable` controls. Dynamic ratings recalculate automatically on save.
- **Three-Tier Pricing Engine**: Dynamically displays Essential, Professional, and Scale packages mapped to the active track type.
- **Markdown Export**: Copy the formatted markdown draft directly to the clipboard or download it as a `.md` file, which includes all custom inline edits.

## Known Limitations

- **Frontend-only**: There is no backend, database integration, or persistence layer. Reloading the browser page resets the form and clears all input data.
- **Read-only Pricing**: Pricing packages and cards are mock static templates and cannot be customized/edited.
- **No External Assets**: Runs purely on local resources and system font stacks.

## Next Recommended Steps

1. **Persistent State**: Integrate browser local storage (`localStorage`) to auto-save drafts across page reloads.
2. **Interactive Pricing Engine**: Allow users to customize pricing, adjust package names, or add/remove scope lines directly on the pricing cards.
3. **Template Engine Integration**: Connect with a PDF/docx export API or library for client-facing PDF generation.
