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
import "../src/index.css";
// Prismane
import ThemeProvider from "../src/themes/ThemeProvider";
import { createTheme } from "../src/themes/theme";
import { PRISMANE_COLORS } from "../src/constants";
import Flex from "../src/components/Flex/Flex";
import Toaster from "../src/components/Toaster/Toaster";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme =
        context.globals.theme === "dark"
          ? createTheme({
              mode: "dark",
              colors: {
                primary: PRISMANE_COLORS.red,
              },
            })
          : createTheme({
              mode: "light",
              colors: {
                primary: PRISMANE_COLORS.pink,
              },
            });

      console.log(PRISMANE_COLORS.diamond[500]);

      return (
        <Toaster>
          <ThemeProvider theme={theme}>
            <Flex
              w="100vw"
              h="100vh"
              align="center"
              justify="center"
              bg={theme.mode === "dark" ? "black" : "white"}
            >
              <Story />
            </Flex>
          </ThemeProvider>
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
