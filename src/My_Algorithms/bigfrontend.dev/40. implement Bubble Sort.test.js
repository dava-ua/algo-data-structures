
/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
    // your code here
    let swap;

    do {
        swap = false;

        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swap = true
            }
        }
    } while (swap)
}

it('should bubble sort in place', () => {
    const a = [4, 2, 100, 99, 10000, -1, 99, 2];
    bubbleSort(a);
    expect(a).toEqual([-1, 2, 2, 4, 99, 99, 100, 10000]);
});
