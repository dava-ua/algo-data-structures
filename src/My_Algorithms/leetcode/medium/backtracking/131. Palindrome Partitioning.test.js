// https://leetcode.com/problems/palindrome-partitioning/description/

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const result = [];

  const isPalindrom = (str) => {
    for (let i = 0; i < str.length / 2; i += 1) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
  };

  const dfs = (start, arr) => {
    if (start === s.length) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < s.length; i += 1) {
      const str = s.slice(start, i + 1);
      if (isPalindrom(str)) {
        dfs(i + 1, [...arr, str]);
      }
    }
  };

  dfs(0, []);
  return result;
};

test('partition', () => {
  expect(partition('aab')).toStrictEqual([['a', 'a', 'b'], ['aa', 'b']]);
});
