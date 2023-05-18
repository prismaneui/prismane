import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import CloseButton from "../../CloseButton/CloseButton";
// Context
import { useDialogContext } from "../DialogContext";
// Utils
import { strip, fr } from "../../../utils";

export type DialogHeaderProps = FlexProps<"div">;

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { closable, onClose } = useDialogContext();

    return (
      <Flex
        align="center"
        justify="between"
        w="100%"
        mb={fr(2)}
        className={strip(
          `${className ? className : ""} PrismaneDialogHeader-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
        {closable && <CloseButton onClick={onClose} size="sm" />}
      </Flex>
    );
  }
);

export default DialogHeader;
