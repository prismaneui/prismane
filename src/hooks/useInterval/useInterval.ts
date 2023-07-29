import { useEffect, useRef, useState } from "react";

const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef<any>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null | any>(null);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const start = () => {
    if (!active) {
      stop();
      intervalIdRef.current = setInterval(() => {
        savedCallback.current();
      }, delay);
      setActive(true);
    }
  };

  const stop = () => {
    if (active) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
      setActive(false);
    }
  };

  const toggle = () => {
    if (active) {
      stop();
    } else {
      start();
    }
  };

  useEffect(() => {
    return stop;
  }, []);

  return {
    start,
    stop,
    toggle,
    active,
  };
};

export default useInterval;
