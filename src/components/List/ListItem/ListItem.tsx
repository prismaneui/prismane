"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import Box from "@components/Box";
// Utils
import { cx, fr } from "@utils";

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
          className={cx("PrismaneListItem-root", className)}
          data-testid="prismane-list-item"
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
