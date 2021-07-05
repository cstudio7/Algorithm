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

// function reachTheEndInTime(grid) {
//     // Write your code here
//     let n =  grid[0].length
//     let d =  grid.length
//     // let e =  grid[0].length - 1
//     let startX = 0
//     let startY = 0
//     const goalX = d-1
//     const goalY = n-1
//     if (grid[startX][startY] === '#' || grid[goalX][goalY] === '#') return 0
//     const queue = []
//     const startCell = {
//         position: { x: startX, y: startY },
//         moves: 0,
//         b:0
//     }
//     queue.push(startCell)
//     // HASH MAP X_Y
//     const visited = {}
//     visited[`${startX}_${startY}`] = true
//     // console.log(visited)
//
//     let temps = 0
//     const markCellAsVisited = (x, y, moves, parent) => {
//         let e = 0
//         const cellKey = `${x}_${y}`
//         let {b} = parent;
//         if(temps > moves) {
//             b += 2
//         } else {
//             e = 0
//         }
//         temps = moves
//
//         if (grid[x][y] === '#' || visited[cellKey]) return null
//         visited[cellKey] = true
//         const newCell = {
//             position: { x, y },
//             moves,
//             b,
//             parent
//         }
//         queue.push(newCell)
//         // console.log(newCell)
//         return newCell
//     }
//
//     while (queue.length > 0) {
//         const currentCell = queue.shift()
//
//         if (
//             currentCell.position.x === goalX && currentCell.position.y === goalY) {
//             // console.log(currentCell)
//             return (currentCell.moves + currentCell.b )
//         }
//
//         let { position } = currentCell
//
//         // RIGHT
//         for (let x = position.x + 1; x < grid.length; x++) {
//             let y = position.y
//             const moves = x+y;
//             if (!markCellAsVisited(x, y, moves, currentCell)) break
//         }
//         // BOTTOM
//         for (let y = position.y + 1; y < n; y++) {
//             let x = position.x
//             const moves = x+y
//             if (!markCellAsVisited(x, y, moves, currentCell)) break
//         }
//         // TOP
//         for (let y = position.y - 1; y >= 0; y--) {
//             let x = position.x
//             const moves = x+y
//             if (!markCellAsVisited(x, y, moves, currentCell)) break
//         }
//         // LEFT
//         for (let x = position.x - 1; x >= 0; x--) {
//             let y = position.y
//             const moves = x+y
//             if (!markCellAsVisited(x, y, moves, currentCell)) break
//         }
//         // console.log(queue)
//     }
//
//     return 'No'
// }
//
//
// console.log(reachTheEndInTime(['.....','##.##','#...#','#.###','#....']))
// console.log(reachTheEndInTime(['.....','##.##','#...#','#.#.#','#....']))
// console.log(reachTheEndInTime(['....#','###.#','###.#','##..#','##.##','##...','####.']))

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




//Rough
// function reachTheEndInTime(grid) {
//     // Write your code here
//     let n =  grid[0].length
//     let d =  grid.length
//     let e =  grid[0].length - 1
//     let startX = 0
//     let startY = 0
//     const goalX = d-1
//     const goalY = n-1
//     if (grid[startX][startY] === '#' || grid[goalX][goalY] === '#') return 0
//     const queue = []
//     const startCell = {
//         position: { x: startX, y: startY },
//         moves: 0,
//         count: 0
//     }
//     // console.log(startCell)
//     queue.push(startCell)
//     // HASH MAP X_Y
//     const visited = {}
//     visited[`${startX}_${startY}`] = true
//     // console.log(visited)
//
//     const markCellAsVisited = (x, y, moves, u, parent) => {
//         const cellKey = `${x}_${y}`
//         let {count} = parent;
//         let c = 0
//           count > 0 ? c += count : ''
//         // console.log(visited)
//         if (grid[x][y] === '#' || visited[cellKey]) return null
//         visited[cellKey] = true
//         const newCell = {
//             position: { x, y },
//             moves,
//             count: u + c,
//             parent
//         }
//         // console.log(u)
//         queue.push(newCell)
//         // console.log(newCell)
//         return newCell
//     }
//
//     let temp = 0
//     let sum = 0
//     while (queue.length > 0) {
//         const currentCell = queue.shift()
//         let u
//         // console.log(temp, currentCell)
//         if(temp > currentCell.moves) {
//             sum++
//             u = sum
//         } else {
//             u = 0
//         }
//         temp = currentCell.moves
//
//         if (
//             currentCell.position.x === goalX && currentCell.position.y === goalY) {
//             console.log(currentCell)
//             return (currentCell.moves + currentCell.count )
//         }
//
//         let { position } = currentCell
//         // console.log(currentCell)
//
//
//         // RIGHT
//         for (let x = position.x + 1; x < grid.length; x++) {
//             let y = position.y
//             const moves = x+y;
//             if (!markCellAsVisited(x, y, moves,u, currentCell)) break
//         }
//         // BOTTOM
//         for (let y = position.y + 1; y < n; y++) {
//             let x = position.x
//             const moves = x+y
//             if (!markCellAsVisited(x, y, moves,u, currentCell)) break
//         }
//         // TOP
//         for (let y = position.y - 1; y >= 0; y--) {
//             let x = position.x
//             const moves = x+y
//             if (!markCellAsVisited(x, y, moves, u, currentCell)) break
//         }
//         // LEFT
//         for (let x = position.x - 1; x >= 0; x--) {
//             let y = position.y
//             const moves = x+y
//             if (!markCellAsVisited(x, y, moves, u, currentCell)) break
//         }
//         // console.log(queue)
//     }
//
//     return 'No'
// }
