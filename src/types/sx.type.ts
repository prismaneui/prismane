import type { CSSProperties } from "@stitches/react";
import type * as Util from "@stitches/react/types/util";
import type * as Native from "@stitches/react/types/css";
import type * as Config from "@stitches/react/types/config";
// Types
import { PrismaneStyles } from "./styles.type";

type ValueByPropertyName<PropertyName> =
  PropertyName extends keyof CSSProperties
    ? CSSProperties[PropertyName]
    : never;

export type SxProp = {
  [K in Util.Prefixed<"@", keyof Config.ConfigType.Media>]?: SxProp;
} & {
  [K in keyof CSSProperties]?: PrismaneStyles<
    ValueByPropertyName<K> | Native.Globals | Util.Index | undefined
  >;
} & {
  [K: string]: PrismaneStyles<number | string | SxProp | object | undefined>;
};
