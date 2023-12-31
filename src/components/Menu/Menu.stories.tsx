import { useState } from "react";
import {
  User,
  GearSix,
  Chat,
  Image,
  MagnifyingGlass,
  SignOut,
} from "@phosphor-icons/react";
// Components
import Menu from "../Menu/Menu";
import Divider from "../Divider/Divider";
import Flex from "../Flex";
import Button from "../Button";
// Utils
import { fr } from "../../utils";

export default {
  title: "Menu",
  component: Menu,
};

export const Default = () => {
  return (
    <Menu w={fr(64)} open>
      <Menu.Label>Menu</Menu.Label>
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
          <Image />
        </Menu.Icon>
        Media
      </Menu.Item>
      <Menu.Item>
        <Menu.Icon>
          <MagnifyingGlass />
        </Menu.Icon>
        Search
      </Menu.Item>
      <Divider />
      <Menu.Label>Danger Zone</Menu.Label>
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
  );
};
export const Toggle_Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex direction="column" align="center" justify="center" gap={16}>
      <Button onClick={() => setOpen(!open)}>Open Menu</Button>
      <Menu w={fr(64)} open={open}>
        <Menu.Label>Menu</Menu.Label>
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
            <Image />
          </Menu.Icon>
          Media
        </Menu.Item>
        <Menu.Item>
          <Menu.Icon>
            <MagnifyingGlass />
          </Menu.Icon>
          Search
        </Menu.Item>
        <Divider />
        <Menu.Label>Danger Zone</Menu.Label>
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
    </Flex>
  );
};
