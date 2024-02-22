const email = (value: string, regExp?: RegExp): string | null => {
  const regex =
    regExp ?? /^(?!.*[-_.]{2})[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

  if (!regex.test(value)) {
    return "This is not a valid email!";
  }

  return null;
};

export default email;
