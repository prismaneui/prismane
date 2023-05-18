import { Meta } from "@storybook/react";
import { Skull } from "@phosphor-icons/react";
// Components
import List from "./List";
import ListUnordered from "./ListUnordered/ListUnordered";

export default {
  title: "List",
  component: List,
} as Meta;

export const Default = () => (
  <List>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
  </List>
);

export const Unordered = () => (
  <ListUnordered>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
  </ListUnordered>
);

export const Ordered = () => (
  <List.Ordered>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
    <List.Item>yes</List.Item>
  </List.Ordered>
);

export const Icon = () => (
  <List>
    <List.Item>
      <List.Icon>
        <Skull />
      </List.Icon>
      yes
    </List.Item>
    <List.Item>
      <List.Icon>
        <Skull />
      </List.Icon>
      yes
    </List.Item>
    <List.Item>
      <List.Icon>
        <Skull />
      </List.Icon>
      yes
    </List.Item>
    <List.Item>
      <List.Icon>
        <Skull />
      </List.Icon>
      yes
    </List.Item>
    <List.Item>
      <List.Icon>
        <Skull />
      </List.Icon>
      yes
    </List.Item>
    <List.Item>
      <List.Icon>
        <Skull />
      </List.Icon>
      yes
    </List.Item>
  </List>
);
