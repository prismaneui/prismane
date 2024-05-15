import { forwardRef, useEffect, useState } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import Animation, { AnimationProps } from "@components/Animation";
// Hooks
import usePresence from "@hooks/usePresence";
// Context
import { useToasterContext } from "../ToasterContext";
// Types
import { PrismaneProps } from "@types";
// Utils
import { strip } from "@/utils";

export type ToastProps = PrismaneProps<
  {
    id?: number;
    timeout?: number;
  },
  FlexProps & AnimationProps
>;

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
    const [shown, setShown] = useState(true);

    const { setToasts } = useToasterContext();

    useEffect(() => {
      const toastTimeout = setTimeout(() => {
        setShown(false);
      }, timeout + duration);

      return () => clearTimeout(toastTimeout);
    }, []);

    const presence = usePresence(shown, duration, () => {
      setTimeout(() => {
        setToasts((pt: any) => pt.filter((toast: any) => toast.id !== id));
      }, duration);
    });

    return presence ? (
      <Animation
        as={Flex}
        animation={animation}
        duration={duration}
        timing={timing}
        animated={shown}
        className={strip(`${className ? className : ""} PrismaneToast-root`)}
        data-testid="prismane-toast"
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
