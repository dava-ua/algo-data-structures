/**
 * @param {number} num
 */
function sum(num) {
    const func = function (num2) {
        return num2 ? sum(num + num2) : num;
    }

    func.valueOf = () => num;
    return func;
}

/**
 * @param {number} num
 */
function sum(a) {
    const fn = (b) => sum(a + b);
    fn[Symbol.toPrimitive] = () => a;
    return fn;
  }