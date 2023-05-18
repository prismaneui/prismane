import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Box from "../../Box/Box";
// Utils
import { strip, fr } from "../../../utils";

export type ListItemProps = FlexProps<"li">;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ gap = fr(1), children, className, ...props }, ref) => {
    return (
      <Box
        as="li"
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 900])}
      >
        <Flex
          align="center"
          gap={gap}
          className={strip(
            `${className ? className : ""} PrismaneListItem-root`
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Flex>
      </Box>
    );
  }
);

export default ListItem;
