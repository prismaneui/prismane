import { useState, useEffect } from "react";

const useDimensions = (ref: any) => {
  const [dimensions, setDimensions] = useState<any>(null);

  useEffect(() => {
    const updateDimensions = () => {
      const rect = ref.current.getBoundingClientRect();
      const { top, right, bottom, left, width, height } = rect;

      const x = rect.left;
      const y = rect.top;

      const center = {
        x: left + width / 2,
        y: top + height / 2,
      };

      const marginBox: any = {
        top,
        right,
        bottom,
        left,
        width,
        height,
        x,
        y,
        center,
      };
      const borderBox = { ...marginBox };
      const paddingBox = { ...marginBox };
      const contentBox = { ...marginBox };

      const style = window.getComputedStyle(ref.current);
      const margin = {
        top: parseInt(style.marginTop, 10),
        right: parseInt(style.marginRight, 10),
        bottom: parseInt(style.marginBottom, 10),
        left: parseInt(style.marginLeft, 10),
      };
      const padding = {
        top: parseInt(style.paddingTop, 10),
        right: parseInt(style.paddingRight, 10),
        bottom: parseInt(style.paddingBottom, 10),
        left: parseInt(style.paddingLeft, 10),
      };
      const border = {
        top: parseInt(style.borderTopWidth, 10),
        right: parseInt(style.borderRightWidth, 10),
        bottom: parseInt(style.borderBottomWidth, 10),
        left: parseInt(style.borderLeftWidth, 10),
      };

      marginBox.margin = margin;
      borderBox.border = border;
      paddingBox.padding = padding;
      contentBox.width -=
        padding.left + padding.right + border.left + border.right;
      contentBox.height -=
        padding.top + padding.bottom + border.top + border.bottom;
      contentBox.x += padding.left + border.left;
      contentBox.y += padding.top + border.top;

      setDimensions({ marginBox, borderBox, paddingBox, contentBox });
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
