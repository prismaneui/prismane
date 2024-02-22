const trimmed = (
  value: string,
  regExp?: RegExp,
  fieldName?: string
): string | null => {
  const regex = regExp ?? /^(?!.*\s{2,}).*$/;

  if (!regex.test(value)) {
    return `${
      fieldName ?? "This value"
    } contains more than one consecutive space!`;
  }

  return null;
};

export default trimmed;
