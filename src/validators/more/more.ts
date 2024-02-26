const more = (
  value: number,
  number: number,
  fieldName?: string
): string | null => {
  if (value < number) {
    return `${fieldName ?? "This number"} must be more than ${number}!`;
  }

  return null;
};

export default more;
