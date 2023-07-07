import { forwardRef, ReactNode, useState } from "react";
// Components
import Animation, { AnimationProps } from "../Animation/Animation";
import Box from "../Box/Box";
import Flex, { FlexProps } from "../Flex/Flex";
import Text from "../Text/Text";
// Hooks
import useAnimation from "../../hooks/useAnimation";
import usePresence from "../../hooks/usePresence";
// Types
import {
  PrismanePositions,
  PrismaneBreakpoints,
  PrismaneColors,
} from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type TooltipProps = {
  element: ReactNode;
  position?: PrismanePositions;
  size?: PrismaneBreakpoints;
  color?: PrismaneColors;
} & AnimationProps<"div"> &
  FlexProps<"div">;

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      label,
      position = "right",
      size = "base",
      color = "base",
      children,
      className,
      sx,
      ...props
    },
    ref
  ) => {
    const [shown, setShown] = useState(false);

    const { animating, animate, duration, timing } = useAnimation(
      shown as boolean
    );

    const presence = usePresence(shown as boolean, duration, animate);

    return (
      <Box
        w="fit-content"
        h="fit-content"
        pos="relative"
        onMouseEnter={() => {
          setShown(true);
        }}
        onMouseLeave={() => {
          setShown(false);
        }}
      >
        {presence && (
          <Animation
            as={Flex}
            pos="absolute"
            z={200}
            w="fit-content"
            t={variants(position, {
              "right-start": "-50%",
              right: "50%",
              "bottom-end": "110%",
              bottom: "110%",
              "bottom-start": "110%",
              "left-start": "-50%",
              left: "50%",
            })}
            b={variants(position, {
              "top-start": "110%",
              top: "110%",
              "top-end": "110%",
              "right-end": "-50%",
              "left-end": "-50%",
            })}
            r={variants(position, {
              "top-end": "-50%",
              "bottom-end": "-50%",
              "left-start": "110%",
              left: "110%",
              "left-end": "110%",
            })}
            l={variants(position, {
              "top-start": "0%",
              top: "50%",
              "right-start": "110%",
              right: "110%",
              "right-end": "110%",
              "bottom-start": "-50%",
              bottom: "50%",
            })}
            px={variants(size, {
              xs: fr(1),
              sm: fr(2),
              base: fr(3),
              md: fr(4),
              lg: fr(5),
            })}
            py={variants(size, {
              xs: fr(0.5),
              sm: fr(0.5),
              base: fr(1),
              md: fr(1.5),
              lg: fr(2),
            })}
            bg={(theme) =>
              theme.mode === "dark" ? [color, 700] : [color, 500]
            }
            cl="white"
            fs="sm"
            br="base"
            animation="fade"
            animated={animating}
            timing={timing}
            sx={{
              transform: variants(position, {
                top: "translateX(-50%)",
                bottom: "translateX(-50%)",
                left: "translateY(-50%)",
                right: "translateY(-50%)",
              }),
              whiteSpace: "nowrap",
              ...sx,
            }}
            className={strip(
              `${className ? className : ""} PrismaneTooltip-root`
            )}
            ref={ref}
            {...props}
          >
            <Text
              fs={variants(size, {
                xs: "xs",
                sm: "sm",
                base: "sm",
                md: "base",
                lg: "md",
              })}
            >
              {label}
            </Text>
          </Animation>
        )}
        {children}
      </Box>
    );
  }
);

export default Tooltip;
