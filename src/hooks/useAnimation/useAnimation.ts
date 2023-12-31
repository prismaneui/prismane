import { useState } from "react";

const useAnimation = (
  initial = false,
  duration = 150,
  timing = "ease-in-out"
) => {
  const [animating, setAnimating] = useState(initial);

  const animate = () => {
    setAnimating(!animating);
  };

  return { animating, animate, duration, timing };
};

export default useAnimation;
