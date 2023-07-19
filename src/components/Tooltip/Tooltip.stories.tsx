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
        <Button>Left Start</Button>
      </Tooltip>
      <Tooltip label="test" {...props} position="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip label="test" {...props} position="left-end">
        <Button>Left End</Button>
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
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip label="test" {...props} position="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip label="test" {...props} position="top-end">
          <Button>Top End</Button>
        </Tooltip>
      </Flex>
      <Flex justify="center" align="center" gap={fr(2)}>
        <Tooltip label="test" {...props} position="bottom-start">
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip label="test" {...props} position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip label="test" {...props} position="bottom-end">
          <Button>Bottom End</Button>
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
        <Button>Right Start</Button>
      </Tooltip>
      <Tooltip label="test" {...props} position="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip label="test" {...props} position="right-end">
        <Button>Right End</Button>
      </Tooltip>
    </Flex>
  </Flex>
);

export const Default = Template.bind({});

export const Single = () => (
  <Tooltip label="test" color="ruby">
    <Button>Right End</Button>
  </Tooltip>
);

Default.args = {
  size: "base",
};
