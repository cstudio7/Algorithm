// function buildAdjList(N, A, B) {
//     let adjList = []
//     let edges = []
//
//     for (let i = 0; i <= N; i++) {
//         adjList.push([])
//     }
//
//     for (let i = 0; i < A.length; i++) {
//         let src = A[i]
//         let dest = B[i]
//
//         edges.push([src, dest])
//     }
//
//     for (let edge of edges) {
//         let [src, dest] = edge
//
//         adjList[src].push(dest)
//         adjList[dest].push(src)
//     }
//
//     for (let i = 1; i < adjList.length - 1; i++) {
//
//         if (!adjList[i].includes(i + 1)) {
//             return false
//         }
//     }
//     // console.log(adjList)
//     return true
//
// }
//
// // console.log(buildAdjList(4, [1, 2, 4, 4, 3], [2, 3, 1, 3, 1]))
// // console.log(buildAdjList(4, [1, 2, 1, 3], [2, 4, 3, 4]))
// // console.log(buildAdjList(6, [2, 4, 5, 3], [3, 5, 6, 4]))
// console.log(buildAdjList(3, [1, 3], [2, 2]))
















