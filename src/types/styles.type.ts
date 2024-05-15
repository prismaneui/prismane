// Types
import { GlobalStyles } from "./global.type";
import { PrismaneTheme } from "./theme.type";

export type PrismaneStyles<T = string | number> =
  | T
  | GlobalStyles
  | [T | GlobalStyles, { [pseudo in string]?: T | GlobalStyles }]
  | ((
      theme: PrismaneTheme
    ) =>
      | T
      | GlobalStyles
      | [T | GlobalStyles, { [pseudo in string]?: T | GlobalStyles }]);
