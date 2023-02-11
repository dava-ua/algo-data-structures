// https://bigfrontend.dev/problem/implement-curry

const curry1 = (fn) => {
  return function curryInner(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => curryInner(...args, ...args2);
  };
};

const curry = (fn) => {
  return function curryInner(...args) {
    if (args.length >= fn.length) {
    return fn.apply(this, args);
  }
  return curryInner.bind(this, ...args);
    
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
