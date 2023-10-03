/**
 * before
 * @param {Date} date The date to check
 * @param {Date} target The target date for comparison
 * @param {string} fieldName The field name is needed for the error message
 * @returns {string | null} An error message or null if the date is before the target date
 * @description Check if a date is before another date
 */
const before = (date: Date, target: Date, fieldName?: string) => {
  if (date >= target) {
    return `${
      fieldName ?? "This date"
    } must be before ${target.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}!`;
  }

  return null;
};

export default before;
