import React, { useState } from "react";
import { Flex, Button } from "../../components";
import { fr } from "../../utils";
import useId from "./useId";

export default {
  tags: ["autodocs"],
  title: "Hooks/Miscellaneous/useId",
  component: useId,
};

export const Default = () => {
  const [shown, setShown] = useState(false);

  const id = useId();

  return (
    <Flex direction="column" gap={fr(4)}>
      {shown && <Flex bg="primary">{id}</Flex>}
      <Button onClick={() => setShown(true)}>Reveal ID</Button>
    </Flex>
  );
};
