import { useEffect } from "react";

const useOutsideClick = (
  ref: any,
  cb: any,
  events: string[] = ["mousedown", "touchstart"]
) => {
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      cb();
    }
  };

  useEffect(() => {
    const handleDocumentEvent = (event: any) => {
      handleClickOutside(event);
    };

    events.forEach((ev) => document.addEventListener(ev, handleDocumentEvent));

    return () => {
      events.forEach((ev) =>
        document.removeEventListener(ev, handleDocumentEvent)
      );
    };
  }, [cb]);

  return ref;
};

export default useOutsideClick;
