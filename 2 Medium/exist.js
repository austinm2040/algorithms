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

Helper Function:
Parameters --> board, word, i & j index, k (current char in word)
Base cases:
Return true, word has been able to be spelled with adjacent cells
  k === word.length (since using index, word will be spelled if true)
Move index by 1
  Index i goes out of bounds --> return false
  Index j goes out of bounds --> return false
  board[i][j] !== word[k] --> return false

If base cases not satisfied, board[i][j] === word[k] --> check adjacent cells
Set result variable to false
Set orig character variable = board[i][j] to save in memory
Set board[i][j] = arbitrary non-letter so as not to re-use

Check possible routes for result to === true --> recursion:
Always advance k by 1, since board[i][j] === word[k]
  Possible moves:
    i - 1, j --> move up
    i + 1, j --> move down
    i, j - 1 --> move left
    i, j + 1 --> move right
  If result === false, reset board[i][j] = orig char

If up, down, left, right exhausted without finding next char,
  reset board[i][j] = char

Return result --> true or false to advance index in double loop


Main Function:
Double For Loop
  Use helper to check if word can be found starting at [0,0],
  First char in word, k = 0
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

  board[i][j] = 0;

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