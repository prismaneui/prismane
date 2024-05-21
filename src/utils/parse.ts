export const parse: any = (v: any, cb: (value: any) => any) => {
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
