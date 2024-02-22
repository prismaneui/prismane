const positive = (value: number, fieldName?: string): string | null => {
  if (value <= 0) {
    return `${fieldName ?? "This number"} must be positive!`;
  }

  return null;
};

export default positive;
