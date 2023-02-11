// https://bigfrontend.dev/problem/implement-Array-prototype.flat
const flat = (arr, depth = 1) => {
  if (!arr.length) { return []; }
  if (depth < 1) { return arr; }

  return arr.reduce((acc, curr) => [...acc, ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr])], []);
};

describe('3. implement Array.prototype.flat()', () => {
  it('should return flattened array', () => {
    const arr = [1, [2], [3, [4]]];
    const arr1 = [1, [2], [3, [4]], [5, [6, [7]]]];

    expect(flat(arr)).toStrictEqual([1, 2, 3, [4]]);
    expect(flat(arr, 1)).toStrictEqual([1, 2, 3, [4]]);
    expect(flat(arr, 2)).toStrictEqual([1, 2, 3, 4]);
    expect(flat(arr, 0)).toStrictEqual(arr);
    expect(flat(arr, -4)).toStrictEqual(arr);
    expect(flat(arr1, 3)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
