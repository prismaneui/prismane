const negative = (value: number, fieldName?: string): string | null => {
  if (value >= 0) {
    return `${fieldName ?? "This number"} must be negative!`;
  }

  return null;
};

export default negative;
