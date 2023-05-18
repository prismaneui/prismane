import { useEffect } from "react";
// Components
import Toaster from "./Toaster";
import Alert from "../Alert/Alert";
// Hooks
import useToast from "../../hooks/useToast";

export default {
  title: "Toaster",
  component: Toaster,
};

export const Default = () => {
  const toast = useToast(10000);

  useEffect(() => {
    toast(<Alert closable>First One</Alert>);

    const interval = setInterval(() => {
      toast(<Alert closable>More</Alert>);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Toaster />;
};
