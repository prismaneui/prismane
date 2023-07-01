import { Flex, Button, Animation } from "../components";
import useAnimation from "./useAnimation";
import { fr } from "../utils";

export default {
  title: "useAnimation",
  component: useAnimation,
};

export const Default = () => {
  const { animating, animate, timing, duration } = useAnimation();

  return (
    <Flex direction="column" gap={fr(5)}>
      <Button onClick={() => animate()}>Toggle Animation</Button>
      <Animation
        w={fr(30)}
        h={fr(30)}
        bg="primary"
        animated={animating}
        timing={timing}
        duration={duration}
      />
    </Flex>
  );
};
