import React from "react";
import { render } from "@testing-library/react";
// Component
import AspectRatio from "./AspectRatio";

test("Correct render of AspectRatio with default props", () => {
  const { getByTestId } = render(<AspectRatio />);

  const aspectRatioElement = getByTestId("prismane-aspect-ratio");

  expect(aspectRatioElement).toBeInTheDocument();

  expect(aspectRatioElement).toHaveStyle({ aspectRatio: undefined });
});

test("Correct render of AspectRatio with provided props", () => {
  const { getByTestId } = render(
    <AspectRatio ratio="16/9" size="300px">
      <div>Content goes here</div>
    </AspectRatio>
  );

  const aspectRatioElement = getByTestId("prismane-aspect-ratio");

  expect(aspectRatioElement).toBeInTheDocument();

  expect(aspectRatioElement).toHaveStyle({ aspectRatio: "16/9" });
});

test("Correct render of AspectRatio with additional className", () => {
  const { getByTestId } = render(<AspectRatio className="custom-class" />);
  const aspectRatioElement = getByTestId("prismane-aspect-ratio");

  expect(aspectRatioElement).toBeInTheDocument();

  expect(aspectRatioElement).toHaveClass("PrismaneAspectRatio-root");

  expect(aspectRatioElement).toHaveClass("custom-class");
});

test("Correct render of AspectRatio with custom prop", () => {
  const { getByTestId } = render(<AspectRatio data-testprop="test-prop" />);

  const aspectRatioElement = getByTestId("prismane-aspect-ratio");

  expect(aspectRatioElement).toBeInTheDocument();

  expect(aspectRatioElement).toHaveAttribute("data-testprop", "test-prop");
});
