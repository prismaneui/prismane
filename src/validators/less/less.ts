const less = (
  value: number,
  number: number,
  fieldName?: string
): string | null => {
  if (value > number) {
    return `${fieldName ?? "This number"} must be less than ${number}!`;
  }

  return null;
};

export default less;
