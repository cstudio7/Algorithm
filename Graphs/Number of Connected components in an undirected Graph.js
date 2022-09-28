// class Solution {
//     public int countCompnent(int n, int[][] edges){
//         int[] ids = new int[n];
// //        initially point all nodes to themselves
//     for(int i = 0l i< ids.length; i++) ids[i] = i;
//     for (int[] edges: edges) union(edges[0], edges[i], ids);
//     Set<Integer> set = new HashSet<>();
//     for(int i = 0; i < ids.length; i++) set.add(find(i, ids));
//     return set.size();
// }
//
//     private void union(int edge1, int edge2, int[] ids){
//         int parent1 = find(edge1, ids);
//         int parent2 = find(edge2, ids);
//         ids[parent] = parent2;
// }
//
//     private int find(int edge, int[] ids){
//         if(ids[edges] != edges) ids[edge] = find(ids[edge], ids);
//         return ids[edge];
// }
// }


//Javascript

function union(edge1, edge2, ids) {
    let parent1 = find(edge1, ids);
    ids[parent1] = find(edge2, ids);
}

function find(edge, ids) {
    if (ids[edge] !== edge) ids[edge] = find(ids[edge], ids);
    return ids[edge];
}

const countComponent = (edges, n) => {
    let ids = Array(n).fill(0);
    for (let i = 0; i < ids.length; i++) ids[i] = i;
    console.log(ids)
    for (let edge of edges) {
        union(edge[0], edge[1], ids);
    }
    let set = new Set();
    for (let i = 0; i < ids.length; i++) set.add(find(i, ids));
    return set.size;
}

console.log(countComponent([[0, 1], [1, 2], [3, 4]], 5))


//Union Find
const connectedComp = (n, edges) => {
    let ids = [];
//        initially point all nodes to themselves
    for (let i = 0; i < n; i++) {
        ids[i] = i;
    }
    console.log(ids)
    for (let edge of edges) {
        union(edge[0], edge[1], ids);
        // console.log(ids)
    }
    let set = new Set();
    for (let i = 0; i < ids.length; i++) set.add(find(i, ids));
    console.log(set)
    return set.size;


    function union(edge1, edge2, ids) {
        let parent1 = find(edge1, ids);
        let parent2 = find(edge2, ids);
        ids[parent1] = parent2;
    }

    function find(edge, ids) {
        if (ids[edge] != edge) ids[edge] = find(ids[edge], ids);
        return ids[edge];
    }
}

console.log(connectedComp(5, [[0, 1], [1, 2], [2, 0], [3, 4]]))

//bfs

const buildAdjList = (n, edges) => {
    const adjList = Array.from({length: n}, () => []);
    //  or
    // let adjList = []
    // for(let i = 0; i<n;i++){
    //     adjList.push([])
    // }


    for (let edge of edges) {
        let [src, dest] = edge;
        adjList[src].push(dest);
        adjList[dest].push(src);
    }
    return adjList;
}

const bfs = (node, adjList, visited) => {
    const queue = [node];
    visited[node] = true;
    while (queue.length) {
        let curNode = queue.shift();
        for (let neighbor of adjList[curNode]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
}

const connectedComp = (n, edges) => {
    const adjList = buildAdjList(n, edges);
    const visited = {};
    let numComponent = 0;
    for (let vertex = 0; vertex < adjList.length; vertex++) {
        if (!visited[vertex]) {
            numComponent++
            bfs(vertex, adjList, visited)
        }
    }
    return numComponent;
}

console.log(connectedComp(5, [[0, 1], [1, 2], [2, 0], [3, 4]]))


const buildAdjList = (n, A, B) => {
    // const adjList = Array.from({length:n},() => []);

    let edges = []
    for (let i = 0; i < A.length; i++) {
        edges.push([A[i], B[i]])
    }
    //  or
    let adjList = []
    for (let i = 0; i < n; i++) {
        adjList.push([])
    }
    console.log(adjList, edges)


    for (let edge of edges) {
        let [src, dest] = edge;
        adjList[src].push(dest);
        adjList[dest].push(src);
    }
    return adjList;
}

const bfs = (node, adjList, visited) => {
    const queue = [node];
    visited[node] = true;
    while (queue.length) {
        let curNode = queue.shift();
        for (let neighbor of adjList[curNode]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
}

const connectedComp = (n, A, B) => {
    const adjList = buildAdjList(n, A, B);
    const visited = {};
    let numComponent = 0;
    for (let vertex = 0; vertex < adjList.length; vertex++) {
        if (!visited[vertex]) {
            numComponent++
            bfs(vertex, adjList, visited)
        }
    }
    return numComponent;
}

console.log(connectedComp(5, [0, 1, 2, 3], [1, 2, 0, 4]))


let n = 5
const edges = [[0, 1], [1, 2], [3, 4]]
var adjacentList = buildAdjList(n, edges)


function buildAdjList(n, edges) {
    // const adjList = Array.from({length: n}, () => [])
    const adjList = []
    for (let i = 0; i < n; i++) {
        adjList.push([])
    }

    for (let edge of edges) {
        let [src, dest] = edge;

        adjList[src].push(dest)
        adjList[dest].push(src)
    }

    return adjList
}

function dfst(v, visited, temp) {

    visited[v] = true;
    temp.push(v)

    for (let x = 0; x < adjacentList[v].length; x++) {
        if (!visited[adjacentList[v][x]]) {
            temp = dfst(adjacentList[v][x], visited, temp)
        }
    }
    return temp
}


function connectedComponent(n, edges) {

    let visited = new Array(n)
    const result = []
    for (let i = 0; i < n; i++) {
        visited[i] = false
    }
    for (let j = 0; j < n; ++j) {
        // console.log(visited, adjacentList)
        if (!visited[j]) {
            temp = []
            result.push(dfst(j, visited, temp));
        }
    }
    console.log("Number of Connected Component is ", result)
    return result.length
}

console.log(connectedComponent(5, [[0, 1], [1, 2], [3, 4]]))
