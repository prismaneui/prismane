export const strip = (s: string) => {
  return s.replace(/\s+/g, " ").trim();
};

export const generateUUID = () => {
  return Math.random().toString(16).slice(2);
};
