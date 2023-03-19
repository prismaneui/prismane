import { FC } from "react";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface AvatarProps extends PrismaneComponent {
  src: string;
}

const Avatar: FC<AvatarProps> = ({ src, className, style, ...props }) => {
  const isImage = /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(src);

  return (
    <div
      className={strip(
        `h-full aspect-square bg-no-repeat bg-center bg-cover ${
          className ? className : ""
        } PrsmAvatar-root`
      )}
      style={{
        backgroundImage: `${isImage ? `url(${src})` : `url()`}`,
        ...style,
      }}
      {...props}
    ></div>
  );
};

export default Avatar;
