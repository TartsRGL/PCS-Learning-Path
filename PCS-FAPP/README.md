# FAPP by BotCentralHub

## Project Value Architect for AI, Web, and Automation Projects

FAPP is a SaaS Project-Value Architect designed to help users transform unclear digital ideas into structured, priced, and deliverable project proposals. It eliminates discovery friction and aligns agencies, freelancers, and clients on MVP scopes and value.

---

## The Product Shift

FAPP has transitioned from its original concept as an internal project management dashboard into a client-facing SaaS MVP. The previous dashboard, note-sharing, and task-tracking interfaces are now positioned as **future roadmap items** (client portals and delivery workspaces) rather than the core MVP.

### Core MVP Flow
1. **Select Project Type:** Choose between AI Solution, Web Application, or Automation Pipeline.
2. **Guided Discovery:** Answer a targeted set of discovery questions designed to extract business goals and technical requirements.
3. **Proposal & Price Generation:** Automatically construct a comprehensive project proposal, including a detailed scope, risk analysis, and three distinct pricing packages.

---

## Documentation

A complete specification of the FAPP SaaS MVP is available in the `docs/` folder:

- **[Product Definition](docs/fapp-product-definition.md):** Vision, target audience, problem statement, and roadmap.
- **[MVP v0.1 Specification](docs/fapp-mvp-v01.md):** Detailed scope of features in and out of the initial MVP release.
- **[User Flow](docs/fapp-user-flow.md):** Step-by-step user journey from entry to proposal export.
- **[Output Template](docs/fapp-output-template.md):** The structure and layout of the generated project proposal.
- **[Pricing Packages](docs/fapp-pricing-packages.md):** Details on the three-tier pricing model structure.

---

## Technical Stack & Architecture

### Phase 1: Frontend-Only Prototype
- Core discovery wizard flow and proposal generator built using vanilla **HTML**, **CSS**, and **JavaScript**.
- All state (discovery inputs, generated proposal structure) is managed in local JavaScript memory and state.
- No database, Laravel API, or authentication required in this phase.

### Later Phases (Roadmap & Production)
- **Backend (Laravel API):**
  - `/proposals` (CRUD operations for storing and retrieving generated proposals).
  - `/discovery-questions` (Dynamic retrieval of questions by project type).
- **Database:** MySQL/SQLite database for persistent user and proposal data.
- **Authentication:** Built-in user and agency authentication powered by Laravel Breeze.
- **Client Portal:** Client-facing delivery workspace and collaboration dashboard.

---

## Getting Started

### Prerequisites
- Laravel 10.x
- PHP 8.1+
- Node.js & npm
- MySQL or SQLite

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/TartsRGL/PCS-FAPP.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PCS-FAPP
   ```
3. Install dependencies:
   ```bash
   npm install
   composer install
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
5. Migrate the database:
   ```bash
   php artisan migrate
   ```
6. Start the development servers:
   ```bash
   npm run dev
   php artisan serve
   ```

---

## Contributing
- Use Git Flow for branch management.
- Follow commit message conventions (e.g., `feat: Add discovery wizard controller`).
- Submit pull requests for review.

---

## License
This project is licensed under the MIT License.

---

## Contact
- **Author:** TartsRGL
- **GitHub:** [PCS-FAPP](https://github.com/TartsRGL/PCS-FAPP)
- **Email:** [tarts.rgl@gmail.com](mailto:tarts.rgl@gmail.com)

---

## Acknowledgments
Special thanks to [Praha Coding School](https://prahacoding.cz/) & [Mr. Wernerdweight](https://github.com/wernerdweight).
