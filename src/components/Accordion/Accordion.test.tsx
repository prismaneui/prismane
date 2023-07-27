import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<div>Hello World!</div>);

  expect(screen.getByText("Hello World!")).toBeInTheDocument();
});
