import { useState, useEffect } from "react";
// Hooks
import { usePrismaneTheme } from "../PrismaneContext";

const useCopyToClipboard = (dark: any, light: any): any => {
  const { theme } = usePrismaneTheme();

  const [value, setValue] = useState(theme.mode === "dark" ? dark : light);

  useEffect(() => {
    setValue(theme.mode === "dark" ? dark : light);
  }, [JSON.stringify(theme)]);

  return value;
};

export default useCopyToClipboard;
