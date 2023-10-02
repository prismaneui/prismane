/**
 * trimmed
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string has no more consecutive spaces than one
 */
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
