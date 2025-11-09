# 🚀 React + Vite + TypeScript Application

A modern, fast, and scalable React application built with **Vite**, **TypeScript**, and **component-driven architecture**. This setup ensures high developer productivity, strong type safety, and optimal performance in both development and production environments.

---

## 🧩 Table of Contents

1. [Project Setup and Installation](#-project-setup-and-installation)
2. [Running the Application Locally](#-running-the-application-locally)
3. [Dependencies and Prerequisites](#-dependencies-and-prerequisites)
4. [Architectural Decisions](#-architectural-decisions)
5. [Assumptions and Trade-offs](#-assumptions-and-trade-offs)
6. [Best Practices Followed](#-best-practices-followed)

---

## 🛠 Project Setup and Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

### 2️⃣ Install Dependencies

Make sure you have **Node.js ≥ 18** and **npm ≥ 9** or **yarn/pnpm** installed.

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

---

## 💻 Running the Application Locally

### Development Mode

```bash
npm run dev
```

Then open your browser and navigate to:  
👉 **http://localhost:5173**

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Dependencies and Prerequisites

**Core Dependencies:**

- React 18+ — UI library
- Vite — Lightning-fast build tool
- TypeScript — Type-safe JavaScript
- ESLint + Prettier — Code quality and formatting
- Tailwind CSS — Utility-first styling

---

## 🧱 Architectural Decisions

The architecture follows a **component-driven** and **modular** approach inspired by **Atomic Design** and **Clean Architecture** principles.

```
src/
├── assets/            # Static assets (images, fonts, etc.)
├── components/        # Reusable UI components (atoms, molecules, organisms)
├── pages/             # Page-level components (routed views)
├── data/              # Data required for the components
├── types/             # Global TypeScript types/interfaces
├── utils/             # Helper functions/utilities
├── App.tsx            # Root application component
├── main.tsx           # Application entry point
└── vite.config.ts     # Vite configuration
```

**Key Decisions:**

- Vite chosen over Create React App for faster builds and modern tooling.
- TypeScript for better scalability and fewer runtime bugs.
- Modular architecture promotes separation of concerns and easier testing.
- ESLint + Prettier ensures code consistency across the team.

---

## 🌟 Best Practices Followed

✅ **Type Safety:** All components, hooks, and services use TypeScript interfaces and generics.  
✅ **Component Reusability:** Components are small, focused, and reusable.  
✅ **Separation of Concerns:** Logic is isolated into hooks and services.  
✅ **Environment-based Configs:** No hardcoded URLs or secrets.  
✅ **Performance Optimization:** Code-splitting, lazy loading, and memoization.  
✅ **Testing Ready:** Supports Jest / React Testing Library setup.

---

## 📚 Example Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Run development server           |
| `npm run build`   | Build production bundle          |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint checks                |
| `npm run format`  | Format code using Prettier       |
