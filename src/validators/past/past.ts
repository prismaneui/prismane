/**
 * past
 * @param {Date} date The date to check
 * @returns {string | null} An error message or null if the date is in the past
 * @description Check if a date is in the past
 */
const past = (date: Date, fieldName?: string) => {
  const now = new Date();

  if (date > now) {
    return `${fieldName ?? "This date"} must be in the past`;
  }

  return null;
};

export default past;
