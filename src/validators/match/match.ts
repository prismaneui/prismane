/**
 * match
 * @param {string | number | boolean} value The value that should be validated
 * @param {string | number | boolean} revalue The other value that should be matched to the first value
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | null}
 * @description Method that checks if two values are the same
 */
const match = (
  value: string | number | boolean,
  revalue: string | number | boolean,
  fieldName?: string
): string | null => {
  if (value !== revalue) {
    return `${fieldName ?? "Fields"} must match!`;
  }

  return null;
};

export default match;
