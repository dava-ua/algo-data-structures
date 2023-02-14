
/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
    const map = new Map();
    const excludeKeys = new Set();

    excludes.forEach(({ k, v }) => {
        excludeKeys.add(k);
        if (!map.has(k)) {
            map.set(k, new Set());
        }
        map.get(k).add(v);
    })

    return items.filter(item => [...excludeKeys].every(exKey => !map.get(exKey).has(item[exKey])));
}