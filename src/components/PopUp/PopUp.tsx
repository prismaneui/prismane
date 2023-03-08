import { FC, Dispatch, ReactNode } from "react";
import { motion } from "framer-motion";
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
  shadow,
  ...props
}) => {
  const spring = {
    type: "spring",
    stiffness: 350,
    damping: 25,
  };

  return (
    <motion.div
      className="flex justify-center items-center w-fit h-fit"
      transition={spring}
      initial={{
        scale: 0.4,
      }}
      animate={{
        scale: 1,
      }}
    >
      <Card
        width={width}
        height={height}
        shadow={shadow}
        className={`drop-shadow-lg px-5 py-5 relative !overflow-y-auto ${
          className ? className : ""
        }`}
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
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  );
};

export default PopUp;
