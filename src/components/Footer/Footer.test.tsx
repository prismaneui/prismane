import { render } from "@testing-library/react";
// Component
import Footer from "./Footer";

test("Renders Children", () => {
  const { getByText } = render(<Footer>Footer Content</Footer>);
  expect(getByText("Footer Content")).toBeInTheDocument();
});

test("Applies Custom className", () => {
  const { container } = render(<Footer className="custom-class" />);
  expect(container.firstChild).toHaveClass("custom-class");
});

test("Renders With Additional Props", () => {
  const { container } = render(<Footer data-custom="value" />);
  expect(container.firstChild).toHaveAttribute("data-custom", "value");
});
