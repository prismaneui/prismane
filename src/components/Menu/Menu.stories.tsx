import { Person } from "@phosphor-icons/react";
// Components
import Menu from "../Menu/Menu";

export default {
  title: "Menu",
  component: Menu,
};

export const Default = () => {
  return (
    <Menu w={200} open>
      <Menu.Label>Menu</Menu.Label>
      <Menu.Item>
        <Menu.Icon>
          <Person />
        </Menu.Icon>
        Account
      </Menu.Item>
      <Menu.Item>
        <Menu.Icon>
          <Person />
        </Menu.Icon>
        Settings
      </Menu.Item>
      <Menu.Item color="red">
        <Menu.Icon>
          <Person />
        </Menu.Icon>
        Log Out
      </Menu.Item>
    </Menu>
  );
};
