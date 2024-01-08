import React from "react";
import type { Preview } from "@storybook/react";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
// Prismane
import PrismaneProvider from "../src/components/PrismaneProvider/PrismaneProvider";
import Flex from "../src/components/Flex/Flex";
import { PRISMANE_COLORS } from "../src/constants";
import Toaster from "../src/components/Toaster";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme =
        context.globals.theme === "dark"
          ? {
              mode: "dark",
              colors: {
                primary: { ...PRISMANE_COLORS.ruby },
                base: { ...PRISMANE_COLORS.gray },
              },
            }
          : {
              mode: "light",
              colors: {
                primary: { ...PRISMANE_COLORS.ruby },
                base: { ...PRISMANE_COLORS.gray },
              },
            };

      return (
        <Toaster position="top-right">
          <PrismaneProvider theme={theme}>
            <Flex
              w="100vw"
              h="100vh"
              align="center"
              justify="center"
              bg={(theme) => (theme.mode === "dark" ? "black" : "white")}
            >
              <Story />
            </Flex>
          </PrismaneProvider>
        </Toaster>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
