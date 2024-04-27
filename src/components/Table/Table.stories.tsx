// Components
import Table from "../Table/Table";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Table",
  component: Table,
};

export const Default = () => (
  <Table>
    <Table.Caption ta="center">
      Imperial to metric conversion factors
    </Table.Caption>
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
        <Table.Cell>millimeters</Table.Cell>
        <Table.Cell>25.4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>feet</Table.Cell>
        <Table.Cell>centimeters</Table.Cell>
        <Table.Cell>30.48</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Foot ta="center">
      <Table.Row>
        <Table.Cell>To convert</Table.Cell>
        <Table.Cell>into</Table.Cell>
        <Table.Cell>multiply by</Table.Cell>
      </Table.Row>
    </Table.Foot>
  </Table>
);
