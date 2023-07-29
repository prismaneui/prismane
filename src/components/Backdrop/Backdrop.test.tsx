import { render } from "@testing-library/react";
// Component
import Backdrop from "./Backdrop";

test("Correct render of Backdrop", () => {
  const { getByTestId, getByText } = render(
    <Backdrop>
      <span>Backdrop Content</span>
    </Backdrop>
  );

  const backdropElement = getByTestId("prismane-backdrop");
  const contentElement = getByText("Backdrop Content");

  expect(backdropElement).toBeInTheDocument();

  expect(contentElement).toBeInTheDocument();
});

test("Correct render of Backdrop with custom className", () => {
  const { getByTestId } = render(<Backdrop className="custom-class" />);

  const backdropElement = getByTestId("prismane-backdrop");

  expect(backdropElement).toBeInTheDocument();

  expect(backdropElement).toHaveClass("custom-class");
});
