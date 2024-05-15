import * as CSS from "csstype";
// Types
import { PrismaneStyles } from "./styles.type";
import { PrismaneColors } from "./colors.type";
import { PrismaneShades } from "./shades.type";
import { PrismaneBreakpoints } from "./breakpoints.type";
import { SxProp } from "./sx.type";

export interface PrismaneDefault {
  w?: PrismaneStyles<CSS.Properties<string | number>["width"]>;
  h?: PrismaneStyles<CSS.Properties<string | number>["height"]>;
  m?: PrismaneStyles<CSS.Properties<string | number>["margin"]>;
  my?: PrismaneStyles<CSS.Properties<string | number>["margin"]>;
  mx?: PrismaneStyles<CSS.Properties<string | number>["margin"]>;
  mt?: PrismaneStyles<CSS.Properties<string | number>["marginTop"]>;
  mr?: PrismaneStyles<CSS.Properties<string | number>["marginRight"]>;
  mb?: PrismaneStyles<CSS.Properties<string | number>["marginBottom"]>;
  ml?: PrismaneStyles<CSS.Properties<string | number>["marginLeft"]>;
  p?: PrismaneStyles<CSS.Properties<string | number>["padding"]>;
  py?: PrismaneStyles<CSS.Properties<string | number>["padding"]>;
  px?: PrismaneStyles<CSS.Properties<string | number>["padding"]>;
  pt?: PrismaneStyles<CSS.Properties<string | number>["paddingTop"]>;
  pr?: PrismaneStyles<CSS.Properties<string | number>["paddingRight"]>;
  pb?: PrismaneStyles<CSS.Properties<string | number>["paddingBottom"]>;
  pl?: PrismaneStyles<CSS.Properties<string | number>["paddingLeft"]>;
  cl?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["color"]
  >;
  bg?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["backgroundColor"]
  >;
  br?: PrismaneStyles<
    | PrismaneBreakpoints
    | "xl"
    | "2xl"
    | CSS.Properties<string | number>["borderRadius"]
  >;
  mih?: PrismaneStyles<CSS.Properties<string | number>["minHeight"]>;
  mah?: PrismaneStyles<CSS.Properties<string | number>["maxHeight"]>;
  miw?: PrismaneStyles<CSS.Properties<string | number>["minWidth"]>;
  maw?: PrismaneStyles<
    | PrismaneBreakpoints
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | CSS.Properties<string | number>["maxWidth"]
  >;
  op?: PrismaneStyles<CSS.Properties<string | number>["opacity"]>;
  pos?: PrismaneStyles<CSS.Properties["position"]>;
  t?: PrismaneStyles<CSS.Properties<string | number>["top"]>;
  r?: PrismaneStyles<CSS.Properties<string | number>["right"]>;
  b?: PrismaneStyles<CSS.Properties<string | number>["bottom"]>;
  l?: PrismaneStyles<CSS.Properties<string | number>["left"]>;
  dp?: PrismaneStyles<CSS.Properties["display"]>;
  z?: PrismaneStyles<CSS.Properties<number>["zIndex"]>;
  of?: PrismaneStyles<CSS.Properties["overflow"]>;
  ff?: PrismaneStyles<CSS.Properties["fontFamily"]>;
  fs?: PrismaneStyles<
    | PrismaneBreakpoints
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | CSS.Properties<string | number>["fontSize"]
  >;
  fw?: PrismaneStyles<CSS.Properties<string | number>["fontWeight"]>;
  ls?: PrismaneStyles<CSS.Properties<string | number>["letterSpacing"]>;
  ta?: PrismaneStyles<CSS.Properties["textAlign"]>;
  lh?: PrismaneStyles<CSS.Properties<string | number>["lineHeight"]>;
  tt?: PrismaneStyles<CSS.Properties["textTransform"]>;
  td?: PrismaneStyles<CSS.Properties["textDecoration"]>;
  bd?: PrismaneStyles<CSS.Properties<string | number>["border"]>;
  bdw?: PrismaneStyles<CSS.Properties<string | number>["borderWidth"]>;
  bds?: PrismaneStyles<CSS.Properties["borderStyle"]>;
  bdc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderColor"]
  >;
  bdt?: PrismaneStyles<CSS.Properties<string | number>["borderTop"]>;
  bdtw?: PrismaneStyles<CSS.Properties<string | number>["borderTopWidth"]>;
  bdts?: PrismaneStyles<CSS.Properties["borderTopStyle"]>;
  bdtc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderTopColor"]
  >;
  bdr?: PrismaneStyles<CSS.Properties<string | number>["borderRight"]>;
  bdrw?: PrismaneStyles<CSS.Properties<string | number>["borderRightWidth"]>;
  bdrs?: PrismaneStyles<CSS.Properties["borderRightStyle"]>;
  bdrc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderRightColor"]
  >;
  bdb?: PrismaneStyles<CSS.Properties<string | number>["borderBottom"]>;
  bdbw?: PrismaneStyles<CSS.Properties<string | number>["borderBottomWidth"]>;
  bdbs?: PrismaneStyles<CSS.Properties["borderBottomStyle"]>;
  bdbc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderBottomColor"]
  >;
  bdl?: PrismaneStyles<CSS.Properties<string | number>["borderLeft"]>;
  bdlw?: PrismaneStyles<CSS.Properties<string | number>["borderLeftWidth"]>;
  bdls?: PrismaneStyles<CSS.Properties["borderLeftStyle"]>;
  bdlc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderLeftColor"]
  >;
  bdx?: PrismaneStyles<CSS.Properties<string | number>["borderInline"]>;
  bdxw?: PrismaneStyles<CSS.Properties<string | number>["borderInlineWidth"]>;
  bdxs?: PrismaneStyles<CSS.Properties["borderInlineStyle"]>;
  bdxc?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderInlineColor"]
  >;
  bdy?: PrismaneStyles<CSS.Properties<string | number>["borderBlock"]>;
  bdyw?: PrismaneStyles<CSS.Properties<string | number>["borderBlockWidth"]>;
  bdyc?: PrismaneStyles<CSS.Properties["borderBlockColor"]>;
  bdys?: PrismaneStyles<
    | PrismaneColors
    | [PrismaneColors, PrismaneShades]
    | [PrismaneColors, PrismaneShades, number]
    | CSS.Properties["borderBlockColor"]
  >;
  ft?: PrismaneStyles<CSS.Properties["filter"]>;
  bft?: PrismaneStyles<CSS.Properties["backdropFilter"]>;
  tsh?: PrismaneStyles<CSS.Properties["textShadow"]>;
  bsh?: PrismaneStyles<
    PrismaneBreakpoints | "xl" | "inner" | CSS.Properties["boxShadow"]
  >;
  pe?: PrismaneStyles<CSS.Properties["pointerEvents"]>;
  cs?: PrismaneStyles<CSS.Properties["cursor"]>;
  bs?: PrismaneStyles<CSS.Properties["boxSizing"]>;
  sx?: SxProp;
}
