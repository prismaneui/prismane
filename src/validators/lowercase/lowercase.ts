const lowercase = (
  value: string,
  regExp?: RegExp,
  fieldName?: string
): string | null => {
  const regex = regExp ?? /^[a-z]+$/;

  if (!regex.test(value)) {
    return `${fieldName ?? "This value"} contains uppercase characters!`;
  }

  return null;
};

export default lowercase;
