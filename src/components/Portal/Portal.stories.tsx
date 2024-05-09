import { useRef } from "react";
// Components
import Portal from "./Portal";
import Box from "../Box/Box";

export default {
  tags: ["autodocs"],
  title: "Components/Overlay/Portal",
  component: Portal,
};

export const Default = () => {
  return (
    <Box bg="orange" cl="white">
      This will be rendered inside the Box component
      <Portal bg="ruby" cl="white">
        This will be rendered at the end of the document.body
      </Portal>
    </Box>
  );
};

export const Custom_Container = () => {
  const ref = useRef(null);

  return (
    <Box bg="orange" cl="white">
      This will be rendered inside the box
      <Portal target={ref}>
        This will be rendered inside the ruby box, instead of the orange one.
      </Portal>
      <Box ref={ref} bg="ruby">
        This is the ruby box.
      </Box>
    </Box>
  );
};

export const Disabled = () => {
  const ref = useRef(null);

  return (
    <Box bg="orange" cl="white">
      This will be rendered inside the box
      <Portal target={ref} disabled>
        This will be rendered inside the orange box, because the portal is
        disabled.
      </Portal>
      <Box ref={ref} bg="ruby">
        This is the ruby box.
      </Box>
    </Box>
  );
};
