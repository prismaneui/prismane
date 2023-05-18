import { useState, useEffect } from "react";

// const useDebounce = (initial: any, delay: number) => {
//   const [value, setValue] = useState(initial);

//   useEffect(() => {
//     const debounceTimeout = setTimeout(() => {
//       setValue(initial);
//     }, delay);

//     return () => {
//       clearTimeout(debounceTimeout);
//     };
//   }, [initial, delay]);

//   return {
//     value,
//     setValue,
//   };
// };

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
