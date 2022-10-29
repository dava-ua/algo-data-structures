// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap_my = function (height) {
  let bucketsArea = 0;
  let l = 0;
  let r = 0;

  const fillBucket = () => {
    let area = 0;

    // go to first left edge where can start fulfilling
    while (height[l] <= height[l + 1]) {
      l += 1;
    }
    const nextRightEdge = height.slice(l + 1).length > 1 ? Math.max(...height.slice(l + 1)) : 0;
    const hasEdge = () => height[l] <= nextRightEdge;
    if (height[l] > nextRightEdge) {
      height[l] = nextRightEdge;
    }
    while (l < height.length && !hasEdge()) {
      l += 1;
    }
    r = l + 1;

    if (!hasEdge()) {
      return 0;
    }

    while (height[l] >= height[r] && height[r] !== nextRightEdge) {
      area += height[l] - height[r];
      r += 1;
    }
    l = r;
    r = l + 1;
    return area;
  };

  while (r < height.length) {
    bucketsArea += fillBucket();
  }

  return bucketsArea;
};

// official
// https://leetcode.com/problems/trapping-rain-water/solutions/127551/trapping-rain-water/?orderBy=most_votes
function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let bucketsArea = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        bucketsArea += (leftMax - height[left]);
      }
      left += 1;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        bucketsArea += (rightMax - height[right]);
      }
      right -= 1;
    }
  }
  return bucketsArea;
}

test('trap', () => {
  expect(trap([4, 2, 3])).toBe(1);
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
});
