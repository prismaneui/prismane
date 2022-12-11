/**
 * required
 * @param {string} value The string value that should be validated
 * @returns {string | void}
 * @description Method that validates if a value is empty or not
 */
export const required = (value: string): string | void => {
  if (!value) {
    return "This field is required!";
  }
};

/**
 * min
 * @param {string} value The value that should be validated
 * @param {number} length The minimal length that the value has to be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | void}
 * @description Method that validates if a value is shorter than a minimal length
 */
export const min = (
  value: string,
  length: number,
  fieldName: string
): string | void => {
  if (value && value.length <= length) {
    return `${fieldName} has to be longer than ${length} characters!`;
  }
};

/**
 * max
 * @param {string} value The value that should be validated
 * @param {number} length The maximum length that the value has to be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | void}
 * @description Method that validates if a value is longer than a minimal length
 */
export const max = (
  value: string,
  length: number,
  fieldName: string
): string | void => {
  if (value && value.length > length) {
    return `${fieldName} has to be shorther than ${length} characters`;
  }
};

/**
 * match
 * @param {string | number} value The value that should be validated
 * @param {string | number} revalue The other value that should be matched to the first value
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | void}
 * @description Method that checks if two values are the same
 */
export const match = (
  value: string | number,
  revalue: string | number,
  fieldName: string
): string | void => {
  if (value !== revalue) {
    return `${fieldName} must match!`;
  }
};

/**
 * url
 * @param {string} value The value that should be validated
 * @returns {string | void}
 * @description Method that check if a value is a valid url
 */
export const url = (value: string): string | void => {
  if (value.length > 0 && !/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
    return "This is not a valid URL!";
  }
};

/**
 * email
 * @param {string} value The value that should be validated
 * @returns {string | void}
 * @description Method that checks if a value is a valid email
 */
export const email = (value: string): string | void => {
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
    return "This is not a valid email!";
  }
};

/**
 * username
 * @param {string} value The value that should be validated
 * @returns {string | void}
 * @description Method that checks if a value is a valid username
 */
export const username = (value: string): string | void => {
  if (!/^[a-z0-9_-]{4,255}$/.test(value)) {
    return "This si not a valid username";
  }
};

export default {
  min,
  max,
  required,
  match,
  email,
  username,
  url,
};
