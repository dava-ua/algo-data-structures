/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
    const calls = []

    const originMethod = obj[methodName]

    if (typeof originMethod !== 'function') {
        throw new Error('not function')
    }

    obj[methodName] = function (...args) {
        calls.push(args)
        return originMethod.apply(this, args)
    }

    return { calls };
}


/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOnProxy(obj, methodName) {
    // your code here
    const calls = [];
    const proxyedObj = new Proxy(obj[methodName], {
        apply: function (target, thisArg, args) {
            calls.push(args);
            return target.apply(thisArg, args);
        }
    })
    obj[methodName] = proxyedObj;
    return { calls };
}