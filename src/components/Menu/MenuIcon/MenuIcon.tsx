import { forwardRef } from "react";
// Components
import Icon, { IconProps } from "@components/Icon";
// Utils
import { strip } from "@/utils";

export type MenuIconProps = Omit<IconProps, "size">;

const MenuIcon = forwardRef<HTMLDivElement, MenuIconProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Icon
        className={strip(`${className ? className : ""} PrismaneMenuIcon-root`)}
        data-testid="prismane-menu-icon"
        ref={ref as any}
        {...props}
        size="sm"
      >
        {children}
      </Icon>
    );
  }
);

export default MenuIcon;
