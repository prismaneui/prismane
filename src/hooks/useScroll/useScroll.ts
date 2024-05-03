import { useState, useEffect } from "react";

const useScroll = (
  cb: (
    position: { x: number; y: number },
    direction: "up" | "down" | "left" | "right" | "none"
  ) => void = () => {}
) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<
    "up" | "down" | "left" | "right" | "none"
  >("none");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToLeft = () => {
    window.scrollTo({ left: 0, behavior: "smooth" });
  };

  const scrollToRight = () => {
    window.scrollTo({
      left: document.body.scrollWidth - window.innerWidth,
      behavior: "smooth",
    });
  };

  const scrollToPosition = (x: number, y: number) => {
    window.scrollTo({ top: y, left: x, behavior: "smooth" });
  };

  const scrollToId = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset, pageXOffset } = window;

      if (pageYOffset > position.y) {
        setDirection("down");
      } else if (pageYOffset < position.y) {
        setDirection("up");
      } else if (pageXOffset > position.x) {
        setDirection("right");
      } else if (pageXOffset < position.x) {
        setDirection("left");
      } else {
        setDirection("none");
      }

      setPosition({ x: pageXOffset, y: pageYOffset });
      cb({ x: pageXOffset, y: pageYOffset }, direction);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return {
    position,
    direction,
    scrollToTop,
    scrollToBottom,
    scrollToLeft,
    scrollToRight,
    scrollToPosition,
    scrollToId,
  };
};

export default useScroll;
