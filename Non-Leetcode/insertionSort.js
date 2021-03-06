/*
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
*/

/*
For loop:
  Declare current variable as value at current index
  While loop
   While i > 0 && array[i] < array[i - 1]
      switch current and previous values
      array[i] = array[i - 1]
      decrement i by 1
  update new current value at i (subtracted by one from previous line) = current --> completes swap, repeats process to reorder values up to i
return array

Time complexity: 0(n^2)
quickSort, mergeSort --> (n log n)
selectionSort, insertionSort, bubbleSort --> 0(n^2)
*/

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    while ((i - 1 > -1) && (current < array[i - 1])) {
      array[i] = array[i - 1];
      i--;
    }
    array[i] = current;
  }
  return array;
};

















/** USE with Object to track order **
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
// var testingTransform = function(array) {
//   var transform = [];

//   for (var i = 0; i < array.length; i++) {
//     transform.push({value: array[i], i: i});
//   }

//   return transform;
// };

// var insertionSort = function(array) {
//   // Your code goes here. Feel free to add helper functions if needed.
//   array.sort(sortHelper);

//   return array;
// };

// var sortHelper = function(a, b) {
//   if (a.value !== b.value) {
//     return a.value - b.value;
//   }
//   return a.i - b.i
// };


// solution code
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

var insertionSort = function(array/*[, comparator]*/) {
  // Your code goes here. Feel free to add helper functions if needed.


  for (var i = 1; i < array.length; i++) {
    var val = array[i];
    var hole = i;

    while (hole > 0 && val.value < array[hole - 1].value) {
      array[hole] = array[hole - 1];
      hole -= 1;
    }

    array[hole] = val;
  }

  /* EXTRA CREDIT:
  if (!comparator) { // neglect error checking for brevity
    comparator = function(a, b) {
      // We only need to know if a is _less than_ b
      return a.value < b.value ? -1 : 0;
    };
  }

  for (var i = 1; i < array.length; i++) {
    var val = array[i];
    var hole = i;
    while ((hole > 0 && comparator(val, array[hole - 1])) < 0) {
      array[hole] = array[hole - 1];
      hole -= 1;
    }
    array[hole] = val;
  }
   */
    return array;
};