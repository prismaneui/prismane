import "../../index.css";
import { FC, Dispatch, ReactNode } from "react";
// Components
import Card from "../Card/Card";
import Button from "../Button/Button";
import { X } from "phosphor-react";
// Types
import { PrismaneComponent } from "../../types";

export interface PopUpProps extends PrismaneComponent {
  children: ReactNode;
  setShown?: Dispatch<boolean>;
  header?: ReactNode;
  actions?: ReactNode;
  width?: string;
  height?: string;
  shadow?: boolean;
}

const PopUp: FC<PopUpProps> = ({
  setShown,
  header,
  actions,
  width,
  height,
  className,
  children,
  style,
  shadow,
}) => {
  return (
    <Card
      width={width}
      height={height}
      style={style}
      shadow={shadow}
      className={`drop-shadow-lg px-5 py-5 animate-scale-in relative !overflow-y-auto ${className}`}
      header={
        header && (
          <div className="flex w-full justify-between items-center h-fit max-h-[4rem] gap-2">
            {header}
            {setShown && (
              <Button
                variant="text"
                color="base"
                className="hover:rotate-90 transition-all"
                onClick={() => setShown(false)}
                icon={<X />}
                action
                round
              />
            )}
          </div>
        )
      }
      actions={actions}
    >
      {children}
    </Card>
  );
};

export default PopUp;
