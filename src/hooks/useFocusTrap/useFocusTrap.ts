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

const useFocusTrap = <T extends HTMLElement = any>(isOpen: boolean = true) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current && isOpen) {
      const defaultFocusElement = ref.current.querySelectorAll(
        "[data-initialfocus]"
      );

      if (defaultFocusElement.length > 0) {
        const element = defaultFocusElement[
          defaultFocusElement.length - 1
        ] as HTMLElement;

        if (isFocusable(element)) {
          element.focus();
        } else {
          const innerElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          if (innerElements.length > 0) {
            (innerElements[0] as HTMLElement).focus();
          }
        }

        return;
      }

      const focusableElements = ref.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [ref.current, isOpen]);

  return ref;
};

export default useFocusTrap;
