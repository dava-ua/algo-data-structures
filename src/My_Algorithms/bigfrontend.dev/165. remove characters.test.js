// https://bigfrontend.dev/problem/remove-characters

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  input = input.replaceAll('b', '');

  while (input.includes('ac')) {
    input = input.replaceAll('ac', '');
  }

  return input;
}

test('removeChars', () => {
  expect(removeChars('ab')).toBe('a');
  expect(removeChars('abc')).toBe('');
  expect(removeChars('cabbaabcca')).toBe('caa');
});
