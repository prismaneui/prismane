/**
 * lowercase
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string has only lowercase characters
 */
const lowercase = (value: string, regExp?: RegExp): string | null => {
  const regex = regExp ?? /^[a-z]+$/;

  if (!regex.test(value)) {
    return "This value contains uppercase characters!";
  }

  return null;
};

export default lowercase;
