import { useEffect } from "react";
// Components
import Toaster from "./Toaster";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
// Hooks
import useToast from "./useToast";

export default {
  title: "Toaster",
  component: Toaster,
};

export const Default = () => {
  const toast = useToast();

  return (
    <Toaster>
      <Button
        onClick={() => {
          toast({
            element: <Alert>Hello, World!</Alert>,
          });
        }}
      >
        Click to show toast
      </Button>
    </Toaster>
  );
};
