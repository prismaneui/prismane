import { Meta } from "@storybook/react";
// Components
import Table from "../Table/Table";

export default {
  title: "Table",
  component: Table,
} as Meta;

export const Default = () => (
  <Table variant="simple">
    <Table.Head ta="center">
      <Table.Row>
        <Table.Cell>To convert</Table.Cell>
        <Table.Cell>into</Table.Cell>
        <Table.Cell>multiply by</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>inches</Table.Cell>
        <Table.Cell>millimeTable.Rowes (mm)</Table.Cell>
        <Table.Cell>25.4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>feet</Table.Cell>
        <Table.Cell>centimeTable.Rowes (cm)</Table.Cell>
        <Table.Cell>30.48</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>yards</Table.Cell>
        <Table.Cell>meTable.Rowes (m)</Table.Cell>
        <Table.Cell>0.91444</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Foot ta="center">
      <Table.Row>
        <Table.Cell>To convert</Table.Cell>
        <Table.Cell>into</Table.Cell>
        <Table.Cell>multiply by</Table.Cell>
      </Table.Row>
    </Table.Foot>
    <Table.Caption ta="center">This is a caption</Table.Caption>
  </Table>
);
