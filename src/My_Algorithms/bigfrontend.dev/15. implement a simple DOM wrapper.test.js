/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    // your code here
    return {
      css: function(prop, val) {
        el.style[prop] = val;
        return this;
      }
    }
  }