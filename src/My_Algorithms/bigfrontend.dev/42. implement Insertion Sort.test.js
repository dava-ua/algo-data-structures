/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
    // your code here
    for (let i = 1; i < arr.length; i += 1) {
        let currentIndex = i;

        while (arr[currentIndex - 1] !== undefined
            && arr[currentIndex] < arr[currentIndex - 1]) {
            [arr[currentIndex], arr[currentIndex - 1]] = [arr[currentIndex - 1], arr[currentIndex]];
            currentIndex -= 1;
        }
    }
}

it('should insertion sort in place', () => {
    const a = [4, 2, 100, 99, 10000, -1, 99, 2];
    insertionSort(a);
    expect(a).toEqual([-1, 2, 2, 4, 99, 99, 100, 10000]);
});