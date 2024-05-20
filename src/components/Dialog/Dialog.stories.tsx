import React, { useState } from "react";
// Components
import Dialog from "../Dialog/Dialog";
import Button from "../Button/Button";
import Radio from "../Radio/Radio";
import Stack from "../Stack/Stack";
import Text from "../Text/Text";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Overlay/Dialog",
  component: Dialog,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack>
          <Text>
            This is a simple dialog. Close it by clicking on the backdrop.
          </Text>
        </Stack>
      </Dialog>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Close Dialog" : "Open Dialog"}
      </Button>
    </>
  );
};

export const Advanced_Composition = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog w={fr(96)} open={open} onClose={() => setOpen(false)}>
        <Dialog.Header>
          <Text fw="bold">Whoaa, take it easy!</Text>
        </Dialog.Header>
        <Text fs="sm">You can only post 1 quiz every 2 mintues!</Text>
        <Dialog.Footer>
          <Button onClick={() => setOpen(false)}>Got It</Button>
        </Dialog.Footer>
      </Dialog>
      <Button onClick={() => setOpen(!open)}>
        {open ? "Close Dialog" : "Open Dialog"}
      </Button>
    </>
  );
};

export const Closable = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog w={fr(96)} open={open} onClose={() => setOpen(false)} closable>
        <Dialog.Header>
          <Text fw="bold">Important Warning!</Text>
        </Dialog.Header>
        <Text fs="sm">
          Violating our terms will result in a permanent ban from our platform!
        </Text>
        <Dialog.Footer>
          <Button onClick={() => setOpen(false)}>Understood</Button>
        </Dialog.Footer>
      </Dialog>
      <Button onClick={() => setOpen(!open)}>
        {open ? "Close Dialog" : "Open Dialog"}
      </Button>
    </>
  );
};

export const Animation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog
        animation="scale"
        w={fr(96)}
        open={open}
        onClose={() => setOpen(false)}
        closable
      >
        <Dialog.Header>
          <Text as="h2">Account warning</Text>
        </Dialog.Header>
        <Text fs="sm">
          Your account has not been completed yet. Do you want to complete your
          registration?
        </Text>
        <Dialog.Footer gap={fr(2)}>
          <Button>Complete</Button>
          <Button
            variant="secondary"
            color="base"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </Dialog.Footer>
      </Dialog>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Close Dialog" : "Open Dialog"}
      </Button>
    </>
  );
};

export const Positions = () => {
  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState("top");

  const [point, setPoint] = useState("end");

  return (
    <Stack gap={fr(4)} align="center">
      <Radio.Group
        value={position}
        onChange={(e: any) => setPosition(e.target.value)}
      >
        <Radio label="Top" value="top" />
        <Radio label="Bottom" value="bottom" />
        <Radio label="Left" value="left" />
        <Radio label="Right" value="right" />
      </Radio.Group>
      <Radio.Group
        value={point}
        onChange={(e: any) => setPoint(e.target.value)}
      >
        <Radio label="Start" value="start" />
        <Radio label="None (e.g. right, left)" value="none" />
        <Radio label="End" value="end" />
      </Radio.Group>
      <Dialog
        position={(point !== "none" ? `${position}-${point}` : position) as any}
        w={fr(96)}
        open={open}
        onClose={() => setOpen(false)}
        closable
      >
        <Dialog.Header>
          <Text as="h2">Ooops, an error ocurred!</Text>
        </Dialog.Header>
        <Text fs="sm">
          There was a connection error and your request was not sent. Do you
          want to try again?
        </Text>
        <Dialog.Footer gap={fr(2)}>
          <Button>Retry</Button>
          <Button
            variant="secondary"
            color="base"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </Dialog.Footer>
      </Dialog>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Close Dialog" : "Open Dialog"}
      </Button>
    </Stack>
  );
};
