
const myMaze = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,1,0],
    [0,1,0,0,0,1,0,0,0,0],
    [0,1,0,0,0,0,1,0,0,0],
    [0,1,1,1,1,0,0,0,1,0],
    [0,0,0,0,1,0,0,0,0,1],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,0,1],
    [0,0,0,0,0,0,0,1,1,2],
    [0,0,0,0,0,0,0,0,0,0]
]

function MazeSolver(maze){
    this.maze = maze;
    this.traverse = function (col, row){
        if(this.maze[col][row] === 2){
            console.log("we have Successfully exited the maze")
        } else if(this.maze[col][row] === 1){
            this.maze[col][row] = 'visited'
            if(col < this.maze.length){
                this.traverse(col + 1, row)
            }
            if( row < this.maze[col].length){
                this.traverse(col, row + 1)
            }
            if( col > 0){
                this.traverse(col - 1, row)
            }
            if(row > 0){
                this.traverse(col, row - 1)
            }
        }
    }
}

const ms = new MazeSolver(myMaze)
ms.traverse(2, 1)
