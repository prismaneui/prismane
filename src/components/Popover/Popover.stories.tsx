import { useState } from "react";
// Components
import Popover from "./Popover";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import Radio from "../Radio/Radio";
import Text from "../Text/Text";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Overlay/Popover",
  component: Popover,
};

export const Default = () => (
  <Popover>
    <Popover.Control>
      <Button>Toggle</Button>
    </Popover.Control>
    <Popover.Panel>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        JavaScript was developed in 10 days by Brendan Eich.
      </Text>
    </Popover.Panel>
  </Popover>
);

export const Positions = () => {
  const [position, setPosition] = useState("bottom");

  const [point, setPoint] = useState("middle");

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
      <Popover
        position={(point !== "none" ? `${position}-${point}` : position) as any}
      >
        <Popover.Control>
          <Button>Toggle</Button>
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
    </Stack>
  );
};
