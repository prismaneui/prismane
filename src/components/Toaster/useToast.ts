// Context
import { useToasterContext } from "./ToasterContext";
// Types
import { ToastProps } from "./Toast/Toast";

const useToast = (length: number = 10) => {
  const { setToasts }: any = useToasterContext();

  const toast = (nt: ToastProps & { element: any }) => {
    setToasts((pt: any) => {
      const updatedToasts = [...pt];

      const id = Math.random().toString(16).slice(2);

      updatedToasts.push({ ...nt, id });

      return updatedToasts;
    });
  };

  return toast;
};

export default useToast;
