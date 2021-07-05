
// Question
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
//
//     Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
//
//     Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
//
//
//
// Example 1:
//
//
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:
//
// Input: n = 1
// Output: [["Q"]]


// 1
// var solveNQueens = function(n) {
//     const result = [];
//     placeQueens(result, n);
//     return result;
// };
//
// function placeQueens(result, size, board = [], row = 0) {
//     if (row === size) {
//         buildResult(result, board, size);
//         return;
//     }
//
//     for(let col = 0; col < size; col++) {
//         if (checkValidPlace(board, row, col, size)) {
//             board.push(col);
//             placeQueens(result, size, board, row + 1);
//             board.pop();
//         }
//     }
// }
//
// function checkValidPlace(board, row1, col1, size) {
//     for( let row2 = 0; row2 < row1; row2++) {
//         const col2 = board[row2];
//
//         if (col1 === col2) {
//             return false;
//         }
//
//         const colDistance = Math.abs(col1 - col2);
//         const rowDistance = row1 - row2;
//
//         if (colDistance === rowDistance) {
//             return false;
//         }
//     }
//
//     return true;
// }
//
// function buildResult(result, board, size) {
//     const boardWithQueens = board.map(col =>
//         '.'.repeat(col) + 'Q' + '.'.repeat(size - col - 1)
//     )
//
//     result.push(boardWithQueens);
// }
// Keeping track of the position of queens in the board variable, we only need to store a map from row -> columns, since we know that they are not going to be in the same row, we don't need a 2D array.
// We know 2 queens might be in the same diagonal if the row and col distance are equal.
//
//     Feel free to ask any question if it's not obvious what's happening.


// 2
// var solveNQueens = function(n) {
//     const res = [];
//     backtrack(res, n);
//     return res;
// };
//
// function backtrack(res, n, board = [], r = 0) {
//     if (r === n) {
//         res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
//         return;
//     }
//     for (let c = 0; c < n; c++) {
//         if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
//             board.push(c);
//             backtrack(res, n, board, r + 1);
//             board.pop();
//         }
//     }
// }












// 3
// var solveNQueens = function(n) {
//     const answer = []
//     const myBoard = [...Array(n)].map(() => Array(n).fill('*'));
//
//     function solve(board, queens, row) {
//         if(queens === n) {
//             board = board.map(row => row.join(''))
//             answer.push(board)
//             return;
//         }
//
//         for(let r = row; r < n; r++) {
//             for(let c = 0; c < n; c++) {
//                 if(board[r][c] === '*') {
//                     const nextBoard = placeQueen([r, c], board);
//                     solve(nextBoard, queens+1, r+1)
//                 }
//             }
//         }
//     }
//     solve(myBoard, 0, 0);
//     return answer;
//
//     function placeQueen(pos, board) {
//         const [currR, currC] = pos;
//
//         const nextBoard = [...board.map(row => [...row])];
//
//         // vertical;
//         for(let r = 0; r < n; r++)  nextBoard[r][currC] = '.'
//
//         // horizontal
//         for(let c = 0; c < n; c++) nextBoard[currR][c] = '.'
//
//         // diagonal up
//         let r = currR, c = currC;
//         while(r >= 0 && c >= 0) nextBoard[r--][c--] = '.'
//
//         // diagonal down
//         r = currR, c = currC;
//         while(r < n && c < n) nextBoard[r++][c++] = '.'
//
//         // antidiagonal up
//         r = currR, c = currC;
//         while(r >= 0 && c < n) nextBoard[r--][c++] = '.'
//
//         // antidiagonal down
//         r = currR, c = currC;
//         while(r < n && c >= 0) nextBoard[r++][c--] = '.'
//
//         nextBoard[currR][currC] = 'Q'
//         return nextBoard;
//     }
// };
