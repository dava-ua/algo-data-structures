// https://bigfrontend.dev/problem/uncompress-string

/**
 * @param {string} str
 * @returns {string}
 */
function uncompress(str) {
  const arr = [];
  let key;
  let end = str.indexOf(')');

  for (let i = end; i >= 0; i -= 1) {
    if (str[i] === '(') {
      key = str.substring(i + 1, end);
      end = i - 1;
    }
    if (Number.isInteger(+str[i])) {
      const obj = {};
      obj[key] = +str[i];
      arr.push(obj);
    }
  }

  return arr.reduce(
    (prev, curr) => {
      const [s, val] = Object.entries(curr)[0];
      return s.concat(prev).repeat(val);
    },
    '',
  );
}

test('uncompress', () => {
  expect(uncompress('3(ab)')).toBe('ababab');
  expect(uncompress('3(ab2(c))')).toBe('abccabccabcc');
  expect(uncompress('2(ff3(ab2(c)))')).toBe('ffabccabccabccffabccabccabcc');
});

// solutions from the site with additional hidden test that I didn't implement
// stack solution
const isNumeric = (str) => !Number.isNaN(parseFloat(str)) && Number.isFinite(Number(str));

function uncompress_stack(str) {
  const stack = [];

  for (const char of str) {
    if (char !== ')') {
      stack.push(char);
    } else {
      let word = '';
      let count = '';

      // find string
      while (stack.length && stack[stack.length - 1] !== '(') {
        word = stack.pop() + word;
      }
      stack.pop();

      // find repetitions
      while (stack.length && isNumeric(stack[stack.length - 1])) {
        count = stack.pop() + count;
      }
      stack.push(word.repeat(Number(count)));
    }
  }
  return stack.join('');
}

test('uncompress_stack', () => {
  expect(uncompress_stack('BFE')).toBe('BFE');
  expect(uncompress_stack('2(BFE)3(dev)')).toBe('BFEBFEdevdevdev');
  expect(uncompress_stack('2(BFE1(dev))3(2(lover))')).toBe('BFEdevBFEdevloverloverloverloverloverlover');
  expect(uncompress_stack('3(ab)')).toBe('ababab');
  expect(uncompress_stack('3(ab2(c))')).toBe('abccabccabcc');
  expect(uncompress_stack('2(ff3(ab2(c)))')).toBe('ffabccabccabccffabccabccabcc');
});
