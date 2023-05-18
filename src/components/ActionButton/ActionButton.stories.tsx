import { FC } from "react";
import { Meta } from "@storybook/react";
import { GearSix } from "@phosphor-icons/react";
// Components
import ActionButton from "./ActionButton";

export default {
  title: "ActionButton",
  component: ActionButton,
} as Meta;

export const Default: FC = () => {
  return (
    <ActionButton>
      <GearSix size={20} />
    </ActionButton>
  );
};
