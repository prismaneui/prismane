export const fr = (s: string | number) => {
  if (typeof s === "number") {
    return s / 4 + "rem";
  }

  return s;
};
