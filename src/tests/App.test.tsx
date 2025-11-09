import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("../pages/Dashboard", () => ({
  default: () => <div data-testid="dashboard">Desktop Dashboard</div>,
}));

vi.mock("../pages/MobileDashboard", () => ({
  default: () => <div data-testid="mobile-dashboard">Mobile Dashboard</div>,
}));

// 👇 Import App *after* mocks are set up
import App from "../App";

describe("App Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("renders Desktop Dashboard on large screens", () => {
    Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
    render(<App />);
    expect(screen.getByTestId("dashboard")).toBeInTheDocument();
  });

  test("renders Mobile Dashboard on small screens", () => {
    Object.defineProperty(window, "innerWidth", { writable: true, value: 400 });
    render(<App />);
    expect(screen.getByTestId("mobile-dashboard")).toBeInTheDocument();
  });
});
