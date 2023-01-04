import { useState } from "react";

const useAnimation = (length: string) => {
  const duration = Number(
    getComputedStyle(document.documentElement)
      .getPropertyValue(`--prismane-animation-duration-${length}`)
      .split("ms")[0]
  );

  const [alternate, setAlternate] = useState(false);

  return { alternate, setAlternate, duration };
};

export default useAnimation;
