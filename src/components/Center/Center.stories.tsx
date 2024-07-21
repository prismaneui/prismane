import { Wrench } from "@phosphor-icons/react";
// Components
import Center from "./Center";
import Text from "../Text";
import Link from "../Link";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Center",
  component: Center,
};

export const Default = () => {
  return (
    <Center h={120} w="100%" bg="primary" cl="white">
      This content will be centered on both axis.
    </Center>
  );
};

export const Frame = () => (
  <Center w={64} h={64} bg="primary" cl="white">
    <Wrench size={24} />
  </Center>
);

export const Page = () => (
  <Center w="100%" h="20vh" direction="column" gap={fr(4)} ta="center">
    <Text as="h1" fs="3xl">
      Ooops... We ran into a problem!
    </Text>
    <Text>
      Our team is working hard to fix the problems as soon as possible!
    </Text>
    <Link href="#" cl="primary" mt={fr(8)}>
      Go back to home
    </Link>
  </Center>
);
