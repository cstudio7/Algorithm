

// function bfs(graph, root) {
//     var nodesLen = {};
//
//     for (let i = 0; i < graph.length; i++) {
//         nodesLen[i] = Infinity;
//     }
// // console.log(nodesLen)
//     nodesLen[root] = 0;
//
//     var quene = [root];
//     var current;
//
//     // console.log(quene)
//     while (quene.length !== 0) {
//         current = quene.shift();
//
//         // console.log(current, graph[current])
//         var curConnected = graph[current];
//         // console.log(curConnected)
//         var neighborIdx = [];
//         var idx = curConnected.indexOf(1);
//         console.log(idx)
//         while(idx !== -1) {
//             neighborIdx.push(idx);
//             idx = curConnected.indexOf(1, idx + 1);
//         }
//         console.log(idx, neighborIdx)
//
//         for(let j = 0; j< neighborIdx.length; j++){
//             if(nodesLen[neighborIdx[j]] === Infinity) {
//                 nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
//                 quene.push(neighborIdx[j]);
//             }
//         }
//     }
//
//     // return nodesLen;
// }
//
// var exBFSGraph = [
//     [0,1,1,1,0],
//     [0,0,1,1,1],
//     [1,1,0,0,0],
//     [0,0,0,1,0],
//     [0,1,0,0,0]
// ];
// console.log(bfs(exBFSGraph,1))
