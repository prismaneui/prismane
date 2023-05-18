import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Gradient from "./Gradient";
import Center from "../Center/Center";

export default {
  title: "Gradient",
  component: Gradient,
} as Meta;

export const Default: FC = () => {
  return (
    <Gradient
      as={Center}
      w={64}
      h={64}
      from={["pink", 500]}
      to={["ruby", 600]}
      deg={135}
    >
      Yes
    </Gradient>
  );
};
