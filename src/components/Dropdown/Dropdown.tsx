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
      className={`bg-white drop-shadow-md animate-slide-bottom rounded-md grow !w-[unset] gap-2 ${
        className ? className : ""
      }`}
      {...props}
    >
      {items.map((item: ReactNode) => (
        <div className="flex items-center py-2 px-3 gap-2 rounded-md text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-400/10 cursor-pointer transition-all">
          {item}
        </div>
      ))}
    </Card>
  );
};

export default Dropdown;
