import React, { FC } from "react";
import { Plus } from "@phosphor-icons/react";
// Components
import Accordion from "./Accordion";
import Transition from "../Transition";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Accordion",
  component: Accordion,
};

export const Default: FC = () => (
  <Accordion>
    <Accordion.Item value="first">
      <Accordion.Control>
        First
        <Accordion.Icon />
      </Accordion.Control>
      <Accordion.Panel>First Panel Content</Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="second">
      <Accordion.Control>
        Second
        <Accordion.Icon />
      </Accordion.Control>
      <Accordion.Panel>Second Panel Content</Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export const Default_Value: FC = () => (
  <Accordion defaultValue="first">
    <Accordion.Item value="first">
      <Accordion.Control>
        First
        <Accordion.Icon />
      </Accordion.Control>
      <Accordion.Panel>This panel will be expanded by default.</Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="second">
      <Accordion.Control>
        Second
        <Accordion.Icon />
      </Accordion.Control>
      <Accordion.Panel>This one will be closed by default.</Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export const Custom_Item: FC = () => (
  <Accordion defaultValue="first">
    <Accordion.Item value="first">
      <Accordion.Control>
        First
        <Accordion.Icon>
          {(active) => (
            <Transition
              as={Plus}
              sx={{ transform: active ? "rotate(135deg)" : "rotate(0deg)" }}
            />
          )}
        </Accordion.Icon>
      </Accordion.Control>
      <Accordion.Panel>Changed Default Icon Accordion</Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="second">
      <Accordion.Control>
        Second
        <Accordion.Icon>
          {(active) => (
            <Transition
              as={Plus}
              sx={{ transform: active ? "rotate(135deg)" : "rotate(0deg)" }}
            />
          )}
        </Accordion.Icon>
      </Accordion.Control>
      <Accordion.Panel>Changed Default Icon Accordion</Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);
