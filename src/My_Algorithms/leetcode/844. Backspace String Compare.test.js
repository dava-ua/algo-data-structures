// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  let res1 = '';
  let res2 = '';

  for (let i = 0; i < s.length; i += 1) {
    res1 = (s[i] === '#') ? res1.slice(0, -1) : res1.concat(s[i]);
  }

  for (let i = 0; i < t.length; i += 1) {
    res2 = (t[i] === '#') ? res2.slice(0, -1) : res2.concat(t[i]);
  }

  return res1 === res2;
};

test('backspaceCompare', () => {
  expect(backspaceCompare('ab#c', 'ad#c')).toBeTruthy(); // ac;
  expect(backspaceCompare('ab##', 'c#d#')).toBeTruthy();
  expect(backspaceCompare('a#c', 'b')).toBeFalsy();
});
