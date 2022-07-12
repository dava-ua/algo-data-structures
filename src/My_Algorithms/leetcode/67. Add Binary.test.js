// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary_my = function (a, b) {
  const sum = parseInt(a, 2) + parseInt(b, 2);
  return (sum >>> 0).toString(2);
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
};

test('addBinary', () => {
  expect(addBinary('11', '1')).toBe('100');
  expect(addBinary('1010', '1011')).toBe('10101');
  expect(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'))
    .toBe('110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000');
});
