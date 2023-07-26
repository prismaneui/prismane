import { test } from "vitest";
import { render } from "@testing-library/react";
// Component
import Avatar from "./Avatar";

test("Correct render of Avatar with image", () => {
  const { getByTestId, getByAltText } = render(
    <Avatar src="https://example.com/avatar.jpg" alt="Avatar Image" />
  );

  const avatarElement = getByTestId("prismane-avatar");

  const imageElement = getByAltText("Avatar Image");

  expect(avatarElement).toBeInTheDocument();

  expect(imageElement).toBeInTheDocument();
});

test("Correct render of Avatar with custom content", () => {
  const { getByTestId } = render(
    <Avatar>
      <span>Custom Content</span>
    </Avatar>
  );

  const avatarElement = getByTestId("prismane-avatar");

  expect(avatarElement).toBeInTheDocument();

  expect(avatarElement).toHaveTextContent("Custom Content");
});
