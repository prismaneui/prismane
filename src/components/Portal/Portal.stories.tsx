import { useRef } from "react";
import Portal from "./Portal";
import Box from "../Box/Box";

export default {
  title: "Portal",
  component: Portal,
};

export const Default = () => {
  const ref = useRef(null);

  return (
    <Box>
      This will be rendered inside the box
      <Portal target={ref}>
        This will be rendered inside the inner container
      </Portal>
      <Box ref={ref} bg="teal">
        This is the inner container:
      </Box>
      <Portal>This will be rendered in the DOM</Portal>
    </Box>
  );
};
