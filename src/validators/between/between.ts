const between = (
  value: number,
  min: number,
  max: number,
  fieldName?: string
): string | null => {
  if (value > max || value < min) {
    return `${fieldName ?? "This number"} must be between ${min} and ${max}!`;
  }

  return null;
};

export default between;
