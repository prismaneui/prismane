/**
 * after
 * @param {Date} date The date to check
 * @param {Date} target The target date for comparison
 * @param {string} fieldName The field name is needed for the error message
 * @returns {string | null} An error message or null if the date is after the target date
 * @description Check if a date is after another date
 */
const after = (date: Date, target: Date, fieldName?: string) => {
  if (date <= target) {
    return `${
      fieldName || "This date"
    } must be after ${target.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}!`;
  }

  return null;
};

export default after;
