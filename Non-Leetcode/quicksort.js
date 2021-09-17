/*
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Most often this element is either the first or the last element in the array.
 *    Partitions all the elements of the array into two arrays, based on if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

/*
2 Helper Functions:
-Swap --> swaps elements when needed
   create temp variable = array[left]
   set array[left] = array[right]
   set array[right] = temp --> completes swap
-Partition --> separates array into left and right (elements in left < pivot value, elements in right > pivot value)
   Set pivot value = midpoint
   declare left/right pointer
   While loop --> while left <= right
     While (array[left] < pivot) --> (keep increasing left pointer)
       increase left value by 1
     While (array[right] > pivot) --> (keep decreasing right pointer)
       decrease left value by 1
     Check if left <= right
       If so --> swap elements
       Increase left by 1; Decrease right by 1
    Return left value

Main function: --> default left value = 0; default right value = array.length - 1
  Declare value to keep track of current index
  Base case: array.length <= 1
  if array.length > 1 --> index returned from partition
    update index value = partition(array, left, right)
  if left < index - 1 -->  more elements on the left side of the pivot
    Use recurision: quickSort(array, left, index - 1)
  if index < right --> more elements on the right side of the pivot
    Use recurision: quickSort(array, index, right)

Time complexity: 0(n^2)
quickSort, mergeSort --> (n log n)
selectionSort, insertionSort, bubbleSort --> 0(n^2)
*/

const quickSort = (array, left = 0, right = array.length - 1) => {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
};

const swap = (array, leftIndex, rightIndex) => {
  const temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
};

const partition = (array, left, right) => {
  const pivot = Math.floor((left + right) / 2);
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
};