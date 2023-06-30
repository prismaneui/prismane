import React from "react";
// Components
import Tooltip from "./Tooltip";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template: any = (props: any) => (
  <Flex w="100%" h={fr(52)} justify="center" gap={fr(5)}>
    <Flex
      direction="column"
      w="fit-content"
      justify="center"
      align="center"
      gap={fr(2)}
    >
      <Tooltip label="test" {...props} position="left-start">
        <Button variant="text">Left Start</Button>
      </Tooltip>
      <Tooltip label="test" {...props} position="left">
        <Button variant="text">Left</Button>
      </Tooltip>
      <Tooltip label="test" {...props} position="left-end">
        <Button variant="text">Left End</Button>
      </Tooltip>
    </Flex>
    <Flex
      direction="column"
      h="100%"
      w="fit-content"
      justify="between"
      align="center"
    >
      <Flex justify="center" align="center" gap={fr(2)}>
        <Tooltip label="test" {...props} position="top-start">
          <Button variant="text">Top Start</Button>
        </Tooltip>
        <Tooltip label="test" {...props} position="top">
          <Button variant="text">Top</Button>
        </Tooltip>
        <Tooltip label="test" {...props} position="top-end">
          <Button variant="text">Top End</Button>
        </Tooltip>
      </Flex>
      <Flex justify="center" align="center" gap={fr(2)}>
        <Tooltip label="test" {...props} position="bottom-start">
          <Button variant="text">Bottom Start</Button>
        </Tooltip>
        <Tooltip label="test" {...props} position="bottom">
          <Button variant="text">Bottom</Button>
        </Tooltip>
        <Tooltip label="test" {...props} position="bottom-end">
          <Button variant="text">Bottom End</Button>
        </Tooltip>
      </Flex>
    </Flex>
    <Flex
      direction="column"
      w="fit-content"
      justify="center"
      align="center"
      gap={fr(2)}
    >
      <Tooltip label="test" {...props} position="right-start">
        <Button variant="text">Right Start</Button>
      </Tooltip>
      <Tooltip label="test" {...props} position="right">
        <Button variant="text">Right</Button>
      </Tooltip>
      <Tooltip label="test" {...props} position="right-end">
        <Button variant="text">Right End</Button>
      </Tooltip>
    </Flex>
  </Flex>
);

export const Single = () => (
  <Tooltip label="test">
    <Button>Right End</Button>
  </Tooltip>
);

export const Default = Template.bind({});

Default.args = {
  size: "base",
};
