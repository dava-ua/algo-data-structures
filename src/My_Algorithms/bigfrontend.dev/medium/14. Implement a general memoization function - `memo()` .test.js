// https://bigfrontend.dev/problem/implement-general-memoization-function

/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver = (...args) => args.join('_')) {
  const cache = new Map();

  return function (...args) {
    const cacheKey = resolver(args);
    if (cache.get(cacheKey)) {
      return cache.get(cacheKey);
    }

    const value = func.apply(this, args);
    cache.set(resolver(args), value);
    return value;
  };
}

describe('memo', () => {
  test('memo 1', () => {
    const func = (a, b) => a + b;
    const memoed = memo(func);
    expect(memoed(1, 2)).toBe(3);
  });

  test('memo 2', () => {
    function funcThis(b) {
      return `${this.a}_${b}`;
    }
    const memoed = memo(funcThis);
    const a = {
      a: 1,
      memoed,
    };
    expect(a.memoed(2)).toBe('1_2');
  });

  test('memo 3', () => {
    let callCount = 0;
    const func = (a, b) => {
      callCount += 1;
      return a + b;
    };
    const memoed = memo(func);

    memoed(1, 2);
    expect(callCount).toBe(1);
    memoed(1, 2);
    expect(callCount).toBe(1);
    memoed(1, 3);
    expect(callCount).toBe(2);
  });
});
