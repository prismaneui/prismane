/**
 * validateRequired
 * @param {string} value The string value that should be validated
 * @returns {string | void}
 * @description Method that validates if a value is empty or not
 */
export const validateRequired = (value: string): string | void => {
  if (!value) {
    return "This field is required!";
  }
};

/**
 * validateMin
 * @param {string} value The value that should be validated
 * @param {number} length The minimal length that the value has to be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | void}
 * @description Method that validates if a value is shorter than a minimal length
 */
export const validateMin = (
  value: string,
  length: number,
  fieldName: string
): string | void => {
  if (value && value.length <= length) {
    return `${fieldName} has to be longer than ${length} characters!`;
  }
};

/**
 * validateMax
 * @param {string} value The value that should be validated
 * @param {number} length The maximum length that the value has to be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | void}
 * @description Method that validates if a value is longer than a minimal length
 */
export const validateMax = (
  value: string,
  length: number,
  fieldName: string
): string | void => {
  if (value && value.length > length) {
    return `${fieldName} has to be shorther than ${length} characters`;
  }
};

/**
 * validateMatchBoth
 * @param {string | number} value The value that should be validated
 * @param {string | number} revalue The other value that should be matched to the first value
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | void}
 * @description Method that checks if two values are the same
 */
export const validateMatchBoth = (
  value: string | number,
  revalue: string | number,
  fieldName: string
): string | void => {
  if (value !== revalue) {
    return `${fieldName} must match!`;
  }
};

/**
 * validateURLRegex
 * @param {string} value The value that should be validated
 * @returns {string | void}
 * @description Method that check if a value is a valid url
 */
export const validateURLRegex = (value: string): string | void => {
  if (value.length > 0 && !/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
    return "This is not a valid URL!";
  }
};

/**
 * validateEmailRegex
 * @param {string} value The value that should be validated
 * @returns {string | void}
 * @description Method that checks if a value is a valid email
 */
export const validateEmailRegex = (value: string): string | void => {
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
    return "This is not a valid email!";
  }
};

/**
 * validateUsernameRegex
 * @param {string} value The value that should be validated
 * @returns {string | void}
 * @description Method that checks if a value is a valid username
 */
export const validateUsernameRegex = (value: string): string | void => {
  if (!/^[a-z0-9_-]{4,255}$/.test(value)) {
    return "This si not a valid username";
  }
};

export default {
  validateMin,
  validateMax,
  validateRequired,
  validateMatchBoth,
  validateEmailRegex,
  validateUsernameRegex,
  validateURLRegex,
};
