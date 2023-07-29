/**
 * url
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a value is a valid url
 */
const url = (value: string): string | null => {
  if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
    return "This is not a valid URL!";
  }

  return null;
};

export default url;
