const future = (date: Date, fieldName?: string) => {
  const now = new Date();

  if (date <= now) {
    return `${fieldName ?? "This date"} must be in the future!`;
  }

  return null;
};

export default future;
