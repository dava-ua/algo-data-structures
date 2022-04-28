// https://bigfrontend.dev/problem/lodash-set

/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */
function set(obj, path, value) {
  const arrPath = Array.isArray(path)
    ? path
    : path.replace('[', '.').replace(']', '').split('.');

  let currentRef = obj;

  arrPath.forEach((prop, i) => {
    if (i === arrPath.length - 1) { // if we're at the end, set the value
      currentRef[prop] = value;
    } else { // we're not at the end, set the ref
      if (!currentRef[prop]) { // the next path doesn't exist yet
        const nextPath = arrPath[i + 1];
        currentRef[prop] = String(Number(nextPath)) === nextPath // valid number ?
          ? [] // the next path is an array index
          : {}; // next path is anything but a valid number
      }
      currentRef = currentRef[prop];
    }
  });
}

describe('set', () => {
  test('set 1', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    set(obj, 'a.b.c', 'BFE');
    expect(obj).toEqual({ a: { b: { c: 'BFE' } } });
  });

  test('set 2', () => {
    const obj = {
      a: {
        b: {
          c: [1, 2, 3],
        },
      },
    };

    set(obj, 'a.b.c.0', 'BFE');
    expect(obj).toEqual({
      a: {
        b: {
          c: ['BFE', 2, 3],
        },
      },
    });
  });

  test('set 3', () => {
    const obj = {
      a: {
        b: {
          c: [1, 2, 3],
        },
      },
    };

    set(obj, 'a.b.c[1]', 'BFE');
    expect(obj).toEqual({
      a: {
        b: {
          c: [1, 'BFE', 3],
        },
      },
    });
  });

  test('set 4', () => {
    const obj = {
      a: {
        b: {
          c: [1, 2, 3],
        },
      },
    };

    set(obj, ['a', 'b', 'c', '2'], 'BFE');
    expect(obj).toEqual({
      a: {
        b: {
          c: [1, 2, 'BFE'],
        },
      },
    });
  });

  test('set 5', () => {
    const obj = {
      a: {
        b: {
          c: [1, 2, 3],
        },
      },
    };

    set(obj, ['a', 'b', 'c', '3'], 'BFE');
    expect(obj).toEqual({
      a: {
        b: {
          c: [1, 2, 3, 'BFE'],
        },
      },
    });
  });
});
