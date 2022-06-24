// https://leetcode.com/problems/first-bad-version/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // binary search
    let start = 1;
    let end = n;
    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid; // look on left side of mid
      } else {
        start = mid + 1; // look on the right side of mid
      }
    }
    return start;
  };
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution2 = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;

    while (right - left !== 1) {
      const mid = parseInt((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return right;
  };
};
