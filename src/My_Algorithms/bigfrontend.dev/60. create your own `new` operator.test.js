// https://bigfrontend.dev/problem/create-your-own-new-operator

/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  const that = Object.create(constructor.prototype);

  const obj = constructor.apply(that, args);

  return (obj && typeof obj === 'object') ? obj : that;
}
