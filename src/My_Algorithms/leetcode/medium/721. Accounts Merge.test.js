// https://leetcode.com/problems/accounts-merge/

const sortByEmailName = (emails) => {
  if (emails.length === 2) {
    return emails;
  }
  const name = emails[0];
  const list = emails.slice(1);
  const sortedEmails = list
    .sort();
  return [name, ...Array.from(new Set(sortedEmails))];
};

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
  const map = new Map();
  const duplicates = [];
  for (let i = 0; i < accounts.length; i += 1) {
    if (!map.has(accounts[i][0])) {
      map
        .set(accounts[i][0], accounts[i].slice(1));
    } else {
      if (map.get(accounts[i][0]).some((a) => accounts[i].indexOf(a) >= 0)) {
        map.set(accounts[i][0], [...map.get(accounts[i][0]), ...accounts[i].slice(1)]);
      } else {
        duplicates.push(accounts[i]);
      }
    }
  }

  // TODO: refactor using hash map
  for (let i = 0; i < duplicates.length; i += 1) {
    if (map.get(duplicates[i][0]) && map.get(duplicates[i][0])
      .some(
        (d) => duplicates[i].indexOf(d) > -1,
      )) {
      map.set(duplicates[i][0], Array.from(new Set([...map.get(duplicates[i][0]), ...duplicates[i].slice(1)])));
      duplicates.splice(i, 1);
      i = -1;
    }
  }
  const result = [...Array.from(map, (arr) => [arr[0], ...arr[1]])];
  return result.concat(duplicates).map((arr) => sortByEmailName(arr));
};

describe('accountsMerge', () => {
  test('accountsMerge 1', () => {
    const input = [
      ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
      ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
      ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
      ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
      ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
    ];
    const output = [
      ['Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co'],
      ['Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co'],
      ['Ethan', 'Ethan0@m.co', 'Ethan4@m.co', 'Ethan5@m.co'],
      ['Hanzo', 'Hanzo0@m.co', 'Hanzo1@m.co', 'Hanzo3@m.co'],
      ['Fern', 'Fern0@m.co', 'Fern1@m.co', 'Fern5@m.co'],
    ];
    expect(accountsMerge(input)).toStrictEqual(output);
  });

  test('accountsMerge 2', () => {
    const input = [
      ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
      ['John', 'johnsmith@mail.com', 'john00@mail.com'],
      ['Mary', 'mary@mail.com'],
      ['John', 'johnnybravo@mail.com'],
    ];
    const output = [
      ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
      ['Mary', 'mary@mail.com'],
      ['John', 'johnnybravo@mail.com'],
    ];
    expect(accountsMerge(input)).toStrictEqual(output);
  });

  test('accountsMerge 3', () => {
    const input = [
      ['Alex', 'Alex5@m.co', 'Alex4@m.co', 'Alex0@m.co'],
      ['Ethan', 'Ethan3@m.co', 'Ethan3@m.co', 'Ethan0@m.co'],
      ['Kevin', 'Kevin4@m.co', 'Kevin2@m.co', 'Kevin2@m.co'],
      ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe2@m.co'],
      ['Gabe', 'Gabe3@m.co', 'Gabe4@m.co', 'Gabe2@m.co']];
    const output = [
      ['Alex', 'Alex0@m.co', 'Alex4@m.co', 'Alex5@m.co'],
      ['Ethan', 'Ethan0@m.co', 'Ethan3@m.co'],
      ['Kevin', 'Kevin2@m.co', 'Kevin4@m.co'],
      ['Gabe', 'Gabe0@m.co', 'Gabe2@m.co', 'Gabe3@m.co', 'Gabe4@m.co'],
    ];
    expect(accountsMerge(input)).toStrictEqual(output);
  });

  test('accountsMerge 4', () => {
    const input = [
      ['Kevin', 'Kevin1@m.co', 'Kevin5@m.co', 'Kevin2@m.co'],
      ['Bob', 'Bob3@m.co', 'Bob1@m.co', 'Bob2@m.co'],
      ['Lily', 'Lily3@m.co', 'Lily2@m.co', 'Lily0@m.co'],
      ['Gabe', 'Gabe2@m.co', 'Gabe0@m.co', 'Gabe2@m.co'],
      ['Kevin', 'Kevin4@m.co', 'Kevin3@m.co', 'Kevin3@m.co'],
    ];
    const output = [
      ['Kevin', 'Kevin1@m.co', 'Kevin2@m.co', 'Kevin5@m.co'],
      ['Bob', 'Bob1@m.co', 'Bob2@m.co', 'Bob3@m.co'],
      ['Lily', 'Lily0@m.co', 'Lily2@m.co', 'Lily3@m.co'],
      ['Gabe', 'Gabe0@m.co', 'Gabe2@m.co'],
      ['Kevin', 'Kevin3@m.co', 'Kevin4@m.co'],
    ];
    expect(accountsMerge(input)).toStrictEqual(output);
  });

  test('accountsMerge 5', () => {
    const input = [
      ['David', 'David0@m.co', 'David1@m.co'],
      ['David', 'David3@m.co', 'David4@m.co'],
      ['David', 'David4@m.co', 'David5@m.co'],
      ['David', 'David2@m.co', 'David3@m.co'],
      ['David', 'David1@m.co', 'David2@m.co'],
    ];
    const output = [
      ['David', 'David0@m.co', 'David1@m.co', 'David2@m.co', 'David3@m.co', 'David4@m.co', 'David5@m.co'],
    ];

    expect(accountsMerge(input)).toStrictEqual(output);
  });

  test('accountsMerge 6', () => {
    const input = [
      ['David', 'David0@m.co', 'David0@m.co', 'David1@m.co', 'David2@m.co', 'David3@m.co', 'David4@m.co', 'David5@m.co', 'David6@m.co', 'David7@m.co'],
      ['David', 'David0@m.co', 'David0@m.co', 'David1@m.co', 'David2@m.co', 'David3@m.co', 'David4@m.co', 'David5@m.co', 'David6@m.co', 'David7@m.co'],
      ['David', 'David2@m.co', 'David18@m.co', 'David19@m.co', 'David20@m.co', 'David21@m.co', 'David22@m.co', 'David23@m.co', 'David24@m.co', 'David25@m.co'],
      ['David', 'David3@m.co', 'David27@m.co', 'David28@m.co', 'David29@m.co', 'David30@m.co', 'David31@m.co', 'David32@m.co', 'David33@m.co', 'David34@m.co'],
      ['David', 'David1@m.co', 'David9@m.co', 'David10@m.co', 'David11@m.co', 'David12@m.co', 'David13@m.co', 'David14@m.co', 'David15@m.co', 'David16@m.co'],
    ];
    const output = [
      ['David', 'David0@m.co', 'David10@m.co', 'David11@m.co', 'David12@m.co', 'David13@m.co', 'David14@m.co', 'David15@m.co', 'David16@m.co', 'David18@m.co', 'David19@m.co', 'David1@m.co', 'David20@m.co', 'David21@m.co', 'David22@m.co', 'David23@m.co', 'David24@m.co', 'David25@m.co', 'David27@m.co', 'David28@m.co', 'David29@m.co', 'David2@m.co', 'David30@m.co', 'David31@m.co', 'David32@m.co', 'David33@m.co', 'David34@m.co', 'David3@m.co', 'David4@m.co', 'David5@m.co', 'David6@m.co', 'David7@m.co', 'David9@m.co'],
    ];

    expect(accountsMerge(input)).toStrictEqual(output);
  });

  test('sort', () => {
    expect(sortByEmailName(['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'])).toStrictEqual(['Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co']);
  });
});
