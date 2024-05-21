export const split = (props: any, keysToExtract: string[]) => {
  const extracted: any = {};
  const rest: any = {};

  Object.entries(props).forEach(([key, value]) => {
    if (keysToExtract.includes(key)) {
      extracted[key] = value;
    } else {
      rest[key] = value;
    }
  });

  return [rest, extracted];
};
