
There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by rolling
up, down, left, right but it won't stop rolling until hitting a wall.
    When the ball stops, it could choose the next direction.toString()
Given the ball's start position the destination of the maze. Determine whether the
    ball could stop at the destination

The Maze is represented by a binary 2D array, 1 means the wass and 0 means the empty space.toString()You may assume that the
borders of the maze are all walls. The start and destination coordinates are
represented by row and column indexes.toString()


Example 1:

Input 1: a maze represented by a 2D array

00100
00000
00010
11011
00000

Input 2: start coordinates (rowstart, colStart) = (0,4)
Input#: destination coordinates (rowDest, colDest) = (4,4)



const hasPath = (maze, start, destination) => {
    const visited = maze.map((item) => new Array(item.length).fill(0));
    const queue = [];
    queue.push(start);
    visited[start[0]][start[1]] = 1;
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node[0] === destination[0] && node[1] === destination[1]) {
                return true;
            }
            explore(node, maze, visited, queue);
        }
    }
    return false;
};

const explore = (node, maze, visited, queue) => {
    const directions = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ];
    for (let i = 0; i < directions.length; i++) {
        let x = node[0] + directions[i][0];
        let y = node[1] + directions[i][1];
        while (
            x >= 0 &&
            y >= 0 &&
            x < maze.length &&
            y < maze[0].length &&
            !maze[x][y]
            ) {
            x += directions[i][0];
            y += directions[i][1];
        }
        const [lastX, lastY] = [x - directions[i][0], y - directions[i][1]];
        if (!visited[lastX][lastY]) {
            queue.push([lastX, lastY]);
            visited[lastX][lastY] = 1;
        }
    }
};
let maze = [
    [1,1,0,0,0],
    [0,1,0,0,0],
    [1,1,1,1,1],
    [0,0,0,0,1]
]
let me = maze[maze.length-1]

let start = maze[0][0]
let end = maze[maze.length-1][me.length - 1]

console.log(hasPath(maze,start,end))
