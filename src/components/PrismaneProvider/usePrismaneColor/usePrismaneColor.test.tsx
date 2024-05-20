import { renderHook } from "@testing-library/react-hooks/dom";
import React from "react";
import { test } from "vitest";
import { usePrismaneTheme } from "../PrismaneContext";
import PrismaneProvider from "../PrismaneProvider";
import usePrismaneColor from "./usePrismaneColor";
import { transformColor } from "../../../themes";

// Mock PrismaneProvider to provide the necessary context
const MockPrismaneProvider: React.FC = ({ children }: any) => {
  return <PrismaneProvider>{children}</PrismaneProvider>;
};

test("should return the correct color", () => {
  const { result } = renderHook(
    () => ({
      usePrismaneColor: usePrismaneColor(),
      usePrismaneTheme: usePrismaneTheme(),
    }),
    {
      wrapper: MockPrismaneProvider,
    }
  );

  // Check the default color without specifying the shade
  const defaultColor = result.current.usePrismaneColor.getColor("primary");

  expect(defaultColor).toBe(
    result.current.usePrismaneTheme.theme.colors.primary[500]
  );

  // Check the color with a specific shade
  const specificShade = result.current.usePrismaneColor.getColor(
    "primary",
    300
  );

  expect(specificShade).toBe(
    result.current.usePrismaneTheme.theme.colors.primary[300]
  );
});

test("should return the correct color style", () => {
  const { result } = renderHook(
    () => ({
      usePrismaneColor: usePrismaneColor(),
      usePrismaneTheme: usePrismaneTheme(),
    }),
    {
      wrapper: MockPrismaneProvider,
    }
  );

  // Check the default color style without specifying the shade
  const defaultColorStyle =
    result.current.usePrismaneColor.getColorStyle("primary");
  expect(defaultColorStyle).toBe(
    `rgba(${transformColor(
      result.current.usePrismaneTheme.theme.colors.primary[500]
    )} / 1)`
  );

  // Check the color style with a specific shade
  const specificShadeStyle = result.current.usePrismaneColor.getColorStyle([
    "primary",
    300,
  ]);
  expect(specificShadeStyle).toBe(
    `rgba(${transformColor(
      result.current.usePrismaneTheme.theme.colors.primary[300]
    )} / 1)`
  );
});
