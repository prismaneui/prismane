import { FC } from "react";
// Types
import { PrismaneComponent } from "../../types";

interface InitialsProps extends PrismaneComponent {
  text: string;
}

export const Initials: FC<InitialsProps> = ({ text }) => {
  const arr = text.split(" ");

  const first = arr[0].charAt(0).toUpperCase();

  const last = arr[arr.length - 1].charAt(0).toUpperCase();

  return (
    <>
      {first ? first : ""}
      {last && arr.length - 1 !== 0 ? last : ""}
    </>
  );
};

export default Initials;
