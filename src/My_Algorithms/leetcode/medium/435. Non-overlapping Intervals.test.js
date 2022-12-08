// https://leetcode.com/problems/non-overlapping-intervals/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
  // sort by earliest finish time
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0];
  let overlaps = 0;

  for (let i = 1; i < intervals.length; i += 1) {
    if (intervals[i][0] < prev[1]) overlaps += 1;
    else prev = intervals[i];
  }
  return overlaps;
};

test('eraseOverlapIntervals', () => {
  expect(eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]])).toBe(2);
  expect(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])).toBe(1);
  expect(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])).toBe(2);
});
