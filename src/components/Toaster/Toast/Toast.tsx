"use client";

import React, { forwardRef, useEffect, useState } from "react";
// Components
import Flex from "@components/Flex";
import Animation from "@components/Animation";
// Hooks
import usePresence from "@hooks/usePresence";
// Context
import { useToasterContext } from "../ToasterContext";
// Utils
import { cx } from "@utils";
// Props
import { ToastProps } from "./Toast.props";

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
        className={cx("PrismaneToast-root", className)}
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
