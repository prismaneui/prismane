import { useState } from "react";
// Components
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "../Image/Image";
// Utils
import { fr } from "../../utils";

export default {
  title: "Modal",
  component: Modal,
};

export const Default = () => (
  <Modal w={fr(125)} open>
    <Modal.Header>
      <h1>Payment</h1>
    </Modal.Header>
    <span>
      Would you like to accept this incoming payment from{" "}
      <strong>John Doe</strong> sending the sum of <strong>$405.30</strong>
    </span>
    <Modal.Footer gap={16}>
      <Button variant="primary">Accept</Button>
      <Button variant="secondary">Cancel</Button>
    </Modal.Footer>
  </Modal>
);

export const Complex = () => {
  const [shown, setShown] = useState(false);

  return (
    <>
      <Modal
        w={fr(125)}
        open={shown}
        closable
        onClose={() => {
          setShown(false);
        }}
      >
        <Modal.Header>
          <div className="flex flex-col">
            <h1 className="text-base">Mobile Design</h1>
            <span className="text-xs">This chapter is about mobile design</span>
          </div>
        </Modal.Header>
        <div className="flex flex-col gap-2">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2592953%2Fscreenshots%2F9853673%2Fmedia%2Fcd35721f9aa98b052f964982e30a9268.png&f=1&nofb=1&ipt=f13a57dff5ad2fcddb037078be69172a82855c2f3988d030487646f07fcd0098&ipo=images"
            alt="Mobile Design"
            br="md"
            w="100%"
            mb={fr(5)}
          />
          <h3>Welcome to mobile design</h3>
          <span>In this chapter we will discuss mobile design.</span>
        </div>
        <Modal.Footer>
          <Button variant="primary" full>
            Continue
          </Button>
          <Button variant="secondary" full>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="primary" onClick={() => setShown(true)}>
        Show Modal
      </Button>
    </>
  );
};
