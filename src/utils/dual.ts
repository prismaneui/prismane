// Utils
import { variants } from "./variants";
import { parse } from "./parse";

export const dual = (
  s: any,
  st: {
    [key: string]: any;
  }
) => {
  const result = parse(s, (v: any) => {
    if (st.hasOwnProperty(v as string)) {
      return variants(v as string, st);
    } else {
      return v;
    }
  });

  return result;
};
