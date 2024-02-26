const url = (value: string, regExp?: RegExp): string | null => {
  const regex = regExp ?? /^(ftp|http|https):\/\/[^ "]+$/;

  if (!regex.test(value)) {
    return "This is not a valid URL!";
  }

  return null;
};

export default url;
