import React, { useState } from "react";
import {
  User,
  GearSix,
  Chat,
  Cards,
  Users,
  SignOut,
} from "@phosphor-icons/react";
// Components
import Menu from "../Menu/Menu";
import Stack from "../Stack/Stack";
import Button from "../Button/Button";
// Utils
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Components/Overlay/Menu",
  component: Menu,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setOpen(!open)}>Toggle Menu</Button>
      <Menu w={fr(64)} open={open}>
        <Menu.Item>
          <Menu.Icon>
            <User />
          </Menu.Icon>
          Account
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <Chat />
          </Menu.Icon>
          Messages
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <GearSix />
          </Menu.Icon>
          Settings
        </Menu.Item>
      </Menu>
    </Stack>
  );
};

export const Labeled = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack w={fr(64)}>
      <Button onClick={() => setOpen(!open)}>Toggle Menu</Button>
      <Menu w={fr(64)} open={open}>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item>Account</Menu.Item>
        <Menu.Item>Messages</Menu.Item>
        <Menu.Item>Settings</Menu.Item>

        <Menu.Label>Workspace</Menu.Label>
        <Menu.Item>Overview</Menu.Item>
        <Menu.Item>Members</Menu.Item>
        <Menu.Item>Workspace Settings</Menu.Item>
      </Menu>
    </Stack>
  );
};

export const With_Icons = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack w={fr(64)}>
      <Button onClick={() => setOpen(!open)}>Toggle Menu</Button>
      <Menu w={fr(64)} open={open}>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item>
          <Menu.Icon>
            <User />
          </Menu.Icon>
          Account
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <Chat />
          </Menu.Icon>
          Messages
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <GearSix />
          </Menu.Icon>
          Settings
        </Menu.Item>

        <Menu.Label>Workspace</Menu.Label>
        <Menu.Item>
          <Menu.Icon>
            <Cards />
          </Menu.Icon>
          Overview
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <Users />
          </Menu.Icon>
          Members
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <GearSix />
          </Menu.Icon>
          Workspace Settings
        </Menu.Item>
      </Menu>
    </Stack>
  );
};

export const Colors = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack w={fr(64)}>
      <Button onClick={() => setOpen(!open)}>Toggle Menu</Button>
      <Menu w={fr(64)} open={open}>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item>
          <Menu.Icon>
            <User />
          </Menu.Icon>
          Account
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <Chat />
          </Menu.Icon>
          Messages
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <GearSix />
          </Menu.Icon>
          Settings
        </Menu.Item>
        <Menu.Item color="red">
          <Menu.Icon>
            <SignOut />
          </Menu.Icon>
          Log Out
        </Menu.Item>
      </Menu>
    </Stack>
  );
};
