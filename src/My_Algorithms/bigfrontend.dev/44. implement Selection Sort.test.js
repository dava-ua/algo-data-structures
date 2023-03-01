
/**
 * @param {number[]} arr
 */
function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i += 1) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

it('should selection sort in place', () => {
    const a = [4, 2, 100, 99, 10000, -1, 99, 2];
    selectionSort(a);
    expect(a).toEqual([-1, 2, 2, 4, 99, 99, 100, 10000]);
});