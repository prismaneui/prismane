/**
 * contains
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string contains a given substring
 */
const contains = (value: string, substring: string): string | null => {
  if (!value.includes(substring)) {
    return `This value must contain ${substring}!`;
  }

  return null;
};

export default contains;
