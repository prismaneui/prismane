import React from "react";
// Components
import Separator from "../components/Separator/Separator";

export default {
  title: "Separator",
  component: Separator,
};

export const Default = () => (
  <div className="flex flex-col w-96">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia
      deleniti quae atque a totam est iusto iste aliquid ipsa tenetur nam
      impedit ipsum, laudantium, voluptatem quibusdam et, assumenda optio!
    </p>
    <Separator />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia
      deleniti quae atque a totam est iusto iste aliquid ipsa tenetur nam
      impedit ipsum, laudantium, voluptatem quibusdam et, assumenda optio!
    </p>
  </div>
);
