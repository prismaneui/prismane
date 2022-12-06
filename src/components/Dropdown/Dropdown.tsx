import React, { FC, ReactNode } from "react";
// Components
import Card from "../Card/Card";
import Separator from "../Separator/Separator";
// Types
import { PrismaneComponent } from "../../types";

export interface DropdownProps extends PrismaneComponent {
  items: DropdownItem[];
}

interface DropdownItem extends PrismaneComponent {
  text: string;
  icon?: ReactNode;
  type?: "separator" | any;
}

const Dropdown: FC<DropdownProps> = ({ items, style }) => {
  return (
    <Card
      className="bg-white drop-shadow-md animate-slide-bottom rounded-md min-w-[200px]"
      style={style}
    >
      {items.map((item: DropdownItem) => {
        if (item.type === "separator") {
          return <Separator />;
        } else {
          return (
            <div
              className={`flex items-center py-2 px-3 gap-2 rounded-md text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-400/10 transition-all ${
                item.className ? item.className : ""
              }`}
              onClick={item.onClick}
            >
              {item.icon && item.icon}
              {item.text}
            </div>
          );
        }
      })}
    </Card>
  );
};

export default Dropdown;
