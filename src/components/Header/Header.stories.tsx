import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Header from "./Header";
import Avatar from "../Avatar";
import Flex from "../Flex";
import Link from "../Link";
// Utils
import { fr } from "../../utils";

export default {
  title: "Header",
  component: Header,
} as Meta;

export const Default: FC = () => {
  return (
    <Header
      justify="between"
      gap={fr(20)}
      h={fr(15)}
      px={fr(4)}
      bd={1}
      bdc="primary"
    >
      <Avatar size="sm">MP</Avatar>
      <Flex gap={fr(4)} align="center">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact Us</Link>
        <Link href="#" cl="primary">
          Login
        </Link>
      </Flex>
    </Header>
  );
};
