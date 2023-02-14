/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	// your code here
	return (x) => funcs.reduce((acc, fn) => fn(acc), x);
}