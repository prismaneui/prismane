"use client";

import React, { forwardRef, useEffect } from "react";
// Components
import Paper, { PaperProps } from "@components/Paper";
import Animation, { AnimationProps } from "@components/Animation";
import Backdrop from "@components/Backdrop";
import Portal from "@components/Portal";
// Hooks
import useAnimation from "@hooks/useAnimation";
import usePresence from "@hooks/usePresence";
import useKeyboardShortcut from "@hooks/useKeyboardShortcut";
// Context
import { DrawerContextProvider } from "./DrawerContext";
// Types
import {
  PrismaneWithInternal,
  PrismaneBreakpoints,
  PrismaneProps,
} from "@types";
// Utils
import { cx, variants, dual, fr } from "@utils";
// Internal Components
import DrawerHeader, { DrawerHeaderProps } from "./DrawerHeader";
import DrawerFooter, { DrawerFooterProps } from "./DrawerFooter";

export { type DrawerHeaderProps, type DrawerFooterProps };

export type DrawerProps = PrismaneProps<
  {
    position?: "right" | "left" | "top" | "bottom";
    size?: PrismaneBreakpoints | string | number;
    open?: boolean;
    closable?: boolean;
    onClose?: () => void;
  },
  AnimationProps & PaperProps
>;

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      position = "left",
      size = "base",
      open,
      closable,
      onClose = () => {},
      shadow,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { animate, animating, duration, timing } = useAnimation(
      open as boolean
    );

    const presence = usePresence(open as boolean, duration, animate);

    useKeyboardShortcut(["escape"], onClose, open);

    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }, [open]);

    return (
      <Portal>
        {presence && (
          <Animation
            as={Backdrop}
            justify={variants(position, {
              left: "start",
              top: "start",
              right: "end",
              bottom: "end",
            })}
            direction={variants(position, {
              left: "row",
              top: "column",
              right: "row",
              bottom: "column",
            })}
            animation="fade"
            animated={animating}
            duration={duration}
            timing={timing}
            onClick={onClose}
          >
            <Animation
              as={Paper}
              p={fr(5)}
              bs="border-box"
              br="0!important"
              h={variants(position, {
                left: "100%",
                top: dual(size, {
                  xs: fr(60),
                  sm: fr(72),
                  base: fr(84),
                  md: fr(96),
                  lg: fr(108),
                }),
                right: "100%",
                bottom: dual(size, {
                  xs: fr(60),
                  sm: fr(72),
                  base: fr(84),
                  md: fr(96),
                  lg: fr(108),
                }),
              })}
              w={variants(position, {
                left: dual(size, {
                  xs: fr(60),
                  sm: fr(72),
                  base: fr(84),
                  md: fr(96),
                  lg: fr(108),
                }),
                top: "100%",
                right: dual(size, {
                  xs: fr(60),
                  sm: fr(72),
                  base: fr(84),
                  md: fr(96),
                  lg: fr(108),
                }),
                bottom: "100%",
              })}
              animation={variants(position, {
                left: "slide-left",
                top: "slide-up",
                right: "slide-right",
                bottom: "slide-down",
              })}
              shadow={shadow}
              animated={animating}
              duration={duration}
              timing={timing}
              onClick={(e: any) => {
                e.stopPropagation();
              }}
              className={cx("PrismaneDrawer-root", className, {
                "PrismaneDrawer-root-open": open,
              })}
              data-testid="prismane-drawer"
              ref={ref}
              {...props}
            >
              <DrawerContextProvider value={{ open, closable, onClose }}>
                {children}
              </DrawerContextProvider>
            </Animation>
          </Animation>
        )}
      </Portal>
    );
  }
) as PrismaneWithInternal<
  DrawerProps,
  { Header: DrawerHeaderProps; Footer: DrawerFooterProps }
>;

Drawer.Header = DrawerHeader;
Drawer.Footer = DrawerFooter;

export default Drawer;
