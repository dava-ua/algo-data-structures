(() => {
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
})();


(() => {
/**
* cancel all timer from window.setTimeout
*/
    //    Keep original set timeout in some variable (like you would do for some algo problems with 'temp' variable
    //    keep all newly created timeout ids in array
    //    Overwrite window.setTimeout with function which accepts callback and delay but then pushes timeout ids to our timeouts array, needs to return newly created timeoutId to preserve the original setTimeout API
    //    Function clearAllTimeouts loops through timeouts array clearing them
    const originalSetTimeout = window.setTimeout;
    let timeoutIds = [];

    window.setTimeout = (callback, delay) => {
        const timerId = originalSetTimeout(callback, delay)
        timeoutIds.push(timerId);
        return timerId
    }

    const clearAllTimeout = () => {
        timeoutIds.forEach(id => window.clearTimeout(id))
    }
})();

