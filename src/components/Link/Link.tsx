import { FC } from "react";
// Types
import { PrismaneComponent } from "../../types";

export interface LinkProps extends PrismaneComponent {
  to: string;
  before?: Function;
}

const Link: FC<LinkProps> = ({ to, children, className, before, style }) => {
  return (
    <span
      className={`border-b border-primary-500 text-primary-500 cursor-pointer ${
        className ? className : ""
      }`}
      style={style}
      onClick={async () => {
        if (before) {
          await before();
        }

        window.open(to);
      }}
    >
      {children}
    </span>
  );
};

export default Link;
