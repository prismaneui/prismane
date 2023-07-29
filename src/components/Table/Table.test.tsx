import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Table from "./Table";

test("Correct render", () => {
  const { getByText } = render(<Table>Hello, world!</Table>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Table>
      <Table.Head>lorem</Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>lorem</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>lorem</Table.Foot>
      <Table.Caption>lorem</Table.Caption>
    </Table>
  );

  const element = getByTestId("prismane-table");

  const head = getByTestId("prismane-table-head");

  const foot = getByTestId("prismane-table-foot");

  const body = getByTestId("prismane-table-body");

  const caption = getByTestId("prismane-table-caption");

  const row = getByTestId("prismane-table-row");

  const cell = getByTestId("prismane-table-cell");

  expect(element).toBeInTheDocument();

  expect(head).toBeInTheDocument();

  expect(foot).toBeInTheDocument();

  expect(body).toBeInTheDocument();

  expect(caption).toBeInTheDocument();

  expect(row).toBeInTheDocument();

  expect(cell).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Table onClick={mock}>Hello, world!</Table>);

  const element = getByTestId("prismane-table");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Table className="custom-class">Hello, world!</Table>
  );

  const element = getByTestId("prismane-table");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Table data-testprop="test-prop" />);

  const element = getByTestId("prismane-table");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
