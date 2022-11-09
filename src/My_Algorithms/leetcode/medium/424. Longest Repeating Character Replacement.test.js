// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  // We're going to track a few things here:
  // First, set up a hashmap to track the frequency of letters
  const frequencies = {};
  // Then, set up a variable to track the most frequent letter we've seen.
  let highestFrequency = 0;
  // Finally, set up a variable to track the size of the longest valid window we encounter.
  let longest = 0;

  // Then we'll start a window with a left and right side pointer, both beginning at position 0,
  // because we want to grow our window as much as possible, and shrink when we have to.
  let left = 0;
  let right = 0;

  // Then we will increment the right pointer until it hits the end of the input string s
  while (right < s.length) {
    // For every character the right side of the window encounters,
    // we either add it to the frequencies hashmap with a frequency of 1,
    // or we increment its existing value
    const rightCharacter = s.charAt(right);
    frequencies[rightCharacter] = frequencies[rightCharacter] + 1 || 1;

    // Then we check if this newly encountered character is also the most frequent
    // we have ever seen in the string (even outside of the current window)
    highestFrequency = Math.max(highestFrequency, frequencies[rightCharacter]);

    // A window is valid if the length of the window,
    // minus the count of the most frequent character we've ever seen,
    // is less than or equal to k.
    // That means if the current window has the most frequent character in it,
    // and we did k replacements of the other letters in that window,
    // we would have enough k replacements to make the entire window that most frequent letter.
    //
    // If the current window is not valid, we want to increment the left pointer until we get
    // to a valid window
    //
    // Each time we do this, decrement the frequency of the character we're truncating,
    // since it's no longer part of the window.
    //
    // We do not, however, have to update highestFrequency,
    // because we'll only get a longer valid window when we encounter a letter that is
    // more frequent in its window than the last highestFrequency count was.
    // In all other cases, even when we find valid windows, they will necessarily be shorter
    // than the last time the highestFrequency gave us a valid result.
    while ((right - left + 1) - highestFrequency > k) {
      const leftCharacter = s.charAt(left);
      frequencies[leftCharacter] -= 1;
      left++;
    }

    // Once we have a valid window, check if it's longer than the previous longest valid window,
    // and store that in our longest variable.
    longest = Math.max(longest, right - left + 1);

    // Finally, increment the right pointer to shift the window to the right
    right++;
  }

  // Return the longest valid window we've seen
  return longest;
};
