import { Box } from "../../components";
import useDraggable from "./useDraggable";
import { fr } from "../../utils";

export default {
  title: "useDraggable",
  component: useDraggable,
};

export const Default = () => {
  const { ref, isDragging, position } = useDraggable();

  return (
    <Box w={fr(240)} h="110vh" pos="relative" ml={fr(30)} mt={fr(15)}>
      <Box
        w={fr(30)}
        h={fr(30)}
        bg={isDragging ? "teal" : "primary"}
        pos="absolute"
        t={position.y}
        l={position.x}
        ref={ref}
      >
        Drag Me
      </Box>
    </Box>
  );
};
