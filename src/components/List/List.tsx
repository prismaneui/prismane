import { forwardRef, ForwardedRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { Versatile, PrismaneWithInternal } from "../../types";
// Utils
import { strip } from "../../utils";

// Internal Components
import ListUnordered, {
  ListUnorderedProps,
} from "./ListUnordered/ListUnordered";
import ListOrdered, { ListOrderedProps } from "./ListOrdered/ListOrdered";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import ListIcon, { ListIconProps } from "./ListIcon/ListIcon";

export {
  type ListUnorderedProps,
  type ListOrderedProps,
  type ListItemProps,
  type ListIconProps,
};

export type ListProps<E extends Versatile> = FlexProps<E>;

const List: PrismaneWithInternal<
  ListProps<any>,
  {
    Unordered: ListUnorderedProps;
    Ordered: ListOrderedProps;
    Item: ListItemProps;
    Icon: ListIconProps;
  }
> = forwardRef(
  <E extends Versatile>(
    { gap = 0, as = "ul", children, className, sx, ...props }: ListProps<E>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Flex
        as={as}
        direction="column"
        gap={gap}
        className={strip(`${className ? className : ""} PrismaneList-root`)}
        sx={{ listStyleType: "none", ...sx }}
        data-testid="prismane-list"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

List.Unordered = ListUnordered;
List.Ordered = ListOrdered;
List.Item = ListItem;
List.Icon = ListIcon;

export default List;
