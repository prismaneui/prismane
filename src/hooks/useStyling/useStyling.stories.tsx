import { useState } from "react";
import useStyling from "./useStyling";

export default {
  title: "useStyling",
  component: useStyling,
};

export const Default = () => {
  const [padding, setPadding] = useState("20px");

  setTimeout(() => {
    setPadding("40px");
  }, 2000);

  const styles = useStyling({
    padding: padding,
    width: "40px",
    height: "120px",
    backgroundColor: "#1e1e1e",
  });

  return <div className={`${styles.join(" ")}`} />;
};
