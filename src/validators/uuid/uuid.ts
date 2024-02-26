const uuid = (value: string, regExp?: RegExp): string | null => {
  const regex = regExp ?? /^[a-fA-F0-9]{16}$/;

  if (!regex.test(value)) {
    return "This is not a valid ID!";
  }

  return null;
};

export default uuid;
