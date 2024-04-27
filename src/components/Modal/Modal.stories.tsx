import { useState } from "react";
// Components
import Modal from "./Modal";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Form from "../Form/Form";
import TextField from "../TextField/TextField";
import PasswordField from "../PasswordField/PasswordField";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Overlay/Modal",
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        This is a simple modal. To close it just click the Escape key or simply
        click the backdrop.
      </Modal>
    </>
  );
};

export const Advanced_Composition = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Text as="h1">Create Account</Text>
        </Modal.Header>
        <Form w={fr(96)}>
          <TextField
            name="username"
            label="Username:"
            placeholder="Enter your username"
          />
          <TextField
            name="email"
            label="Email:"
            placeholder="Enter your email"
          />
          <PasswordField
            name="password"
            label="Password:"
            placeholder="Enter your password"
          />
        </Form>
        <Modal.Footer direction="column" gap={fr(2)}>
          <Button full>Create Account</Button>
          <Button
            onClick={() => setOpen(false)}
            variant="secondary"
            color="base"
            full
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Closable = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} closable>
        <Modal.Header>
          <Text as="h1">Sign In</Text>
        </Modal.Header>
        <Form w={fr(96)}>
          <TextField
            name="email"
            label="Email:"
            placeholder="Enter your email"
            defaultValue="martinpetrov@prismane.io"
          />
          <PasswordField
            name="password"
            label="Password:"
            placeholder="Enter your password"
            defaultValue="1234supersecret1234"
          />
        </Form>
        <Modal.Footer>
          <Button full>Sign In</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Custom_Animation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal animation="fade" open={open} onClose={() => setOpen(false)}>
        This is a simple modal with a fade animation. To close it just click the
        Escape key or simply click the backdrop.
      </Modal>
    </>
  );
};
