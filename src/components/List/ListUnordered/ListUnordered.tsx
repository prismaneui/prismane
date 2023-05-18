import { forwardRef } from "react";
// Components
import List, { ListProps } from "../../List/List";
// Utils
import { strip } from "../../../utils";

export type ListUnorderedProps = ListProps<"ul">;

const ListUnordered = forwardRef<HTMLUListElement, ListUnorderedProps>(
  ({ gap = 0, children, className, sx, ...props }, ref) => {
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
        ref={ref}
        {...props}
      >
        {children}
      </List>
    );
  }
);

export default ListUnordered;
