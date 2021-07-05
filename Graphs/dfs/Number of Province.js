// Share
// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
//
//     A province is a group of directly or indirectly connected cities and no other cities outside of the group.
//
//     You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
//
//     Return the total number of provinces.

// 0ms 100
// class Solution {
//     public int findCircleNum(int[][] isConnected) {
//     boolean[] visited = new boolean[isConnected.length];
//     int count = 0;
//     for(int k=1;k<=isConnected.length;k++) {
//     int j = k-1;
//     if(visited[j]) {
//     continue;
// }
// count++;
// dfsUtil(j, isConnected, visited);
// }
// return count;
// }
//
// public void dfsUtil(int city, int[][] isConnected, boolean[] visited) {
//     visited[city] = true;
//     int[] connectedCities =  isConnected[city];
//     for(int i=0;i<connectedCities.length;i++) {
//         if(i == city) {
//             continue;
//         }
//         if( connectedCities[i] == 1 && !visited[i]) {
//             dfsUtil(i, isConnected, visited);
//         }
//     }
// }
// }



// 1ms 100%
// class Solution {
//     public int findCircleNum(int[][] isConnected) {
//     int n = isConnected.length;
//     boolean[] visited = new boolean[n];
//     int provinces = 0;
//     for (int i = 0; i < n; i++) {
//     if (!visited[i]) {
//     dfs(i, isConnected, visited);
//     provinces++;
// }
// }
// return provinces;
// }
//
// private void dfs(int v, int[][] graph, boolean[] visited) {
//     visited[v] = true;
//     for (int neigh = 0; neigh < graph[0].length; neigh++) {
//         if (graph[v][neigh] == 1 && !visited[neigh]) {
//             dfs(neigh, graph, visited);
//         }
//     }
// }
// }
