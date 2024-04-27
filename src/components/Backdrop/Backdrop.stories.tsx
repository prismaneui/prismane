import { useState } from "react";
// Components
import Backdrop from "./Backdrop";
import Button from "../Button/Button";
import Text from "../Text/Text";

export default {
  tags: ["autodocs"],
  title: "Components/Overlay/Backdrop",
  component: Backdrop,
};

export const Default = () => {
  const [shown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Show Backdrop</Button>
      {shown && (
        <Backdrop onClick={() => setShown(false)}>
          <Text>This is the backdrop! Click on the backdrop to close it!</Text>
        </Backdrop>
      )}
    </>
  );
};

export const No_Blur = () => {
  const [shown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Show Backdrop</Button>
      {shown && (
        <Backdrop onClick={() => setShown(false)} bft="blur(0px)">
          <Text>
            This backdrop does not have blur! Click on the backdrop to close it!
          </Text>
        </Backdrop>
      )}
    </>
  );
};

export const Background_Color = () => {
  const [shown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Show Backdrop</Button>
      {shown && (
        <Backdrop onClick={() => setShown(false)} bg={["diamond", 500, 0.1]}>
          <Text>
            This backdrop has a different color! Click on the backdrop to close
            it!
          </Text>
        </Backdrop>
      )}
    </>
  );
};
