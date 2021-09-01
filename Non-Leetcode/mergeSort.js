/*
Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem into smaller subproblems until they become simple enough to solve directly.

Here are the steps Merge Sort takes:

Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
Continue dividing the subarrays in the same manner until you are left with only single element arrays.
Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
Repeat step 3 unit with end up with a single sorted array.
*/

/*
Helper function with left & right parameters:
Create empty array
While loop
  while left && right parameters are not empty arrays (will break loop if either becomes empty)
  Pick the smaller among the smallest element of left and right sub arrays:
    check if left[0] < right[0]
    if so --> push value to array and remove from left
    else --> do same with right
Concatenate the leftover elements (in case we didn't go through entire left or right array)
Return values in array, left array, right array --> all in one array in that order

Main function:
Base case --> check if length of array < 2
  if so, return array
Create a midpoint and left variable --> will be splitting oringal array into 2 (left, right)
use helper function with recursion
  left paramter = mergeSort(left)
  right parameter = mergeSort(array)

Time complexity: 0(n^2)
quickSort, mergeSort --> (n log n)
selectionSort, insertionSort, bubbleSort --> 0(n^2)
*/

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.splice(0, mid);
  return merge(mergeSort(left), mergeSort(array));
};

const merge = (left, right) => {
  const arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [ ...arr, ...left, ...right ];
};