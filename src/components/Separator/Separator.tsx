import { FC } from "react";
// Types
import { PrismaneComponent } from "@/types";
// Utils
import { strip } from "../../utils/internal";

const Separator: FC<PrismaneComponent> = ({ className, ...props }) => {
  return (
    <div
      className={strip(
        `flex h-px my-2 bg-base-200 dark:bg-base-700 ${
          className ? className : ""
        } PrsmSeparator-root`
      )}
      {...props}
    ></div>
  );
};

export default Separator;
