import { useState, useEffect } from "react";

const useScroll = (cb: (e: Event) => void = (e: Event) => {}) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState("none");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToPosition = (x: number, y: number) => {
    window.scrollTo({ top: y, left: x, behavior: "smooth" });
  };

  const scrollToId = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = (e: Event) => {
      cb(e);

      const { pageYOffset, pageXOffset } = window;
      setScrollPosition({ x: pageXOffset, y: pageYOffset });

      if (pageYOffset > scrollPosition.y) {
        setScrollDirection("down");
      } else if (pageYOffset < scrollPosition.y) {
        setScrollDirection("up");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return {
    scrollPosition,
    scrollDirection,
    scrollToTop,
    scrollToBottom,
    scrollToPosition,
    scrollToId,
  };
};

export default useScroll;
