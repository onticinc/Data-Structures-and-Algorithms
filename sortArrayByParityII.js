/**
https://leetcode.com/problems/sort-array-by-parity-ii/

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

Example 1:
Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

 * @param {number[]} A
 * @return {number[]}
 */
 
var sortArrayByParityII = function (arr) {
  let result = [];

  let evenPos = 0;
  let oddPos = 1;

  arr.forEach(item => {
    if (item % 2 === 0) {
      result[evenPos] = item;
      evenPos += 2;
    } else {
      result[oddPos] = item;
      oddPos += 2;
    }
  });

  return result;
};


// var sortArrayByParityII = function (arr) {
//   let odds = [];
//   let evens = [];
//   let result = [];

//   arr.forEach(item => {
//     if (item % 2 === 0) {
//       evens.push(item);
//     } else {
//       odds.push(item);
//     }
//   });

//   evens.forEach((item, index) => {
//     result.push(item);
//     result.push(odds[index]);
//   });

//     return result;
// };
