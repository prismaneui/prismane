// Hooks
import useAnimation from "./useAnimation";
// Context
import {
  useToastContext,
  ToastProps,
} from "../components/Toaster/ToasterContext";
// Types
import { PrismaneAnimations } from "../types";

const useToast = (
  timeout: number = 1000,
  animation: PrismaneAnimations = "fade",
  animationDuration: number = 300,
  animationTiming: string = "ease-in-out"
) => {
  const { setToasts } = useToastContext();

  const { duration, timing } = useAnimation(
    false,
    animationDuration,
    animationTiming
  );

  const toast = (element: any) => {
    const id = Math.random().toString(16).slice(2);

    const td = {
      id,
      element,
      timeout,
      duration,
      timing,
      animation,
    };

    setToasts((pt: ToastProps[]) => [...pt, td]);

    const removeToast = () => {
      setToasts((pt: ToastProps[]) =>
        pt.filter((t: ToastProps) => t.id !== id)
      );
    };

    const toastTimeout = setTimeout(() => {
      removeToast();
    }, duration + timeout);

    return () => {
      clearTimeout(toastTimeout);
    };
  };

  return toast;
};

export default useToast;
