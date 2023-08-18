import { forwardRef } from "react";
// Components
import List, { ListProps } from "../../List/List";
// Utils
import { strip } from "../../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../../types";

export type ListUnorderedProps = ListProps;

const ListUnordered = forwardRef<
  HTMLUListElement,
  PrismaneVersatileWithoutAs<"ul", ListUnorderedProps>
>(({ gap = 0, children, className, sx, ...props }, ref) => {
  return (
    <List
      as="ul"
      gap={gap}
      sx={{
        listStyleType: "revert",
        ...sx,
      }}
      className={strip(
        `${className ? className : ""} PrismaneListUnordered-root`
      )}
      data-testid="prismane-list-unordered"
      ref={ref}
      {...props}
    >
      {children}
    </List>
  );
});

export default ListUnordered;
