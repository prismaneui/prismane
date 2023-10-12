import { useEffect, useRef } from "react";

const useFocusTrap = (isOpen: boolean = true) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      console.log("Here");

      const focusableElements = ref.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [ref.current, isOpen]);

  return ref;
};

export default useFocusTrap;
