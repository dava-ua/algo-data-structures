// https://bigfrontend.dev/problem/implement-curry

export const curry = (fn) => {
  return function curryInner(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => curryInner(...args, ...args2);
  };
};

describe('implement a curry() function, which accepts a function and return a curried one.', () => {
  it('should return curried func result', () => {
    const join = (a, b, c) => {
      return `${a}_${b}_${c}`;
    };

    const curriedJoin = curry(join);

    expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
    expect(curriedJoin(1)(2, 3)).toBe('1_2_3');
    expect(curriedJoin(1, 2)(3)).toBe('1_2_3');
  });
});
