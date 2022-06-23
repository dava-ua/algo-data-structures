// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
// my solution
const my_lengthOfLongestSubstring = (s) => {
  let res = '';
  let tmp = '';
  for (let l = 0; l < s.length; l += 1) {
    if (!tmp.includes(s.charAt(l))) {
      tmp = tmp.concat(s.charAt(l));
    } else {
      if (tmp.length > res.length) {
        res = tmp;
      }
      const prevOccurance = s.charAt(l);
      while (prevOccurance !== s.charAt(l - 1)) {
        l -= 1;
      }
      tmp = s.charAt(l);
    }
  }
  return res.length > tmp.length ? res.length : tmp.length;
};

// LC solution
function lengthOfLongestSubstring_1(s) {
  const map = {};
  let left = 0;

  return s.split('').reduce((max, char, index) => {
    // we stored the last seen index of this character in 'map'
    const lastSeenIndex = map[char];
    // if the Left Side pointer of the window is at or before the previous appearance of this character, the window must contain this character.
    const windowContainsCharacter = lastSeenIndex >= left;
    // we'll move the Left Side pointer to exclude the previous appearance of the character, if necessary.
    left = windowContainsCharacter ? lastSeenIndex + 1 : left;

    // store the last seen index of this character in 'map'
    map[char] = index;

    // get the size of the window, accounting for 0-based indexing
    const windowSize = index - left + 1;
    // return the biggest window size so far
    return Math.max(max, windowSize);
  }, 0);
}

const lengthOfLongestSubstring = (s) => {
  // keeps track of the most recent index of each letter.
  const seen = new Map();
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;

  for (let i = 0; i < s.length; i += 1) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start);
    seen.set(s[i], i);
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

test('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring(' ')).toBe(1);
  expect(lengthOfLongestSubstring('aab')).toBe(2);
  expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  expect(lengthOfLongestSubstring('anviaj')).toBe(5);
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});
