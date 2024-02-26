const contains = (
  value: string,
  substring: string,
  fieldName?: string
): string | null => {
  if (!value.includes(substring)) {
    return `${fieldName ?? "This value"} must contain '${substring}'!`;
  }

  return null;
};

export default contains;
