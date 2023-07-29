import { useState, useEffect } from "react";

const useDimensions = (ref: any) => {
  const [dimensions, setDimensions] = useState<any>(null);

  useEffect(() => {
    const updateDimensions = () => {
      setTimeout(() => {
        const rect = ref.current.getBoundingClientRect();
        const { top, right, bottom, left, width, height } = rect;

        const x = rect.left;
        const y = rect.top;

        const center = {
          x: left + width / 2,
          y: top + height / 2,
        };

        const margin = {
          top: parseInt(window.getComputedStyle(ref.current).marginTop, 10),
          right: parseInt(window.getComputedStyle(ref.current).marginRight, 10),
          bottom: parseInt(
            window.getComputedStyle(ref.current).marginBottom,
            10
          ),
          left: parseInt(window.getComputedStyle(ref.current).marginLeft, 10),
        };

        const padding = {
          top: parseInt(window.getComputedStyle(ref.current).paddingTop, 10),
          right: parseInt(
            window.getComputedStyle(ref.current).paddingRight,
            10
          ),
          bottom: parseInt(
            window.getComputedStyle(ref.current).paddingBottom,
            10
          ),
          left: parseInt(window.getComputedStyle(ref.current).paddingLeft, 10),
        };

        const border = {
          top: parseInt(
            window.getComputedStyle(ref.current).borderTopWidth,
            10
          ),
          right: parseInt(
            window.getComputedStyle(ref.current).borderRightWidth,
            10
          ),
          bottom: parseInt(
            window.getComputedStyle(ref.current).borderBottomWidth,
            10
          ),
          left: parseInt(
            window.getComputedStyle(ref.current).borderLeftWidth,
            10
          ),
        };

        const contentBox = {
          top,
          right,
          bottom,
          left,
          width,
          height,
          x,
          y,
          center,
          margin,
          padding,
          border,
        };

        contentBox.width -=
          padding.left + padding.right + border.left + border.right;
        contentBox.height -=
          padding.top + padding.bottom + border.top + border.bottom;
        contentBox.x += padding.left + border.left;
        contentBox.y += padding.top + border.top;

        setDimensions(contentBox);
      }, 0);
    };

    if (ref.current) {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [ref]);

  return dimensions;
};

export default useDimensions;
