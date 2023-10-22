import { useState, useEffect } from "react";

type useSortingOptions = {
  resetDirectionOnKeyChange?: boolean;
};

const useSorting = (
  data: any[],
  initialKey: string | null = null,
  initialDirection: "asc" | "desc" = "asc",
  options: useSortingOptions = {
    resetDirectionOnKeyChange: true,
  }
) => {
  const [sorted, setSorted] = useState(data);
  const [key, setKey] = useState<string | null>(initialKey);
  const [direction, setDirection] = useState(initialDirection);

  const toggleDirection = () => {
    setDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  useEffect(() => {
    if (options.resetDirectionOnKeyChange) {
      setDirection("asc");
    }
  }, [key]);

  useEffect(() => {
    if (key !== null) {
      const sortedData = [...sorted].sort((a, b) => {
        const first = a[key];
        const second = b[key];

        if (first < second) {
          return direction === "asc" ? -1 : 1;
        }

        if (first > second) {
          return direction === "asc" ? 1 : -1;
        }

        return 0;
      });

      setSorted(sortedData);
    }
  }, [data]);

  return {
    sorted,
    key,
    direction,
    setKey,
    setDirection,
    toggleDirection,
  };
};

export default useSorting;
