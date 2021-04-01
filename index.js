// function makeAnagram(a,b){
//     let map = [];
//     let index;
//     for(let i of a){
//         index = i.charCodeAt(0) - 97;
//         map[index] = map[index] || 0;
//         map[index] = map[index] + 1;
//     }
//     // console.log(map)
//     for(let i of b){
//         index = i.charCodeAt(0) - 97;
//         map[index] = map[index] || 0;
//         map[index] -= 1;
//     }
//     const maps = map.reduce((e,b) => {
//         return e + Math.abs(b);
//     },0);
//     return maps
// }
//
// // console.log(makeAnagram('abcabc','zabcabce'))
// console.log(makeAnagram( 'fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
// console.log(makeAnagram( 'cde', 'abc'))
//
//

// function countTriplets(arr, r) {
//     let count = 0;
//     let num_counts = {};
//     let triplet_store = {};
//
//     for (const num of arr) {
//         if(!num_counts[num]){
//             num_counts[num] = 0;
//         }
//
//         // *no care for remainders*
//         const prev_num = num / r;
//         if(!num_counts[prev_num]){
//             num_counts[prev_num] = 0;
//         }
//         const prev_count = num_counts[prev_num];
//
//         if(!triplet_store[prev_num]){
//             triplet_store[prev_num] = 0;
//         }
//         // prev_num used to store aggregate of 2nd and 1st position counts
//         count += triplet_store[prev_num];
//
//         num_counts[num]++;
//         if(!triplet_store[num]){
//             triplet_store[num] = 0;
//         }
//         // storing current num (2nd pos) counts plus previous (1st pos) counts
//         triplet_store[num] = triplet_store[num] + prev_count;
//     }
//     return count;
// }

// let k = String(2);
// let n = 35;
// let s = String("");
//
// // create string from numbers 0 to n
// for (let i = 0; i <= n; i++) s += i;
//
// // check each character for digit
// let occurs = s.split('').reduce((a, x) => x === k ? a + 1 : a, 0);
//
// console.log(s.split(''))
// // print result
// console.log(occurs);

// function getLetterRankWords(str) {
//     let letterRanks = {};
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     for (let i = 0; i < alphabet.length; i++) {
//         letterRanks[ i+1 ] = alphabet[i];
//     }
//     let results = {};
//     let gobbleString = function(str, remainingStr, posToConsider) {
//         // console.log('---his', str)
//         console.log(str, remainingStr, posToConsider)
//         // console.log(remainingStr)
//         if (remainingStr === "") {
//             console.log(results)
//             results[str] = true;
//             return;
//         }
//
//         if (posToConsider === 2 && remainingStr.length >= 2) {
//             console.log('---hi', str)
//                 // Consider the next two numbers
//             let nextTwoNum = Number( remainingStr[0] + remainingStr[1]);
//
//             // console.log(nextTwoNum)
//             // console.log(remainingStr)
//
//             let letter = letterRanks[ nextTwoNum ];
//             if (letter) {
//                 gobbleString(str + letter, remainingStr.substring(2), 1);
//                 if (remainingStr.length >= 2) {
//                     gobbleString(str + letter, remainingStr.substring(2), 2);
//                 }
//             }
//         } else {
//             let letter = letterRanks[ Number(remainingStr[0])];
//             // console.log(letter)
//             if (letter) {
//                 console.log(str, remainingStr, posToConsider)
//                 gobbleString(str + letter, remainingStr.substring(1), 1);
//                 if (remainingStr.length >= 2) {
//                     console.log(str, remainingStr, posToConsider)
//                     gobbleString(str + letter, remainingStr.substring(1), 2);
//                 }
//             }
//         }
//     }
//     gobbleString("", str, 1);
//     if (str.length >= 2) {
//         gobbleString("", str, 2);
//     }
//     return Object.keys(results);
// }
// const result = getLetterRankWords('1123');
// console.log(result)

// const we = 4
// const we1 = 4
// const we2 = 4
// const we3 = 4
//
// const further = we+we1+we2+we3
// const wepro = further/3
// console.log(wepro.toFixed(1))
// const moment = require('moment')
// const ner = Date.parse(new Date());
// const ne = moment(ner).add(3,'d').format()
// const we2 = Date.parse(ne)
//
// if(we2 > ner){
//     console.log('done')
// }else console.log('not done')

// Complete the lonelyinteger function below.
// function lonelyinteger(a) {
//     let unique = [];
//     for(let i = 0; i<=a.length; i++){
//         if(a.includes(a[i])){
//      console.log(a[i])
//         }
//
//
//         // for(let j = 0; j<=a.length; j++){
//         //     if(a[i] != a[j]){
//         //         console.log(a[j])
//         //     }
//         // }
//     }
// }
//
// console.log(lonelyinteger([1,2,3,4,3,2,1]))
//
//
//


// const twoSum = (nums, target) => {
//     const map = {};
//
//     for (let i = 0; i < nums.length; i++) {
//         const another = target - nums[i];
// console.log(map, another)
//         if (another in map) {
//             console.log(map, another)
//             return [map[another], i];
//         }
//
//         map[nums[i]] = i;
//     }
//
//     return null;
// };


// const arr = (ar) => {
//     let keep = []
//     let keen = {}
//     // const init
//
//     for(let i = 0; i< ar.length; i++){
//         let [first, second] = ar[i]
//
//         if(first === 1){
//             keen[second] = (keen[second] + 1) || 1
//         }
//
//         if(first === 2){
//             if()
//         }
//         // if(ar[i][0] === 3){
//         //     keep.pop()
//         // }
//     }
//     console.log(keen)
// };



// function repeatedString(s, n) {
//     let c = 0,
//         ca = 0,
//         r = n % s.length;
//     // console.log(s.length)
//     for (let i = s.length; i-- > 0;) {
//         // console.log(i)
//         if (s.charAt(i) == 'a') {
//             ++c
//             if (i < r){
//                 console.log(i, r)
//                 ++ca
//             }
//         }
//     }
//     console.log(ca)
//
//     return ((n - r) / s.length * c) + ca
// }
// console.log(repeatedString('abss', 10))



// const we = '!foer'
// console.log(we.charCodeAt(0))
//
// // const str = 'For more information, see Chapter 3.4.5.1';
// // const re = /see (chapter \d+(\.\d)*)/i;
// // const found = str.match(re);
// // console.log(found)
//
// // str match
// const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// const regexp = /[A-E]/gi;
// const matches_array = str.match(regexp);
//
// console.log(matches_array);
//
// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
//
// console.log(p.replaceAll('dog', 'monkey'));

// const isAnagram = function(s, t) {
//     console.log(s)
// };
//
// console.log(isAnagram("anagram","nagaram"))


// function makeAnagram(a,b){
//     let map = {};
//     let index;
//     for(let i of a){
//         // index = i.charCodeAt(0) - 97;
//         // map[index] = map[index] || 0;
//         // map[index] = map[index] + 1;
//         index = i.charCodeAt(0)- 97;
//         console.log(index)
//         map[index] = (map[index] + 1) || 1
//     }
//     console.log(map)
//
//     for(let i of b){
//         index = i.charCodeAt(0) - 97;
//         // map[index] = map[index] || 0;
//         // map[index] -= 1;
//
//         map[index] = map[index] || 0
//         map[index] -= 1
//         console.log(map)
//     }
//     console.log(Object.values(map).reduce((a,b) => {
//         return a + Math.abs(b);
//     },0));
// }
//
// console.log(makeAnagram('abcabc','zabcabcea'))
// console.log(makeAnagram( 'fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))

// const me = 'smart safe is doing well ooh'
// const we = me.match(/[smart]/g)
// console.log(we)

// function fizzBuzz(n) {
//
//     // Write your code here
//     for(let i = 1; i<=n; i++){
//        if(i%3 === 0 && i%5 === 0 ){
//            console.log('FizzBuzz')
//        }else if(i%3 ===0){
//            console.log('Fizz')
//        }else if(i%5 ===0){
//             console.log('Buzz')
//         }else console.log(i)
//     }
// }
//
// console.log(fizzBuzz(15))
// Competeative Game:
// A group of friends are playing a video game together. During the game, each player earns a number of points. At the end of a round, players who achieve at least a certain rank get to "level up" their characters to gain increased ability. Given the scroes of the players at the end of a round, how many players will be able to level up?
//     Example
//     n = 4
// k = 3
// scores = [100, 50,50 25]
// // function numPlayers(k, scores) {
//     let sot = []
//     for(let i = 0; i < scores.length; i++){
//         if(scores[i] !== 0){
//             sot.push(scores[i])
//         }
//     }
//     const store = [];
//     let count = 0;
//     // Write your code here
//     const arr = sot.sort((a,b)=> b-a)
//     for(let i = 0; i < arr.length; i++){
//         const num = arr[i]
//         const new1 = arr.indexOf(num)
//         store.push(new1 + 1)
//     }
//     for( let i =0; i < store.length; i++){
//         if(k >= store[i]) count++
//     }
//     return count
// }
// console.log(numPlayers(4, [2, 2,0,3, 4, 5]))


// function carParkingRoof(cars, k) {
//     // Write your code here
//    //  let cars2 = cars.sort((a,b)=>a-b)
//    //  const firstNum = cars2[0] - 1
//    //  let result = 0
//    //
//    //  for(let i = 0; i<cars2.length; i++){
//    //      result = Math.min(cars2[i], cars2[i + 1])
//    //      console.log(result)
//    //  }
//    // console.log(result - firstNum)
//
//    let  min1=999
//     // #sort the cars according to their positions
//     let cars2 = cars.sort((a,b)=>a-b)
//     // console.log(cars2)
//     // #taking all k combinations and checking the minimum value and maximum value
//     for (let i =0; i<cars2.length; i++ ){
//         // console.log(cars2[i])
//         if((cars2[i+k-1]-cars2[i])<min1){
//             min1=(cars2[i+k-1]-cars2[i])
//         }
//         console.log(min1)
//
//     }
//     // #checking every combination and update the minimum value into the min1
//
//     // #returning the answer
//     return min1
// }
//
// console.log(carParkingRoof([6,2,12,7], 3))

 // Question 3// disk space analysis



// Complete the sockMerchant function below.


// function findOdd(A) {
//     let res = 0;
//     for( let num in A) {
//         res ^= A[num];
//     }
//     return res;
// }
//
// console.log(findOdd([1,2,3,4,3,2,1]))

// console.log( 8 ^= 8)



//Solution 1
// Fastest Solution
// const twoSum = (nums, target) => {
//     const map = {};
//
//     for (let i = 0; i < nums.length; i++) {
//         const another = target - nums[i];
//
//         if ('2' in map) {
//             return [map[another], i];
//         }
//         map[nums[i]] = i;
//     }
//
//     return null;
// };
//
// console.log(twoSum([2,7,11,15], 9))

// 3. Reach the End in Time
// A 2-D grid consisting of some blocked(representing as "#") and some unblocked (represented as'.') cells is given. The starting position of a pointer is in the top-left corner of the grid. It is guaranteed that the bottom-right cell is unplocked. Each cells of the grid is connected with the right, left, top, and bottom cells (if those cells exist). It takes 1 second for a pointer to move from a cell to its adjacent cell. If the pointer can reach the bottom-right corner of the grid within k seconds, return the dstring 'Yes'. Otherwise, return the string 'NO'.valueOf()
//
// Example
// rows = 3
// grid = ['..##', '#.##', '#...']
// maxTime = 5
//
// ..##
//     #.##
//     #...
// it will take the pointer 5 seconds to reach the bottom right corner.
//     As long as k >= 5, return 'Yes'.

// function maxSubsetSum(arr) {
//     let arr1 = Math.max(...arr)
//     let arr2 = []
//     let arr3 = []
//     let arr4 = []
//     let arrSum = [1,2]
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] !== arr1){
//             arr2.push(arr[i])
//         }
//     }
//     let arr2C = Math.max(...arr2)
//     for(let i =0; i < arr2.length; i++){
//         if(arr2[i] !== arr2C){
//             arr3.push(arr2[i])
//         }
//     }
//     let arr3C = Math.max(...arr3)
//     for(let i =0; i < arr3.length; i++){
//         if(arr3[i] !== arr3C){
//             arr4.push(arr3[i])
//         }
//     }
//     console.log(arr3C)
//     console.log(arr4)
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] === arr1 && arr[i - 1] !== arr3C){
//       return arr1 + arr2C
//   }
// }
//     return arr1+arr3C
//
// }

// function maxSubsetSum(arr) {
//     let maxArr = [];
//     maxArr.push(0);
//     maxArr.push(arr[0]);
//     for(let i=2;i<=arr.length;++i){
//         maxArr.push(Math.max(maxArr[i-2] + arr[i-1],maxArr[i-1],arr[i-1]));
//     }
//     return maxArr.pop();
// }

// function maxSubsetSum(arr) {
//     let inc = arr[0], exc = 0;
//     for (let i = 1; i < arr.length; i++) {
//         // console.log(arr[i])
//         let newInc = exc + arr[i];
//         // [2,1,5]
//         console.log(newInc, '----')
//         let newExc = inc > exc ? inc : exc;
//         console.log(newExc)
//         inc = newInc;
//         exc = newExc;
//     }
//     return inc > exc ? inc : exc;
// }
//
// console.log(maxSubsetSum([2,3,1,1]))

