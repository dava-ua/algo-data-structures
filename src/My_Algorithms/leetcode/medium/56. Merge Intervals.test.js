// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i += 1) {
    if (prev[1] >= intervals[i][0]) {
      prev = [prev[0], Math.max(prev[1], intervals[i][1])];
    } else {
      result.push(prev);
      prev = intervals[i];
    }
  }

  result.push(prev);

  return result;
};

test('merge', () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]]);
  expect(merge([[1, 4], [4, 5]])).toStrictEqual([[1, 5]]);
});
