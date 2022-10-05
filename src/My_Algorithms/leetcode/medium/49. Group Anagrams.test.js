// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const anagramGroups = {};
  for (let i = 0; i < strs.length; i += 1) {
    const sortedStr = strs[i].split('').sort().join('');
    if (!anagramGroups[sortedStr]) {
      anagramGroups[sortedStr] = [strs[i]];
    } else {
      anagramGroups[sortedStr].push(strs[i]);
    }
  }

  return Object.values(anagramGroups);
};

test('groupAnagrams', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  expect(groupAnagrams([''])).toStrictEqual([['']]);
  expect(groupAnagrams(['a'])).toStrictEqual([['a']]);
});
