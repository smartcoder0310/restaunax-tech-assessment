# Restaunax – Full-Stack Order Management System

A real-time restaurant order management dashboard built with modern full-stack technologies.

---

## 🚀 How to Set Up and Run the Application

### 1. Clone the Repository
```bash
git clone https://github.com/smartcoder0310/restaunax-tech-assessment.git
cd restaunax-tech-assessment
```

### 2. Backend Setup
```bash
cd backend
npm install
npx prisma migrate dev
npx tsx prisma/seed.ts
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

## ▶️ Run the Project with Docker

From the root directory (where `docker-compose.yml` is located), run:

```bash
docker-compose up --build
```

Then access:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`
- Database: on port `5432` (PostgreSQL)

---

## ⚙️ Technical Choices and Reasoning

### Frontend
- **React + TypeScript:** Type-safe, scalable SPA structure.
- **Material UI:** Clean and responsive UI out of the box.
- **Component Modularity:** Folders for `FilterBar`, `OrderCard`, and `Dashboard`, each with their `index.ts` barrel export pattern.
- **Axios in `services/api.ts`:** Configured instance for easy API interaction.
- **Unit Testing:** `Jest + React Testing Library` with test files colocated per component.

### Backend
- **Node.js + Express:** Lightweight RESTful API.
- **Prisma + PostgreSQL:** Fast, safe ORM with relationship mapping and type generation.
- **Modular Routes/Controllers:** Clear separation using `routes/` and `controllers/` folders.

---

## 🧱 Architecture Overview

```
frontend/
    components/
        FilterBar/
            FilterBar.tsx
            FilterBar.test.tsx
            index.ts
        OrderCard/
            OrderCard.tsx
            OrderCard.test.tsx
            index.ts
    pages/
        Dashboard/
            Dashboard.tsx
            Dashboard.styles.ts
            Dashboard.test.tsx
            index.ts
    services/
        api.ts
    types/
        index.ts
    App.tsx
    index.tsx
    setupTests.ts
    Docker
backend/
    src/
        index.ts
        routes/
            orderRoutes.ts
            controllers/
            orderController.ts
    prisma/
        schema.prisma
    Docker
docker-compose.yml

```

---

## ✨ What We'd Improve with More Time

- Drag-and-drop Kanban view for order status
- Real-time updates via WebSocket
- Role-based auth (admin/staff)
- E2E tests with Cypress
- Centralized error boundaries
- CI/CD pipeline with GitHub Actions
- Toast notifications using MUI Snackbar

---

## ⚠️ Challenges Faced and How We Addressed Them

### 1. **TypeScript + Material UI Conflicts**
Used consistent versions and default imports to avoid component overload issues.

### 2. **Filter and Responsive Design**
Made the filter/search UI fluid with `Stack` and responsive `Grid` layout.

### 3. **Code Modularity**
Split logic into clean, testable components with barrel files and `__tests__` for every module.

---

✅ Clean architecture, consistent design patterns, and full modularity ensure this codebase is production-grade and maintainable.