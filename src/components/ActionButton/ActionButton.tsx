import { forwardRef } from "react";
// Components
import Button, { ButtonProps } from "../Button/Button";
// Utils
import { fr, variants } from "../../utils";

export type ActionButtonProps = ButtonProps;

const ActionButton = forwardRef<any, ActionButtonProps>(
  (
    {
      size = "base",
      color = "primary",
      variant = "tertiary",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        px={variants(size, {
          xs: fr(1),
          sm: fr(1.5),
          base: fr(2),
          md: fr(2.5),
          lg: fr(3),
        })}
        py={variants(size, {
          xs: fr(1),
          sm: fr(1.5),
          base: fr(2),
          md: fr(2.5),
          lg: fr(3),
        })}
        ref={ref}
        size={size}
        color={color}
        variant={variant}
        data-testid="prismane-action-button"
        {...props}
      >
        {children}
      </Button>
    );
  }
);

export default ActionButton;
