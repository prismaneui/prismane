import React, { useState } from "react";
// Components
import Drawer from "./Drawer";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Form from "../Form/Form";
import TextField from "../TextField/TextField";
import PasswordField from "../PasswordField/PasswordField";
import Radio from "../Radio/Radio";
import Flex from "../Flex/Flex";
import Stack from "../Stack/Stack";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Overlay/Drawer",
  component: Drawer,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        This is a simple drawer. To close it just click the Escape key or simply
        click the backdrop.
      </Drawer>
    </>
  );
};

export const Advanced_Composition = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Text as="h1">Create Account</Text>
        </Drawer.Header>
        <Form>
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
        <Drawer.Footer direction="column" gap={fr(2)}>
          <Button full>Create Account</Button>
          <Button
            onClick={() => setOpen(false)}
            variant="secondary"
            color="base"
            full
          >
            Cancel
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};

export const Closable = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} closable>
        <Drawer.Header>
          <Text as="h1">Settings</Text>
        </Drawer.Header>
        <Form>
          <TextField
            name="username"
            label="Username:"
            placeholder="Enter your username"
            defaultValue="spleafy"
          />
          <TextField
            name="email"
            label="Email:"
            placeholder="Enter your email"
            defaultValue="martinpetrov@prismane.io"
          />
        </Form>
        <Drawer.Footer direction="column" gap={fr(2)}>
          <Button full>Save Settings</Button>
          <Button
            onClick={() => setOpen(false)}
            variant="secondary"
            color="base"
            full
          >
            Cancel
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};

export const Positions = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("left");

  return (
    <Stack gap={fr(4)}>
      <Text>Drawer Position</Text>
      <Radio.Group
        value={position}
        onChange={(e: any) => setPosition(e.target.value)}
      >
        <Radio value="top" label="Top" />
        <Radio value="bottom" label="Bottom" />
        <Radio value="left" label="Left" />
        <Radio value="right" label="Right" />
      </Radio.Group>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        position={position as any}
      >
        This drawer has a position of {position}. To close it just click the
        Escape key or simply click the backdrop.
      </Drawer>
    </Stack>
  );
};

export const Sizes = () => {
  const [size, setSize] = useState("base");
  const [open, setOpen] = useState(false);

  return (
    <Flex direction="column" gap={fr(4)}>
      <Text>Drawer Size</Text>
      <Radio.Group
        name="size"
        value={size}
        onChange={(e: any) => setSize(e.target.value)}
      >
        <Radio value="xs" label="xs" />
        <Radio value="sm" label="sm" />
        <Radio value="base" label="base" />
        <Radio value="md" label="md" />
        <Radio value="lg" label="lg" />
        <Radio value="550px" label="550px" />
        <Radio value="100%" label="full" />
      </Radio.Group>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} size={size}>
        This drawer has a size of {size}. To close it just click the Escape key
        or simply click the backdrop.
      </Drawer>
    </Flex>
  );
};
