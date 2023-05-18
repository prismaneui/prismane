import { css } from "@stitches/react";
// Hooks
import useMemoization from "./useMemoization";
import useTheme from "./useTheme";
// Types
import { PrismaneTheme } from "../types";

type StylingProp =
  | any
  | ((theme: PrismaneTheme) => any)
  | [any, { [pseudo: string]: any }];

type StylingProps = {
  [key: string]: StylingProp;
};

type StylingResult = {
  value: any;
  computed: any;
};

type StylingGeneratorFunction = (pk: string, pv: any) => StylingResult;

type StylingHook = (props: StylingProps) => any[];

const useStyling: StylingHook = (props: StylingProps) => {
  const { memoize } = useMemoization();

  const { theme } = useTheme();

  const computed: any[] = [];

  const computeStyles = (obj: any) => {
    return css(obj);
  };

  const generateStyles: StylingGeneratorFunction = memoize(
    (pk: string, pv: any) => {
      if (Array.isArray(pv) && typeof pv[1] === "object" && pv[1] !== null) {
        const [value, pseudoStyles] = pv;

        const temporary: any = {};

        temporary[pk] = value;

        Object.keys(pseudoStyles).forEach((pseudo) => {
          temporary[`&:${pseudo}`] = {
            [pk]: pseudoStyles[pseudo],
          };
        });

        return {
          value: pv,
          computed: computeStyles(temporary),
        };
      } else {
        return {
          value: pv,
          computed: computeStyles({ [pk]: pv }),
        };
      }
    },
    (cv: StylingResult, pv: any) => {
      return JSON.stringify(cv.value) === JSON.stringify(pv);
    }
  );

  for (const key in props) {
    const prop: StylingProp = props[key];

    if (prop !== undefined) {
      const result = generateStyles(
        key,
        typeof prop === "function" ? prop(theme) : prop
      );

      computed.push(result.computed);
    }
  }

  return computed;
};

export default useStyling;
