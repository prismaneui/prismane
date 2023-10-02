/**
 * email
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that checks if a value is a valid email
 */
const email = (value: string, regExp?: RegExp): string | null => {
  const regex =
    regExp ?? /^(?!.*[-_.]{2})[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

  if (!regex.test(value)) {
    return "This is not a valid email!";
  }

  return null;
};

export default email;
