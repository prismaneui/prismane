const substring = (
  value: string,
  string: string,
  fieldName?: string
): string | null => {
  if (!string.includes(value)) {
    return `${fieldName ?? "This value"} must be a substring of '${string}'!`;
  }

  return null;
};

export default substring;
