import React from "react";
import { render } from "@testing-library/react";
// Component
import Badge from "./Badge";

test("Correct render of Badge with label", () => {
  const { getByText } = render(<Badge label="New">Content</Badge>);

  const badgeElement = getByText("New");

  const contentElement = getByText("Content");

  expect(badgeElement).toBeInTheDocument();

  expect(contentElement).toBeInTheDocument();
});

test("Correct render of Badge with custom className", () => {
  const { getByTestId } = render(
    <Badge className="custom-class">Content</Badge>
  );

  const badgeElement = getByTestId("prismane-badge");

  expect(badgeElement).toBeInTheDocument();

  expect(badgeElement).toHaveClass("custom-class");
});
