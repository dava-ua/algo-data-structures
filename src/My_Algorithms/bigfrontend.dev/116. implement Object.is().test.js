// https://bigfrontend.dev/problem/implement-Object.is

/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  if (a !== a) {
    return b !== b;
  }

  if (a === 0 && b === 0) { // -0 === 0 is true, so when both parameters equals to 0
    return 1 / a === 1 / b; // 1 / -0 is -Infinity and -Infinity === -Infinity
  }

  return a === b; // All other cases with regular === comparison
}

test('is', () => {
  expect(is(0, -0)).toBeTruthy();
  expect(is(NaN, NaN)).toBeTruthy();
});
