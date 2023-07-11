import { FC } from "react";
import { Meta } from "@storybook/react";
import { GearSix } from "@phosphor-icons/react";
// Components
import ActionButton from "./ActionButton";
import Flex from "../Flex/Flex";

export default {
  title: "ActionButton",
  component: ActionButton,
} as Meta;

export const Default: FC = () => {
  return (
    <Flex>
      <ActionButton size="xs" icon={<GearSix />} />
      <ActionButton size="sm" icon={<GearSix />} />
      <ActionButton size="base" icon={<GearSix />} />
      <ActionButton size="md" icon={<GearSix />} />
      <ActionButton size="lg" icon={<GearSix />} />
    </Flex>
  );
};
