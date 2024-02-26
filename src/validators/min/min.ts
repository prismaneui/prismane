const min = (
  value: string,
  length: number,
  fieldName?: string
): string | null => {
  if (value.length <= length) {
    return `${
      fieldName ?? "This field"
    } has to be longer than ${length} characters!`;
  }

  return null;
};

export default min;
