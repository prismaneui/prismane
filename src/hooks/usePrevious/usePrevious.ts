import { useRef, useEffect } from "react";

const usePrevious = (value: any) => {
  const prev = useRef();

  useEffect(() => {
    prev.current = value;
  }, [value]);

  return prev.current;
};

export default usePrevious;
