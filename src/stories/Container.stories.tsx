import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Container from "../components/Container/Container";
import Center from "../components/Center/Center";

export default {
  title: "Container",
  component: Container,
} as Meta;

export const Default: FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Container className="border border-red-500">
        <Center className="bg-primary-500 w-24">Hello World</Center>
      </Container>
    </div>
  );
};

export const Fixed: FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Container className="border border-red-500" maxSize="base">
        <Center className="bg-primary-500 w-24">Hello World</Center>
      </Container>
    </div>
  );
};
