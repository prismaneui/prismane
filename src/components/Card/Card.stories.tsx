import React from "react";
import {
  Heart,
  Fire,
  Tag,
  DotsThreeVertical,
  ThumbsUp,
  Chats,
  ShareFat,
  CaretRight,
} from "@phosphor-icons/react";
// Components
import Card from "./Card";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Image from "../Image/Image";
import Flex from "../Flex/Flex";
import Chip from "../Chip/Chip";
import Avatar from "../Avatar/Avatar";
import ActionButton from "../ActionButton/ActionButton";
import Stack from "../Stack/Stack";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Card",
  component: Card,
};

export const Basic = () => (
  <Card w={420} gap={fr(2)}>
    <Image
      src="https://i.pinimg.com/originals/c0/1f/4c/c01f4c611c6ecaa688d25ddf1259b4aa.jpg"
      br="base"
      fit="cover"
      mb={fr(2)}
    />
    <Flex gap={fr(2)} mt={fr(4)}>
      <Chip icon={<Fire />}>On Sale</Chip>
      <Chip icon={<Tag />} color="teal">
        New
      </Chip>
    </Flex>
    <Flex direction="column">
      <Text
        fs="2xl"
        fw="bold"
        cl={(theme) => (theme.mode === "dark" ? ["base", 100] : ["base", 900])}
      >
        Modern Sofa
      </Text>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 300] : ["base", 700])}
      >
        Experience the ultimate comfort and style with our luxurious sofa,
        designed to elevate your living space.
      </Text>
    </Flex>
    <Text fw="bold" fs="2xl" cl="primary">
      $500
    </Text>
    <Flex gap={fr(4)} mt={fr(8)}>
      <Button full>Buy Now</Button>
      <Button variant="secondary" color="base" full>
        Add To Cart
      </Button>
    </Flex>
  </Card>
);

export const Horizontal = () => (
  <Card direction="row" w={fr(156)}>
    <Image
      src="https://i.pinimg.com/originals/30/9d/5a/309d5abcf142f2e4516f3d7f93b2753e.jpg"
      br="base"
      fit="cover"
      mr={fr(4)}
      w={fr(64)}
      h={fr(64)}
    />
    <Flex direction="column">
      <Text
        fs="2xl"
        fw="bold"
        cl={(theme) => (theme.mode === "dark" ? ["base", 100] : ["base", 900])}
      >
        Ibiza Zen Hotel
      </Text>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 300] : ["base", 700])}
      >
        Experience paradise at our Ibiza oasis, where luxury meets the vibrant
        rhythm of the island.
      </Text>
      <Text fw="bold" fs="2xl" cl="primary" mt={fr(2)}>
        $249
      </Text>
      <Flex gap={fr(2)} mt="auto">
        <Button full>Rent Now</Button>
        <ActionButton
          icon={<Heart />}
          variant="tertiary"
          color="base"
          aria-label="Add to favourites"
        />
      </Flex>
    </Flex>
  </Card>
);

export const Advanced = () => (
  <Card w={480}>
    <Card.Header align="center" justify="between">
      <Flex align="center" gap={fr(4)}>
        <Avatar color="teal">MP</Avatar>
        <Flex direction="column">
          <Text fw="bold" fs="md">
            Martin Petrov
          </Text>
          <Text>Creator of Prismane</Text>
        </Flex>
      </Flex>
      <ActionButton
        icon={<DotsThreeVertical weight="bold" />}
        variant="secondary"
        color="base"
        size="sm"
      />
    </Card.Header>
    Prismane was a mixture of passion, dedication and hard work. Numerous days
    of development led to a great product adapted by many.
    <Card.Footer gap={fr(2)}>
      <Button variant="secondary" color="base" full icon={<ThumbsUp />}>
        Like
      </Button>
      <Button variant="secondary" color="base" full icon={<Chats />}>
        Comment
      </Button>
      <Button variant="secondary" color="base" full icon={<ShareFat />}>
        Share
      </Button>
    </Card.Footer>
  </Card>
);

export const Multiple = () => (
  <Stack>
    <Card direction="row" align="center" cs="pointer">
      <Stack>
        <Text as="h2">User Management</Text>
        <Text>
          Seamlessly control and oversee user accounts and permissions.
        </Text>
      </Stack>
      <CaretRight size={24} />
    </Card>
    <Card direction="row" align="center" cs="pointer">
      <Stack>
        <Text as="h2">Analytics Dashboard</Text>
        <Text>
          Gain insights with comprehensive analytics and data visualization.
        </Text>
      </Stack>
      <CaretRight size={24} />
    </Card>
    <Card direction="row" align="center" cs="pointer">
      <Stack>
        <Text as="h2">Customization Hub</Text>
        <Text>
          Tailor the platform to your needs with flexible customization options.
        </Text>
      </Stack>
      <CaretRight size={24} />
    </Card>
  </Stack>
);
