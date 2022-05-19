// https://bigfrontend.dev/problem/semver-compare

/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  v1 = v1.split('.').map((n) => parseInt(n, 10));
  v2 = v2.split('.').map((n) => parseInt(n, 10));
  for (let i = 0; i < 3; i += 1) {
    if (v1[i] > v2[i]) {
      return 1;
    } if (v1[i] < v2[i]) {
      return -1;
    }
  }
  return 0;
}

test('compare', () => {
  expect(compare('12.1.0', '12.0.9')).toBe(1);
  expect(compare('12.1.0', '12.1.2')).toBe(-1);
  expect(compare('5.0.1', '5.0.1')).toBe(0);
});
