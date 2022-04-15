// https://www.hackerrank.com/challenges/time-conversion

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const pmam = s.substring(8);
  const time = s.substring(0, 8).split(':');
  if (pmam === 'PM') {
    if (+time[0] === 12) {
      time[0] = '12';
    } else {
      time[0] = +time[0] + 12;
    }
  }
  if (pmam === 'AM' && time[0] === '12') {
    time[0] = '00';
  }
  return time.join(':');
}

test('timeConversion', () => {
  expect(timeConversion('07:05:45PM')).toBe('19:05:45');
  expect(timeConversion('12:05:39AM')).toBe('00:05:39');
  expect(timeConversion('12:45:54PM')).toBe('12:45:54');
  expect(timeConversion('12:40:22AM')).toBe('00:40:22');
  expect(timeConversion('12:00:00AM')).toBe('00:00:00');
});
