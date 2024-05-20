import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PinField from "./PinField"; // Component

test("Correctly renders the PinField with label and error message", () => {
  const label = "Enter PIN";
  const error = "Invalid PIN";

  render(<PinField label={label} error={error} onChange={() => {}} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const fields = screen.getAllByRole("textbox");

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(fields.length).toBe(5);
});

test("Correctly enters values and handles navigation in the PinField", () => {
  render(<PinField onChange={() => {}} />);

  const fields = screen.getAllByRole("textbox");

  fireEvent.focus(fields[1]);
  fireEvent.change(fields[1], { target: { value: "1" } });
  fireEvent.keyDown(fields[1], { key: "ArrowRight" });

  fireEvent.focus(fields[2]);
  fireEvent.change(fields[2], { target: { value: "2" } });
  fireEvent.keyDown(fields[2], { key: "ArrowRight" });

  fireEvent.focus(fields[3]);
  fireEvent.change(fields[3], { target: { value: "3" } });
  fireEvent.keyDown(fields[3], { key: "ArrowRight" });

  fireEvent.focus(fields[4]);
  fireEvent.change(fields[4], { target: { value: "4" } });

  expect(fields[1].value).toBe("1");
  expect(fields[2].value).toBe("2");
  expect(fields[3].value).toBe("3");
  expect(fields[4].value).toBe("4");
});

test("Correctly handles backspace navigation in the PinField", () => {
  render(<PinField onChange={() => {}} />);

  const fields = screen.getAllByRole("textbox");

  fireEvent.focus(fields[4]);
  fireEvent.change(fields[4], { target: { value: "4" } });
  fireEvent.keyDown(fields[4], { key: "Backspace" });

  fireEvent.focus(fields[3]);
  fireEvent.change(fields[3], { target: { value: "3" } });
  fireEvent.keyDown(fields[3], { key: "Backspace" });

  fireEvent.focus(fields[2]);
  fireEvent.change(fields[2], { target: { value: "2" } });
  fireEvent.keyDown(fields[2], { key: "Backspace" });

  fireEvent.focus(fields[1]);
  fireEvent.change(fields[1], { target: { value: "1" } });

  expect(fields[1].value).toBe("1");
  expect(fields[2].value).toBe("2");
  expect(fields[3].value).toBe("3");
  expect(fields[4].value).toBe("4");
});

test("Correctly pastes a valid PIN into the PinField", () => {
  render(<PinField onChange={() => {}} />);

  const fields = screen.getAllByRole("textbox");

  const clipboardData = {
    getData: () => {
      return "1234";
    },
  };

  fireEvent.paste(fields[1], {
    clipboardData,
  });

  expect(fields[1].value).toBe("1");
  expect(fields[2].value).toBe("2");
  expect(fields[3].value).toBe("3");
  expect(fields[4].value).toBe("4");
});

test("Correctly applies additional props to the PinField", () => {
  const dataTestId = "pin-input";

  render(<PinField data-testid={dataTestId} onChange={() => {}} />);

  const fields = screen.getAllByTestId(dataTestId);
  expect(fields.length).toBe(1);
});
