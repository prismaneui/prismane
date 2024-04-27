import React, { useState, useEffect } from "react";
import type { Preview } from "@storybook/react";
import * as DocBlocks from "@storybook/blocks";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { dark, light } from "./theme";
// Prismane
import PrismaneProvider from "../src/components/PrismaneProvider/PrismaneProvider";
import Toaster from "../src/components/Toaster";
import Flex from "../src/components/Flex/Flex";

import "./global.css";
import { fr } from "../src/utils";

const channel = addons.getChannel();

const preview: Preview = {
  decorators: [
    (Story) => {
      const [theme, setTheme] = useState({ mode: "light" });

      const handleAddon = (value: boolean) => {
        setTheme(value ? { mode: "dark" } : { mode: "light" });
      };

      useEffect(() => {
        channel.on(DARK_MODE_EVENT_NAME, handleAddon);
        return () => channel.off(DARK_MODE_EVENT_NAME, handleAddon);
      }, [channel]);

      return (
        <Toaster position="top-right">
          <PrismaneProvider theme={theme}>
            <Flex align="center" gap={fr(4)}>
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
    darkMode: {
      current: "light",
      dark: light,
      light: light,
      darkClass: "dark-theme",
      lightClass: "light-theme",
      stylePreview: true,
    },
    docs: {
      page: () => (
        <>
          <DocBlocks.Title />
          <DocBlocks.Description />
          <h1>Overview</h1>
          <DocBlocks.Primary />
          <h1>Props</h1>
          <DocBlocks.Controls />
          <DocBlocks.Stories />
        </>
      ),
    },
  },
};

export default preview;
