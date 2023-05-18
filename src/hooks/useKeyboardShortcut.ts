import { useEffect, useState } from "react";

const useKeyboardShortcut = (
  keys: string[],
  cb: Function,
  shouldRegister: boolean = true
) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  const handleKeyDown = (event: any) => {
    const np = pressedKeys.slice();

    np.push(event.key.toLowerCase());

    setPressedKeys(np);

    if (
      np.length === keys.length &&
      keys.every((key) => np.includes(key.toLowerCase())) &&
      shouldRegister
    ) {
      event.preventDefault();

      cb();
    }
  };

  const handleKeyUp = (event: any) => {
    const np = pressedKeys.slice();

    setPressedKeys(np.filter((key) => key !== event.key.toLowerCase()));
  };

  const handleResetPressedKeys = () => {
    setPressedKeys([]);
  };

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
  }, [shouldRegister]);
};

export default useKeyboardShortcut;
