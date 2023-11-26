import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Footer from "./Footer";
import Avatar from "../Avatar";
import Flex from "../Flex";
import Link from "../Link";
// Utils
import { fr } from "../../utils";

export default {
  title: "Footer",
  component: Footer,
} as Meta;

export const Default: FC = () => {
  return (
    <Footer direction="column" gap={fr(6)}>
      <Flex maw="80%" justify="evenly" grow>
        <Avatar size="sm">MP</Avatar>
        <Flex direction="column" gap={fr(2)}>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
        </Flex>
        <Flex direction="column" gap={fr(2)}>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
        </Flex>
        <Flex direction="column" gap={fr(2)}>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
          <Link href="#">Lorem</Link>
        </Flex>
      </Flex>
      <Flex
        px={fr(4)}
        py={fr(2)}
        bdtw={1}
        bdc={(theme) =>
          theme.mode === "dark" ? ["base", 300, 0.2] : ["base", 700, 0.5]
        }
      >
        Copyright 2023
      </Flex>
    </Footer>
  );
};
