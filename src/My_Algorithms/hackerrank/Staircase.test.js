// https://www.hackerrank.com/challenges/making-anagrams/problem

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  let str = '';
  for (let i = 1; i <= n; i += 1) {
    str = str.concat(' '.repeat(n - i).concat('#'.repeat(i))).concat(i !== n ? '/n' : '');
  }

  console.log(str);
}
