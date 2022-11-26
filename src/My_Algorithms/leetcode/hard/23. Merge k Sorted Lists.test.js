// https://leetcode.com/problems/merge-k-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  if (!lists.length) {
    return null;
  }
  let agregatedList;

  const mergeTwoLists = function (list1, list2) {
    const dummy = {
      val: -1,
      next: null,
    };

    let head = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        head.next = list1;
        list1 = list1.next;
      } else {
        head.next = list2;
        list2 = list2.next;
      }
      head = head.next;
    }

    head.next = list1 || list2;
    return dummy.next;
  };

  agregatedList = lists[0];
  for (let i = 1; i < lists.length; i += 1) {
    agregatedList = mergeTwoLists(agregatedList, lists[i]);
  }

  return agregatedList;
};
