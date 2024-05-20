import React, { useState } from "react";
// Components
import Table from "../Table/Table";
import Radio from "../Radio";
import Stack from "../Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Table",
  component: Table,
};

export const Default = () => (
  <Table>
    <Table.Caption>Imperial to metric conversion factors</Table.Caption>
    <Table.Head>
      <Table.Row>
        <Table.Cell>To convert</Table.Cell>
        <Table.Cell>into</Table.Cell>
        <Table.Cell>multiply by</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>inches</Table.Cell>
        <Table.Cell>millimeters</Table.Cell>
        <Table.Cell>25.4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>feet</Table.Cell>
        <Table.Cell>centimeters</Table.Cell>
        <Table.Cell>30.48</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Foot>
      <Table.Row>
        <Table.Cell>To convert</Table.Cell>
        <Table.Cell>into</Table.Cell>
        <Table.Cell>multiply by</Table.Cell>
      </Table.Row>
    </Table.Foot>
  </Table>
);

export const Various_Column_Widths = () => (
  <Table>
    <Table.Caption>Imperial to metric conversion factors</Table.Caption>
    <Table.Head>
      <Table.Row>
        <Table.Cell w="160px">To convert (160px)</Table.Cell>
        <Table.Cell w="20%">into (20%)</Table.Cell>
        <Table.Cell>multiply by (auto)</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>inches</Table.Cell>
        <Table.Cell>millimeters</Table.Cell>
        <Table.Cell>25.4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>feet</Table.Cell>
        <Table.Cell>centimeters</Table.Cell>
        <Table.Cell>30.48</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Foot>
      <Table.Row>
        <Table.Cell>To convert</Table.Cell>
        <Table.Cell>into</Table.Cell>
        <Table.Cell>multiply by</Table.Cell>
      </Table.Row>
    </Table.Foot>
  </Table>
);

export const Table_Size = () => {
  const [size, setSize] = useState<"xs" | "sm" | "base" | "md" | "lg">("base");

  return (
    <Stack maw="fit-content">
      <Radio.Group value={size} onChange={(e: any) => setSize(e.target.value)}>
        <Radio value="xs" label="xs" />
        <Radio value="sm" label="sm" />
        <Radio value="base" label="base" />
        <Radio value="md" label="md" />
        <Radio value="lg" label="lg" />
      </Radio.Group>
      <Table size={size}>
        <Table.Caption>Imperial to metric conversion factors</Table.Caption>
        <Table.Head>
          <Table.Row>
            <Table.Cell>To convert</Table.Cell>
            <Table.Cell>into</Table.Cell>
            <Table.Cell>multiply by</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>inches</Table.Cell>
            <Table.Cell>millimeters</Table.Cell>
            <Table.Cell>25.4</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>feet</Table.Cell>
            <Table.Cell>centimeters</Table.Cell>
            <Table.Cell>30.48</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot>
          <Table.Row>
            <Table.Cell>To convert</Table.Cell>
            <Table.Cell>into</Table.Cell>
            <Table.Cell>multiply by</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    </Stack>
  );
};

export const Bordered_Table = () => {
  return (
    <Table bordered>
      <Table.Head>
        <Table.Row>
          <Table.Cell>To convert</Table.Cell>
          <Table.Cell>into</Table.Cell>
          <Table.Cell>multiply by</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>inches</Table.Cell>
          <Table.Cell>millimeters</Table.Cell>
          <Table.Cell>25.4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>feet</Table.Cell>
          <Table.Cell>centimeters</Table.Cell>
          <Table.Cell>30.48</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>To convert</Table.Cell>
          <Table.Cell>into</Table.Cell>
          <Table.Cell>multiply by</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>
  );
};

export const Table_Lines = () => {
  const [lines, setLines] = useState<"horizontal" | "vertical" | "both">(
    "horizontal"
  );

  return (
    <Stack>
      <Radio.Group
        value={lines}
        onChange={(e: any) => setLines(e.target.value)}
      >
        <Radio value="horizontal" label="Horizontal" />
        <Radio value="vertical" label="Vertical" />
        <Radio value="both" label="Both" />
      </Radio.Group>
      <Table lines={lines}>
        <Table.Head>
          <Table.Row>
            <Table.Cell>To convert</Table.Cell>
            <Table.Cell>into</Table.Cell>
            <Table.Cell>multiply by</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>inches</Table.Cell>
            <Table.Cell>millimeters</Table.Cell>
            <Table.Cell>25.4</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>feet</Table.Cell>
            <Table.Cell>centimeters</Table.Cell>
            <Table.Cell>30.48</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot>
          <Table.Row>
            <Table.Cell>To convert</Table.Cell>
            <Table.Cell>into</Table.Cell>
            <Table.Cell>multiply by</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    </Stack>
  );
};

export const Striped = () => {
  return (
    <Table striped>
      <Table.Head>
        <Table.Row>
          <Table.Cell>To convert</Table.Cell>
          <Table.Cell>into</Table.Cell>
          <Table.Cell>multiply by</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>inches</Table.Cell>
          <Table.Cell>millimeters</Table.Cell>
          <Table.Cell>25.4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>feet</Table.Cell>
          <Table.Cell>centimeters</Table.Cell>
          <Table.Cell>30.48</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>meters</Table.Cell>
          <Table.Cell>centimeters</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>To convert</Table.Cell>
          <Table.Cell>into</Table.Cell>
          <Table.Cell>multiply by</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>
  );
};

export const Striped_No_Lines = () => {
  return (
    <Table lines="none" striped>
      <Table.Head>
        <Table.Row>
          <Table.Cell>To convert</Table.Cell>
          <Table.Cell>into</Table.Cell>
          <Table.Cell>multiply by</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>inches</Table.Cell>
          <Table.Cell>millimeters</Table.Cell>
          <Table.Cell>25.4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>feet</Table.Cell>
          <Table.Cell>centimeters</Table.Cell>
          <Table.Cell>30.48</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>meters</Table.Cell>
          <Table.Cell>centimeters</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>To convert</Table.Cell>
          <Table.Cell>into</Table.Cell>
          <Table.Cell>multiply by</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>
  );
};
