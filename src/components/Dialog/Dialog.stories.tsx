import { useState } from "react";
import { Meta } from "@storybook/react";
// Components
import Dialog from "../Dialog/Dialog";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import TextField from "../TextField/TextField";
import Text from "../Text/Text";
// Utils
import { fr } from "../../utils";

export default {
  title: "Dialog",
  component: Dialog,
} as Meta;

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex direction="column" gap={10} w="90vw" h="90vh">
      <Dialog open={open} w={fr(64)} onClose={() => setOpen(false)} closable>
        <Dialog.Header onClose={() => setOpen(false)} closable>
          <Text fw="bold">Account warning</Text>
        </Dialog.Header>
        <Text fs="sm">Your account has not been completed yet.</Text>
        <Dialog.Footer>
          <Button>Complete</Button>
        </Dialog.Footer>
      </Dialog>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Toggle
      </Button>
    </Flex>
  );
};

export const Complex = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex direction="column" gap={10} w="90vw" h="90vh">
      <Dialog open={open} w={fr(64)} closable onClose={() => setOpen(false)}>
        <Dialog.Header onClose={() => setOpen(false)} closable>
          <Text fw="bold">Account warning</Text>
        </Dialog.Header>
        <Text fs="sm">Your account has not been completed yet.</Text>
        <Dialog.Footer>
          <Button>Complete</Button>
        </Dialog.Footer>
      </Dialog>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Toggle
      </Button>
    </Flex>
  );
};
