import classNames from "classnames";

export const cx = (...args: classNames.ArgumentArray) => {
  return classNames(...args);
};
