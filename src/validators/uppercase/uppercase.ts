const uppercase = (
  value: string,
  regExp?: RegExp,
  fieldName?: string
): string | null => {
  const regex = regExp ?? /^[A-Z]+$/;

  if (!regex.test(value)) {
    return `${fieldName ?? "This value"} contains lowercase characters!`;
  }

  return null;
};

export default uppercase;
