import { FC, ReactNode } from "react";
// Component
import Paper from "../Paper/Paper";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface CardProps extends PrismaneComponent {
  width?: string;
  height?: string;
  shadow?: boolean;
  header?: ReactNode;
  actions?: ReactNode;
}

/**
 * Card Props
 * @param {Object} props
 * @param {string=} props.heading The heading of the card if there is any
 * @param {ReactElement | HTMLElement | ReactElement[] | HTMLElement[]} props.children The children of the card
 * @param {string=} props.width The width of the card
 * @param {string=} props.height The height of the card
 * @param {string=} props.className The additional classes for the component
 * @returns Element
 */

const Card: FC<CardProps> = ({
  children,
  width,
  height,
  className,
  shadow,
  header,
  actions,
  ...props
}) => {
  return (
    <Paper
      className={strip(
        `p-2 flex flex-col gap-5 ${className ? className : ""} PrsmCard-root`
      )}
      width={width}
      height={height}
      shadow={shadow}
      {...props}
    >
      {header && (
        <div className="flex overflow-hidden rounded-md PrsmCard-header">
          {header}
        </div>
      )}
      {children}
      {actions && (
        <div className="flex overflow-x-hidden gap-3 PrsmCard-actions">
          {actions}
        </div>
      )}
    </Paper>
  );
};

export default Card;
