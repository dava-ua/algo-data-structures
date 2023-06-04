/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
    // your code here
    let id = setTimeout(null, 0);
    while (id >= 0) {
        window.clearTimeout(id);
        id--;
    }
}