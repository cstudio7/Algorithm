// Minimum Number of Vertices to Reach All Nodes
// Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.
//
//     Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.
//
// Notice that you can return the vertices in any order.


// Ex1
// var findSmallestSetOfVertices = function(n, edges) {
//     const degree = Array(n).fill(0);
//     const output = [];
//     edges.forEach(([u, v]) => degree[v]++);
//     degree.forEach((deg, i) => !deg && output.push(i));
//     return output;
// };

// The key to this problem is to map all the to[i] to from[i]. Any index in the map that doesn't have a value is a node that isn't reachable.
//
//     Example 1:
// Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// Output: [0,3]
//
// From | To
// 0 |
// 1 | 0
// 2 | 0, 4
// 3 |
// 4 | 3
// 5 | 2
// You'll notice that index 0 and 3 doesn't have a value. Therefore that node isn't reachable and would need to be part of the answer.
//
// var findSmallestSetOfVertices = function(n, edges) {
//     let map = new Array(n);
//     let ans = [];
//
//     for (let [index,value] of edges) {
//         map[value] = 1;
//     };
//
//     for (let i = 0; i < n; i++) {
//         if (!map[i]) ans.push(i);
//     };
//
//     return ans;
// };
