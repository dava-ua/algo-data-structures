// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (!str.length) return true;
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start += 1;
    end -= 1;
  }

  return true;
};

test('isPalindrome', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  expect(isPalindrome('race a car')).toBeFalsy();
  expect(isPalindrome(' ')).toBeTruthy();
});
