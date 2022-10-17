// https://leetcode.com/problems/car-fleet/

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet_my_incomplete = function (target, position, speed) {
  let finished = 0;

  while (Math.min(...position) < target) {
    const map = {};
    for (let i = 0; i < position.length; i += 1) {
      position[i] += speed[i];
      if (position[i] > target) {
        finished += 1;
        position.splice(i, 1);
        speed.splice(i, 1);
        i -= 1;
      } else {
        if (!map[position[i]]) {
          map[position[i]] = speed[i];
        } else {
          map[position[i]] = Math.min(speed[i], +map[position[i]]);
        }
      }
    }

    position = Object.keys(map).map((n) => +n);
    speed = Object.values(map);

    if (position.length === 1) break;
  }

  return position.length + finished;
};

const carFleet = function (target, position, speed) {
  const tuples = position.map((pos, idx) => { return [pos, (target - pos) / speed[idx]]; });
  tuples.sort((a, b) => a[0] - b[0]);
  const stack = [];

  const peek = () => {
    return stack[stack.length - 1][1];
  };

  tuples.forEach((t) => {
    while (stack.length && peek() <= t[1]) {
      stack.pop();
    }

    stack.push(t);
  });

  return stack.length;
};

test('dailyTemperatures', () => {
  expect(carFleet(20, [6, 2, 17], [3, 9, 2])).toBe(2);
  expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
  expect(carFleet(10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4])).toBe(6);
  expect(carFleet(100, [0, 2, 4], [4, 2, 1])).toBe(1);
  expect(carFleet(10, [6, 8], [3, 2])).toBe(2);
});
