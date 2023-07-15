import { forwardRef } from "react";
// Components
import Card, { CardProps } from "../Card/Card";
import Animation, { AnimationProps } from "../Animation/Animation";
// Hooks
import usePresence from "../../hooks/usePresence";
import useAnimation from "../../hooks/useAnimation";
// Types
import { PrismaneWithInternal } from "../../types";
// Utils
import { strip, fr } from "../../utils";

// Internal Components
import MenuItem, { MenuItemProps } from "./MenuItem/MenuItem";
import MenuLabel, { MenuLabelProps } from "./MenuLabel/MenuLabel";
import MenuIcon, { MenuIconProps } from "./MenuIcon/MenuIcon";

export { type MenuItemProps, type MenuLabelProps, type MenuIconProps };

export type MenuProps = { open?: boolean } & AnimationProps<"div"> &
  CardProps<"div">;

const Menu: PrismaneWithInternal<
  MenuProps,
  { Item: MenuItemProps; Label: MenuLabelProps; Icon: MenuIconProps }
> = forwardRef<HTMLDivElement, MenuProps>(
  ({ open = false, children, className, ...props }, ref) => {
    const { animating, animate, duration, timing } = useAnimation(
      open as boolean
    );

    const presence = usePresence(open as boolean, duration, animate);

    return (
      <>
        {presence && (
          <Animation
            as={Card}
            z={200}
            direction="column"
            gap={fr(2)}
            bdw={1}
            bdc={(theme) =>
              theme.mode === "dark" ? ["base", 700] : ["base", 200]
            }
            br="base"
            bs="border-box"
            animation="fade"
            animated={animating}
            duration={duration}
            timing={timing}
            className={strip(
              `${className ? className : ""} ${
                open ? "PrismaneMenu-root-open" : ""
              } PrismaneMenu-root`
            )}
            ref={ref}
            {...props}
          >
            {children}
          </Animation>
        )}
      </>
    );
  }
);

Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Icon = MenuIcon;

export default Menu;
