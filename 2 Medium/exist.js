/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells,
where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]],
word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]],
word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]],
word = "ABCB"
Output: false

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
*/

/*
Need Helper function to check left, right, up, down at each cell

Helper:
Pass in parameters board, word, i & j indices, k --> tracking char in word
Check if
  k === word.length --> if so, word has been found, return true
  i < 0 or i >= m ---> i index out of bounds, need to recurse, return false
  j < 0 or j >= n ---> j index out of bounds, need to recurse, return false
  board[i][j] !== word[k] --> need to recurse, return false
Else
  Set result variable = false
  Set char variable = board[i][j] --> need to store in case of recursion later
  Need to replace board[i][j] with arbitrary non-letter so as not to re-use
    board[i][j] = '#'
  Use recursion with result to try to advance and find word (else move i, j)
  Possible moves:
    i - 1, j --> up
    i + 1, j --> down
    i, j - 1 --> left
    i, j + 1 --> right
    Always advance k --> k + 1 since has passed previous tests and not returned false
  If result === false, reset board[i][j] to orig char, not '#'

Main Function:
Double For Loop
  Use helper to check if word can be found starting at current index
*/

const exist = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (existHelper(board, word, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

const existHelper = (board, word, i, j, k) => {
  if (k === word.length) {
    return true;
  }
  if (i < 0 || i >= board.length) {
    return false;
  }
  if (j < 0 || j >= board[i].length) {
    return false;
  }
  if (board[i][j] !== word[k]) {
    return false;
  }
  let result = false;
  const char = board[i][j];

  board[i][j] = '#';

  result = existHelper(board, word, i - 1, j, k + 1) // look up
        || existHelper(board, word, i + 1, j, k + 1) // look down
        || existHelper(board, word, i, j - 1, k + 1) // look left
        || existHelper(board, word, i, j + 1, k + 1); // look right

  if (!result) {
    board[i][j] = char;
  }

  return result;
};


/*
Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]],
word = "ABCCED"

Steps to find 'ABCCED':

[['#','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']]

[['#','#','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']]

[['#','#','#','E'],
 ['S','F','C','S'],
 ['A','D','E','E']]

[['#','#','#','E'],
['S','F','#','S'],
['A','D','E','E']]

[['#','#','#','E'],
 ['S','F','#','S'],
 ['A','D','#','E']]

[['#','#','#','E'],
 ['S','F','#','S'],
 ['A','#','#','E']]

Output: true
*/