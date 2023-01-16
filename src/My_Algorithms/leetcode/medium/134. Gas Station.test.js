// https://leetcode.com/problems/gas-station/

// https://leetcode.com/problems/gas-station/solutions/3016104/chatgpt-optimal-solution-with-explanation-beats-95-easy-to-understand/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  let start = 0;
  let total = 0;
  let tank = 0;
  for (let i = 0; i < gas.length; i += 1) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total += tank;
      tank = 0;
    }
  }
  return total + tank < 0 ? -1 : start;
};

test('canCompleteCircuit', () => {
  expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
  expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
  expect(canCompleteCircuit([4, 5, 2, 6, 5, 3], [3, 2, 7, 3, 2, 9])).toBe(-1);
});
