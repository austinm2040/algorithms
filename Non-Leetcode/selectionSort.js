/*
Double loop
 At each inner loop's index, find and update min value
 swap new min with index at i
For loop:
  find the smallest value within loop --> set min = current index
  Second For loop:
    start index at i + 1, up to array.length exclusive
    check if array at j < array[min]
      set min = j
  In the case that min !== i (upated min), swap values
    define temp variable = array[i]
    update array[i] = array[min]
    update array[min] = temp --> completes swap
return array

Time complexity: 0(n^2)
quickSort, mergeSort --> (n log n)
selectionSort, insertionSort, bubbleSort --> 0(n^2)
*/

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

/*
Input: [4,2,1,7,0]

i = 0:
min = 4 (value = 0)
temp = 4
[0,2,1,7,0]
[0,2,1,7,4]

i = 1:
min = 2 (value = 1)
temp = 2
[0,1,1,7,4]
[0,1,2,7,4]

i = 2:
[0,1,2,7,4]

i = 3:
min = 4 (value = 4)
temp = 7
[0,1,2,4,4]
[0,1,2,4,7]

Output: [0,1,2,4,7]
*/