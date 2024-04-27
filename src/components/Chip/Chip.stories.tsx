import { At, Lightning, PaperPlaneTilt } from "@phosphor-icons/react";
// Components
import Chip from "./Chip";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Chip",
  component: Chip,
};

export const Default = () => <Chip>Default</Chip>;

export const Sizes = () => (
  <>
    <Chip size="xs">Size xs</Chip>
    <Chip size="sm">Size sm</Chip>
    <Chip size="base">Size base</Chip>
    <Chip size="md">Size md</Chip>
    <Chip size="lg">Size lg</Chip>
  </>
);

export const Colors = () => (
  <>
    <Chip color="red">Chip</Chip>
    <Chip color="orange">Chip</Chip>
    <Chip color="lime">Chip</Chip>
    <Chip color="cyan">Chip</Chip>
    <Chip color="amethyst">Chip</Chip>
  </>
);

export const Icon = () => <Chip icon={<At />}>martinpetrov404</Chip>;

export const Icon_Position = () => (
  <>
    <Chip iconPosition="left" icon={<Lightning />} color="lime">
      Speed
    </Chip>
    <Chip iconPosition="right" icon={<PaperPlaneTilt />} color="diamond">
      Send
    </Chip>
  </>
);

export const Text_Color = () => (
  <Chip color="base" cl="primary">
    Chip
  </Chip>
);
