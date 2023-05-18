import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Context
import { RadioContextProvider } from "../RadioContext";
// Hooks
import { useFieldProps } from "../../Field";
// Types
import { PrismaneFieldComponent } from "../../../types";
// Utils
import { strip, fr } from "../../../utils";

export type RadioGroupProps = PrismaneFieldComponent & FlexProps<"div">;

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, className, ...props }, ref) => {
    const [rest, field] = useFieldProps(props);

    return (
      <Flex
        className={strip(
          `${className ? className : ""} PrismaneRadioGroup-root`
        )}
        align="center"
        gap={fr(4)}
        {...rest}
      >
        <RadioContextProvider value={field}>{children}</RadioContextProvider>
      </Flex>
    );
  }
);

export default RadioGroup;
