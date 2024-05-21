export const object = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};
