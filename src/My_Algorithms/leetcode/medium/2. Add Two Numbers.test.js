// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let l1Nums = '';
  let l2Nums = '';
  let sum = 0;

  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  while (l1 || l2) {
    if (l1) {
      l1Nums = l1.val + l1Nums;
      l1 = l1.next;
    }

    if (l2) {
      l2Nums = l2.val + l2Nums;
      l2 = l2.next;
    }
  }

  sum = parseInt(l1Nums, 10) + parseInt(l2Nums, 10);

  return String(sum).split('').map((s) => parseInt(s, 10)).reduce((acc, curr) => {
    if (acc == null) {
      acc = new ListNode(curr);
    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null);
};

test('addTwoNumbers', () => {
  expect(addTwoNumbers(
    { val: 2, next: { val: 4, next: { val: 3, next: null } } },
    { val: 5, next: { val: 6, next: { val: 4, next: null } } },
  )).toStrictEqual({ next: { next: { next: null, val: 8 }, val: 0 }, val: 7 });
});
