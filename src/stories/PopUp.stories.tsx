import { useState } from "react";
// Components
import PopUp from "../components/PopUp/PopUp";
import Button from "../components/Button/Button";

export default {
  title: "PopUp",
  component: PopUp,
};

export const Default = () => (
  <PopUp
    actions={
      <>
        <Button variant="primary">Accept</Button>
        <Button variant="secondary">Cancel</Button>
      </>
    }
    width="500px"
    header={<h1>Payment</h1>}
  >
    <div className="flex flex-col gap-2">
      <span>
        Would you like to accept this incoming payment from{" "}
        <strong>John Doe</strong> sending the sum of <strong>$405.30</strong>
      </span>
    </div>
  </PopUp>
);

export const Complex = () => {
  const [shown, setShown] = useState(false);

  return (
    <>
      {shown ? (
        <PopUp
          width="500px"
          header={
            <div className="flex flex-col">
              <h1 className="text-base">Mobile Design</h1>
              <span className="text-xs">
                This chapter is about mobile design
              </span>
            </div>
          }
          actions={
            <>
              <Button variant="primary" full>
                Continue
              </Button>
              <Button variant="secondary" full>
                Cancel
              </Button>
            </>
          }
          setShown={setShown}
        >
          <div className="flex flex-col gap-2">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2592953%2Fscreenshots%2F9853673%2Fmedia%2Fcd35721f9aa98b052f964982e30a9268.png&f=1&nofb=1&ipt=f13a57dff5ad2fcddb037078be69172a82855c2f3988d030487646f07fcd0098&ipo=images"
              alt="Mobile Design"
              className="rounded-md mb-5"
            />
            <h3>Welcome to mobile design</h3>
            <span>In this chapter we will discuss mobile design.</span>
          </div>
        </PopUp>
      ) : (
        <Button variant="primary" onClick={() => setShown(true)}>
          Show PopUp
        </Button>
      )}
    </>
  );
};
