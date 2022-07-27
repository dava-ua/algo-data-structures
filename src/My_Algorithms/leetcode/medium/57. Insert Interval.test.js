// https://leetcode.com/problems/insert-interval/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
  let left = newInterval[0];
  let right = newInterval[1];
  let newCell = [];
  const res = [];

  if (!intervals.length) return [newInterval];
  if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals];

  const merge = (arr1, arr2) => [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];

  for (let i = 0; i < intervals.length; i += 1) {
    if (!newInterval) {
      res.push(intervals[i]);
      continue;
    }

    if (intervals[i][1] < left) {
      res.push(intervals[i]);
      continue;
    }

    if (right < intervals[i][0]) {
      res.push(newInterval);
      newInterval = null;
      i -= 1;
      continue;
    }

    while (right >= intervals[i][0]) {
      newCell = merge(intervals[i], [left, right]);
      [left, right] = [...newCell];
      i += 1;
      if (i >= intervals.length) break;
    }
    i -= 1;
    newInterval = null;
    res.push(newCell);
  }

  if (newInterval !== null) res.push(newInterval);
  return res;
};

test('insert', () => {
  expect(insert([], [5, 7])).toStrictEqual([[5, 7]]);
  expect(insert([[1, 5]], [2, 3])).toStrictEqual([[1, 5]]);
  expect(insert([[1, 5]], [6, 8])).toStrictEqual([[1, 5], [6, 8]]);
  expect(insert([[3, 5], [12, 15]], [6, 6])).toStrictEqual([[3, 5], [6, 6], [12, 15]]);
  expect(insert([[3, 5], [6, 9]], [1, 2])).toStrictEqual([[1, 2], [3, 5], [6, 9]]);
  expect(insert([[1, 3], [6, 9]], [2, 5])).toStrictEqual([[1, 5], [6, 9]]);
  expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
    .toStrictEqual([[1, 2], [3, 10], [12, 16]]);
});
