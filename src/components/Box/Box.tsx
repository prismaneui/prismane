import { forwardRef, useEffect } from "react";
// Hooks
import useStyling from "../../hooks/useStyling";
import usePrismaneColor from "../PrismaneProvider/usePrismaneColor";
// Types
import { PrismaneVersatile, Versatile } from "../../types";
// Utils
import { strip, dual, variants, fr } from "../../utils";

export type BoxProps<E extends Versatile> = {} & PrismaneVersatile<E>;

const Box = forwardRef(
  <E extends Versatile>(
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
    ref: React.ForwardedRef<any>
  ) => {
    const El = as || "div";

    const { getColorStyle } = usePrismaneColor();

    const styles = useStyling({
      width: w,
      height: h,
      marginLeft: ml || mx || m,
      marginRight: mr || mx || m,
      marginTop: mt || my || m,
      marginBottom: mb || my || m,
      paddingLeft: pl || px || p,
      paddingRight: pr || px || p,
      paddingTop: pt || py || p,
      paddingBottom: pb || py || p,
      color: getColorStyle(cl),
      backgroundColor: getColorStyle(bg),
      borderRadius:
        br &&
        dual(br, {
          xs: fr(0.5),
          sm: fr(1),
          base: fr(1.5),
          md: fr(2),
          lg: fr(3),
          xl: fr(4),
          "2xl": fr(6),
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
      borderTop: bdt || bdy || bd,
      borderTopWidth: bdtw || bdyw || bdw,
      borderTopStyle: bdts || bdys || bds,
      borderTopColor: getColorStyle(bdtc || bdyc || bdc),
      borderRight: bdr || bdx || bd,
      borderRightWidth: bdrw || bdxw || bdw,
      borderRightStyle: bdrs || bdxs || bds,
      borderRightColor: getColorStyle(bdrc || bdxc || bdc),
      borderBottom: bdb || bdy || bd,
      borderBottomWidth: bdbw || bdyw || bdw,
      borderBottomStyle: bdbs || bdys || bds,
      borderBottomColor: getColorStyle(bdbc || bdyc || bdc),
      borderLeft: bdl || bdx || bd,
      borderLeftWidth: bdlw || bdxw || bdw,
      borderLeftStyle: bdls || bdxs || bds,
      borderLeftColor: getColorStyle(bdlc || bdxc || bdc),
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
        ref={ref}
        className={strip(
          `${styles.join(" ")} ${className ? className : ""} PrismaneBox-root`
        )}
        {...props}
      >
        {children}
      </El>
    );
  }
);

export default Box;
