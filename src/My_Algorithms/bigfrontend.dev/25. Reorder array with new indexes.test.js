/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
    // reorder items inline
    for (let i = 0; i < items.length; i += 1) {
        let newIndex = newOrder[i];
        [items[i], items[newIndex]] = [items[newIndex], items[i]];
        [newOrder[i], newOrder[newIndex]] = [newOrder[newIndex], newOrder[i]]
    }

    return items;
}

test('sort', () => {
    const A = ['A', 'B', 'C', 'D', 'E', 'F']
    const B = [1, 5, 4, 3, 2, 0]
    expect(sort(A, B)).toStrictEqual(['F', 'A', 'E', 'D', 'C', 'B']);
});

