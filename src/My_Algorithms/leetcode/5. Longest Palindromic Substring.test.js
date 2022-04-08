// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let max = '';
  for (let i = 0; i < s.length; i += 1) {
    // this loop is to take into account
    // different palindromes like 'aba' and 'abba'
    for (let j = 0; j < 2; j += 1) {
      let left = i;
      let right = i + j;
      while (s[left] && s[left] === s[right]) {
        left -= 1;
        right += 1;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

test('longestPalindrome', () => {
  expect(longestPalindrome('sabbad')).toBe('abba');
  expect(longestPalindrome('babad')).toBe('bab');
  expect(longestPalindrome('cbbd')).toBe('bb');
});
