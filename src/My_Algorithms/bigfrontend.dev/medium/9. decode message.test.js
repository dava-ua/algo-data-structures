// https://bigfrontend.dev/problem/decode-message

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  if (!message.length) return '';
  let res = '';

  for (let row = 0, col = 0; col < message[0].length; row += 1, col += 1) {
    if (row >= message.length) {
      row -= 2;
    }
    res = res.concat(message[row][col]);
  }

  return res;
}

test('uncompress', () => {
  expect(decode([
    ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D'],
  ])).toBe('IROCLED');
  expect(decode([])).toBe('');
});
