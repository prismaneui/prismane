// Components
import Divider from "./Divider";
import Stack from "../Stack/Stack";
import Center from "../Center/Center";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import Square from "../Square/Square";
import Image from "../Image/Image";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Miscellaneous/Divider",
  component: Divider,
};

export const Default = () => <Divider />;

export const Variants = () => (
  <Stack>
    <Divider variant="solid" />
    <Divider variant="dashed" />
    <Divider variant="dotted" />
  </Stack>
);

export const Sizes = () => (
  <Stack>
    <Divider size="xs" />
    <Divider size="sm" />
    <Divider size="base" />
    <Divider size="md" />
    <Divider size="lg" />
  </Stack>
);

export const Orientations = () => (
  <Stack>
    <Divider orientation="horizontal" />
    <Center w="100%" h={fr(20)}>
      <Divider orientation="vertical" />
    </Center>
  </Stack>
);

export const Article_Example = () => (
  <Stack>
    <Text as="h1">Enchanting Waterfalls</Text>
    <Divider />
    <Text>
      Immerse yourself in the breathtaking beauty of nature's marvels – the
      cascading waterfalls. Discover nature's symphony as water gracefully
      dances down rugged cliffs, filling the air with a soothing melody. Feel
      the cool mist on your skin and the invigorating rush of energy that these
      natural wonders evoke. Each waterfall is a unique masterpiece, adorned
      with lush greenery, vibrant wildlife, and hidden grottos. Witness the raw
      power and tranquility coexisting in harmony, and let the enchanting
      waterfalls transport you to a world of awe and wonder, where nature's
      magic reigns supreme.
    </Text>
  </Stack>
);

export const Title_Example = () => (
  <Flex align="center" w="100%" gap={fr(2)}>
    <Divider />
    <Text as="h1">Prismane</Text>
    <Divider />
  </Flex>
);

export const Vertical_Example = () => (
  <Flex gap={fr(6)} h={fr(32)} align="center" miw={fr(192)}>
    <Square size={fr(32)} miw={fr(32)} br="md" of="hidden">
      <Image
        src="https://www.heinemann.com/shared/covers/9780867090192.jpg"
        fit="cover"
      />
    </Square>
    <Divider orientation="vertical" />
    <Stack>
      <Text as="h1">Hamlet</Text>
      <Text maw={fr(144)}>
        Hamlet is a tragedy play written by William Shakespeare, telling the
        story of Prince Hamlet seeking revenge for his father's death. Fueled by
        his inner turmoil, Hamlet grapples with existential questions, madness,
        and the consequences of his actions.
      </Text>
    </Stack>
  </Flex>
);
