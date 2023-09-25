import { useLayoutEffect, useRef, useState } from "react";

const usePresence = (
  present: boolean,
  duration: number = 150,
  cb?: () => void
) => {
  const [presence, setPresence] = useState(present as boolean);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    if (present) {
      setPresence(true);

      if (cb && !presence) {
        cb();
      }
    } else {
      if (cb && presence) {
        cb();
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setPresence(false);
        timeoutRef.current = null;
      }, duration);
    }
  }, [present]);

  return presence;
};

export default usePresence;
