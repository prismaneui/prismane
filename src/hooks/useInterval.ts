import { useEffect, useRef } from "react";

const useInterval = (callback: any, delay: number) => {
  const savedCallback: any = useRef();
  const intervalIdRef: any = useRef();
  const latestCallback: any = useRef();
  const latestDelay: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
    latestCallback.current = callback;
    latestDelay.current = delay;
  }, [callback, delay]);

  const start = () => {
    intervalIdRef.current = setInterval(() => {
      latestCallback.current();
    }, latestDelay.current);
  };

  const stop = () => {
    clearInterval(intervalIdRef.current);
  };

  const reset = () => {
    clearInterval(intervalIdRef.current);
    latestCallback.current = savedCallback.current;
    latestDelay.current = delay;
    start();
  };

  useEffect(() => {
    start();

    return () => {
      stop();
    };
  }, [delay]);

  return {
    start,
    stop,
    reset,
  };
};

export default useInterval;
