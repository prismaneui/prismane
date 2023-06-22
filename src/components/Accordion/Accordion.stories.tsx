// Components
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionControl from "./AccordionControl";
import AccordionPanel from "./AccordionPanel";
import AccordionIcon from "./AccordionIcon";
// Utils
import { fr } from "../../utils";

export default {
  title: "Accordion",
  component: Accordion,
};

export const Default = () => (
  <Accordion defaultValue="ivan">
    <AccordionItem value="ivan">
      <AccordionControl>
        Ivan <AccordionIcon />
      </AccordionControl>
      <AccordionPanel>Lorem</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="petkan">
      <AccordionControl>
        Petkan <AccordionIcon />
      </AccordionControl>
      <AccordionPanel>Lorem</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="petur">
      <AccordionControl>
        Petur <AccordionIcon />
      </AccordionControl>
      <AccordionPanel>Lorem</AccordionPanel>
    </AccordionItem>
  </Accordion>
);
