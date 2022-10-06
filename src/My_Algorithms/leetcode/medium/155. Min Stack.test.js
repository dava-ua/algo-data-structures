// https://leetcode.com/problems/min-stack/description/

const MinStack = function () {
  this.numbers = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.numbers.push({
    n: val,
    min: !this.numbers.length ? val : Math.min(this.numbers.at(-1).min, val),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.numbers.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.numbers.at(-1).n;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.numbers.at(-1).min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

describe('Return the sentence after the replacement', () => {
  test('groupAnagrams', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });

  test('groupAnagrams', () => {
    // ["MinStack","push","push","push","getMin","top","pop","getMin"]
    // [[],[-2],[0],[-1],[],[],[],[]]
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-1);
    expect(minStack.getMin()).toBe(-2);
    expect(minStack.top()).toBe(-1);
    minStack.pop();
    expect(minStack.getMin()).toBe(-2);
  });
});
