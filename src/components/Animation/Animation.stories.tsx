import { useState } from "react";
// Components
import Animation from "./Animation";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import Radio from "../Radio";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Miscellaneous/Animation",
  component: Animation,
};

export const Default = () => {
  const [animated, setAnimated] = useState(true);

  return (
    <Stack gap={fr(4)}>
      <Animation w={fr(30)} h={fr(30)} bg="primary" animated={animated} />
      <Button onClick={() => setAnimated(!animated)}>Toggle Animation</Button>
    </Stack>
  );
};

export const Variants = () => {
  const [animated, setAnimated] = useState(true);

  const [animation, setAnimation] = useState("fade");

  return (
    <Stack gap={fr(4)}>
      <Animation
        animation={animation as any}
        w={fr(30)}
        h={fr(30)}
        bg="primary"
        animated={animated}
      />
      <Radio.Group
        value={animation}
        onChange={(e: any) => setAnimation(e.target.value)}
        wrap="wrap"
      >
        <Radio label="fade" value="fade" />
        <Radio label="scale" value="scale" />
        <Radio label="scale-x" value="scale-x" />
        <Radio label="scale-y" value="scale-y" />
        <Radio label="skew-up" value="skew-up" />
        <Radio label="skew-down" value="skew-down" />
        <Radio label="rotate-left" value="rotate-left" />
        <Radio label="rotate-right" value="rotate-right" />
        <Radio label="slide-down" value="slide-down" />
        <Radio label="slide-up" value="slide-up" />
        <Radio label="slide-right" value="slide-right" />
        <Radio label="slide-left" value="slide-left" />
      </Radio.Group>
      <Button onClick={() => setAnimated(!animated)}>Toggle Animation</Button>
    </Stack>
  );
};

export const Delay = () => {
  const [animated, setAnimated] = useState(true);

  return (
    <Stack gap={fr(4)}>
      <Animation
        delay={500}
        w={fr(30)}
        h={fr(30)}
        bg="primary"
        animated={animated}
      />
      <Button onClick={() => setAnimated(!animated)}>Toggle Animation</Button>
    </Stack>
  );
};

export const Duration = () => {
  const [animated, setAnimated] = useState(true);

  return (
    <Stack gap={fr(4)}>
      <Animation
        duration={1000}
        w={fr(30)}
        h={fr(30)}
        bg="primary"
        animated={animated}
      />
      <Button onClick={() => setAnimated(!animated)}>Toggle Animation</Button>
    </Stack>
  );
};

export const Timing = () => {
  const [animated, setAnimated] = useState(true);

  return (
    <Stack gap={fr(4)}>
      <Animation
        timing="linear"
        w={fr(30)}
        h={fr(30)}
        bg="primary"
        animated={animated}
      />
      <Button onClick={() => setAnimated(!animated)}>Toggle Animation</Button>
    </Stack>
  );
};
