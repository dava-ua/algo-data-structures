// https://leetcode.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
// e.g. '226'
// dp =
// [1, 1, 0, 0]
// [1, 1, 2, 0]
// [1, 1, 2, 3]
//
// e.g. '236'
// dp =
// [1, 1, 0, 0]
// [1, 1, 2, 0]
// [1, 1, 2, 2]
//
// e.g. '101'
// dp =
// [1, 1, 0, 0]
// [1, 1, 1, 0]
// [1, 1, 1, 1]
//
// e.g. '110'
// dp =
// [1, 1, 0, 0]
// [1, 1, 2, 0]
// [1, 1, 2, 1]

function numDecodings(s) {
  if (s == null || s.length === 0) return 0;
  if (s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const a = Number(s.slice(i - 1, i)); // last one digit
    if (a >= 1 && a <= 9) {
      dp[i] += dp[i - 1];
    }

    const b = Number(s.slice(i - 2, i)); // last two digits
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}

test('numDecodings', () => {
  expect(numDecodings('12')).toBe(2);
  expect(numDecodings('226')).toBe(3);
  expect(numDecodings('06')).toBe(0);
});
