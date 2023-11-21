import { render } from "@testing-library/react";
// Component
import Header from "./Header";

test("Renders Children", () => {
  const { getByText } = render(<Header>Header Content</Header>);
  expect(getByText("Header Content")).toBeInTheDocument();
});

test("Applies Custom className", () => {
  const { container } = render(<Header className="custom-class" />);
  expect(container.firstChild).toHaveClass("custom-class");
});

test("Renders With Additional Props", () => {
  const { container } = render(<Header data-custom="value" />);
  expect(container.firstChild).toHaveAttribute("data-custom", "value");
});
