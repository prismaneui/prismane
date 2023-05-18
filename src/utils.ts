export const isObject = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};

export const mergeDeep: any = (target: any, ...sources: any) => {
  if (!sources.length) return target;

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key],
        });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

export const strip = (s: string) => {
  return s.replace(/\s+/g, " ").trim();
};

export const variants = (
  s: any,
  st: {
    [key: string]: any;
  }
): any => {
  return st[s];
};

export const dual = (
  s: any,
  st: {
    [key: string]: any;
  }
) => {
  const result = parse(s, (v: any) => {
    if (st.hasOwnProperty(v as string)) {
      return variants(v as string, st);
    } else {
      return v;
    }
  });

  return result;
};

export const parse: any = (v: any, cb: Function) => {
  if (
    Array.isArray(v) &&
    v.length === 2 &&
    typeof v[0] !== "undefined" &&
    typeof v[1] === "object" &&
    v[1] !== null
  ) {
    v[0] = cb(v[0]);

    Object.keys(v[1]).forEach((pseudo) => {
      v[1][pseudo] = cb(v[1][pseudo]);
    });

    return v;
  } else {
    return cb(v);
  }
};

export const fr = (s: string | number) => {
  if (typeof s === "number") {
    return s / 4 + "rem";
  }

  return s;
};

export const splitProps = (props: any, keysToExtract: string[]) => {
  const extracted: any = {};
  const rest: any = {};

  Object.entries(props).forEach(([key, value]) => {
    if (keysToExtract.includes(key)) {
      extracted[key] = value;
    } else {
      rest[key] = value;
    }
  });

  return [rest, extracted];
};
