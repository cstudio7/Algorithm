// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
// return the number of islands.
//
//     An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
//     You may assume all four edges of the grid are all surrounded by water.
//
//
//
//     Example 1:
//
// Input: grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ]
// Output: 3
//
//
// Constraints:
//
//     m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.



const numsIsland = (grid) => {
    let count = 0;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j <grid[i].length; j++){
            if(grid[i][j] === '1'){
                count++;
                terraform(parseInt(i), parseInt(j), grid)
            }
        }
    }
    return count;
};

//convert stuff around to water
const terraform = (rowIn, colIn,grid) => {
    //     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0') return;
    grid[rowIn][colIn] = '0';
    terraform(rowIn+1, colIn, grid);
    terraform(rowIn-1, colIn, grid);
    terraform(rowIn, colIn+1, grid);
    terraform(rowIn, colIn-1, grid);

}

console.log(numsIsland([["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"]]))