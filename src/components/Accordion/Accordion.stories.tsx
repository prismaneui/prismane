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
  <Accordion defaultValue="ivan" w={fr(96)}>
    <AccordionItem value="ivan">
      <AccordionControl>
        Ivan <AccordionIcon />
      </AccordionControl>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est corrupti
        tenetur magnam aspernatur hic iure perspiciatis maxime non, soluta,
        error culpa, nihil maiores architecto officia recusandae molestias autem
        aut totam.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="petkan">
      <AccordionControl>
        Petkan <AccordionIcon />
      </AccordionControl>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est corrupti
        tenetur magnam aspernatur hic iure perspiciatis maxime non, soluta,
        error culpa, nihil maiores architecto officia recusandae molestias autem
        aut totam.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="petur">
      <AccordionControl>
        Petur <AccordionIcon />
      </AccordionControl>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est corrupti
        tenetur magnam aspernatur hic iure perspiciatis maxime non, soluta,
        error culpa, nihil maiores architecto officia recusandae molestias autem
        aut totam.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
