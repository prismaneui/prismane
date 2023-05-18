const useEmulatedFieldChange = (ref: any, change: Function) => {
  const emulateChange = (value: any) => {
    if (ref.current) {
      const event = new Event("input", { bubbles: true });

      Object.defineProperty(event, "target", {
        value: ref.current,
        writable: false,
      });

      ref.current.value = value;

      change(event);
    }
  };

  return emulateChange;
};

export default useEmulatedFieldChange;
