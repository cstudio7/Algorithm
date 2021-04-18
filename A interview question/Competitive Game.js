// A Group of friends are playing a video game together. During the game, each player earns a number of points.
//     At the end of a round, players who achieve at least a certain rank get to "level up" their characters to gain increased abilities. Given the scores of the players at the end of a round,
//     how many players will be able to level up?
//
//     Note: No players with equal scores will have equal ranks, but the player with the next lower score will be ranked
// based on the position within the list of all players' score. For example, if there are four players, and three players tie for first place,
//     their ranks are 1,1,1,4.
//
// Note; No player with score of 0 can level up, regardless of rank.constructor
//
// Example
// n = 4
// k = 3
// scroes = [100, 50,50,25]
//
// These players ranks are [1,2,2,4], Because the players need to have a rank of at least 3 to level up, only the first three players qualify.
//     Therefore the answer is 3.
//
// Solution
//


// A more Optimal Solution

// function numPlayers(k, scores) {
//     let count = 0;
// // Write your code here
//     const arr = scores.sort((a,b)=> b-a).filter((a,b)=> b-a)
//     for(let i = 0; i < arr.length; i++){
//         const num = arr[i]
//         const new1 = arr.indexOf(num)
//         if(new1 + 1 <= k) count++
//     }
//     return count
// }
// console.log(numPlayers(2, [50,50,100,25]))


// function numPlayers(k, scores){
//     let scores1 = scores.sort((a,b)=> b-a).filter(a=> a!==0)
//     let arr = [1]
//     for(let i =1; i<scores1.length; i++){
//         if(scores1[i] === scores1[i-1]){
//             arr.push(arr[i-1])
//         }else{
//             arr.push(i+1)
//         }
//     }
//     console.log(arr)
// }
//
// console.log(numPlayers(3,[100,50,50,25]))


// // function numPlayers(k, scores) {
//     let sot = []
//     for(let i = 0; i < scores.length; i++){
//         if(scores[i] !== 0){
//             sot.push(scores[i])
//         }
//     }
//     const store = [];
//     let count = 0;
// Write your code here
// const arr = sot.sort((a,b)=> b-a)
// for(let i = 0; i < arr.length; i++){
//     const num = arr[i]
//     const new1 = arr.indexOf(num)
//     store.push(new1 + 1)
// }
// for( let i =0; i < store.length; i++){
//     if(k >= store[i]) count++
// }
// return count
// }
// console.log(numPlayers(4, [2, 2,0,3, 4, 5]))


//Done and dusted
// solve also with maps