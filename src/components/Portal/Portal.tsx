import { forwardRef } from "react";
import ReactDOM from "react-dom";
// Components
import Box, { BoxProps } from "../Box/Box";
// Utils
import { strip } from "../../utils";

export type PortalProps = {
  target?: React.RefObject<HTMLElement> | null;
  disabled?: boolean;
} & BoxProps<"div">;

const Portal = forwardRef<HTMLDivElement, PortalProps>(
  ({ target, disabled = false, className, children, ...props }, ref) => {
    const node = target && target.current ? target.current : document.body;

    const portal = (
      <Box
        className={strip(`${className ? className : ""} PrismanePortal-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );

    if (disabled) {
      return portal;
    }

    return ReactDOM.createPortal(portal, node);
  }
);

export default Portal;
