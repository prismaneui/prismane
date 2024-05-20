import React from "react";
// Components
import Toaster from "./Toaster";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
// Hooks
import useToast from "./useToast";

export default {
  tags: ["autodocs"],
  title: "Components/Feedback/Toaster",
  component: Toaster,
};

export const Default = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          element: <Alert>Hello, World!</Alert>,
        });
      }}
    >
      Click to show toast
    </Button>
  );
};

export const Position = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          element: <Alert>Toast with changed position!</Alert>,
        });
      }}
    >
      Toast with different position
    </Button>
  );
};

export const Timeout = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          element: <Alert>I am being shown for 6 seconds, instead of 3!</Alert>,
          timeout: 6000,
        });
      }}
    >
      Toast with changed timeout
    </Button>
  );
};

export const Custom_Props = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          element: "I am a toast with custom props!",
          duration: 1000,
          bg: "red",
          cl: "white",
          br: "full",
          px: 16,
          py: 12,
        });
      }}
    >
      Toast with custom props
    </Button>
  );
};
