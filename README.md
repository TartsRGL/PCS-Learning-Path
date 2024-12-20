# README.md

## PCS-FAPP: Project Management Dashboard

### **Overview**
PCS-FAPP is a comprehensive project management tool designed to streamline task management, note sharing,
and collaboration across various projects.
This dashboard integrates frontend and backend functionalities with advanced UI/UX features
to enhance productivity and usability.

---

### **Features**

#### **Frontend (HTML, CSS, JS)**
- **Dynamic Project Navigation:**
  - Projects: BotCentralHub (BCH), ThinkAsimov (TA), and RobotYellowPages (RYP).
  - Interactive toggles for phase and step visibility.
  - Modal windows for detailed note management.
- **Responsive Design:**
  - Optimized for desktop and mobile devices using media queries.
  - Animated hover effects and transitions.
- **Theme Customization:**
  - Unique color schemes for each project.

#### **Backend (Laravel API)**
- **CRUD Functionality:**
  - Manage tasks and notes through API endpoints:
    - `/tasks`
    - `/notes`
- **User Authentication:**
  - Secure login and registration via Laravel Breeze.
  - API protection with `auth:api` middleware.
- **Data Relationships:**
  - Tasks and notes linked to specific projects and users.

#### **Git Workflow**
- Feature branches for modular development.
- Commit messages aligned with milestones:
  - Example: `feat: Added toggleDetails functionality`.

---

### **Project Structure**

#### **Frontend**
- **HTML Templates:**
  - `app.html` (Main dashboard).
  - Individual project pages (`0 BCH.html`, `1 TA.html`, `2 RYP.html`).
- **CSS Styles:**
  - `style.css` (Global styles).
  - `unit.css` (Project-specific styles).
- **JavaScript:**
  - `dashboardjs.docx` (Main functionalities).
  - `unitjs.docx` (Project-specific behaviors).

#### **Backend**
- **Database Schema:**
  - Tables for `tasks`, `notes`, and `users`.
  - Relationships: Each task/note is associated with a user and a project.
- **API Endpoints:**
  - `/tasks`: CRUD operations for tasks.
  - `/notes`: CRUD operations for notes.
- **Authentication:**
  - Laravel Breeze for user login and registration.

---

### **Development Timeline**

#### **Week 1: Frontend**
- 1: HTML structure for dashboard and projects.
- 2: Global and project-specific CSS.
- 3: Responsive design and media queries.
- 4: Toggle functionality for task and phase details.
- 5: Modal windows for note management.

#### **Week 2: Backend**
- 8: Laravel setup and database configuration.
- 9: Migrations for `tasks`, `notes`, `users`.
- 10: API endpoints for task and note management.
- 11: User authentication.
- 12: API testing with Postman.

#### **Week 3: Integration**
- 13: Fetch data from API to frontend.
- 14: CRUD functionality on the frontend.
- 15: Error handling and validation.

#### **Week 4: Finalization**
- 16: Dashboard enhancements (global modal for notes).
- 17: Statistics and visualizations.
- 18: Note sharing and collaboration.
- 19: Data export (CSV/PDF).
- 20: Deployment (Heroku and GitHub Pages).
- 21: Final testing and presentation.

---

### **Deployment**
- **Frontend:** GitHub Pages.
- **Backend:** Hosted on Heroku.

---

### **Getting Started**

#### **Prerequisites**
- Lavarell
- Laravel 10.
- MySQL or SQLite.

#### **Installation**
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
6. Start the development server:
   ```bash
   npm run dev
   php artisan serve
   ```

---

### **Contributing**
- Use Git Flow for branch management.
- Follow commit message conventions.
- Submit pull requests for review.

---

### **License**
This project is licensed under the MIT License.

---

### **Contact**
- **Author:** TartsRGL
- **GitHub:** [PCS-FAPP](https://github.com/TartsRGL/PCS-FAPP)
- **Email:** [tarts.rgl@gmail.com](mailto:tarts.rgl@gmail.com)

---

### **Acknowledgments**
Special thanks to Praha Coding School esp. Mr. Wernerdweight (https://github.com/wernerdweight)
