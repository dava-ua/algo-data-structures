// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} str
 * @return {boolean}
 */
const isValid = function (str) {
  const expectedCloses = [];
  const openSymbol = ['(', '[', '{'];
  const closeSymbol = [')', ']', '}'];

  if (str.length % 2 !== 0) {
    return false;
  }
  if (closeSymbol.indexOf(str[0]) > -1) {
    return false;
  }
  if (openSymbol.indexOf(str[str.length - 1]) > -1) {
    return false;
  }

  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case '(':
        expectedCloses.push(')');
        break;
      case '{':
        expectedCloses.push('}');
        break;
      case '[':
        expectedCloses.push(']');
        break;
      default: {
        if (expectedCloses.pop() !== str[i]) {
          return false;
        }
      }
    }
  }
  // Return based on whether or not anything remains
  // (indicates that there were incorrect brackets)
  return !expectedCloses.length;
};

test('isValid', () => {
  expect(isValid('()')).toBeTruthy();
  expect(isValid('()[]{}')).toBeTruthy();
  expect(isValid('(]')).toBeFalsy();
});


/* most voted solution */
const isValid = function(s) {
  const stack = [];

  for (let i = 0 ; i < s.length ; i++) {
    let c = s.charAt(i);
    switch(c) {
      case '(': stack.push(')');
        break;
      case '[': stack.push(']');
        break;
      case '{': stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
