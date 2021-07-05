// Shortest Path Visiting All Nodes
// You have an undirected, connected graph of n nodes labeled from 0 to n - 1.
// You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.
//
//     Return the length of the shortest path that visits every node.
//     You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.



// Javascript
// var shortestPathLength = module.exports = function(graph) {
//     var n = graph.length;
//     const MAX_VALUE = Number.MAX_VALUE;
//
//     if (n == 1) return 0;
//
//     sp = Array(n).fill(0).map(() => Array(n).fill(MAX_VALUE));
//
//     for (let i = 0; i < n; i++) {
//         for (j of graph[i]) {
//             sp[i][j] = 1;
//         }
//     }
//
//
//
//     for (let k = 0; k < n; k++)
//         for (let i = 0; i < n; i++)
//             for (let j = 0; j < n; j++)
//                 if (sp[i][k] < 10000 && sp[k][j] < 10000 &&
//                     sp[i][k] + sp[k][j] < sp[i][j])
//                     sp[i][j] = sp[i][k] + sp[k][j];
//
//
//
//     //scdp
//     let dp = Array(1<<n).fill(null).map(() => Array(n).fill(null));
//
//     for (let i = 0; i < n; i++) {
//         dp[1<<i][i] = 0;
//     }
//
//     let rtn = MAX_VALUE;
//     for (let i = 1; i < (1<<n); i++)
//         for (let j = 0; j < n; j++) {
//             if (dp[i][j] != null) continue;
//             if ((i & (1<<j)) == 0) continue;
//
//             let ans = MAX_VALUE;
//
//             for (let k = 0; k < n; k++) {
//                 if (((i & (1<<k)) != 0) && sp[j][k] < 10000 && dp[(i & ~(1 << j))][k] != null)
//                 {
//                     ans = Math.min(ans, sp[j][k] + dp[(i & ~(1 << j))][k]);
//
//                 }
//             }
//
//             if (ans != MAX_VALUE) {
//
//                 dp[i][j] = ans;
//                 if (i == ((1<<n) - 1))
//                     rtn = Math.min(rtn, dp[i][j]);
//             }
//
//         }
//
//     return rtn;
// }







// Java Solution
// #define vi vector<int>
// #define vvi vector<vi>
// #define pii pair<int, int>
//
// class Solution {
//     public:
//         int shortestPathLength(vvi& graph) {
//     int n = graph.size();               //node from 0 to n-1
//     vvi dp(n, vi(1<<n, INT_MAX) );
//     queue<pii>q;
//     for(int i=n-1; i>=0; i--){
//     dp[i][(1<<i)]=0;             //base case, we are at node i, therefore node i visited, cost is 0.
//     q.push(i, (1<<i) );
// }
//
//
// while(!q.empty() ){
//     pii tmp = q.front(); q.pop();
//     // go to every edge
//     for(auto x:graph[tmp.first]){
//         int state = tmp.second | (1<<x);
//         if(dp[x][state]>dp[tmp.first][tmp.second]+1){
//             //if updated then and only then
//             dp[x][state] = dp[tmp.first][tmp.second]+1;
//             q.push({x, state});
//         }
//     }
// }
//
//
// int mn=INT_MAX;
// for(int i=0; i<n; i++)
// mn = min(mn, dp[i][(1<<n)-1]);
// return mn;
// }
// };
