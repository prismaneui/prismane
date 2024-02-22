const regex = (
  value: string,
  regExp: RegExp,
  fieldName?: string
): string | null => {
  if (!regExp.test(value)) {
    return `${fieldName ?? "This field"} does not match the given pattern!`;
  }

  return null;
};

export default regex;
