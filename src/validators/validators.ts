/**
 * required
 * @param {string} value The string value that should be validated
 * @returns {string | null}
 * @description Method that validates if a value is empty or not
 */
export const required = (value: string | boolean): string | null => {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.length === 0)
  ) {
    return "This field is required!";
  }

  return null;
};

/**
 * min
 * @param {string} value The value that should be validated
 * @param {number} length The minimal length that the value has to be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | null}
 * @description Method that validates if a value is shorter than a minimal length
 */
export const min = (
  value: string,
  length: number,
  fieldName?: string
): string | null => {
  if (value.length <= length) {
    return `${
      fieldName ? fieldName : "This field"
    } has to be longer than ${length} characters!`;
  }

  return null;
};

/**
 * max
 * @param {string} value The value that should be validated
 * @param {number} length The maximum length that the value has to be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | null}
 * @description Method that validates if a value is longer than a minimal length
 */
export const max = (
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

/**
 * match
 * @param {string | number} value The value that should be validated
 * @param {string | number} revalue The other value that should be matched to the first value
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | null}
 * @description Method that checks if two values are the same
 */
export const match = (
  value: string | number | boolean | number,
  revalue: string | number,
  fieldName?: string
): string | null => {
  if (value !== revalue) {
    return `${fieldName ? fieldName : "Fields"} must match!`;
  }

  return null;
};

/**
 * url
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a value is a valid url
 */
export const url = (value: string): string | null => {
  if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
    return "This is not a valid URL!";
  }

  return null;
};

/**
 * email
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that checks if a value is a valid email
 */
export const email = (value: string): string | null => {
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
    return "This is not a valid email!";
  }

  return null;
};

/**
 * username
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that checks if a value is a valid username
 */
export const username = (value: string): string | null => {
  if (!/^[a-z0-9_-]{4,255}$/.test(value)) {
    return "This is not a valid username!";
  }

  return null;
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
