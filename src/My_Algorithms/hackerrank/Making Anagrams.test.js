// https://www.hackerrank.com/challenges/making-anagrams/problem

/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
  const map = {};
  let occur = 0;
  for (let l = 0; l < s1.length; l += 1) {
    if (!map[s1[l]]) {
      map[s1[l]] = 1;
    } else {
      map[s1[l]] += 1;
    }
  }

  for (let l = 0; l < s2.length; l += 1) {
    if (map[s2[l]]) {
      map[s2[l]] -= 1;
      occur += 2;
      if (map[s2[l]] === 0) {
        delete map[s2[l]];
      }
    }
  }

  return s1.length + s2.length - occur;
}

test('makingAnagrams', () => {
  expect(makingAnagrams('abc', 'amnop')).toBe(6);
  expect(makingAnagrams('cde', 'abc')).toBe(4);
  expect(makingAnagrams('lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk', 'bugexikjevtubidpulaelsbcqlupwetzyzdvjphn')).toBe(40);
  expect(makingAnagrams('fsqoiaidfaukvngpsugszsnseskicpejjvytviya', 'ksmfgsxamduovigbasjchnoskolfwjhgetnmnkmcphqmpwnrrwtymjtwxget')).toBe(42);
});
