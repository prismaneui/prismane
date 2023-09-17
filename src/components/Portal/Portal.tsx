import { forwardRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import { PrismaneProps } from "../../types";
// Utils
import { strip } from "../../utils";

export type PortalProps = PrismaneProps<
  {
    target?: React.RefObject<HTMLElement> | null;
    disabled?: boolean;
  },
  BoxProps
>;

const Portal = forwardRef<HTMLDivElement, PortalProps>(
  ({ target, disabled = false, className, children, ...props }, ref) => {
    const [node, setNode] = useState<HTMLElement | null>(null);

    useEffect(() => {
      if (target && target.current) {
        setNode(target.current);
      }

      if (target === undefined) {
        setNode(document.body);
      }
    }, [target]);

    if (!node) {
      return null;
    }

    const portal = (
      <Box
        className={strip(
          `${className ? className : ""} ${
            disabled ? "PrismanePortal-root-disabled" : ""
          } PrismanePortal-root`
        )}
        data-testid="prismane-portal"
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
