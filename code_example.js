//Utilizing 'sliding window' approach to subarray calculations

/*
Premise:
Create a function that accepts two arguments, an array and a number, and returns the maximum sum of consecutive numbers defined by the number defined as the argument.

Example.
function maxSubarraySum([1,3,8,2,4], 2) {}
-returns 11

*/

//Solution:

function maxSubarray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  // check for edge case amount of numbers to be added (num) exceeds actual numbers in the array
  if (arr.length < num) return null;

  // loop from the beginning of arr up to whatever number num is
  for (let i = 0; i < num; i++) {
    // maxSum initially defined as sum of first 'num' amount of numbers in array
    maxSum += arr[i];
  }
  // store maxSum in new variable so can be reused for comparison
  tempSum = maxSum;

  // loop through array again starting at num, will be one index to the right of first numbers added together to get maxSum
  for (let i = num; i < arr.length; i++) {
    /* continually reassign tempSum based on taking tempSum and... */

    //                        v      subtracting the number one index to the left of the most recent 'num' numbers added
    tempSum = tempSum - arr[i - num] + arr[i];
    //                               v   adding the number one index to the right of the most recent 'num' numbers added

    // reassign maxSum to the larger of the two numbers (maxSum's current value, or tempSum's current value)
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
