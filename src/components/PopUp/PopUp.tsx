import { FC, Dispatch, ReactNode } from "react";
import { X } from "phosphor-react";
// Components
import Card from "../Card/Card";
import Button from "../Button/Button";
import Animated from "../Animated";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

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
  shadow,
  ...props
}) => {
  return (
    <Animated
      className="flex justify-center items-center w-fit h-fit"
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
      entry={{
        initial: {
          scale: 0.4,
        },
        animated: {
          scale: 1,
        },
      }}
    >
      <Card
        width={width}
        height={height}
        shadow={shadow}
        className={strip(
          `drop-shadow-lg px-5 py-5 relative !overflow-y-auto ${
            className ? className : ""
          } PrsmPopUp-root`
        )}
        header={
          header && (
            <div className="flex w-full justify-between items-center h-fit max-h-[4rem] gap-2 PrsmPopUp-header">
              {header}
              {setShown && (
                <Button
                  variant="text"
                  color="base"
                  className="hover:rotate-90 transition-all hover:bg-base-50"
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
        {...props}
      >
        {children}
      </Card>
    </Animated>
  );
};

export default PopUp;
