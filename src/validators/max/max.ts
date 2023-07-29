/**
 * max
 * @param {string} value The value that should be validated
 * @param {number} length The maximum length that the value has to be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | null}
 * @description Method that validates if a value is longer than a minimal length
 */
const max = (
  value: string,
  length: number,
  fieldName?: string
): string | null => {
  if (value.length > length) {
    return `${
      fieldName ? fieldName : "This field"
    } has to be shorter than ${length} characters!`;
  }

  return null;
};

export default max;