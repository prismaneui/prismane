/**
 * multiple
 * @param {number} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a number is multiple of a given number
 */
const multiple = (
  value: number,
  of: number,
  fieldName?: string
): string | null => {
  if (value % of !== 0) {
    return `${fieldName ?? "This value"} must be multiple of ${of}!`;
  }

  return null;
};

export default multiple;
