# FAPP MVP v0.1 Specification

This document details the minimal viable scope for the initial release of **FAPP by BotCentralHub**. The objective of v0.1 is to deliver a functional "discovery-to-proposal" engine.

---

## Core Objectives
1. Provide a clean, guided user experience for project discovery.
2. Formulate client inputs into standard professional proposals.
3. Deliver value-based pricing options without manual drafting.

---

## Scope Matrix

### **In Scope for MVP v0.1 (Frontend Prototype)**
* **Onboarding & Interface:**
  * Clean landing/entry view for the discovery tool (no login or registration screen needed yet).
* **Discovery Wizard:**
  * Support for 3 project tracks: **AI Solutions**, **Web Applications**, **Automation Pipelines**.
  * Dynamic multi-step questionnaire based on the selected track.
* **Data Management:**
  * Handled entirely in local JavaScript memory/state (no database or Laravel API integration in this phase).
* **Proposal Generation Engine:**
  * Structured mapping from question answers to proposal components.
  * Form editing to allow manual polish of generated proposals in-memory.
* **Pricing Engine:**
  * Basic configuration input for hourly rate, complexity multiplier, or flat rate presets.
  * Automatic generation of three packaging tiers (Essential, Professional, Scale) based on selection.
* **Export:**
  * Copy generated proposal to clipboard or download as a text/markdown file.

### **Out of Scope for MVP v0.1 (Roadmap / v0.2)**
* **Backend / Persistence:** No Laravel API, no authentication/user accounts, and no MySQL/SQLite database.
* **Sharing:** No persistent shareable URLs (guest/client preview pages requiring server storage).
* **Real-time Collaboration:** No client-agency commenting or inline edits.
* **Task Management / Delivery Dashboard:** No active project tracking, Kanban boards, or task assignment (the old dashboard concept).
* **Payment Integration:** No invoice generation or Stripe integration.

---

## Technical MVP Stack

* **Frontend:** Vanilla HTML, CSS (clean, responsive, CSS variables), and JavaScript.
* **Backend / API / Database:** None for MVP v0.1.
* **Roadmap (v0.2+):** Laravel 10 API, MySQL/SQLite database for persistence, and Laravel Breeze authentication.
