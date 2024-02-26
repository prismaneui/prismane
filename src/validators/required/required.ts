const required = (value: string | boolean): string | null => {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.length === 0)
  ) {
    return "This field is required!";
  }

  return null;
};

export default required;
