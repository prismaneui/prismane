import React from "react";
// Components
import Box from "./Box";
// Utils
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Box",
  component: Box,
};

export const Default = () => {
  return (
    <Box as="a" href="/" w="100%" p={fr(6)} bg="amethyst">
      My Box component that will render an anchor.
    </Box>
  );
};
