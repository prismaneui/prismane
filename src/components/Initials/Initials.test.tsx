import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Initials from "./Initials";

test("Correct render", () => {
  const { getByText } = render(
    <div>
      <Initials name="Martin Petrov" />
    </div>
  );

  const element = getByText("MP");

  expect(element).toBeInTheDocument();
});
