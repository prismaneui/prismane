const past = (date: Date, fieldName?: string) => {
  const now = new Date();

  if (date > now) {
    return `${fieldName ?? "This date"} must be in the past!`;
  }

  return null;
};

export default past;
