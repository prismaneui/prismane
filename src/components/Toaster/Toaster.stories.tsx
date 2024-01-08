import { useEffect } from "react";
// Components
import Toaster from "./Toaster";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import Flex from "../Flex/Flex";
import Radio from "../Radio";
// Hooks
import useToast from "./useToast";
import useForm from "../../hooks/useForm";

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

export const Positions = () => {
  const toast = useToast();

  const { register, formState } = useForm({
    fields: {
      position: {
        value: "bottom-right",
      },
    },
  });

  return (
    <Toaster position={formState.fields.position.value}>
      <Flex direction="column" gap={12}>
        <Radio.Group {...register("position")}>
          <Radio value="top-left" label="Top Left" />
          <Radio value="top-right" label="Top Right" />
          <Radio value="bottom-left" label="Bottom Left" />
          <Radio value="bottom-right" label="Bottom Right" />
        </Radio.Group>
        <Button
          onClick={() => {
            toast({
              element: <Alert>Hello, World!</Alert>,
            });
          }}
        >
          Click to show toast
        </Button>
      </Flex>
    </Toaster>
  );
};
