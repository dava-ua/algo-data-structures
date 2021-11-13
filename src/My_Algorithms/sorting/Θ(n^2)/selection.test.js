import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../../algorithms/sorting/SortTester';
import Sort from '../../../algorithms/sorting/Sort';

class SelectionSort extends Sort {

  sort(originArray) {
    const arr = [...originArray];

    for (let i = 0; i < arr.length - 1; i += 1) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
}

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 209;
const NOT_SORTED_ARRAY_VISITING_COUNT = 209;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 209;

describe('SelectionSort', () => {
  it('should sort array', () => {
    SortTester.testSort(SelectionSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(SelectionSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      SelectionSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      SelectionSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      SelectionSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      SelectionSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
