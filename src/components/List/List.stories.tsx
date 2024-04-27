import { CheckCircle, XCircle } from "@phosphor-icons/react";
// Components
import List from "./List";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/List",
  component: List,
};

export const Default = () => (
  <List>
    <List.Item>First</List.Item>
    <List.Item>Second</List.Item>
    <List.Item>Third</List.Item>
  </List>
);

export const Unordered = () => (
  <List.Unordered ml={fr(5)}>
    <List.Item>First</List.Item>
    <List.Item>Second</List.Item>
    <List.Item>Third</List.Item>
  </List.Unordered>
);

export const Ordered = () => (
  <List.Ordered ml={fr(5)}>
    <List.Item>First</List.Item>
    <List.Item>Second</List.Item>
    <List.Item>Third</List.Item>
  </List.Ordered>
);

export const With_Icon = () => (
  <List>
    <List.Item>
      <List.Icon cl="green">
        <CheckCircle weight="fill" />
      </List.Icon>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </List.Item>
    <List.Item>
      <List.Icon cl="green">
        <CheckCircle weight="fill" />
      </List.Icon>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </List.Item>
    <List.Item>
      <List.Icon cl="red">
        <XCircle weight="fill" />
      </List.Icon>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </List.Item>
  </List>
);

export const Spacing = () => (
  <List gap={fr(4)}>
    <List.Item>First</List.Item>
    <List.Item>Second</List.Item>
    <List.Item>Third</List.Item>
  </List>
);

export const Horizontal = () => (
  <List direction="row" gap={fr(2)}>
    <List.Item>First</List.Item>
    <List.Item>Second</List.Item>
    <List.Item>Third</List.Item>
  </List>
);
