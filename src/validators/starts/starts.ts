const starts = (
  value: string,
  prefix: string,
  fieldName?: string
): string | null => {
  if (!value.startsWith(prefix)) {
    return `${fieldName ?? "This value"} must start with '${prefix}'!`;
  }

  return null;
};

export default starts;
