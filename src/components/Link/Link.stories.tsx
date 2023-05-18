import React from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
// Components
import Link from "./Link";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Link",
  component: Link,
};

export const Default = () => (
  <Flex direction="column">
    <Link href="https://www.google.com" fs="xs">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="sm">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="base">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="md">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="lg">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="xl">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="2xl">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="3xl">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="4xl">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="5xl">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="6xl">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="7xl">
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="8xl">
      Google <ArrowSquareOut />
    </Link>
  </Flex>
);

export const External = () => (
  <Flex direction="column">
    <Link href="https://www.google.com" fs="xs" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="sm" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="base" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="md" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="lg" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="xl" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="2xl" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="3xl" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="4xl" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="5xl" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="6xl" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="7xl" external>
      Google <ArrowSquareOut />
    </Link>
    <Link href="https://www.google.com" fs="8xl" external>
      Google <ArrowSquareOut />
    </Link>
  </Flex>
);
