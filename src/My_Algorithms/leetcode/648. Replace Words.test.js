/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function (dictionary, sentence) {
  let result = '';
  sentence.split(' ').forEach((word, idx) => {
    let found;
    result = result.concat(idx === 0 ? '' : ' ');
    dictionary.forEach((dict) => {
      const foundIndex = word.indexOf(dict);
      if (foundIndex === 0) {
        found = found && found.length < dict.length ? found : dict;
      }
    });
    if (found) {
      result = result.concat(found);
    } else {
      result = result.concat(word);
    }
  });
  return result;
};

/*
In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor.
For example, when the root "an" is followed by the successor word "other", we can form a new word "another".
Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it.
If a successor can be replaced by more than one root, replace it with the root that has the shortest length.
Return the sentence after the replacement.
*/

describe('Return the sentence after the replacement', () => {
  test('test 1', () => {
    const dictionary = ['cat', 'bat', 'rat'];
    const sentence = 'the cattle was rattled by the battery';
    expect(replaceWords(dictionary, sentence)).toBe(
      'the cat was rat by the bat',
    );
  });

  test('test 2', () => {
    const dictionary = ['a', 'b', 'c'];
    const sentence = 'aadsfasf absbs bbab cadsfafs';
    expect(replaceWords(dictionary, sentence)).toBe('a a b c');
  });

  test('test 3', () => {
    const dictionary = ['a', 'aa', 'aaa', 'aaaa'];
    const sentence = 'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa';
    expect(replaceWords(dictionary, sentence)).toBe(
      'a a a a a a a a bbb baba a',
    );
  });

  test('test 4', () => {
    const dictionary = ['catt', 'cat', 'bat', 'rat'];
    const sentence = 'the cattle was rattled by the battery';
    expect(replaceWords(dictionary, sentence)).toBe(
      'the cat was rat by the bat',
    );
  });

  test('test 5', () => {
    const dictionary = ['ac', 'ab'];
    const sentence = 'it is abnormal that this solution is accepted';
    expect(replaceWords(dictionary, sentence)).toBe(
      'it is ab that this solution is ac',
    );
  });
});
