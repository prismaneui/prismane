import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Flex from "../components/Flex/Flex";

export default {
  title: "Flex",
  component: Flex,
} as Meta;

export const Default: FC = () => {
  return (
    <Flex gap="12px">
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
    </Flex>
  );
};

export const Column: FC = () => {
  return (
    <Flex gap="12px" direction="col">
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
    </Flex>
  );
};

export const Wrap: FC = () => {
  return (
    <Flex gap="12px" wrap="wrap" className="w-32">
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
      <div className="flex w-12 h-12 bg-primary-500"></div>
    </Flex>
  );
};
