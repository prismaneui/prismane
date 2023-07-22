/**
 * required
 * @param {string} value The string value that should be validated
 * @returns {string | null}
 * @description Method that validates if a value is empty or not
 */
const required = (value: string | boolean): string | null => {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.length === 0)
  ) {
    return "This field is required!";
  }

  return null;
};

export default required;
