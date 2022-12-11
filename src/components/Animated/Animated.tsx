import { FC } from "react";
// Types
import { Animations } from "../../types";
import { PrismaneComponent } from "../../types";

export interface AnimatedProps extends PrismaneComponent {
  animationIn: Animations;
  animationOut?: Animations;
  alternate?: boolean;
}

const Animated: FC<AnimatedProps> = ({
  children,
  animationIn,
  animationOut,
  alternate,
  className,
  style,
}) => {
  return (
    <div
      className={`${!alternate ? animationIn : animationOut} ${
        className ? className : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Animated;
