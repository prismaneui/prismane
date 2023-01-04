import { FC } from "react";
// Types
import { PrismaneComponent } from "../../types";

const Backdrop: FC<PrismaneComponent> = ({ children, className, ...props }) => {
  return (
    <div
      className={`fixed w-full h-full flex justify-center items-center bg-gray-900/20 z-20 top-0 left-0 ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Backdrop;
