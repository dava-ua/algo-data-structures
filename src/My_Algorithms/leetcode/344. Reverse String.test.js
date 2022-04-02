// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
};

describe('reverseString', () => {
  test('reverseString', () => {
    const s = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
    expect(s).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
  });
  test('reverseString', () => {
    const s = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(s);
    expect(s).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
