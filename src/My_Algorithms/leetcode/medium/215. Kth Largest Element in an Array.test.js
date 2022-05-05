// https://leetcode.com/problems/kth-largest-element-in-an-array/

class Heap {
  constructor(comp) {
    this.comp = comp;
    this.heap = [];
  }

  push(element) {
    this.heap.push(element);
    let child = this.heap.length - 1;
    let parent = Math.floor((child - 1) / 2);
    while (parent >= 0 && this.comp(this.heap[parent], this.heap[child]) > 0) {
      [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const res = this.heap[0];
    this.heap[0] = this.heap.pop();
    let parent = 0;
    let lchild = parent * 2 + 1;
    let rchild = parent * 2 + 2;
    while (lchild < this.heap.length) {
      const child = (rchild >= this.heap.length || this.comp(this.heap[lchild], this.heap[rchild]) < 0) ? lchild : rchild;
      if (this.comp(this.heap[parent], this.heap[child]) < 0) {
        break;
      }
      [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
      parent = child;
      lchild = parent * 2 + 1;
      rchild = parent * 2 + 2;
    }
    return res;
  }

  get size() {
    return this.heap.length;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  const pq = new Heap((a, b) => b - a);
  for (const num of nums) {
    pq.push(num);
  }
  let res = 0;
  let i = 0;
  while (i < k) {
    res = pq.pop();
    i += 1;
  }
  return res;
};

test('findKthLargest', () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  expect(findKthLargest([-3, -2, -3, -1, -2, -4, -5, -5, -6], 4)).toBe(-3);
  expect(findKthLargest([-1, -1], 2)).toBe(-1);
});

/** * Fast solution ** */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time: O(n)
const findKthLargest_fast = function (nums, k) {
  // the final position of the kth largest number in a sorted array
  const finalIdx = nums.length - k;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // random num between left and right
    const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
    // the final position of the pivot in a sorted array
    const pivotIdx = pivotHelper(pivot, left, right);
    // the target number is in its correct postion, thus return
    if (pivotIdx === finalIdx) return nums[finalIdx];

    // if pivotIdx is smaller we undershot, so look only on the right half
    if (pivotIdx < finalIdx) left = pivotIdx + 1;
    // else we overshot, so look only on the left half
    else right = pivotIdx - 1;
  }

  function pivotHelper(pivot, start, end) {
    // move the pivot to the end (get it out of the way)
    swap(pivot, end);

    let i = start;
    let j = start;

    // move smaller nums to the begining of the array
    while (j < end) {
      if (nums[j] <= nums[end]) {
        swap(i, j);
        i++;
      }
      j++;
    }
    // swap pivot to its final position
    swap(i, end);
    return i;
  }

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};
