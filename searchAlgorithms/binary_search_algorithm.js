// https://en.wikipedia.org/wiki/Binary_search_algorithm

/**
 * binarySearchAlgorithm  O(log n) comparisons
 * @params  {object} = given an A (array) of n elements with value or records A[0], A[1], A[2],...An - 1.
 * @params  {object} = sorted such that A[0] <= A[1] <= A[2] <= ... <= An - 1.
 * @params  {number}{string} = and the T (targetValue) which compares an element in the middle of the array
 * @params  {number} = set L to 0 & R to n - 1.
 * @params  {number} = If L > R, the search terminates as unsuccessful.
 * @params  {number} = Set m (the position of the middle element) to the floor of (L + (R - L) / 2);
 * @params  {number} = which is the greatest integer less than or equal to  (L + (R - L) / 2);
 * @params  {number} = if A[m] < T, set binary_search_algorithm  m + 1 and go to step 2.
 * @params  {number} = if A[m] > T, set binary_search_algorithm  m - 1 and go to step 2.
 * @return  {number} = if A[m] === T, the search is done; return m.
 * @return  {string} = else return "unsuccessful"
 */

const arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayOfStrings = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// keeps track of the search boundaries with the two variables L and R.

function binary_search_algorithm(A, T, L = 0, R = A.length - 1) {
  try {
    var m = Math.floor(L + (R - L) / 2);
    for (let i = 0; i <= R; i++) {
      if (A[m] < T) {
        return binary_search_algorithm(A, T, m + 1, R);
      } else if (A[m] > T) {
        return binary_search_algorithm(A, T, L, m - 1);
      } else if (A[m] === T) {
        return m;
      }
    }
  } catch (err) {
    var err = "unsuccessful";
    return err;
  }
}

console.log(binary_search_algorithm(arrayOfIntegers, 20)); // Error
console.log(binary_search_algorithm(arrayOfIntegers, 05)); // Success
console.log(binary_search_algorithm(arrayOfStrings, "J")); // Error
console.log(binary_search_algorithm(arrayOfStrings, "B")); // Success

// Procedure for finding the rightmost element

/**
 * binary_search_leftmost O(log n) comparisons

 * @params  {number} = set L to 0 & R to n - 1.
 * @params  {number} = If L < R, the search terminates as unsuccessful.
 * @params  {number} = Set m (the position of the middle element) to the floor of (L + (R - L) / 2);
 * @params  {number} = which is the greatest integer less than or equal to  (L + (R - L) / 2);
 * @params  {number} = if A[m] < T, set binary_search_algorithm  m + 1 and go to step 2.
 * @params  {number} = if A[m] > T, set binary_search_algorithm  m - 1 and go to step 2.
 * @return  {number} = if A[m] === T, the search is done; return m.
 * @return  {string} = else return "unsuccessful"
 */

function binary_search_leftmost(A, T, L = 0, R = A.length) {
  try {
    var m = Math.floor(L + (R - L) / 2);
    for (let i = 0; i <= R; i++) {
      if (A[m] < T) {
        return binary_search_leftmost(A, T, L, m + 1);
      } else if (A[m] >= T) {
        return binary_search_leftmost(A, T, m, R);
      }
    }
  } catch (err) {
    var err = L;
    return err;
  }
}

console.log(binary_search_leftmost(arrayOfIntegers, 4));
console.log(binary_search_leftmost(arrayOfStrings, "H"));
