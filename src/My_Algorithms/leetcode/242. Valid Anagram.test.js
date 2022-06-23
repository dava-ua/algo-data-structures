// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const store = new Map();
  for (let i = 0; i < s.length; i += 1) {
    store.set(s[i], store.has(s[i]) ? (store.get(s[i]) + 1) : 1);
  }

  for (let i = 0; i < t.length; i += 1) {
    if (store.has(t[i]) && store.get(t[i]) === 1) {
      store.delete(t[i]);
    } else if (store.get(t[i]) > 1) {
      store.set(t[i], store.get(t[i]) - 1);
    } else {
      return false;
    }
  }

  return true;
};

test('isAnagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
  expect(isAnagram('rat', 'car')).toBeFalsy();
});
