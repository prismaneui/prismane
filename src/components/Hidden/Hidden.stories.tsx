import { useState } from "react";
import { DownloadSimple } from "@phosphor-icons/react";
// Components
import Hidden from "./Hidden";
import ActionButton from "../ActionButton/ActionButton";
import Stack from "../Stack/Stack";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import Box from "../Box/Box";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Hidden",
  component: Hidden,
};

export const Default = () => {
  return (
    <ActionButton
      icon={
        <>
          <DownloadSimple />
          <Hidden>Download</Hidden>
        </>
      }
      variant="secondary"
      color="base"
    />
  );
};

export const Input = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Stack>
      <Flex
        as="label"
        htmlFor="checkbox"
        align="center"
        gap={fr(2)}
        cs="pointer"
      >
        <Box h={fr(6)} w={fr(6)} bg={checked ? "primary" : "base"} br="sm" />
        Click to check
        <Hidden>
          <input
            name="checkbox"
            id="checkbox"
            type="checkbox"
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
        </Hidden>
      </Flex>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Checked: {checked.toString()}
      </Text>
    </Stack>
  );
};
