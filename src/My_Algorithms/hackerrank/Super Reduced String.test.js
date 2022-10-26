// https://www.hackerrank.com/challenges/reduced-string/problem

/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === s[i + 1]) {
      s = s.replace(s[i].repeat(2), '');
      i -= 2;
      if (!s.length) return 'Empty String';
    }
  }
  return s;
}

test('superReducedString', () => {
  expect(superReducedString('baab')).toBe('');
  expect(superReducedString('aa')).toBe('');
  expect(superReducedString('aab')).toBe('b');
  expect(superReducedString('abba')).toBe('');
  expect(superReducedString('aaabccddd')).toBe('abd');
});
