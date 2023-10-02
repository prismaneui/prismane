/**
 * ends
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string ends with a given suffix
 */
const ends = (
  value: string,
  suffix: string,
  fieldName?: string
): string | null => {
  if (!value.endsWith(suffix)) {
    return `${fieldName ?? "This value"} must end with '${suffix}'!`;
  }

  return null;
};

export default ends;
