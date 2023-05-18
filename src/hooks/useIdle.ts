import { useState, useEffect } from "react";

const useIdle = (timeout: number = 3000, options: any = {}) => {
  const {
    events = ["mousemove", "keydown", "touchmove", "click", "scroll"],
    initial = false,
  } = options;
  const [isIdle, setIsIdle] = useState(initial);

  useEffect(() => {
    let timeout: any;

    const handleUserActivity = () => {
      setIsIdle(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    };

    handleUserActivity();

    events.forEach((event: any) => {
      window.addEventListener(event, handleUserActivity);
    });

    return () => {
      clearTimeout(timeout);
      events.forEach((event: any) => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, [timeout, events]);

  return isIdle;
};

export default useIdle;
