import { useEffect, useRef } from "react";

const useDebounce = (value: any, delay: number) => {
  const debouncedValueRef = useRef(value);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    debouncedValueRef.current = value;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      debouncedValueRef.current = value;
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [value, delay]);

  return debouncedValueRef.current;
};

export default useDebounce;
