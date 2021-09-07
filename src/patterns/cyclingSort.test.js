// https://www.youtube.com/watch?v=TLiWieBQwUs
// https://big-o.io/algorithms/comparison/cycle-sort/
// https://www.geeksforgeeks.org/cycle-sort/

function simpleCyclingSort(arr) {
  let i = 0;
  while (i < arr.length) {
    const toSort = arr[i];
    const indexToSwap = toSort - 1;

    if (toSort !== arr[indexToSwap]) {
      [arr[i], arr[indexToSwap]] = [arr[indexToSwap], arr[i]];
    } else {
      i += 1;
    }
  }

  return arr;
}

describe('simpleCyclingSort', () => {
  it('should return correct result simpleCyclingSort', () => {
    expect(simpleCyclingSort(([3, 1, 5, 4, 2]))).toStrictEqual([1, 2, 3, 4, 5]);
    expect(simpleCyclingSort(([6, 1, 5, 4, 2, 3]))).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
