import { ReactNode, FC, useState } from "react";
// Context
import { PrismaneContextProvider } from "./PrismaneContext";
// Themes
import { base } from "../../themes/base";
import { createTheme } from "../../themes/theme";
// Types
import { PrismaneInputTheme } from "../../types";

export interface PrismaneProviderProps {
  children: ReactNode;
  theme?: PrismaneInputTheme;
}

const PrismaneProvider: FC<PrismaneProviderProps> = ({
  children,
  theme = base,
}) => {
  const [current, setCurrent] = useState(createTheme(theme));

  const toggleThemeMode = () => {
    setCurrent((pt) => {
      const extended = { ...pt };

      extended.mode = pt.mode === "dark" ? "light" : "dark";

      return extended;
    });
  };

  const setTheme = (nt: PrismaneInputTheme) => {
    setCurrent(createTheme(nt));
  };

  return (
    <PrismaneContextProvider
      value={{
        theme: current,
        setTheme: setTheme,
        toggleThemeMode: toggleThemeMode,
      }}
    >
      {children}
    </PrismaneContextProvider>
  );
};

export default PrismaneProvider;
