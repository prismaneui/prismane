import { forwardRef } from "react";
// Components
import List, { ListProps } from "../../List/List";
// Utils
import { strip } from "../../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../../types";

export type ListOrderedProps = ListProps;

const ListOrdered = forwardRef<
  HTMLOListElement,
  PrismaneVersatileWithoutAs<"ol", ListOrderedProps>
>(({ gap = 0, children, className, sx, ...props }, ref) => {
  return (
    <List
      as="ol"
      gap={gap}
      sx={{
        listStyleType: "revert",
        ...sx,
      }}
      className={strip(
        `${className ? className : ""} PrismaneListOrdered-root`
      )}
      data-testid="prismane-list-ordered"
      ref={ref}
      {...props}
    >
      {children}
    </List>
  );
});

export default ListOrdered;
