// https://skine.ru/articles/38898/
// https://gist.github.com/lqt0223/21f033450a9d762ce8aee4da336363b1

// O(n'2)
const CAPACITY = 5;
const ITEMS = [[5, 2], [2, 3], [6, 5]];

function knapsackProblem(items, capacity) {
  const maxTotals = [];

  for (let i = 0; i < items.length + 1; i += 1) {
    const row = new Array(capacity + 1).fill(0);
    maxTotals.push(row);
  }

  for (let i = 1; i < items.length + 1; i += 1) {
    const currentValue = items[i - 1][0];
    const currentWeight = items[i - 1][1];

    for (let j = 0; j < capacity + 1; j += 1) {
      if (currentWeight > j) {
        maxTotals[i][j] = maxTotals[i - 1][j];
      } else {
        maxTotals[i][j] = Math.max(
          maxTotals[i - 1][j],
          maxTotals[i - 1][j - currentWeight] + currentValue,
        );
      }
    }
  }

  return maxTotals[items.length][capacity];
}

describe('Knapsack', () => {
  it('should return correct max fit', () => {
    expect(knapsackProblem(ITEMS, CAPACITY)).toEqual(7);
  });
});
