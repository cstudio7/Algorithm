// A 2-D grid consisting of some blocked (represented as '#') and some unblocked (representedas '.')
// cells is given. The starting position of a ponter is in the top-left corner of the grid.constructorIt is guaranteed that
// the starting position is in an unblocked cell.constructorIt is also guaranteed that the bottom-right cell is unblocked. Each cell of the grid is connected with its right,left, top and bottom cells (if those cells exist).
// It takes 1 second for a pointer to move from a cell to its adjacent cell.
// If the pointer can reach the bottom-right corner of the grid within k seconds,
//     return the string 'Yes'. Otherwise, return the string 'No'.

// Example
rows = 3
grid = ['..##','#.##','#...']
maxTime = 5
// ..##
// #.##
// #...
// it takes 5 seconds to reach the end. So we return 'Yes'
