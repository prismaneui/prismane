import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import CloseButton from "../../CloseButton/CloseButton";
// Context
import { useDrawerContext } from "../DrawerContext";
// Utils
import { strip, fr } from "../../../utils";

export type DrawerHeaderProps = FlexProps<"div">;

const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { onClose, closable } = useDrawerContext();

    return (
      <Flex
        align="center"
        justify="between"
        w="100%"
        mb={fr(3)}
        className={strip(
          `${className ? className : ""} PrismaneDrawerHeader-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
        {closable && <CloseButton onClick={onClose} size="base" />}
      </Flex>
    );
  }
);

export default DrawerHeader;
