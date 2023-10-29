import { useState, useEffect } from "react";

const useSearch = <T>(initialData: T[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState<T[]>(initialData);

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    const filteredResults = initialData.filter((item) => {
      if (typeof item === "string" || typeof item === "number") {
        return item.toString().toLowerCase().includes(query);
      } else if (typeof item === "object") {
        for (const key in item) {
          const value = item[key];
          if (
            typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean"
          ) {
            if (value.toString().toLowerCase().includes(query)) {
              return true;
            }
          }
        }
      }
      return false;
    });

    setFiltered(filteredResults);
  }, [searchQuery, JSON.stringify(initialData)]);

  return { query: searchQuery, setQuery: setSearchQuery, filtered };
};

export default useSearch;
