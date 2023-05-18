import { useEffect, useState } from "react";

const useDraggable = (el: any) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = (event: any) => {
      setIsDragging(true);
      setPosition({
        x: event.clientX - el.current.offsetLeft,
        y: event.clientY - el.current.offsetTop,
      });
    };

    const handleMouseMove = (event: any) => {
      if (isDragging) {
        setPosition({
          x: event.clientX - el.current.offsetLeft,
          y: event.clientY - el.current.offsetTop,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    el.current.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      el.current.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [el, isDragging]);

  return { isDragging, position };
};

export default useDraggable;
