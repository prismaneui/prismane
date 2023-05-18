import React from "react";
import { Meta } from "@storybook/react";
// Components
import Image from ".";

export default {
  title: "Image",
  component: Image,
} as Meta;

export const Default = () => (
  <Image
    w="320px"
    h="320px"
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.avb9nDfw3kq7NOoP0grM4wHaEK%26pid%3DApi&f=1&ipt=e5c1654d7eeb8d570cb67511e9a05259fee84f93026959f071f08cd8d854fcc8&ipo=images"
  />
);
