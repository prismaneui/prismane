import React, { useState } from "react";
// Components
import Button from "../components/Button/Button";
// Theme
import { createTheme, applyTheme } from "../themes/theme";

export default {
  title: "Theme",
  component: <></>,
};

export const Default = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = createTheme({ mode: mode });

  applyTheme(theme);

  return (
    <div className="flex items-center gap-5">
      <Button
        variant="primary"
        onClick={() => {
          setMode("light");
        }}
      >
        Light Theme
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          setMode("dark");
        }}
      >
        Dark Theme
      </Button>
    </div>
  );
};
