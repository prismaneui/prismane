import { useState, useEffect } from "react";

const useIdle = (
  timeout: number = 3000,
  events: string[] = ["mousemove", "keyup", "click", "scroll"],
  initial: boolean = false
) => {
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
