// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let i = 0; i < magazine.length; i += 1) {
    if (!map[magazine[i]]) {
      map[magazine[i]] = 1;
    } else {
      map[magazine[i]] += 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    if (!map[ransomNote[i]]) {
      return false;
    }
    map[ransomNote[i]] -= 1;
  }

  return true;
};

test('canConstruct', () => {
  expect(canConstruct('aa', 'aab')).toBeTruthy();
  expect(canConstruct('aab', 'baa')).toBeTruthy();
});
