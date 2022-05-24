// https://bigfrontend.dev/problem/two-way-binding

/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
function model(state, element) {
  element.value = state.value;

  Object.defineProperty(state, 'value', {
    get: () => element.value,
    set: (val) => element.value = val,
  });
}

const input = document.createElement('input');
const state = { value: 'BFE' };
model(state, input);

console.log(input.value); // 'BFE'
state.value = 'dev';
console.log(input.value); // 'dev'
input.value = 'BFE.dev';
input.dispatchEvent(new Event('change'));
console.log(state.value); // 'BFE.dev'
