import React from "react";
// Components
import Tabs from "./Tabs";

export default {
  tags: ["autodocs"],
  title: "Components/Navigation/Tabs",
  component: Tabs,
};

export const Default = () => (
  <Tabs defaultValue="first">
    <Tabs.List>
      <Tabs.Tab value="first">First</Tabs.Tab>
      <Tabs.Tab value="second">Second</Tabs.Tab>
      <Tabs.Tab value="third">Third</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="first">First</Tabs.Panel>
    <Tabs.Panel value="second">Second</Tabs.Panel>
    <Tabs.Panel value="third">Third</Tabs.Panel>
  </Tabs>
);

export const Disabled = () => (
  <Tabs defaultValue="first">
    <Tabs.List>
      <Tabs.Tab value="first">First</Tabs.Tab>
      <Tabs.Tab value="second" disabled>
        Second
      </Tabs.Tab>
      <Tabs.Tab value="third">Third</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="first">First</Tabs.Panel>
    <Tabs.Panel value="second">Second</Tabs.Panel>
    <Tabs.Panel value="third">Third</Tabs.Panel>
  </Tabs>
);

export const Variants = () => (
  <Tabs defaultValue="first" variant="filled">
    <Tabs.List>
      <Tabs.Tab value="first">First</Tabs.Tab>
      <Tabs.Tab value="second">Second</Tabs.Tab>
      <Tabs.Tab value="third">Third</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="first">First</Tabs.Panel>
    <Tabs.Panel value="second">Second</Tabs.Panel>
    <Tabs.Panel value="third">Third</Tabs.Panel>
  </Tabs>
);

export const Alignment = () => (
  <Tabs defaultValue="first">
    <Tabs.List justify="end">
      <Tabs.Tab value="first">First</Tabs.Tab>
      <Tabs.Tab value="second">Second</Tabs.Tab>
      <Tabs.Tab value="third">Third</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="first">First</Tabs.Panel>
    <Tabs.Panel value="second">Second</Tabs.Panel>
    <Tabs.Panel value="third">Third</Tabs.Panel>
  </Tabs>
);
