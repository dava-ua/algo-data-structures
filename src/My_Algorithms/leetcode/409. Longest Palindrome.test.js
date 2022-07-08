// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const letters = {};
  let count = 0;

  for (const i of s) {
    letters[i] = (letters[i] || 0) + 1;
  }

  for (const i in letters) {
    if (letters[i] % 2 === 0) {
      count += letters[i];
    } else {
      count += letters[i] - 1;
    }
  }

  return (s.length > count) ? count + 1 : count;
};

test('longestPalindrome', () => {
  expect(longestPalindrome('abccccdd')).toBe(7);
  expect(longestPalindrome('ccc')).toBe(3);
  expect(longestPalindrome('bb')).toBe(2);
});
