import { useEffect } from "react";

const useOutsideClick = (ref: any, cb: any) => {
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      cb();
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      handleClickOutside(event);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [cb]);

  return ref;
};

export default useOutsideClick;
