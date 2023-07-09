// Components
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import Alert from "./Alert";
import Button from "../Button/Button";
// Utils
import { fr } from "../../utils";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => (
  <Flex gap={fr(2)}>
    <Flex direction="column" gap={fr(5)}>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Error Alert
        </Text>
        <Alert variant="error">This is an error alert!</Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Warning Alert
        </Text>
        <Alert variant="warning">This is a warning alert!</Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Success Alert
        </Text>
        <Alert variant="success">This is a success alert!</Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Success Alert
        </Text>
        <Alert variant="info">This is an info alert!</Alert>
      </Flex>
    </Flex>
    <Flex direction="column" gap={fr(5)}>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Error Alert Round
        </Text>
        <Alert variant="error">This is an error alert!</Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Warning Alert Round
        </Text>
        <Alert variant="warning">This is a warning alert!</Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Success Alert Round
        </Text>
        <Alert variant="success">This is a success alert!</Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Info Alert
        </Text>
        <Alert variant="info">This is an info alert!</Alert>
      </Flex>
    </Flex>
  </Flex>
);

export const Closable = () => {
  return (
    <Flex gap={fr(2)}>
      <Flex direction="column" gap={fr(5)}>
        <Flex direction="column" gap={fr(2)}>
          <Text fw="bold" fs="md">
            Error Alert
          </Text>
          <Alert closable variant="error">
            This is an error alert!
          </Alert>
        </Flex>
        <Flex direction="column" gap={fr(2)}>
          <Text fw="bold" fs="md">
            Warning Alert
          </Text>
          <Alert closable variant="warning">
            This is a warning alert!
          </Alert>
        </Flex>
        <Flex direction="column" gap={fr(2)}>
          <Text fw="bold" fs="md">
            Success Alert
          </Text>
          <Alert closable variant="success">
            This is a success alert!
          </Alert>
        </Flex>
        <Flex direction="column" gap={fr(2)}>
          <Text fw="bold" fs="md">
            Info Alert
          </Text>
          <Alert closable variant="info">
            This is an info alert!
          </Alert>
        </Flex>
      </Flex>
      <Flex direction="column" gap={fr(5)}>
        <Flex direction="column" gap={fr(2)}>
          <Text fw="bold" fs="md">
            Error Alert Round
          </Text>
          <Alert closable variant="error">
            This is an error alert!
          </Alert>
        </Flex>
        <Flex direction="column" gap={fr(2)}>
          <Text fw="bold" fs="md">
            Warning Alert Round
          </Text>
          <Alert closable variant="warning">
            This is a warning alert!
          </Alert>
        </Flex>
        <Flex direction="column" gap={fr(2)}>
          <Text fw="bold" fs="md">
            Success Alert Round
          </Text>
          <Alert closable variant="success">
            This is a success alert!
          </Alert>
        </Flex>
        <Flex direction="column" gap={fr(2)}>
          <Text fw="bold" fs="md">
            Success Alert Round
          </Text>
          <Alert closable variant="info">
            This is an info alert!
          </Alert>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const Advanced = () => (
  <Flex direction="column" gap={fr(5)}>
    <Alert closable variant="error">
      <Alert.Title>This is an error alert!</Alert.Title>
      <Alert.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo eveniet
        cum voluptas aspernatur explicabo velit dolores quis minus, voluptatibus
        quas deserunt nostrum repellendus saepe harum provident, necessitatibus,
        voluptate tempore.
      </Alert.Description>
    </Alert>
    <Alert closable variant="warning">
      <Alert.Title>This is an warning alert!</Alert.Title>
      <Alert.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo eveniet
        cum voluptas aspernatur explicabo velit dolores quis minus, voluptatibus
        quas deserunt nostrum repellendus saepe harum provident, necessitatibus,
        voluptate tempore.
      </Alert.Description>
    </Alert>
    <Alert closable variant="success">
      <Alert.Title>This is an success alert!</Alert.Title>
      <Alert.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo eveniet
        cum voluptas aspernatur explicabo velit dolores quis minus, voluptatibus
        quas deserunt nostrum repellendus saepe harum provident, necessitatibus,
        voluptate tempore.
      </Alert.Description>
    </Alert>
    <Alert closable variant="info">
      <Alert.Title>This is an info alert!</Alert.Title>
      <Alert.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo eveniet
        cum voluptas aspernatur explicabo velit dolores quis minus, voluptatibus
        quas deserunt nostrum repellendus saepe harum provident, necessitatibus,
        voluptate tempore.
      </Alert.Description>
    </Alert>
  </Flex>
);

export const Custom_Action = () => (
  <Flex gap={fr(2)}>
    <Flex direction="column" gap={fr(5)}>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Error Alert
        </Text>
        <Alert
          closable
          variant="error"
          action={
            <Button variant="tertiary" color="red" className="py-2">
              See more
            </Button>
          }
        >
          This is an error alert!
        </Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Warning Alert
        </Text>
        <Alert
          closable
          variant="warning"
          action={
            <Button variant="tertiary" color="copper" className="py-2">
              See more
            </Button>
          }
        >
          This is a warning alert!
        </Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Success Alert
        </Text>
        <Alert
          closable
          variant="success"
          action={
            <Button variant="tertiary" color="green" className="py-2">
              See more
            </Button>
          }
        >
          This is a success alert!
        </Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Info Alert
        </Text>
        <Alert
          closable
          variant="info"
          action={
            <Button variant="tertiary" color="diamond" className="py-2">
              See more
            </Button>
          }
        >
          This is an info alert!
        </Alert>
      </Flex>
    </Flex>
    <Flex direction="column" gap={fr(5)}>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Error Alert Round
        </Text>
        <Alert
          closable
          variant="error"
          action={
            <Button variant="tertiary" color="red" className="py-2" round>
              See more
            </Button>
          }
        >
          This is an error alert!
        </Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Warning Alert Round
        </Text>
        <Alert
          closable
          variant="warning"
          action={
            <Button variant="tertiary" color="copper" className="py-2" round>
              See more
            </Button>
          }
        >
          This is a warning alert!
        </Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Success Alert Round
        </Text>
        <Alert
          closable
          variant="success"
          action={
            <Button variant="tertiary" color="green" className="py-2" round>
              See more
            </Button>
          }
        >
          This is a success alert!
        </Alert>
      </Flex>
      <Flex direction="column" gap={fr(2)}>
        <Text fw="bold" fs="md">
          Success Alert Round
        </Text>
        <Alert
          closable
          variant="info"
          action={
            <Button variant="tertiary" color="diamond" className="py-2" round>
              See more
            </Button>
          }
        >
          This is an info alert!
        </Alert>
      </Flex>
    </Flex>
  </Flex>
);
