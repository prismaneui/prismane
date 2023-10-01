/**
 * future
 * @param {Date} date The date to check
 * @returns {string | null} An error message or null if the date is in the future
 * @description Check if a date is in the future
 */
const future = (date: Date) => {
  const now = new Date();

  if (date <= now) {
    return "This date must be in the future";
  }

  return null;
};

export default future;
