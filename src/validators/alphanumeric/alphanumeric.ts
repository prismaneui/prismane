/**
 * alphanumeric
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string has only alphanumeric characters
 */
const alphanumeric = (
  value: string,
  regExp?: RegExp,
  fieldName?: string
): string | null => {
  const regex = regExp ?? /^[a-zA-Z0-9]+$/;

  if (!regex.test(value)) {
    return `${
      fieldName ?? "This value"
    } must contain only alphanumeric characters!`;
  }

  return null;
};

export default alphanumeric;
