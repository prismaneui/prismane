import { forwardRef, useRef, useEffect, useState } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Box, { BoxProps } from "../../Box/Box";
import Animation, { AnimationProps } from "../../Animation/Animation";
// Context
import { useAccordionContext } from "../AccordionContext";
import { useAccordionItemContext } from "../AccordionItem/AccordionItemContext";
// Utils
import { strip, fr } from "../../../utils";

export type AccordionPanelProps = FlexProps<"div"> & AnimationProps<"div">;

const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
  ({ children, className, ...props }, ref) => {
    const { value }: any = useAccordionContext();

    const item: any = useAccordionItemContext();

    const contentRef = useRef(null);

    const [open, setOpen] = useState(false);

    useEffect(() => {
      setOpen(value === item);
    }, [contentRef.current]);

    useEffect(() => {
      setOpen(value === item);
    }, [value, item]);

    return (
      <Animation
        px={fr(6)}
        py={open && fr(2)}
        of="hidden"
        bs="content-box"
        animation={{
          in: {
            opacity: 1,
            height: contentRef.current ? contentRef.current.offsetHeight : 0,
          },
          out: {
            opacity: 0,
            height: 0,
          },
        }}
        animated={open}
        className={strip(
          `${className ? className : ""} ${
            value === item ? "PrismaneAccordionPanel-root-active" : ""
          } PrismaneAccordionPanel-root`
        )}
        data-testid="prismane-accordion-panel"
        ref={ref}
        {...props}
      >
        <Box ref={contentRef}>{children}</Box>
      </Animation>
    );
  }
);

export default AccordionPanel;
