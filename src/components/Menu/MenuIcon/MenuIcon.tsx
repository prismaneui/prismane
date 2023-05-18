import { forwardRef } from "react";
// Components
import Icon, { IconProps } from "../../Icon/Icon";
// Utils
import { strip } from "../../../utils";

export type MenuIconProps = IconProps;

const MenuIcon = forwardRef<HTMLDivElement, MenuIconProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Icon
        className={strip(`${className ? className : ""} PrismaneMenuIcon-root`)}
        ref={ref}
        {...props}
        size="sm"
      >
        {children}
      </Icon>
    );
  }
);

export default MenuIcon;
