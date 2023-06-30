import { forwardRef, useEffect, useState } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Animation, { AnimationProps } from "../../Animation/Animation";
// Hooks
import usePresence from "../../../hooks/usePresence";
// Context
import { useToasterContext } from "../ToasterContext";
// Types
import { PrismaneAnimations } from "../../../types";
// Utils
import { strip } from "../../../utils";

export type ToastProps = {
  id?: number;
  timeout?: number;
  duration?: number;
  timing?: string;
  animation?: PrismaneAnimations;
} & FlexProps<"div"> &
  AnimationProps<"div">;

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      id,
      timeout = 3000,
      duration = 250,
      timing,
      animation,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [shown, setShown] = useState(false);

    const { setToasts } = useToasterContext();

    useEffect(() => {
      setShown(true);

      const toastTimeout = setTimeout(() => {
        setShown(false);
      }, timeout);

      return () => clearTimeout(toastTimeout);
    }, []);

    const presence = usePresence(true, timeout + duration, () => {
      setToasts((pt: any) => pt.filter((toast: any) => toast.id !== id));
    });

    return presence ? (
      <Animation
        as={Flex}
        animation={animation}
        duration={duration}
        timing={timing}
        animated={shown}
        className={strip(`${className ? className : ""} PrismaneToast-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Animation>
    ) : (
      <></>
    );
  }
);

export default Toast;
