/**
 * min
 * @param {string} value The value that should be validated
 * @param {number} length The minimal length that the value has to be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | null}
 * @description Method that validates if a value is shorter than a minimal length
 */
const min = (
  value: string,
  length: number,
  fieldName?: string
): string | null => {
  if (value.length <= length) {
    return `${
      fieldName ?? "This field"
    } has to be longer than ${length} characters!`;
  }

  return null;
};

export default min;
