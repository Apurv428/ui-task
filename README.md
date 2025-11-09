# 🚀 React + Vite + TypeScript Application

A modern, fast, and scalable React application built with **Vite**, **TypeScript**, and **component-driven architecture**. This setup ensures high developer productivity, strong type safety, and optimal performance in both development and production environments.

---

## 🧩 Table of Contents

1. [Project Setup and Installation](#-project-setup-and-installation)
2. [Running the Application Locally](#-running-the-application-locally)
3. [Live Demo](#-live-demo)
4. [Dependencies and Prerequisites](#-dependencies-and-prerequisites)
5. [Architectural Decisions](#-architectural-decisions)
6. [Assumptions and Trade-offs](#-assumptions-and-trade-offs)
7. [Best Practices Followed](#-best-practices-followed)
8. [Storybook Integration](#-storybook-integration)
9. [Testing with React Testing Library](#-testing-with-react-testing-library)
10. [ESLint and Prettier](#-eslint-and-prettier)
11. [Example Commands](#-example-commands)

---

## 🛠 Project Setup and Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Apurv428/ui-task.git
cd ui-task
```

### 2️⃣ Install Dependencies

Make sure you have **Node.js ≥ 18** and **npm ≥ 9** (or yarn/pnpm) installed.

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

Open your browser:  
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

## 🌐 Live Demo

- **Application:** [https://ui-task-navy.vercel.app/](https://ui-task-navy.vercel.app/)  
- **Storybook:** [https://extraordinary-lily-b19101.netlify.app/](https://extraordinary-lily-b19101.netlify.app/)

## 📦 Dependencies and Prerequisites

**Core Dependencies:**

- React 18+ - UI library  
- Vite - Lightning-fast build tool  
- TypeScript - Type-safe JavaScript  
- Tailwind CSS - Utility-first styling  
- ESLint + Prettier - Code quality and formatting
- Lucide ui - For icons

**Development / Testing Dependencies:**

- Vitest - Unit testing  
- React Testing Library - Testing React components  
- Storybook - Component library & visual testing  

---

## 🧱 Architectural Decisions

The architecture follows a **component-driven** and **modular** approach inspired by **Atomic Design** principles.

```
src/
├── assets/            # Static assets (images, fonts, etc.)
├── components/        # Reusable UI components (atoms, molecules, organisms)
├── pages/             # Page-level components (routed views)
├── data/              # Data for components
├── types/             # TypeScript types/interfaces
├── tests/             # Test cases
├── utils/             # Helper functions/utilities
├── App.tsx            # Root application component
├── main.tsx           # Application entry point
└── vite.config.ts     # Vite configuration
```

**Key Decisions:**

- Vite chosen over CRA for faster builds and modern tooling.  
- TypeScript ensures type safety and better scalability.  
- Modular architecture promotes separation of concerns and easier testing.  
- ESLint + Prettier ensures code consistency.  

---

## 🌟 Best Practices Followed

✅ **Type Safety:** All components, hooks, and services use TypeScript interfaces and generics.  
✅ **Component Reusability:** Components are small, focused, and reusable.  
✅ **Environment-based Configs:** No hardcoded URLs or secrets.  
✅ **Performance Optimization:** Code-splitting, lazy loading, and memoization.  
✅ **Testing Ready:** Supports Vitest + React Testing Library.  
✅ Responsiveness: UI adapts seamlessly across mobile, tablet, and desktop devices.

---

## 🖼 Storybook Integration

This project uses **Storybook** to develop and showcase UI components in isolation.

### Run Storybook Locally

```bash
npm run storybook
```

Open your browser:  
👉 **http://localhost:6006**

### Build Static Storybook

```bash
npm run build-storybook
```

- Output folder: `storybook-static`  
- Can be hosted on GitHub Pages, Netlify, or any static hosting.

### Storybook + Vitest Testing

- Components can be tested directly via `.stories.tsx` using Vitest.  
- Command:

```bash
npm run test:storybook
```

---

## 🧪 Testing with React Testing Library

This project supports **unit and interaction tests** with **Vitest** and **React Testing Library**.

## 🧹 ESLint and Prettier

**ESLint + Prettier setup** ensures code quality and consistent formatting.

### Format Code

```bash
npm run format
```

### Lint Code

```bash
npm run lint
```

## 📚 Example Commands

| Command                     | Description                                |
|-------------------------------|-------------------------------------------|
| `npm run dev`                 | Run development server                     |
| `npm run build`               | Build production bundle                    |
| `npm run preview`             | Preview production build locally           |
| `npm run lint`                | Run ESLint checks                          |
| `npm run format`              | Format code using Prettier                 |
| `npm run storybook`           | Run Storybook locally                      |
| `npm run build-storybook`     | Build static Storybook                     |
| `npm run test`                | Run Vitest unit tests                       |
| `npm run test:watch`          | Run Vitest in watch mode                    |
| `npm run test:storybook`      | Run Vitest tests on Storybook stories       |

---

## 📥 Download / Clone

```bash
git clone https://github.com/Apurv428/ui-task.git
cd ui-task
npm install
```

---

This README covers:  
- Vite + React + TypeScript setup  
- Storybook integration  
- React Testing Library unit tests  
- ESLint + Prettier configuration  
- Commands and CI-friendly scripts

