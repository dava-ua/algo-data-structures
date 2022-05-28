// https://bigfrontend.dev/problem/most-frequently-occurring-character

/**
 * @param {string} str
 * @returns {string | string[]}
 */

function count(str) {
  const count = {};
  for (const l of str) {
    count[l] = count[l] ? count[l] + 1 : 1;
  }

  let res = [];
  let max = 0;

  for (const [key, value] of Object.entries(count)) {
    if (value > max) {
      max = value;
      res = [key];
    } else if (value === max) {
      res.push(key);
    }
  }

  return res.length > 1 ? res : res[0];
}

test('count', () => {
  expect(count('abbccc')).toBe('c');
  expect(count('abbcccddd')).toStrictEqual(['c', 'd']);
});
