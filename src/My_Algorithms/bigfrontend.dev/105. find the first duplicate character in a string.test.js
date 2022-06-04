// https://bigfrontend.dev/problem/find-the-first-duplicate-character-in-a-string

/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const obj = new Set();

  for (const l of str) {
    if (obj.has(l)) return l;
    obj.add(l);
  }

  return null;
}

test('findTwo', () => {
  expect(firstDuplicate('abachr')).toBe('a');
  expect(firstDuplicate('abca')).toBe('a');
  expect(firstDuplicate('abcdefe')).toBe('e');
  expect(firstDuplicate('abcdef')).toBe(null);
});
