import { FC, ReactNode, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
// Components
import Card from "../Card/Card";
import Animated from "../Animated";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface DropdownProps extends PrismaneComponent {
  items: ReactNode[];
  search?: boolean;
  empty?: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
  items,
  search,
  empty,
  children,
  className,
  ...props
}) => {
  return (
    <Animated entry={"slideBottom"} className="w-full">
      <Card
        className="bg-white shadow-no-inset rounded-md grow !w-[unset] gap-2 PrsmDropdown-root"
        {...props}
      >
        {children}
        {items.map((item: ReactNode, index: number) => (
          <div
            className={strip(
              `flex items-center py-2 px-3 gap-2 rounded-md text-sm text-base-500 dark:text-white hover:text-base-700 dark:hover:text-base-300/80 hover:bg-base-300/40 dark:hover:bg-base-900 cursor-pointer transition-all ${
                className ? className : ""
              } PrsmDropdown-item`
            )}
            key={index}
          >
            {item}
          </div>
        ))}
        {items.length === 0 && empty}
      </Card>
    </Animated>
  );
};

export default Dropdown;
