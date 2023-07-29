import { render, screen, fireEvent } from "@testing-library/react";
// Component
import Form from "./Form";

test("Correctly renders the form with onSubmit and onReset handlers", () => {
  const handleSubmit = vi.fn();
  const handleReset = vi.fn();

  render(
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </Form>
  );

  const formElement = screen.getByTestId("prismane-form");

  const inputElement = screen.getByRole("textbox");
  const submitButton = screen.getByRole("button", { name: "Submit" });
  const resetButton = screen.getByRole("button", { name: "Reset" });

  expect(formElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();

  fireEvent.click(submitButton);
  fireEvent.click(resetButton);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleReset).toHaveBeenCalledTimes(1);
});

test("Correctly applies additional props to the Form", () => {
  const handleSubmit = vi.fn();
  render(
    <Form onSubmit={handleSubmit} className="custom-form" data-testid="form">
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </Form>
  );

  const formElement = screen.getByTestId("form");
  expect(formElement).toHaveClass("custom-form");
});
