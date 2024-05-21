"use client";

import React, { forwardRef, ReactNode, useState } from "react";
import {
  Warning,
  WarningOctagon,
  CheckCircle,
  Info,
} from "@phosphor-icons/react";
// Components
import Animation, { AnimationProps } from "@components/Animation";
import Flex, { FlexProps } from "@components/Flex";
import CloseButton from "@components/CloseButton";
// Hooks
import useAnimation from "@hooks/useAnimation";
import usePresence from "@hooks/usePresence";
// Types
import { PrismaneActions, PrismaneWithInternal, PrismaneProps } from "@types";
// Utils
import { cx, variants, fr } from "@utils";

// Internal Components
import AlertTitle, { AlertTitleProps } from "./AlertTitle";
import AlertDescription, { AlertDescriptionProps } from "./AlertDescription";

export { type AlertTitleProps, type AlertDescriptionProps };

export type AlertProps = PrismaneProps<
  {
    variant?: PrismaneActions;
    icon?: ReactNode;
    action?: ReactNode;
    closable?: boolean;
  },
  AnimationProps & FlexProps
>;

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { variant = "info", icon, action, closable, children, className, ...props },
    ref
  ) => {
    const [shown, setShown] = useState(true);

    const { animate, animating, duration, timing } = useAnimation(
      shown as boolean
    );

    const presence = usePresence(shown as boolean, duration, animate);

    return (
      <>
        {presence && (
          <Animation
            as={Flex}
            align="center"
            gap={fr(4)}
            animation="fade"
            animated={animating}
            duration={duration}
            timing={timing}
            w="fit-content"
            py={fr(3)}
            px={fr(4)}
            br="base"
            bg={(theme) =>
              theme.mode === "dark"
                ? variants(variant, {
                    warning: ["copper", 700, 0.2],
                    error: ["red", 700, 0.2],
                    success: ["green", 700, 0.2],
                    info: ["diamond", 700, 0.2],
                  })
                : variants(variant, {
                    warning: ["copper", 500, 0.2],
                    error: ["red", 500, 0.2],
                    success: ["green", 500, 0.2],
                    info: ["diamond", 500, 0.2],
                  })
            }
            cl={(theme) =>
              theme.mode === "dark"
                ? variants(variant, {
                    warning: ["copper", 500],
                    error: ["red", 500],
                    success: ["green", 500],
                    info: ["diamond", 500],
                  })
                : variants(variant, {
                    warning: ["copper", 700],
                    error: ["red", 700],
                    success: ["green", 700],
                    info: ["diamond", 700],
                  })
            }
            className={cx("PrismaneAlert-root", className, {
              [`PrismaneAlert-root-${variant}`]: true,
            })}
            data-testid="prismane-alert"
            ref={ref}
            {...props}
          >
            <Flex
              align="center"
              className={cx("PrismaneAlert-icon", {
                [`PrismaneAlert-icon-${variant}`]: true,
              })}
            >
              {variant === "warning" ? (
                icon ? (
                  icon
                ) : (
                  <Warning size={24} style={{ alignSelf: "flex-start" }} />
                )
              ) : (
                <></>
              )}
              {variant === "error" ? (
                icon ? (
                  icon
                ) : (
                  <WarningOctagon
                    size={24}
                    style={{ alignSelf: "flex-start" }}
                  />
                )
              ) : (
                <></>
              )}
              {variant === "success" ? (
                icon ? (
                  icon
                ) : (
                  <CheckCircle size={24} style={{ alignSelf: "flex-start" }} />
                )
              ) : (
                <></>
              )}
              {variant === "info" ? (
                icon ? (
                  icon
                ) : (
                  <Info size={24} style={{ alignSelf: "flex-start" }} />
                )
              ) : (
                <></>
              )}
            </Flex>
            <Flex
              direction="column"
              fs="sm"
              gap={fr(2)}
              className={cx("PrismaneAlert-text", {
                [`PrismaneAlert-text-${variant}`]: true,
              })}
            >
              {children}
            </Flex>
            {closable && (
              <Flex
                w="fit-content"
                h="fit-content"
                justify="center"
                align="center"
                ml={fr(16)}
                onClick={() => {
                  setShown(false);
                }}
                className={cx("PrismaneAlert-action", {
                  [`PrismaneAlert-action-${variant}`]: true,
                })}
              >
                {action ? (
                  action
                ) : (
                  <CloseButton
                    size="sm"
                    color={variants(variant, {
                      warning: "copper",
                      error: "red",
                      success: "green",
                      info: "diamond",
                    })}
                  />
                )}
              </Flex>
            )}
          </Animation>
        )}
      </>
    );
  }
) as PrismaneWithInternal<
  AlertProps,
  {
    Title: AlertTitleProps;
    Description: AlertDescriptionProps;
  }
>;

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export default Alert;
