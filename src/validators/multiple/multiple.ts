const multiple = (
  value: number,
  of: number,
  fieldName?: string
): string | null => {
  if (value % of !== 0) {
    return `${fieldName ?? "This value"} must be multiple of ${of}!`;
  }

  return null;
};

export default multiple;
