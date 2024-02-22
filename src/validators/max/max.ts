const max = (
  value: string,
  length: number,
  fieldName?: string
): string | null => {
  if (value.length > length) {
    return `${
      fieldName ?? "This field"
    } has to be shorter than ${length} characters!`;
  }

  return null;
};

export default max;
