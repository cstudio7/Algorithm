//
//
// In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different amounts of money, and different levels of quietness.
//
//     For convenience, we'll call the person with label x, simply "person x".
//
// We'll say that richer[i] = [x, y] if person x definitely has more money than person y.  Note that richer may only be a subset of valid observations.
//
// Also, we'll say quiet[x] = q if person x has quietness q.
//
// Now, return answer, where answer[x] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]), among all people who definitely have equal to or more money than person x.
//
//     Example 1:
//
// Input: richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
// Output: [5,5,2,5,4,5,6,7]
// Explanation:
//     answer[0] = 5.
// Person 5 has more money than 3, which has more money than 1, which has more money than 0.
// The only person who is quieter (has lower quiet[x]) is person 7, but
// it isn't clear if they have more money than person 0.
//
// answer[7] = 7.
// Among all people that definitely have equal to or more money than person 7
// (which could be persons 3, 4, 5, 6, or 7), the person who is the quietest (has lower quiet[x])
// is person 7.
//
// The other answers can be filled out with similar reasoning.

// 5ms 99%
// class Solution {
//     ArrayList<Integer>adjecentlist[];
//     int res[];
//     int quiet[];
//     public int[] loudAndRich(int[][] richer, int[] quiet) {
//     //x>y
//     int len=quiet.length;
//     res=new int[len];
//     this.quiet=quiet;
//     adjecentlist=new ArrayList[len];
//     for(int i=0;i<len;i++)adjecentlist[i]=new ArrayList<>();
//     for(int i=0;i<richer.length;i++){
//     int v1=richer[i][0];
//     int v2=richer[i][1];
//     adjecentlist[v2].add(v1);
// }
// for(int i=0;i<res.length;i++)res[i]=-1;
// for(int i=0;i<len;i++){
//     if(res[i]!=-1)continue;
//     dfs(i);
// }
// return res;
// }
// public int[] dfs(int root){
//     int q=Integer.MAX_VALUE;
//     int index=-1;
//     if(quiet[root]<q){
//         q=quiet[root];
//         index=root;
//     }
//     List<Integer>childs=adjecentlist[root];
//     for(int child:childs){
//         if(res[child]!=-1){
//             if(quiet[res[child]]<q){
//                 q=quiet[res[child]];
//                 index=res[child];
//             }
//             continue;
//         }
//         int back[]=dfs(child);
//         if(back[1]<q){
//             q=back[1];
//             index=back[0];
//         }
//     }
//     int ans[]=new int[2];
//     ans[0]=index;ans[1]=q;
//     res[root]=index;
//     return ans;
// }
// }

// Bfs Javascript
// 140ms 14.29%

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
// var loudAndRich = function(richer, quiet) {
//     function Node(val, quietness) {
//         this.val = val
//         this.quietness = quietness
//         this.min = quietness
//         this.outcome = val
//         this.nexts = new Set()
//         this.prevCount = 0
//         this.visited = false
//
//         Node.map.set(val, this)
//     }
//     Node.map = new Map()
//     Node.get = val => Node.map.get(val)
//
//     // build nodes
//     const len = quiet.length
//     for (let i = 0; i < len; i++) {
//         const quietness = quiet[i]
//         const node = new Node(i, quietness)
//     }
//
//     // build edges
//     for (const relation of richer.values()) {
//         const [fromVal, toVal] = relation
//         const [fromNode, toNode] = [Node.get(fromVal), Node.get(toVal)]
//         fromNode.nexts.add(toNode)
//         toNode.prevCount++
//     }
//
//     const queue = []
//     for (const node of Node.map.values()) {
//         if (node.prevCount === 0) {
//             queue.push(node)
//             node.visited = true
//         }
//     }
//
//     while (queue.length) {
//         const head = queue.shift()
//         const headQuietness = head.min
//         for (const next of head.nexts.values()) {
//             if (next.min > headQuietness) {
//                 next.min = headQuietness
//                 next.outcome = head.outcome
//             }
//
//             next.prevCount--
//             if (next.prevCount === 0) {
//                 queue.push(next)
//                 next.visited = true
//             }
//         }
//     }
//
//
//     let result = new Array(len)
//     for (let i = 0; i < len; i++) {
//         const node = Node.get(i)
//         const outcome = node.outcome
//         result[i] = outcome
//     }
//
//
//     return result
// };
