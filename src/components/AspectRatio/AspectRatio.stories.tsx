import React, { FC } from "react";
// Components
import AspectRatio from "./AspectRatio";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/AspectRatio",
  component: AspectRatio,
};

export const Default: FC = () => {
  return <AspectRatio ratio="16/9" w={320} bg="base" />;
};

export const Video: FC = () => {
  return (
    <AspectRatio ratio="1/1" w={420}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/w0AOGeqOnFY"
        title="YouTube video player"
      />
    </AspectRatio>
  );
};

export const Image: FC = () => {
  return (
    <AspectRatio w={360} ratio="1/1">
      <img
        src="https://memes.co.in/memes/update/uploads/2021/04/65efc04-1536x1536.jpg"
        alt="meme"
        style={{
          objectFit: "cover",
        }}
      />
    </AspectRatio>
  );
};
