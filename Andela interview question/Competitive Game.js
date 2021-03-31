// A Group of friends are playing a video game together. During the game, each player earns a number of points.
//     At the end of a round, players who achieve at least a certain rank get to "level up" their characters to gain increased abilities. Given the scores of the players at the end of a round,
//     how many players will be able to level up?
//
//     Note: No players with equal scores will have equal ranks, but the player with the next lower score will be ranked
// based on the position within the list of all players' score. For example, if there are four players, and three players tie for first place,
//     their ranks are 1,1,1,4.
//
// Note; No player witha score of 0 can level up, regardless of rank.constructor
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
//  To solve first
// 1. First remove scores of 0 from the array
// 2. ceate a temp and count variable
// 3. create an empty array
// 4. Sort the array from highest to lowest
// 5. Do a for loop that starts from 1 and from the second item in the array
// 6.giving a default of 1 at the beginning
// 7. Add the indexes to an empty array on the condition that one is not equal to the previous
// 8. if equall then repeat the previous index
// 9.finally create a loop to increase count based on the constant


function numPlayers(k, scores){
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
}

console.log(numPlayers(3,[100,50,50,25]))

//Done and dusted
// solve also with maps