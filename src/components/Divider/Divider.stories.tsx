import React from "react";
// Components
import Divider from "./Divider";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Divider",
  component: Divider,
};

export const Default = () => (
  <Flex direction="column" w={fr(120)} h={fr(120)}>
    {/* <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia
      deleniti quae atque a totam est iusto iste aliquid ipsa tenetur nam
      impedit ipsum, laudantium, voluptatem quibusdam et, assumenda optio!
    </p> */}
    <Divider orientation="vertical" />
    {/* <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia
      deleniti quae atque a totam est iusto iste aliquid ipsa tenetur nam
      impedit ipsum, laudantium, voluptatem quibusdam et, assumenda optio!
    </p> */}
  </Flex>
);

export const Sizes = () => (
  <Flex direction="column" w={fr(120)} h={fr(120)} gap={fr(5)}>
    <Divider size="xs" />
    <Divider size="sm" />
    <Divider size="base" />
    <Divider size="md" />
    <Divider size="lg" />
  </Flex>
);
