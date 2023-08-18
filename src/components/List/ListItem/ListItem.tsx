import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Box from "../../Box/Box";
// Utils
import { strip, fr } from "../../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../../types";

export type ListItemProps = FlexProps;

const ListItem = forwardRef<
  HTMLLIElement,
  PrismaneVersatileWithoutAs<"li", ListItemProps>
>(({ gap = fr(1), children, className, ...props }, ref) => {
  return (
    <Box
      as="li"
      cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 900])}
    >
      <Flex
        align="center"
        gap={gap}
        className={strip(`${className ? className : ""} PrismaneListItem-root`)}
        data-testid="prismane-list-item"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    </Box>
  );
});

export default ListItem;
