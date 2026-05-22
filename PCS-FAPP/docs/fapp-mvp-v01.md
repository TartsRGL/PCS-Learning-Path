# FAPP MVP v0.1 Specification

This document details the minimal viable scope for the initial release of **FAPP by BotCentralHub**. The objective of v0.1 is to deliver a functional "discovery-to-proposal" engine.

---

## Core Objectives
1. Provide a clean, guided user experience for project discovery.
2. Formulate client inputs into standard professional proposals.
3. Deliver value-based pricing options without manual drafting.

---

## Scope Matrix

### **In Scope for MVP v0.1**
* **Onboarding & Authentication:**
  * Basic user authentication (agencies/freelancers creating proposals).
  * Project setup dashboard (list of created proposals).
* **Discovery Wizard:**
  * Support for 3 project tracks: **AI Solutions**, **Web Applications**, **Automation Pipelines**.
  * Dynamic multi-step questionnaire based on the selected track.
* **Proposal Generation Engine:**
  * Structured mapping from question answers to proposal components.
  * Form editing to allow manual polish of generated proposals.
* **Pricing Engine:**
  * Basic configuration input for hourly rate, complexity multiplier, or flat rate presets.
  * Automatic generation of three packaging tiers (Essential, Professional, Scale).
* **Sharing & Export:**
  * Shareable guest/client preview URL.
  * Option to export proposal structure to Markdown or raw text.

### **Out of Scope (Roadmap Items)**
* **Real-time Collaboration:** No client-agency commenting or inline edits on the preview page.
* **Task Management / Delivery Dashboard:** No active project tracking, Kanban boards, or task assignment (the old dashboard concept).
* **Payment Integration:** No invoice generation or Stripe integration for package deposits.
* **File Uploads:** No hosting of client assets or architectural diagram files.

---

## Technical MVP Stack
* **Frontend:** Vanilla HTML, CSS (clean, responsive, CSS variables), and JavaScript.
* **Backend:** Laravel 10 API.
* **Database:** MySQL/SQLite storing users, project metadata, discovery responses, and generated proposals.
