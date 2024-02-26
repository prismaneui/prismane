const match = (
  value: string | number | boolean,
  revalue: string | number | boolean,
  fieldName?: string
): string | null => {
  if (value !== revalue) {
    return `${fieldName ?? "Fields"} must match!`;
  }

  return null;
};

export default match;
