import { forwardRef } from "react";
// Hooks
import useStyling from "./useStyling";
import usePrismaneColor from "@components/PrismaneProvider/usePrismaneColor";
// Theme
import { usePrismaneTheme } from "@components/PrismaneProvider/PrismaneContext";
// Types
import {
  PrismaneComponent,
  PrismaneVersatile,
  Versatile,
  PrismaneVersatileRef,
} from "@/types";
// Utils
import { strip, dual, variants, fr } from "@/utils";

export type BoxProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneComponent
>;

type BoxComponent = <E extends Versatile = "div">(props: BoxProps<E>) => any;

const Box: BoxComponent = forwardRef(
  <E extends Versatile = "div">(
    {
      as,
      w,
      h,
      m,
      my,
      mx,
      mt,
      mr,
      mb,
      ml,
      p,
      py,
      px,
      pt,
      pr,
      pb,
      pl,
      cl,
      bg,
      br,
      mih,
      mah,
      miw,
      maw,
      op,
      pos,
      t,
      r,
      b,
      l,
      dp,
      z,
      of,
      ff,
      fs,
      fw,
      ls,
      ta,
      lh,
      tt,
      td,
      bd,
      bdw,
      bds,
      bdc,
      bdt,
      bdtw,
      bdts,
      bdtc,
      bdr,
      bdrw,
      bdrs,
      bdrc,
      bdb,
      bdbw,
      bdbs,
      bdbc,
      bdl,
      bdlw,
      bdls,
      bdlc,
      bdx,
      bdxw,
      bdxs,
      bdxc,
      bdy,
      bdyw,
      bdys,
      bdyc,
      ft,
      bft,
      tsh,
      bsh,
      pe,
      cs,
      bs,
      sx,
      children,
      className,
      ...props
    }: BoxProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const El = as ?? "div";

    const { getColorStyle } = usePrismaneColor();

    const { theme } = usePrismaneTheme();

    const styles = useStyling({
      width: w,
      height: h,
      margin: m,
      marginLeft: ml || mx,
      marginRight: mr || mx,
      marginTop: mt || my,
      marginBottom: mb || my,
      padding: p,
      paddingLeft: pl || px,
      paddingRight: pr || px,
      paddingTop: pt || py,
      paddingBottom: pb || py,
      color: getColorStyle(cl),
      backgroundColor: getColorStyle(bg),
      borderRadius:
        br &&
        dual(br, {
          xs: theme.borderRadius.xs,
          sm: theme.borderRadius.sm,
          base: theme.borderRadius.base,
          md: theme.borderRadius.md,
          lg: theme.borderRadius.lg,
          xl: theme.borderRadius.xl,
          "2xl": theme.borderRadius["2xl"],
          full: "9999px",
        }),
      minHeight: mih,
      maxHeight: mah,
      minWidth: miw,
      maxWidth:
        maw &&
        dual(maw, {
          xs: fr(80),
          sm: fr(96),
          base: fr(112),
          md: fr(128),
          lg: fr(144),
          xl: fr(168),
          "2xl": fr(192),
          "3xl": fr(224),
          "4xl": fr(256),
          "5xl": fr(288),
          "6xl": fr(320),
        }),
      opacity: op,
      position: pos,
      top: t,
      right: r,
      bottom: b,
      left: l,
      display: dp,
      zIndex: z,
      overflow: of,
      fontFamily: ff,
      fontSize: variants(fs, {
        xs: fr(3),
        sm: fr(3.5),
        base: fr(4),
        md: fr(4.5),
        lg: fr(5),
        xl: fr(6),
        "2xl": fr(7.5),
        "3xl": fr(9),
        "4xl": fr(12),
        "5xl": fr(15),
        "6xl": fr(18),
        "7xl": fr(24),
        "8xl": fr(32),
      }),
      fontWeight: variants(fw, {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      }),
      letterSpacing: ls,
      textAlign: ta,
      lineHeight: lh,
      textTransform: tt,
      textDecoration: td,
      border: bd,
      borderWidth: bdw,
      borderStyle: bds,
      borderColor: getColorStyle(bdc),
      borderTop: bdt || bdy,
      borderTopWidth: bdtw || bdyw,
      borderTopStyle: bdts || bdys,
      borderTopColor: getColorStyle(bdtc || bdyc),
      borderRight: bdr || bdx,
      borderRightWidth: bdrw || bdxw,
      borderRightStyle: bdrs || bdxs,
      borderRightColor: getColorStyle(bdrc || bdxc),
      borderBottom: bdb || bdy,
      borderBottomWidth: bdbw || bdyw,
      borderBottomStyle: bdbs || bdys,
      borderBottomColor: getColorStyle(bdbc || bdyc),
      borderLeft: bdl || bdx,
      borderLeftWidth: bdlw || bdxw,
      borderLeftStyle: bdls || bdxs,
      borderLeftColor: getColorStyle(bdlc || bdxc),
      filter: ft,
      backdropFilter: bft,
      textShadow: tsh,
      boxShadow: dual(bsh, {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        base: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        md: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        lg: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      }),
      pointerEvents: pe,
      cursor: cs,
      boxSizing: bs,
      ...sx,
    });

    return (
      <El
        className={strip(
          `${styles.join(" ")} ${className ? className : ""} PrismaneBox-root`
        )}
        data-testid="prismane-box"
        ref={ref}
        {...props}
      >
        {children}
      </El>
    );
  }
);

export default Box;
