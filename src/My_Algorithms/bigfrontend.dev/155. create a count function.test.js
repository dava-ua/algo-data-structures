// https://bigfrontend.dev/problem/count-function

const count = (() => {
  let n = 0;

  const func = () => {
    return n += 1;
  };

  func.reset = () => {
    n = 0;
  };

  return func;
})();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

count.reset();

console.log(count()); // 1
