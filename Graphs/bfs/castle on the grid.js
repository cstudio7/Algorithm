



function minimumMoves(grid, startRow, startCol, endRow, endCol) {
// Declare variables
    const n = grid.length;
    const queue = [];
    const visited = [];

    for (let i = 0; i < n; i++) {
        visited.push([]);
    }
// Describes moves by 1 unit in each direction
    const vectorRow = [-1,0,1,0];
    const vectorCol = [0, 1, 0, -1];

    let numberOfMoves = 0;
    let numberOfCellsInCurrentLayer = 1;
    let numberOfCellsInNextLayer = 0;
    let cellsToAdd = []

    queue.push([startRow, startCol]);
    visited[startRow][startCol] = 'X';

    while (queue.length > 0) {
        let cell = queue.pop();

        if (cell[0] === endRow && cell[1] === endCol) {
            break;
        }
        traverseNeighbours(cell);
        numberOfCellsInCurrentLayer--;


        if (numberOfCellsInCurrentLayer === 0) {
            numberOfCellsInCurrentLayer = numberOfCellsInNextLayer;
            numberOfCellsInNextLayer = 0;
            numberOfMoves++;
            queue.push(...cellsToAdd);
            cellsToAdd = [];
        }
    }

    return numberOfMoves;

    function traverseNeighbours(cell) {
        // Move in each direction
        for (let i = 0; i < 4; i++) {
            // Move by 1 to n cells
            for (let j = 1; j < n; j++) {
                let nextCell = [cell[0] + vectorRow[i] * j, cell[1] + vectorCol[i] * j];
                // Check whether is in bounds
                if (nextCell[0] >= 0 && nextCell[1] >= 0 && nextCell[0] < n && nextCell[1] < n) {
                    // Break loop if X is on the way
                    if (grid[nextCell[0]][nextCell[1]] === 'X') {
                        break;
                    };
                    if (visited[nextCell[0]][nextCell[1]] !== 'X') {
                        cellsToAdd.push(nextCell);
                        visited[nextCell[0]][nextCell[1]] = 'X'
                        numberOfCellsInNextLayer++;
                    }
                }
            }
        }
    }
}



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
//         for (let y = position.y - 1; y >= 0; y--) {
//             if (!markCellAsVisited(position.x, y, moves, currentCell)) break
//         }
//         // TOP
//         for (let x = position.x - 1; x >= 0; x--) {
//             if (!markCellAsVisited(x, position.y, moves, currentCell)) break
//         }
//         // RIGHT
//         for (let y = position.y + 1; y < grid.length; y++) {
//             if (!markCellAsVisited(position.x, y, moves, currentCell)) break
//         }
//         // BOTTOM
//         for (let x = position.x + 1; x < grid.length; x++) {
//             if (!markCellAsVisited(x, position.y, moves, currentCell)) break
//         }
//         console.log(queue)
//     }
//
//     return 0
// }
//
// console.log(minimumMoves(['...','.X.','...'],0,0,1,2))
