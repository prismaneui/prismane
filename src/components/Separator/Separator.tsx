import { FC } from "react";
// Types
import { PrismaneComponent } from "@/types";

const Separator: FC<PrismaneComponent> = ({ className, ...props }) => {
  return (
    <div
      className={`flex h-px my-2 bg-slate-200 ${className ? className : ""}`}
      {...props}
    ></div>
  );
};

export default Separator;
