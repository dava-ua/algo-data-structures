// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  const s1Map = {};
  for (let i = 0; i < s1.length; i += 1) {
    s1Map[s1[i]] = s1Map[s1[i]] + 1 || 1;
  }

  const match = (j) => {
    const s1MapClone = { ...s1Map };
    for (let i = j; i < j + s1.length; i += 1) {
      if (s1MapClone[s2[i]] > 0) {
        s1MapClone[s2[i]] = s1MapClone[s2[i]] - 1;
      }
      if (s1MapClone[s2[i]] === 0) {
        delete s1MapClone[s2[i]];
      }
    }
    return !Object.keys(s1MapClone).length;
  };

  for (let i = 0; i < s2.length; i += 1) {
    if (s1Map[s2[i]] && (s2.length - i) >= s1.length && match(i)) {
      return true;
    }
  }
  return false;
};

const checkInclusion_LC = function (s1, s2) {
  const len1 = s1.length; const
    len2 = s2.length;
  if (len1 > len2) return false;

  const count = Array(26).fill(0);
  for (let i = 0; i < len1; i += 1) {
    count[s1.charCodeAt(i) - 97] += 1;
    count[s2.charCodeAt(i) - 97] -= 1;
  }

  if (count.every((i) => i === 0)) return true;

  for (let i = len1; i < len2; i += 1) {
    count[s2.charCodeAt(i) - 97] -= 1;
    count[s2.charCodeAt(i - len1) - 97] += 1;
    if (count.every((e) => e === 0)) return true;
  }
  return false;
};

test('checkInclusion', () => {
  expect(checkInclusion('ab', 'ab')).toBeTruthy();
  expect(checkInclusion('adc', 'dcda')).toBeTruthy();
  expect(checkInclusion('ab', 'eidbaooo')).toBeTruthy();
  expect(checkInclusion('ab', 'eidboaoo')).toBeFalsy();
});
