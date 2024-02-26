const ends = (
  value: string,
  suffix: string,
  fieldName?: string
): string | null => {
  if (!value.endsWith(suffix)) {
    return `${fieldName ?? "This value"} must end with '${suffix}'!`;
  }

  return null;
};

export default ends;
