import { FC } from "react";

export type InitialsProps = {
  name: string;
};

export const Initials: FC<InitialsProps> = ({ name }) => {
  const arr = name.split(" ");

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
