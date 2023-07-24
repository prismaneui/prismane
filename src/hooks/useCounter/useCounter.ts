import { useState } from "react";

const useCounter = (
  initialValue = 0,
  minValue = Number.MIN_SAFE_INTEGER,
  maxValue = Number.MAX_SAFE_INTEGER
) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (step = 1) => {
    setCounter((prev) => Math.min(prev + step, maxValue));
  };

  const decrement = (step = 1) => {
    setCounter((prev) => Math.max(prev - step, minValue));
  };

  const set = (value: number) => {
    setCounter(value);
  };

  return {
    counter,
    increment,
    decrement,
    set,
  };
};

export default useCounter;
