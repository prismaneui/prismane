// Utils
import { object } from "./object";

export const merge: any = (target: any, ...sources: any) => {
  if (!sources.length) return target;

  const source = sources.shift();

  if (object(target) && object(source)) {
    for (const key in source) {
      if (object(source[key])) {
        if (!target[key]) {
          target[key] = {};
        }
        merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return merge(target, ...sources);
};
