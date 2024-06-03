"use client";

import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
// Components
import Box from "@components/Box";
// Utils
import { cx } from "@utils";
// Props
import { PortalProps } from "./Portal.props";

const Portal = forwardRef<HTMLDivElement, PortalProps>(
  ({ target, disabled = false, className, children, ...props }, ref) => {
    const node = target?.current ?? globalThis.document.body;

    if (!node) {
      return null;
    }

    const portal = (
      <Box
        className={cx("PrismanePortal-root", className, {
          "PrismanePortal-root-disabled": disabled,
        })}
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
