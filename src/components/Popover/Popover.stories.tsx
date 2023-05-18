// Components
import Popover from "./Popover";
import Button from "../Button/Button";

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
