// https://www.hackerrank.com/challenges/grading/problem

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents_initial(grades) {
  return grades.map((g) => {
    if (g <= 37 || +(`${g}`)[1] === 5 || +(`${g}`)[1] === 0) {
      return g;
    }
    if (+(`${g}`)[1] < 5) {
      return (5 - (`${g}`)[1]) < 3 ? +(`${`${g}`[0]}5`) : g;
    }
    if (+(`${g}`)[1] > 5) {
      return (10 - (`${g}`)[1]) < 3 ? +(`${`${g}`[0]}0`) + 10 : g;
    }
  });
}

function gradingStudents(grades) {
  return grades.map((g) => {
    if (g < 38) {
      return g;
    }
    if ((5 - (g % 5)) < 3) {
      return g - (g % 5) + 5;
    }
    return g;
  });
}

test('gradingStudents', () => {
  expect(gradingStudents([75, 34, 35, 50])).toStrictEqual([75, 34, 35, 50]);
  expect(gradingStudents([54])).toStrictEqual([55]);
  expect(gradingStudents([73, 67, 38, 33])).toStrictEqual([75, 67, 40, 33]);
});
