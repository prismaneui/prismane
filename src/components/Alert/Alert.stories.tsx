import { WarningDiamond } from "@phosphor-icons/react";
// Components
import Alert from "./Alert";
import Button from "../Button/Button";
import Stack from "../Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Feedback/Alert",
  component: Alert,
};

export const Default = () => <Alert>This is the default alert!</Alert>;

export const Variants = () => (
  <Stack>
    <Alert variant="info">
      This is an info alert. It provides important information or updates.
    </Alert>
    <Alert variant="success">
      This is a success alert. It represents that an action has resulted in a
      success.
    </Alert>
    <Alert variant="warning">
      This is a warning alert. It represents that an action has completed with a
      warning.
    </Alert>
    <Alert variant="error">
      This is an error alert. It represents that an action couldn't complete due
      to an error.
    </Alert>
  </Stack>
);

export const Closable = () => (
  <Alert closable>
    This is a closable alert. Click the close button to dismiss it.
  </Alert>
);

export const Custom_Action = () => (
  <Alert
    action={
      <Button color="red" variant="tertiary" fillOnHover>
        See more
      </Button>
    }
    variant="error"
    closable
  >
    Oops, an unknown error ocurred!
  </Alert>
);

export const Custom_Icon = () => (
  <Alert icon={<WarningDiamond size={24} />} variant="warning">
    This is an alert with a custom icon.
  </Alert>
);

export const Alert_Title = () => (
  <Alert variant="error">
    <Alert.Title>Error 404</Alert.Title>
    The desired file was not found on our system!
  </Alert>
);

export const Alert_Description = () => (
  <Alert>
    <Alert.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Alert.Description>
  </Alert>
);
