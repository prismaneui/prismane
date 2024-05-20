import React from "react";
import { test, vi } from "vitest";
import { render } from "@testing-library/react";
// Component
import Hide from "./Hide";

test("Content is shown on larger screens", () => {
  window.innerWidth = 1920;

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: window.innerWidth >= 768,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  const { getByTestId } = render(<Hide breakpoint="sm">Visible content</Hide>);

  const hideElement = getByTestId("prismane-hide");

  expect(hideElement).toBeVisible();
});
