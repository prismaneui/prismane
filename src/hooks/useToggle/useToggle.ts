import { useState } from "react";

const useToggle = (values: any[]) => {
  const [currentValue, setCurrentValue] = useState(values[0]);

  const toggle = (to: any) => {
    if (to) {
      setCurrentValue(to);
    } else {
      const currentIndex = values.indexOf(currentValue);
      const nextIndex = (currentIndex + 1) % values.length;
      setCurrentValue(values[nextIndex]);
    }
  };

  return [currentValue, toggle];
};

export default useToggle;
