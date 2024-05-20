import React from "react";
// Components
import { Text } from "../../components";
// Hooks
import useMediaQuery from "./useMediaQuery";

export default {
  tags: ["autodocs"],
  title: "Hooks/User Interface/useMediaQuery",
  component: useMediaQuery,
};

export const Default = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Text
      cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
    >
      {isMobile ? "Mobile View" : "Desktop View"}
    </Text>
  );
};
