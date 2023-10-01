/**
 * multiple
 * @param {number} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a number is multiple of a given number
 */
const multiple = (value: number, of: number): string | null => {
  if (value % of !== 0) {
    return `This value must be multiple of ${of}!`;
  }

  return null;
};

export default multiple;
