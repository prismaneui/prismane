import { useEffect } from "react";
// Components
import Toaster from "./Toaster";
import Alert from "../Alert/Alert";
// Hooks
import useToast from "./useToast";

export default {
  title: "Toaster",
  component: Toaster,
};

export const Default = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      element: <Alert closable>First One</Alert>,
    });
  }, []);

  return <Toaster />;
};
