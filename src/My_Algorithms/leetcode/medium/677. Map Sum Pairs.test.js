// https://leetcode.com/problems/map-sum-pairs/

const MapSum = function () {
  this.root = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let node = this.root;
  for (let i = 0; i < key.length; i += 1) {
    if (!node[key[i]]) node[key[i]] = {};
    node = node[key[i]];
    if (i === key.length - 1) {
      node.val = val;
    }
  }
};

MapSum.prototype.traverse = function (word) {
  let node = this.root;
  for (const c of word) {
    node = node[c];
    if (!node) return null;
  }
  return node;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let sum = 0;
  const startNode = this.traverse(prefix);
  const calSum = (node) => {
    if (!node) return;
    if (node.val) sum += node.val;
    if (node) {
      for (const child of Object.keys(node)) {
        calSum(node[child]);
      }
    }
  };
  calSum(startNode);
  return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

/* Input
  ["MapSum", "insert", "sum", "insert", "sum"]
  [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
Output
  [null, null, 3, null, 5]
*/

/* Explanation
MapSum mapSum = new MapSum();
mapSum.insert("apple", 3);
mapSum.sum("ap");           // return 3 (apple = 3)
mapSum.insert("app", 2);
mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)
*/
test('MapSum', () => {
  const mapSum = new MapSum();
  mapSum.insert('apple', 3);
  expect(mapSum.sum('app')).toBe(3);
  mapSum.insert('app', 2);
  expect(mapSum.sum('app')).toBe(5);
});
