import { useEffect, useState } from "react";

const useId = () => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(Math.random().toString(16).slice(2));
  }, []);

  return id;
};

export default useId;
