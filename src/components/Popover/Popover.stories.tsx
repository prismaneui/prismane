// Components
import Popover from "./Popover";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
// Utils
import { fr } from "../../utils";

export default {
  title: "Popover",
  component: Popover,
};

export const Default = () => (
  <div className="flex w-full h-[100vh] justify-center items-center mt-10">
    <Popover>
      <Popover.Control>
        <Button variant="primary">Popover</Button>
      </Popover.Control>
      <Popover.Panel>This is the content of the popover!</Popover.Panel>
    </Popover>
  </div>
);

export const Positions = () => (
  <Flex w="100%" justify="center" align="center" gap={fr(5)} direction="column">
    <Flex align="center" gap={fr(4)}>
      <Popover position="right-start">
        <Popover.Control>
          <Button>right-start</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
      <Popover position="right">
        <Popover.Control>
          <Button>right</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
      <Popover position="right-end">
        <Popover.Control>
          <Button>right-end</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
    </Flex>
    <Flex align="center" gap={fr(4)}>
      <Popover position="left-start">
        <Popover.Control>
          <Button>left-start</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
      <Popover position="left">
        <Popover.Control>
          <Button>left</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
      <Popover position="left-end">
        <Popover.Control>
          <Button>left-end</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
    </Flex>
    <Flex align="center" gap={fr(4)}>
      <Popover position="top-start">
        <Popover.Control>
          <Button>top-start</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
      <Popover position="top">
        <Popover.Control>
          <Button>top</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
      <Popover position="top-end">
        <Popover.Control>
          <Button>top-end</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
    </Flex>
    <Flex align="center" gap={fr(4)}>
      <Popover position="bottom-start">
        <Popover.Control>
          <Button>bottom-start</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
      <Popover position="bottom">
        <Popover.Control>
          <Button>bottom</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
      <Popover position="bottom-end">
        <Popover.Control>
          <Button>bottom-end</Button>
        </Popover.Control>
        <Popover.Panel>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
          >
            This is the content of the popover!
          </Text>
        </Popover.Panel>
      </Popover>
    </Flex>
  </Flex>
);
