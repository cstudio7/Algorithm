

// A Group of friends are playing a video game together. During the game,
// each player earns a number of points.
//     At the end of a round, players who achieve at least a certain rank get to "level up" their characters to gain increased abilities.
//     Given the scores of the players at the end of a round,
//     how many players will be able to level up?
//
//     Note: No players with equal scores will have equal ranks,
//     but the player with the next lower score will be ranked
// based on the position within the list of all players' score.
// For example, if there are four players, and three players tie for first place,
//     their ranks are 1,1,1,4.
//
// Note; No player with score of 0 can level up, regardless of rank.constructor
//
// Example
// n = 4
// k = 3
// scroes = [100, 50,50,25]
//
// These players ranks are [1,2,2,4],
// Because the players need to have a rank of at least 3 to level up,
// only the first three players qualify.
//     Therefore the answer is 3.
//
// Solution
//
//  An Optimal Solution (The best and fastest Solution)
// function numPlayers(k, scores) {
//     let count = 0
//     const arr = scores.sort((a,b)=> b-a).filter(a=>a!==0)
//     let dup = [...new Set(arr)]
//     let map = {}
//     for(let i = 0; i < arr.length; i++){
//         map[arr[i]] = (map[arr[i]] + 1) || 1
//     }
//     for(let i = 0; i<dup.length ;i++){
//         if(count < k){
//             count += map[dup[i]]
//         } else {
//             return count
//         }
//     }
//     return count
// }
// console.log(numPlayers(3,[100,50,50,25,0]))
// console.log(numPlayers(4,[2,2,3,4,5]))
// console.log(numPlayers(4,[20,40,60,80,100]))





// try 1

// function numPlayers(k, scores) {
//     let count = 0;
//     const arr = scores.sort((a,b)=> b-a).filter(a=> a!==0)
//     for(let i = 0; i < arr.length; i++){
//         const num = arr[i]
//         const new1 = arr.indexOf(num)
//         if(k >= new1 + 1) count++
//     }
//     return count
// }
// console.log(numPlayers(3,[100,50,0,50,25]))

  // try new on Hashing
// function numPlayers(k, scores) {
//     let rank = 0
//     let count = 0
//     const arr = scores.sort((a,b)=> b-a)
//     let map = {}
//     for(let i = 0; i < arr.length; i++){
//         if(scores[i] === 0) continue
//         map[scores[i]] = (map[scores[i]] + 1) || 1
//     }
//     for(let i in map){
//         map2.push(i)
//     }
//     for(let i = map2.length -1; i>=0 ;i--){
//         if(count >= k) return count
//         rank++
//         count += map[map2[i]]
//     }
//     // console.log(count, rank)
// }
// console.log(numPlayers(3,[100,50,50,25,0]))

// try  2

// function numPlayers(k, scores) {
//     let count = 0;
//     const arr = scores.sort((a,b)=> b-a)
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 0) break
//         console.log('hi')
//         const new1 = arr.indexOf(arr[i])
//         console.log(i,new1)
//         if(k >= new1 + 1) count++
//     }
//     return count
// }
// console.log(numPlayers(3,[100,50,50,50,25]))


// function numPlayers(k, scores){
    let scores1 = scores.sort((a,b)=> b-a).filter(a=> a!==0)
    let arr = [1]
    for(let i =1; i<scores1.length; i++){
        if(scores1[i] === scores1[i-1]){
            arr.push(arr[i-1])
        }else{
            arr.push(i+1)
        }
    }
    console.log(arr)
// }
//
// console.log(numPlayers(3,[100,50,50,25]))


function numPlayers(k, scores) {
    let sot = []
    for(let i = 0; i < scores.length; i++){
        if(scores[i] !== 0){
            sot.push(scores[i])
        }
    }
    const store = [];
    let count = 0;
// Write your code here
const arr = sot.sort((a,b)=> b-a)
for(let i = 0; i < arr.length; i++){
    const num = arr[i]
    const new1 = arr.indexOf(num)
    store.push(new1 + 1)
}
for( let i =0; i < store.length; i++){
    if(k >= store[i]) count++
}
return count
}
console.log(numPlayers(4, [2, 2,0,3, 4, 5]))


const { performance } = require('perf_hooks');

var startTime = performance.now()

function numPlayers(k, scores) {
    let count = 0;
    const arr = scores.sort((a,b)=> b-a).filter(a=> a!==0)
    for(let i = 0; i < arr.length; i++){
        const num = arr[i]
        const new1 = arr.indexOf(num)
        if(k >= new1 + 1) count++
    }
    return count
}
console.log(numPlayers(4, [2, 2,0,3, 4, 5]))


var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
