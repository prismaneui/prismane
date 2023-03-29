import { FC } from "react";
// Components
import Box from "../Box";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

const Hidden: FC<PrismaneComponent> = ({ children, className, ...props }) => {
  return (
    <Box
      element="span"
      className={strip(
        `!w-0 !h-0 !border-0 !overflow-hidden !block ${
          className ? className : ""
        } PrsmHidden-root`
      )}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Hidden;
