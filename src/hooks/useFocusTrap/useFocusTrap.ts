import { useEffect, useRef } from "react";

const isFocusable = (element: HTMLElement) => {
  const tagName = element.tagName.toLowerCase();
  if (
    tagName === "button" ||
    tagName === "input" ||
    tagName === "select" ||
    tagName === "textarea"
  ) {
    return true;
  }

  if (tagName === "a" && element.hasAttribute("href")) {
    return true;
  }

  if (element.hasAttribute("tabindex")) {
    const tabIndexValue = element.getAttribute("tabindex");
    if (tabIndexValue !== "-1") {
      return true;
    }
  }

  return false;
};

const useFocusTrap = (isOpen: boolean = true) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current && isOpen) {
      const defaultFocusElement = ref.current.querySelectorAll(
        "[data-initialfocus]"
      );

      if (defaultFocusElement.length > 0) {
        const element = defaultFocusElement[defaultFocusElement.length - 1];

        if (isFocusable(element)) {
          element.focus();
        } else {
          const innerElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          if (innerElements.length > 0) {
            innerElements[0].focus();
          }
        }

        return;
      }

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
