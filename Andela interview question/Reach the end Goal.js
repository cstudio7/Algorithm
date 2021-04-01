// A 2-D grid consisting of some blocked (represented as '#') and some unblocked (representedas '.')
// cells is given. The starting position of a ponter is in the top-left corner of the grid.constructorIt is guaranteed that
// the starting position is in an unblocked cell.constructorIt is also guaranteed that the bottom-right cell is unblocked. Each cell of the grid is connected with its right,left, top and bottom cells (if those cells exist).
// It takes 1 second for a pointer to move from a cell to its adjacent cell.
// If the pointer can reach the bottom-right corner of the grid within k seconds,
//     return the string 'Yes'. Otherwise, return the string 'No'.

Example
rows = 3
grid = ['..##','#.##','#...']
maxTime = 5
    // ..##
    // #.##
    // #...
// it takes 5 seconds to reach the end. So we return 'Yes'

const reachTheEnd = (arr, maxTime) => {
    const grid = []
    for(let x in arr){
        grid.push(arr[x].split(''))
    }
    let count = 0;
    let result = 'Yes';
    for(let i = 0; i < grid.length;i++){
        for(let j = 0; j <grid[i].length;j++){
            if (grid[i][j] === '.'){
                count++
                let me
                me = terraform(parseInt(i), parseInt(j),grid)
                me === 'No' ? result = me : ''
            }
        }
    }
    return count - 1 <= maxTime ? result : 'No'
}

//convert stuff around to water
const terraform = (i, j,grid) => {
    if((grid[i][j+1] === undefined || grid[i+1] === undefined || grid[i+1][j] === undefined )) return
    if((grid[i+1][j] === '#' && grid[i][j+1] === '#')) {
        grid[i][j] = '#';
        return 'No'
    }

    terraform(i, j+1, grid);
    terraform(i+1, j, grid);
    if(terraform(i+1, j, grid) === 'No' && terraform(i, j+1, grid) === 'No') return 'No'
}

console.log(reachTheEnd(['..##','#.##','#...'],5))