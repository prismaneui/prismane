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
