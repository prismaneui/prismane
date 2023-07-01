import { useState, useEffect } from "react";

const useLocalStorage = (key: string, dv: any) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : dv;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue = (nv: any) => {
    const updatedValue = typeof nv === "function" ? nv(value) : nv;
    setValue(updatedValue);
  };

  return [value, updateValue];
};

export default useLocalStorage;
