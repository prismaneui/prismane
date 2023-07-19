import { useEffect, useRef, useCallback } from "react";

const useKeyboardShortcut = (
  keys: string[],
  cb: Function,
  shouldRegister: boolean = true
) => {
  const pressedKeysRef = useRef<string[]>([]);

  const handleKeyDown = useCallback(
    (event: any) => {
      if (pressedKeysRef.current.includes(event.key.toLowerCase())) {
        return;
      }

      const np = [...pressedKeysRef.current, event.key.toLowerCase()];

      pressedKeysRef.current = np;

      if (
        pressedKeysRef.current.length === keys.length &&
        keys.every((key) =>
          pressedKeysRef.current.includes(key.toLowerCase())
        ) &&
        shouldRegister
      ) {
        event.preventDefault();

        cb();
      }
    },
    [cb, keys, shouldRegister]
  );

  const handleKeyUp = useCallback((event: any) => {
    const np = pressedKeysRef.current.filter(
      (key: any) => key !== event.key.toLowerCase()
    );
    pressedKeysRef.current = np;
  }, []);

  const handleResetPressedKeys = useCallback(() => {
    pressedKeysRef.current = [];
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("blur", handleResetPressedKeys);
    document.addEventListener("focus", handleResetPressedKeys);
    document.addEventListener("beforeunload", handleResetPressedKeys);
    document.addEventListener("unload", handleResetPressedKeys);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("blur", handleResetPressedKeys);
      document.removeEventListener("focus", handleResetPressedKeys);
      document.removeEventListener("beforeunload", handleResetPressedKeys);
      document.removeEventListener("unload", handleResetPressedKeys);
    };
  }, [shouldRegister, handleKeyDown, handleKeyUp, handleResetPressedKeys]);
};

export default useKeyboardShortcut;
