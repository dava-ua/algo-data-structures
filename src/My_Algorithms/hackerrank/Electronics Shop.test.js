// https://www.hackerrank.com/challenges/electronics-shop/

function getMoneySpent(keyboards, drives, b) {
  let max = -1;
  const sortedDrives = drives.sort();

  keyboards.sort().forEach((k) => {
    if (k >= b) {
      return;
    }
    sortedDrives.forEach((d) => {
      if (k + d <= b && k + d > max) {
        max = k + d;
      }
    });
  });

  return max;
}

test('getMoneySpent', () => {
  expect(getMoneySpent([40, 50, 60], [5, 8, 12], 60)).toBe(58);
});
