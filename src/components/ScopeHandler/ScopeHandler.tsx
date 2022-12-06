import React, { useEffect, useRef, FC, RefObject } from "react";
// Types
import { PrismaneComponent } from "../../types";

export interface ScopeHandlerProps extends PrismaneComponent {
  onEvent: Function;
}

const ScopeHandler: FC<ScopeHandlerProps> = ({
  children,
  onEvent,
  className,
  style,
}) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const handleEvent = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      onEvent();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleEvent);

    document.addEventListener("escape", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("escape", handleEvent);
    };
  });

  return (
    <div
      ref={ref}
      className={`z-10 w-fit h-fit ${className ? className : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScopeHandler;
