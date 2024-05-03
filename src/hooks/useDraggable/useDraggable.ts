import { useEffect, useRef, useState } from "react";

const useDraggable = (
  defaultPosition: { x: number; y: number } = { x: 0, y: 0 }
) => {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    const element: any = ref.current;

    const handleMouseDown = (event: any) => {
      setIsDragging(true);
      const { pageX, pageY } = event;
      const { offsetLeft, offsetTop } = element.offsetParent;
      const { offsetWidth, offsetHeight } = element;

      setPosition(() => ({
        x: pageX - offsetLeft - offsetWidth / 2,
        y: pageY - offsetTop - offsetHeight / 2,
      }));
    };

    const handleMouseMove = (event: any) => {
      if (isDragging) {
        const { pageX, pageY } = event;
        const { offsetLeft, offsetTop } = element.offsetParent;
        const { offsetWidth, offsetHeight } = element;

        setPosition(() => ({
          x: pageX - offsetLeft - offsetWidth / 2,
          y: pageY - offsetTop - offsetHeight / 2,
        }));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (element) {
      element.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousedown", handleMouseDown);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return { ref, isDragging, position };
};

export default useDraggable;
