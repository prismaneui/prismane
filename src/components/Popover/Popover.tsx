import { useState, FC, ReactNode } from "react";
// Components
import ScopeHandler from "../ScopeHandler/ScopeHandler";
import Paper from "../Paper/Paper";
// Types
import { Positions } from "../../types";
import { PrismaneComponent } from "../../types";

export interface PopoverProps extends PrismaneComponent {
  children: ReactNode;
  handler: ReactNode;
  position?: Positions;
}

const Popover: FC<PopoverProps> = ({
  children,
  handler,
  position,
  className,
  style,
}) => {
  const [shown, setShown] = useState(false);

  const definePosition = (position: string | undefined) => {
    if (position === "top-start") {
      return "bottom-[110%] left-0 origin-bottom-left";
    } else if (position === "top") {
      return "bottom-[110%] left-1/2 !-translate-x-1/2 origin-bottom";
    } else if (position === "top-end") {
      return "bottom-[110%] right-0 origin-bottom-right";
    } else if (position === "right-start") {
      return "top-0 left-[105%] origin-top-left";
    } else if (position === "right") {
      return "top-1/2 left-[105%] !-translate-y-1/2 origin-left";
    } else if (position === "right-end") {
      return "bottom-0 left-[105%] origin-bottom-left";
    } else if (position === "bottom-end") {
      return "top-[110%] right-0 origin-top-right";
    } else if (position === "bottom") {
      return "top-[110%] left-1/2 !-translate-x-1/2 origin-top";
    } else if (position === "bottom-start") {
      return "top-[110%] left-0 origin-top-left";
    } else if (position === "left-start") {
      return "top-0 right-[105%] origin-top-right";
    } else if (position === "left") {
      return "top-1/2 right-[105%] !-translate-y-1/2 origin-right";
    } else if (position === "left-end") {
      return "bottom-0 right-[105%] origin-bottom-right";
    } else {
      return "top-[110%] left-1/2 !-translate-x-1/2";
    }
  };

  return (
    <ScopeHandler onEvent={() => setShown(false)}>
      <div className="w-fit h-fit relative" onClick={() => setShown(true)}>
        {handler}
        <Paper
          className={`absolute px-5 py-3 !w-[400px] !h-[unset] ${
            shown ? "flex !animate-scale-in" : "hidden"
          } ${definePosition(position)} ${className}`}
          style={style}
          shadow
        >
          {children}
        </Paper>
      </div>
    </ScopeHandler>
  );
};

export default Popover;
