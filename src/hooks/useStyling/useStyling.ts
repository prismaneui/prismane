import { useLayoutEffect, useState } from "react";
import { css } from "../../../stitches.config";
// Theme
import { usePrismaneTheme } from "../../components/PrismaneProvider/PrismaneContext";
// Hooks
import useMemoization from "../useMemoization";
// Types
import { PrismaneTheme } from "../../types";

type StylingProp =
  | any
  | ((theme: PrismaneTheme) => any)
  | [any, { [pseudo: string]: any }];

type StylingProps = {
  [key: string]: StylingProp;
};

type StylingGeneratorFunction = (pk: string, pv: any) => string;

type StylingHook = (props: StylingProps) => any[];

const useStyling: StylingHook = (props: StylingProps) => {
  const { memoize } = useMemoization();

  const { theme } = usePrismaneTheme();

  const [computed, setComputed] = useState<string[]>([]);

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

        return computeStyles(temporary);
      } else {
        return computeStyles({ [pk]: pv });
      }
    }
  );

  const compute = (key: string, prop: any) => {
    if (typeof prop === "object" && !Array.isArray(prop) && prop !== null) {
      Object.keys(prop).forEach((k) => {
        if (
          typeof prop[k] === "object" &&
          !Array.isArray(prop[k]) &&
          prop[k] !== null
        ) {
          compute(k, prop[k]);
        } else {
          prop[k] = typeof prop[k] === "function" ? prop[k](theme) : prop[k];
        }
      });
    }

    const result = generateStyles(
      key,
      typeof prop === "function" ? prop(theme) : prop
    );

    setComputed((pc) => [...pc, result]);
  };

  useLayoutEffect(() => {
    const stripped = Object.fromEntries(
      Object.entries(props).filter(([_, value]) => value !== undefined)
    );

    for (const key in stripped) {
      const prop: StylingProp = stripped[key];

      if (prop !== undefined) {
        compute(key, prop);
      }
    }

    return () => setComputed([]);
  }, [JSON.stringify(props), JSON.stringify(theme)]);

  return computed;
};

export default useStyling;
