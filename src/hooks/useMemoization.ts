import { useState, useCallback } from "react";

type MemoizationCache = Map<string, any>;

type MemoizeFunction = (
  fn: (pk: any, pv: any) => any,
  vl?: (cachedValue: any, pv: any) => boolean
) => (pk: any, pv: any) => any;

type ClearFunction = () => void;

type MemoizationHook = {
  memoize: MemoizeFunction;
  clear: ClearFunction;
};

const useMemoization = (): MemoizationHook => {
  const [cache, setCache] = useState<MemoizationCache>(new Map());

  const memoize: MemoizeFunction = useCallback(
    (fn: any, vl?: any) => {
      return (pk: any, pv: any) => {
        const key = JSON.stringify(pk);

        if (
          cache.has(key) &&
          (typeof vl === "function"
            ? vl(cache.get(key).iv, pv)
            : JSON.stringify(pv) === JSON.stringify(cache.get(key).iv))
        ) {
          return cache.get(key).cv;
        }

        const result = fn(pk, pv);

        cache.set(key, { iv: pv, cv: result });

        return result;
      };
    },
    [cache]
  );

  const clear: ClearFunction = useCallback(() => {
    setCache(new Map());
  }, []);

  return { memoize, clear };
};

export default useMemoization;
