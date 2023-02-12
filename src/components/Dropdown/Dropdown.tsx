import { FC, ReactNode } from "react";
// Components
import Card from "../Card/Card";
// Types
import { PrismaneComponent } from "../../types";

export interface DropdownProps extends PrismaneComponent {
  items: ReactNode[];
}

const Dropdown: FC<DropdownProps> = ({ items, className, ...props }) => {
  return (
    <Card
      className="bg-white shadow-no-inset animate-slide-bottom rounded-md grow !w-[unset] gap-2"
      {...props}
    >
      {items.map((item: ReactNode) => (
        <div
          className={`flex items-center py-2 px-3 gap-2 rounded-md text-sm text-base-500 hover:text-base-700 hover:bg-base-300/40 cursor-pointer transition-all ${
            className ? className : ""
          }`}
        >
          {item}
        </div>
      ))}
    </Card>
  );
};

export default Dropdown;
