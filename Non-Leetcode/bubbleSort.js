/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/


/*
Solution with Helper --> optimized
Create swap helper function to swap values when necessary
 store temp variable as value at current index
 update value at current index = value at current index + 1
 update value at current index + 1 = temp value --> completes swap

Main function:
For loop:
  Go up to i < array.length
  Declare a swap count = 0;
    Inner For loop:
      Go up to j < array.length - 1 - i iterations so as to not consider the final (sorted)
      element in the array in future iterations
        If array at current index > array at one index greater,
          increase swapCount by 1; call swap helper function with current index
    If there are no swap counts made in the original for loop, break stop the loop, as all have been sorted
return sorted array
*/
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let swapCount = 0;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swapCount++;
        swapHelper(j, array);
      }
    }
    if (!swapCount) {
      break;
    }
  }
  return array;
};

const swapHelper = (index, array) => {
  const temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
  return array;
};





/*
No Helper Solution
For loop:
  Go up to i < array.length
    Inner For loop:
    Go up to j < array.length - 1 - i iterations so as to not consider the final (sorted)
     element in the array in future iterations
      Check if array at current index > array at one index greater
       If so --> swap:
        Create temp variable = value at current index j
        change value at current index j to value at index j + 1
        set value at index j + 1 = temp to perform swap
return sorted array
*/

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
