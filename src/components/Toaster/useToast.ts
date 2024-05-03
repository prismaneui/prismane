// Context
import { useToasterContext } from "./ToasterContext";
// Types
import { ToastProps } from "./Toast";

const useToast = () => {
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
