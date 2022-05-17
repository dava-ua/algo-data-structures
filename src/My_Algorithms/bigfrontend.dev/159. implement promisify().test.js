// https://bigfrontend.dev/problem/find-the-single-integer

/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      };

      func.call(this, ...args, callback);
    });
  };
}
