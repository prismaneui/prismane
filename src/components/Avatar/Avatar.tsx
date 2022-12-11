import { FC } from "react";
import defaultAvatar from "../../assets/default.svg";
// Types
import { PrismaneComponent } from "../../types";

export interface AvatarProps extends PrismaneComponent {
  src: string;
}

const Avatar: FC<AvatarProps> = ({ src, className, style }) => {
  const isImage = /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(src);

  return (
    <div
      className={`h-full aspect-square bg-no-repeat bg-center bg-cover ${
        className ? className : ""
      }`}
      style={{
        backgroundImage: `${isImage ? `url(${src})` : `url(${defaultAvatar})`}`,
        ...style,
      }}
    ></div>
  );
};

export default Avatar;
