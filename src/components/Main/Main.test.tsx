import React from "react";
import { render } from "@testing-library/react";
// Component
import Main from "./Main";

test("Renders Children", () => {
  const { getByText } = render(<Main>Main Content</Main>);
  expect(getByText("Main Content")).toBeInTheDocument();
});

test("Applies Custom className", () => {
  const { container } = render(<Main className="custom-class" />);
  expect(container.firstChild).toHaveClass("custom-class");
});

test("Renders With Additional Props", () => {
  const { container } = render(<Main data-custom="value" />);
  expect(container.firstChild).toHaveAttribute("data-custom", "value");
});
