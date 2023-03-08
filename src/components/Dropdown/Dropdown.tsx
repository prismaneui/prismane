import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
// Components
import Card from "../Card/Card";
// Types
import { PrismaneComponent } from "../../types";

export interface DropdownProps extends PrismaneComponent {
  items: ReactNode[];
}

const Dropdown: FC<DropdownProps> = ({ items, className, ...props }) => {
  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 27.5,
  };

  return (
    <motion.div
      className="flex justify-center items-center w-full h-fit"
      transition={spring}
      initial={{
        scale: 0.5,
        translateX: "-48px",
      }}
      animate={{
        scale: 1,
        translateX: 0,
      }}
    >
      <Card
        className="bg-white shadow-no-inset rounded-md grow !w-[unset] gap-2"
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
    </motion.div>
  );
};

export default Dropdown;
