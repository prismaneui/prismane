import { useState, useCallback } from "react";

type MemoizationCache = Map<string, any>;

type MemoizeFunction = (
  fn: (pk: any, pv: any) => any,
  vl?: (cachedValue: any, pv: any) => boolean
) => (pk: any, pv: any) => any;

type ClearFunction = () => void;

type ValueFunction = (k: string) => any;

type MemoizationHook = {
  memoize: MemoizeFunction;
  clear: ClearFunction;
  value: ValueFunction;
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
            ? vl(cache.get(key), pv)
            : JSON.stringify(pv) === JSON.stringify(cache.get(key)))
        ) {
          return cache.get(key);
        }

        const result = fn(pk, pv);

        cache.set(key, result);

        return result;
      };
    },
    [cache]
  );

  const clear: ClearFunction = useCallback(() => {
    setCache(new Map());
  }, []);

  const value: ValueFunction = useCallback(
    (k: string) => {
      return cache.get(JSON.stringify(k));
    },
    [cache]
  );

  return { memoize, clear, value };
};

export default useMemoization;
