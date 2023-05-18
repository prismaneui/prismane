// Components
import Badge from "./Badge";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Badge",
  component: Badge,
};

const Template: any = (args: any) => {
  return (
    <Badge label={4} {...args} position="right-end">
      <Flex w={fr(8)} h={fr(8)} bg={["primary", 500]}></Flex>
    </Badge>
  );
};

export const Default = Template.bind({});

Default.args = {
  color: "primary",
  size: "base",
};

export const Slate = Template.bind({});

Slate.args = {
  color: "slate",
};

export const Red = Template.bind({});

Red.args = {
  color: "red",
};

export const Orange = Template.bind({});

Orange.args = {
  color: "orange",
};

export const Green = Template.bind({});

Green.args = {
  color: "green",
};
