// There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.
//
// You are given a string colors where colors[i] is a lowercase English letter representing the color of the ith node in this graph (0-indexed).
// You are also given a 2D array edges where edges[j] = [aj, bj] indicates that there is a directed edge from node aj to node bj.
//
//     A valid path in the graph is a sequence of nodes x1 -> x2 -> x3 -> ... -> xk such that there is a directed edge from xi to xi+1 for every 1 <= i < k. The color value of the path is the number of nodes that are colored the most frequently occurring color along that path.
//
//     Return the largest color value of any valid path in the given graph, or -1 if the graph contains a cycle.

// Example 1
// Input: colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
// Output: 3
// Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored "a" (red in the above image).

// Example 2
// Input: colors = "a", edges = [[0,0]]
// Output: -1
// Explanation: There is a cycle from 0 to 0.



// Solution
// var largestPathValue = function (colors, edges) {
//
//     let n = colors.length;
//     let graph = new Map(), stack = [];
//     let posMap = new Map();
//     let dp = [], answer = 0;
//
//     //create graph
//     for (let edge of edges) {
//         if (!graph.has(edge[0])) {
//             graph.set(edge[0], []);
//         }
//         let val = graph.get(edge[0]);
//         val.push(edge[1]);
//     }
//
//     //dfs for all numbers
//     for (let v = 0; v < n; v++) {
//         //do dfs for v
//         if (!dp[v])
//             getPath(v);
//     }
//
//     if (isCycleExists()) {
//         return -1;
//     }
//
//     function isCycleExists() {
//         let pos = 0;
//         // console.log(stack);
//         while (stack.length > 0) {
//             let val = stack.pop();
//             posMap.set(val, pos++);
//         }
//         // console.log(posMap);
//         //check for each vertex
//         for (let v = 0; v < n; v++) {
//             if (graph.has(v)) {
//                 for (let ch of graph.get(v)) {
//                     if(posMap.get(v) >= posMap.get(ch)) {
//                         // console.log(ch, v);
//                         return true;
//                     }
//                 }
//             }
//         }
//         return false;
//     }
//
//     function getPath(v) {
//         if (dp[v]) {
//             return;
//         }
//         dp[v] = {};
//         if (graph.has(v)) {
//             for (let ch of graph.get(v)) {
//                 //if ch is not already visited
//                 if (!dp[ch]) {
//                     getPath(ch);
//                 }
//                 //for all colors in dp[ch] update dp[v]
//                 for (let co in dp[ch]) {
//                     let existing = dp[v][co] || 0;
//                     dp[v][co] = Math.max(existing, dp[ch][co]);
//                     answer = Math.max(answer, dp[v][co]);
//                 }
//             }
//         }
//         //no further outgoing nodes
//         dp[v][colors[v]] = (!dp[v][colors[v]]) ? 1 : dp[v][colors[v]] + 1;
//         answer = Math.max(answer, dp[v][colors[v]]);
//
//         stack.push(v);
//     }
//
//     // console.log(stack);
//     return answer;
// };
