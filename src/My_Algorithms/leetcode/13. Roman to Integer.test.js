// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const map = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };
  let num = 0;

  for (let i = 0; i < s.length; i += 1) {
    const curr = map[s[i]];
    const next = map[s[i + 1]];
    if (curr < next) num -= curr;
    else num += curr;
  }
  return num;
};

test('romanToInt', () => {
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('LVIII')).toBe(58);
  expect(romanToInt('MCMXCIV')).toBe(1994);
});
