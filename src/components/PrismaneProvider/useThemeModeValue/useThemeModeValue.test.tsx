import { renderHook, act } from "@testing-library/react-hooks/dom";
import { vi } from "vitest";
import { usePrismaneTheme } from "../PrismaneContext";
import PrismaneProvider from "../PrismaneProvider";
import useThemeModeValue from "./useThemeModeValue";

// Mock PrismaneProvider to provide the necessary context
const MockPrismaneProvider: React.FC = ({ children }: any) => {
  const theme = {
    mode: "light",
  };

  return <PrismaneProvider theme={theme as any}>{children}</PrismaneProvider>;
};

test("should return the light value when the theme mode is light", () => {
  const { result } = renderHook(
    () => useThemeModeValue("lightValue", "darkValue"),
    {
      wrapper: MockPrismaneProvider,
    }
  );

  expect(result.current).toBe("lightValue");
});

test("should return the dark value when the theme mode is dark", () => {
  const { result: resultTheme, rerender } = renderHook(
    () => ({
      useThemeModeValue: useThemeModeValue("lightValue", "darkValue"),
      usePrismaneTheme: usePrismaneTheme(),
    }),
    {
      wrapper: MockPrismaneProvider,
    }
  );

  // Change the theme mode to "dark"
  act(() => {
    resultTheme.current.usePrismaneTheme.toggleThemeMode();
    rerender();
  });

  expect(resultTheme.current.useThemeModeValue).toBe("darkValue");
});
