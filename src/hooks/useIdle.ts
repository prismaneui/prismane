import { useState, useEffect } from "react";

const useIdle = (
  timeout: number = 3000,
  options: any = {
    events: ["mousemove", "keyup", "click", "scroll"],
    initial: false,
  }
) => {
  const { events, initial } = options;
  const [isIdle, setIsIdle] = useState(initial);
  let idleTimeout: any;

  useEffect(() => {
    const handleUserActivity = () => {
      setIsIdle(false);
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    };

    events.forEach((event: string) => {
      window.addEventListener(event, handleUserActivity);
    });

    return () => {
      clearTimeout(idleTimeout);
      events.forEach((event: string) => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, [timeout, events]);

  return isIdle;
};

export default useIdle;
