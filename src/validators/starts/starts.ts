/**
 * starts
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string starts with a given prefix
 */
const starts = (
  value: string,
  prefix: string,
  fieldName?: string
): string | null => {
  if (!value.startsWith(prefix)) {
    return `${fieldName ?? "This value"} must start with '${prefix}'!`;
  }

  return null;
};

export default starts;
