import { Meta } from "@storybook/react";
import { Pause, ArchiveBox } from "@phosphor-icons/react";
// Components
import Button from "./Button";
import Flex from "../Flex/Flex";
import Stack from "../Stack/Stack";
// Utils
import { fr } from "../../utils";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: any = (args: any) => {
  return (
    <Flex gap={fr(5)}>
      <Button {...args}></Button>
      {args.action !== true && (
        <Button {...args} icon={<ArchiveBox />}></Button>
      )}
      <Button {...args} loading></Button>
      <Button {...args} disabled></Button>
    </Flex>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  variant: "tertiary",
  children: "Tertiary",
};

export const Text = Template.bind({});

Text.args = {
  variant: "text",
  children: "Text",
};

export const Icon_Position = Template.bind({});

Icon_Position.args = {
  variant: "primary",
  children: "Primary",
  iconPosition: "right",
};

export const Full_Button = () => {
  return (
    <Flex w={fr(96)} h={fr(20)} direction="column">
      <Button full>Full Width Button</Button>
    </Flex>
  );
};

export const Button_Sizes = () => {
  return (
    <Stack align="center">
      <Button w={fr(120)} size="xs">
        xs
      </Button>
      <Button w={fr(120)} size="sm">
        sm
      </Button>
      <Button w={fr(120)} size="base">
        base
      </Button>
      <Button w={fr(120)} size="md">
        md
      </Button>
      <Button w={fr(120)} size="lg">
        lg
      </Button>
    </Stack>
  );
};
