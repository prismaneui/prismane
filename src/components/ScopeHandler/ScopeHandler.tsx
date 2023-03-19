import { useEffect, useRef, FC, RefObject } from "react";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface ScopeHandlerProps extends PrismaneComponent {
  onEvent: Function;
}

const ScopeHandler: FC<ScopeHandlerProps> = ({
  children,
  onEvent,
  className,
  ...props
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
      className={strip(
        `z-10 w-fit h-fit ${className ? className : ""} PrsmScopeHandler-root`
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScopeHandler;
