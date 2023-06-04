/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
    if (!arr.length) return -1;
    if (arr.length === 1) {
        return arr[0] === target ? 0 : 1;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((right - left) / 2 + left);
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) right = mid - 1;
        if (arr[mid] < target) left = mid + 1;
    }

    return -1;
}

test('binarySearch', () => {
    expect(binarySearch([1, 2, 3, 4, 100, 1000, 10000], 4)).toBe(3)
});



