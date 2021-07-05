

// function minimumMoves(grid, startX, startY, goalX, goalY) {
//     // Write your code here
//     if (grid[startX][startY] === 'X' || grid[goalX][goalY] === 'X') return 0
//     const queue = []
//     const startCell = {
//         position: { x: startX, y: startY },
//         moves: 0
//     }
//     // console.log(startCell)
//     queue.push(startCell)
//     // HASH MAP X_Y
//     const visited = {}
//     visited[`${startX}_${startY}`] = true
//     // console.log(visited)
//
//     const markCellAsVisited = (x, y, moves, parent) => {
//         const cellKey = `${x}_${y}`
//         // console.log(visited, parent)
//         if (grid[x][y] === 'X' || visited[cellKey]) return null
//         visited[cellKey] = true
//         const newCell = {
//             position: { x, y },
//             moves,
//             parent
//         }
//         // console.log(moves)
//         queue.push(newCell)
//         // console.log(newCell)
//         return newCell
//     }
//     while (queue.length > 0) {
//
//         const currentCell = queue.shift()
//         if (
//             currentCell.position.x === goalX && currentCell.position.y === goalY) {
//             return (currentCell.moves)
//         }
//         const { position } = currentCell
//         // console.log(currentCell.moves)
//         const moves = currentCell.moves + 1
//         // LEFT
//         for (let x = position.x - 1; x >= 0; x--) {
//             if (!markCellAsVisited(x, position.y, moves, currentCell)) break
//         }
//         // TOP
//         for (let y = position.y - 1; y >= 0; y--) {
//             if (!markCellAsVisited(position.x, y, moves, currentCell)) break
//         }
//         // RIGHT
//         for (let x = position.x + 1; x < grid.length; x++) {
//             if (!markCellAsVisited(x, position.y, moves, currentCell)) break
//         }
//         // BOTTOM
//         for (let y = position.y + 1; y < grid.length; y++) {
//             if (!markCellAsVisited(position.x, y, moves, currentCell)) break
//         }
//         console.log(queue)
//     }
//
//     return 0
// }
//
// console.log(minimumMoves(['...','.X.','...'],0,0,1,2))






