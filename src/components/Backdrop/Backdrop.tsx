import { FC } from "react";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

const Backdrop: FC<PrismaneComponent> = ({ children, className, ...props }) => {
  return (
    <div
      className={strip(
        `fixed w-full h-full flex justify-center items-center bg-base-900/20 dark:bg-base-900/80 z-20 top-0 left-0 ${
          className ? className : ""
        } PrsmBackdrop-root`
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Backdrop;
