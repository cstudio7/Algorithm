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
//
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
//
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
//
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
//
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
//
//
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
//
//
//
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
//
//
//
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
//
// const isAnagram = function(s, t) {
//     console.log(s)
// };
//
// console.log(isAnagram("anagram","nagaram"))
//
//
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
//
// const me = 'smart safe is doing well ooh'
// const we = me.match(/[smart]/g)
// console.log(we)
//
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
//
//
//  Question 3// disk space analysis
//
//
//
// Complete the sockMerchant function below.
//
//
// function findOdd(A) {
//     let res = 0;
//     for( let num in A) {
//         res ^= A[num];
//     }
//     return res;
// }
//
// console.log(findOdd([1,2,3,4,3,2,1]))
//
// console.log( 8 ^= 8)
//
//
//
// Solution 1
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
//
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
//
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
//
// function maxSubsetSum(arr) {
//     let maxArr = [];
//     maxArr.push(0);
//     maxArr.push(arr[0]);
//     for(let i=2;i<=arr.length;++i){
//         maxArr.push(Math.max(maxArr[i-2] + arr[i-1],maxArr[i-1],arr[i-1]));
//     }
//     return maxArr.pop();
// }
//
// function maxSubsetSum(arr) {
//     // let inc = arr[0], exc = 0;
//     // for (let i = 1; i < arr.length; i++) {
//     //     // console.log(arr[i])
//     //     let newInc = exc + arr[i];
//     //     // [2,1,5]
//     //     console.log(newInc, '----')
//     //     let newExc = inc > exc ? inc : exc;
//     //     console.log(newExc)
//     //     inc = newInc;
//     //     exc = newExc;
//     // }
//     // return inc > exc ? inc : exc;
//
//     for(let i = 0; i<arr.length;i++){
//
//
//         i--;
//     }
//     console.log(arr)
// }
//
// console.log(maxSubsetSum([2,3,1,1]))
//
// const me = (arr, m) => {
//
//     for(let i = 0; i < m; i++){
//         let hold = arr[arr.length - 1]
//         arr.pop()
//         arr.unshift(hold)
//     }
//     console.log(arr)
// }
// console.log(me([1,2,3,4], 2))
//
//
// const twoSum = (nums) => {
//     let total = 0;
//     let count
//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i]
//         count = ( nums[i] * 10)/2 - total
//     }
//     return count
// };
//
// console.log(twoSum([1,2,3,4,5,6,7,8,9]))
//
// const john_mary = (str) => {
//
//     let regex1 = /John/gi;
//     let regex = /Mary/gi;
//     let e =str.replace(regex1, "n")
//     let f = e.replace(regex, "b")
//     let h = 0;
//     let k = 0;
//     for(let i in f){
//         if(f[i] === 'n') h++
//         if(f[i] === 'b') k++
//     }
//     return h === k ? true : false
// };
//
// console.log(john_mary('John&MarYkkddidjohn'))
//
// const numOfItems = (arr, items) => {
//     let result = 0
//     for(let  i = 0; i < arr.length; i++){
//         let count = 0
//         if(arr[i] === items) result++
//         if (Array.isArray(arr[i])) {
//             // console.log(arr[i])
//             let y
//             y = me(arr[i], items)
//             result+=y
//         }
//     }
//     return result
//
// }
//
//  const me = (arr,items) => {
//      let count = 0
//      for(let  i = 0; i < arr.length; i++){
//          if(arr[i] === items) count++
//          if (Array.isArray(arr[i])) {
//              let y
//              y = me(arr[i],items)
//              count+=y
//          }
//      }
//      return count
//  }
//
//
// console.log(numOfItems([25,3,'h','g'], 25))
//
// function filterNumbersFromArray(arr) {
//     // Write the code that goes here
//     for(let i =0; i< arr.length; i++){
//         console.log(typeof arr[i])
//     }
//
// }
//
// console.log(filterNumbersFromArray([2,'3']))
//
// async function retryRequest(promiseFunc, nrOfRetries) {
//     try {
//          for(let i = 0; i<nrOfRetries; i++){
//              return promiseFunc
//          }
//          return  promiseFunc
//     }catch (e) {
//         return e
//     }
// }
//
// let hasFailed = false;
// function getUserInfo() {
//     return new Promise((resolve, reject) => {
//         if(!hasFailed) {
//             hasFailed = true;
//             reject("Exception!");
//         } else {
//             resolve("Fetched user!");
//         }
//     })
// }
// let promise = retryRequest(getUserInfo(), 3)
// if(promise) {
//     promise.then((result) => console.log(result))
//         .catch((error) => console.log("Error!"));
// }
// module.exports.retryRequest = retryRequest;
//
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
//
// function carParkingRoof(cars, k) {
//     // Write your code here
//     let cars2 = cars.sort((a,b)=>a-b)
//     let count = 0
//     count = cars2[0]
//     for (let i =cars2[0]; i<cars2[k-1]; i++ ){
//         count++
//     }
//     return count
// }
//
// console.log(carParkingRoof([2,10,8,17], 3))
//
//
//
//
// const diskSpaceAnalysis = (arr, m) => {
//     const result = []
//     // For following array [2, 5, 4, 6, 8] with x = 3, the answer is 4 see below
//     //
//     // The chunks would be:
//     //
//     //     [2, 5, 4] -> min: 2
//     //     [5, 4, 6] -> min: 4
//     //     [4, 6, 8] -> min: 4
//
//     let n = arr.length
//     for(let i = 0; i<arr.length; i++){
//         if(i >= n-2) break
//         result.push(Math.min(...arr.slice(i,m + i)))
//         console.log(arr)
//     }
//     return Math.max(...result)
// }
// console.log(diskSpaceAnalysis([2,5,4,6,8], 3))
//
// let arr = [1,2,3,2,5,6,6,4,]
// let me = arr.map(x=> arr.indexOf(x) < 3 ? x : 0 )
// console.log(me)
// console.log(arr.splice(0,3))
//
// var maxArea = function(height) {
//     let count = 0;
//     let max
//     for(let i = 0; i <height.length; i++){
//         let min = height[i];
//         if(height[i] > (height[height.length - i])) min = (height[height.length - i])
//         console.log(height[i] , (height[height.length - i]), min)
//        max = min * min
//        if( max > count) count = max
//     }
//     return count
// };
//
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
//
//
// const reachTheEnd = (arr, maxTime) => {
//     const grid = arr.map((x) => x.split(''))
//     console.log(grid)
//     let count
//     let result
//     let me = 'Yes'
//     for(let i =0; i<arr.length;i++){
//       for(let j =0; j<arr[i].length; j++){
//           // console.log(arr[i][j])
//           if( arr[i][j] === '.'){
//               let s = recurse(i, j, arr, result)
//               s === 'No' ? me = 'No' : ''
//           }
//
//       }
//     }
//
// return me
//     // const grid = []
//     // for(let x in arr){
//     //     grid.push(arr[x].split(''))
//     // }
//     //
//     // console.log(grid)
//     // let count = 0;
//     // let result = 'Yes';
//     // for(let i = 0; i < grid.length;i++){
//     //     for(let j = 0; j <grid[i].length;j++){
//     //         if (grid[i][j] === '.'){
//     //             count++
//     //             let me
//     //             terraform(parseInt(i), parseInt(j),grid) === 'No' ? result = me : ''
//     //         }
//     //     }
//     // }
//     // return count - 1 <= maxTime ? result : 'No'
// }
//
// const recurse = (i,j,arr, re) => {
//
//
//      if(arr[i][j+1] === 'undefined' || arr[i + 1] === undefined || arr[i+1][j] === undefined) return
//      if( arr[i][j+1] === '#' & arr[i+1][j] === '#') {
//          arr[i][j] = '#'
//          return 'No'
//      }
//      // console.log(arr)
//
//     recurse(i,j+1,arr)
//     recurse(i+1,j,arr)
// }
//
//
// convert stuff around to water
// const terraform = (i, j,grid) => {
//     if((grid[i][j+1] === undefined || grid[i+1] === undefined || grid[i+1][j] === undefined )) return
//     if((grid[i+1][j] === '#' && grid[i][j+1] === '#')) {
//         grid[i][j] = '#';
//         return 'No'
//     }
//     terraform(i, j+1, grid);
//     terraform(i+1, j, grid);
//     if(terraform(i+1, j, grid) === 'No' && terraform(i, j+1, grid) === 'No') return 'No'
// }
//
// var foo = "bar";
//
// function bar() {
//     var foo = "baz";
//
//     function baz(foo) {
//         foo = "bam";
//         bam = "yay";
//     }
//     baz();
// }
// bar();
// foo;
// bam;
// baz();
//
// var threeSum = function(nums) {
//     var rtn = [];
//     if (nums.length < 3) {
//         return rtn;
//     }
//     nums = nums.sort(function(a, b) {
//         return a - b;
//     });
//     for (var i = 0; i < nums.length - 2; i++) {
//         if (nums[i] > 0) {
//             return rtn;
//         }
//         if (i > 0 && nums[i] == nums[i - 1]) {
//             continue;
//         }
//         for (var j = i + 1, k = nums.length - 1; j < k;) {
//             console.log(k)
//             if (nums[i] + nums[j] + nums[k] === 0) {
//                 rtn.push([nums[i], nums[j], nums[k]]);
//                 j++;
//                 k--;
//                 while (j < k && nums[j] == nums[j - 1]) {
//                     j++;
//                 }
//                 while (j < k && nums[k] == nums[k + 1]) {
//                     k--;
//                 }
//             } else if (nums[i] + nums[j] + nums[k] > 0) {
//                 k--;
//             } else {
//                 j++;
//             }
//         }
//     }
//     return rtn;
// };
//
//
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
//
// class emp{
//     constructor(name, address){
//         this.name = name;
//         this.address = address
//     }
//
//     eat(){
//         console.log('I am happy ' + this.name)
//     }
// }
//
// let food = new emp('Victoria', 'Kano State')
//
// console.log(food.eat())
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//  function numPlayers(k, scores){
// let scores1 = scores.sort((a,b)=> b-a).filter(a=> a!==0)
// let arr = [1]
// for(let i =1; i<scores1.length; i++){
//     if(scores1[i] === scores1[i-1]){
//         arr.push(arr[i-1])
//     }else{
//         arr.push(i+1)
//     }
// }
// console.log(arr)
// // }
// //
// // console.log(numPlayers(3,[100,50,50,25]))
//
//
//
//
//
//
//
//
//
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”."
//
//
// function fizzBuzz() {
//     let result = []
//     const count = 15
//     for(let i = 1; i <= count; i++){
//         if(i%3 === 0 && i%5 === 0){
//             result.push('FIZZBUZZ')
//         }
//         else if(i%5 === 0){
//             result.push('BUZZ')
//         }else if(i%3 === 0) {
//             result.push('FIZZ')
//         } else result.push(i)
//
//     }
//     return result
// }
//
// console.log(fizzBuzz())
//
// const shoppersDelight = (a,b,c,d, budget) => {
//     let count = 0;
//     let jeansAndShoes = []
//     let skirtAndTops = []
//     for(let i = 0; i < a.length; i++){
//         for(let j = 0; j<b.length;j++){
//             jeansAndShoes.push(a[i] + b[j])
//         }
//     }
//
//     for(let i = 0; i < c.length; i++){
//         for(let j = 0; j<d.length;j++){
//             skirtAndTops.push(c[i] + d[j])
//         }
//     }
//     jeansAndShoes.sort((a,b)=> a-b)
//     skirtAndTops.sort((a,b)=> b-a)
//     let limit = 0
//     let result = 0
//     for( let cost of jeansAndShoes){
//         // console.log(cost)
//         let remaining = budget - cost
//         console.log(remaining)
//         while(limit < skirtAndTops.length && skirtAndTops[limit] < remaining){
//             console.log('k')
//             limit +=1
//         }
//         console.log(limit)
//         if(limit ===   skirtAndTops.length) break
//         result += skirtAndTops.length - limit
//
//
//     }
//
//     console.log(jeansAndShoes, skirtAndTops, result, limit)
// }
//
// console.log(shoppersDelight([4],[3,4,1],[3,2],[4], 12))
//
//
//
// const getUmbrellas = (amount, coins) => {
//     let dp = new Array(amount+1).fill(Infinity);
//     coins.sort((a,b) => a-b)
//     //initialize
//     dp[0]=0
//     for(let i=1; i<=amount;i++){
//         for(let j=0; j<coins.length;j++){
//             if(i>=coins[j]&&dp[i-coins[j]]!=Infinity){
//                 console.log(i, j)
//                 dp[i] = Math.min(dp[i-coins[j]]+1,dp[i])
//             }
//         }
//         // console.log(dp)
//     }
//
//     if(dp[amount] === Infinity){
//         return -1
//     }
//     return dp[amount]
// }
//
//
// console.log(getUmbrellas(11,[1,2,5]))
//
// function carParkingRoof(cars, k) {
// //     // Write your code here
//     let cars2 = cars.sort((a,b)=>a-b)
//     let count = 0
//     count = cars2[k-1] - cars2[0];
//     for (let i = 0; i<cars2.length -k; i++ ){
//         console.log(i)
//         if(count > cars2[k-1+i] - cars2[i]){
//             count = cars2[k-1+i] -cars2[i]
//         }
//     }
//     return count + 1
// }
//
// console.log(carParkingRoof([1,2,3,4,18],3))
//
//
// function gamingArray(arr) {
//     var maxInt = arr[0];
//     var counter = 1;
//     if(arr.length === 1){
//         return "BOB";
//     }
//     // console.log('hi')
//     for(let i = 1; i < arr.length; i++){
//         // console.log('hi')
//         if(arr[i] > maxInt){
//             maxInt = arr[i];
//             counter++
//             console.log(maxInt, counter)
//         }
//     }
//
//     if(counter%2 === 0){
//         return "ANDY";
//     }
//     else{
//         return "BOB"
//     }
// }
// console.log(gamingArray([2,3,4,5,4,1]))
//
//
// var coinChange = function(coins, amount) {
//     let dp = new Array(amount+1).fill(Infinity);
//     coins.sort((a,b) => a-b)
//
//     //initialize
//     dp[0]=0
//     for(let i=1; i<=amount;i++){
//         for(let j=0; j<coins.length;j++){
//             if(i>=coins[j]&&dp[i-coins[j]]!=Infinity){
//                 dp[i] = Math.min(dp[i-coins[j]]+1,dp[i])
//             }
//
//         }
//
//     }
//     console.log(dp)
//     if(dp[amount] === Infinity){
//         return -1
//     }
//     return dp[amount]
//
// };
//
//
// const coinChange = (coins, amount) => {
//     const cache = Array(amount + 1);
//     cache.fill(amount + 1);
//     cache[0] = 0;
//
//     for (let i = 1; i <= amount; i++) {
//         for (let j = 0; j < coins.length; j++) {
//             if (coins[j] <= i) {
//                 cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1);
//             }
//         }
//     }
//     console.log(cache)
//     return cache[amount] > amount ? -1 : cache[amount];
//
//     const cache = Array(amount + 1 );
//     cache.fill(amount+1)
//
//     cache[0] = 0;
//
//     for(let i = 1; i<=amount; i++){
//         for(let j = 0; j<coins.length; j++){
//             if(coins[j] <= i){
//                 cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1);
//             }
//         }
//     }
//     console.log(cache)
//     return cache[amount] > amount ? -1 : cache[amount]
// }
//
// console.log(coinChange([1,3,4,5],11))
//
//





//
//
// function minimumMoves(grid, startX, startY, goalX, goalY) {
//     // Write your code here
//     if (grid[startX][startY] === 'X' || grid[goalX][goalY] === 'X') return 0
//     const queue = []
//     const startCell = {
//         position: { x: startX, y: startY },
//         moves: 0
//     }
//     queue.push(startCell)
//     // HASH MAP X_Y
//     const visited = {}
//     visited[`${startX}_${startY}`] = true
//
//     const markCellAsVisited = (x, y, moves, parent) => {
//         const cellKey = `${x}_${y}`
//         if (grid[x][y] === 'X' || visited[cellKey]) return null
//         visited[cellKey] = true
//         const newCell = {
//             position: { x, y },
//             moves,
//             parent
//         }
//         queue.push(newCell)
//         return newCell
//     }
//     while (queue.length > 0) {
//         const currentCell = queue.shift()
//         if (
//             currentCell.position.x === goalX &&
//             currentCell.position.y === goalY
//         ) {
//             return currentCell.moves
//         }
//         const { position } = currentCell
//         const moves = currentCell.moves + 1
//         // LEFT
//         for (let y = position.y - 1; y >= 0; y--) {
//             if (!markCellAsVisited(position.x, y, moves, currentCell)) break
//         }
//         // TOP
//         for (let x = position.x - 1; x >= 0; x--) {
//             if (!markCellAsVisited(x, position.y, moves, currentCell)) break
//         }
//         // RIGHT
//         for (let y = position.y + 1; y < grid.length; y++) {
//             if (!markCellAsVisited(position.x, y, moves, currentCell)) break
//         }
//         // BOTTOM
//         for (let x = position.x + 1; x < grid.length; x++) {
//             if (!markCellAsVisited(x, position.y, moves, currentCell)) break
//         }
//     }
//     return 0
// }
//
//
// console.log(minimumMoves(['...', '.X.','...'],0,0,1,2))
//
//
//
//
//
// function main() {
//     var q = parseInt(readLine());
//     for(var a0 = 0; a0 < q; a0++){
//         var n_temp = readLine().split(' ');
//         var n = parseInt(n_temp[0]);
//         var m = parseInt(n_temp[1]);
//         var lib = parseInt(n_temp[2]);
//         var road = parseInt(n_temp[3]);
//
//         // In case roads and more expensive or equal to library price
//         // Build a library in each city and skip over the node connections
//         if (road >= lib) {
//             input_currentline += m;
//             console.log(n * lib);
//             continue;
//         }
//
//         // Build the data structure, array of array
//         var nodes = [];
//         for (var i = 1; i <= n; i++) {
//             nodes[i] = [];
//         }
//         for(var a1 = 0; a1 < m; a1++){
//             var city_1_temp = readLine().split(' ');
//             var city_1 = parseInt(city_1_temp[0]);
//             var city_2 = parseInt(city_1_temp[1]);
//
//             nodes[city_1].push(city_2);
//             nodes[city_2].push(city_1);
//         }
//
//         // Go over all the nodes and conduct a BFS
//         // If a node is never seen build a library
//         // If a node is reached through a connection and never seen build a road
//         var cost = 0;
//         var passedOver = [];
//         for (var i = 1; i <= n; i++) {
//             if (passedOver[i]) {
//                 continue;
//             }
//             passedOver[i] = true;
//             cost += lib;
//
//             var queue = [];
//             queue.push(i);
//
//             while (queue.length > 0) {
//                 var nodeIdx = queue.shift();
//                 var connections = nodes[nodeIdx];
//                 for (var w = 0; w < connections.length; w++) {
//                     if (passedOver[connections[w]]) {
//                         continue;
//                     }
//                     passedOver[connections[w]] = true;
//                     queue.push(connections[w]);
//                     cost += road;
//                 }
//             }
//         }
//         console.log(cost);
//     }
// }

//
// class Graph {
//     constructor(_numOfVertex) {
//         this.numOfVertices = _numOfVertex;
//         this.AdjList = new Map();
//         this.roads = 0;
//     }
//
//     // Initialize new vertex
//     addVertex(_ver) {
//         this.AdjList.set(_ver, []);
//     }
//
//     // set undirected edge
//     addEdge(_verA, _verB) {
//         this.AdjList.get(_verA).push(_verB);
//         this.AdjList.get(_verB).push(_verA);
//     }
//
//     // dfs algorithm trigger
//     dfs(_startingVertex) {
//         // initialization of vertex informations
//         // For the vertex is started from 1, 0 index will be empty.
//         let visited = new Array(this.numOfVertices + 1);
//         for(let i = 1; i <= this.numOfVertices; i++)
//             visited[i] = { vertex: i, group: 0, visited: false };
//
//         let group = 0;
//         for(let i = 1;  i <= this.numOfVertices; i++) {
//             if(visited[i].visited) continue;
//
//             // if the current vertex is not vistied before, it is new group
//             group++;
//             this.dfsUtils(i, visited, group);
//         }
//
//         return ({ numOfGroup: group, numOfRoad: this.roads });
//     }
//
//     dfsUtils(_vert, _visited, _group) {
//         _visited[_vert].visited = true;
//         _visited[_vert].group = _group;
//
//         let adjs = this.AdjList.get(_vert);
//         for(let adj of adjs) {
//             if(!_visited[adj].visited) {
//                 this.dfsUtils(adj, _visited, _group);
//                 this.roads++;
//             }
//         }
//     }
// }
//
// // Complete the roadsAndLibraries function below.
// function roadsAndLibraries(n, c_lib, c_road, cities) {
//     // redefine variables more recognizable
//     const [numOfVertex, libraryCost, roadCost, edges] =
//         [n, c_lib, c_road, cities];
//
//     // If constructing road cost is more expensive,
//     // construct library each city is always cheaper
//     if(libraryCost < roadCost)  return numOfVertex * libraryCost;
//
//     // initialize class
//     let graph = new Graph(numOfVertex);
//     // add vertex. vertex number starts from 1
//     for(let i = 1; i <= numOfVertex; i++)
//         graph.addVertex(i);
//     // add edges
//     for(let edge of edges) {
//         graph.addEdge(edge[0], edge[1]);
//     }
//
//     const results = graph.dfs(1);
//     const costs = libraryCost * results.numOfGroup + roadCost * results.numOfRoad;
//     return costs;
// }


// let A = [1,2,3,4,5]
// let B = new Set(A)

// let total = 1
//
// for(let i of B){
//     total ^= i
//     // console.log(total)
// }
// console.log(total)
//
// // console.log(B)

// const Solution = (X, A) =>{
//     let currentPosition = 0;
//     let destinationPosition = Array (X+1).fill(0)
//
//     for(let i = 0; i < A.length; i++){
//         if(destinationPosition[A[i]] === 0){
//             destinationPosition[A[i]] = A[i];
//             currentPosition += 1;
//         }
//         console.log(destinationPosition, currentPosition)
//         if(currentPosition === X){
//             return i;
//         }
//     }
//     // console.log(destinationPosition)
//     return -1;
// }
//
//
// console.log(Solution(4, [1,3,1,4,3,5,4]))

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let progress = true
//     let index = 0
//     let stack = []
//     let error = false
// while (index < S.length) {
//     if (stack.length === 0) {
//         if (S[index] === ')' || S[index] === ']' || S[index] === '}') {
//             return 0
//         } else {
//             stack.push(S[index])
//         }
//     }
//     else if (is_properly_nested(stack[stack.length-1],S[index])) {
//         stack.pop(stack[stack.length-1])
//     } else {
//         if (S[index] === ')' || S[index] === ']' || S[index] === '}') {
//             return 0
//         }
//         else {
//             stack.push(S[index])
//         }
//     }
//     index ++
// }
//
// if (stack.length === 0) {
//     return 1
// } else {
//     return 0
// }
// }
//
// function is_properly_nested(a,b) {
//     if ((a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}')) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(solution('{[()()]}'))


// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     A.sort((a,b)=> a-b)
//     let a = A[0]
//     let b = A[A.length - 1]
//     let count = 1
//     for (let i = a; i <= b; i++) {
//         if(i !== A[i-1]){
//             count = i
//         }
//     }
//     if(count < 0) return 1
//     return count === 1 ? b+1 : count
// }
//
//
// console.log(solution([1, 3, 6, 4, 1, 2]))

// function solution(A) {
//     if (A.length === 1) return 0;
//     let max = 1;
//     let maxIndex = -1;
//     let occurrence = new Object();
//     for (let i = 0; i < A.length; i++) {
//         if (occurrence.hasOwnProperty(A[i])) {
//             occurrence[A[i]][0]++;
//             if (occurrence[A[i]][0] > max) {
//                 if (occurrence[A[i]][0] > A.length / 2) {
//                     max = occurrence[A[i]][0];
//                     maxIndex = occurrence[A[i]][1];
//                     return maxIndex;
//                 }
//             }
//         } else {
//             occurrence[A[i]] = new Array();
//             occurrence[A[i]][0] = 1;
//             occurrence[A[i]][1] = i;
//         }
//     }
//
//     return maxIndex;
//
// }
//
// console.log(solution([0,0,3,3,3]))
// console.log(solution([3,3,3]))


// function solution(A, B, P) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let map = {};
//     for (let i = 0; i < B.length; i++){
//         for(let j = 0; j < B[i].length; j++){
//             if (B[i] === P){
//                 map[A[i]] = (map[A[i]] || 0) + 1
//             }
//         }
// }
//     return map
//
//     // return sortedContacts.isEmpty() ? "NO CONTACT" :
//     //     sortedContacts.first();
// }
// console.log(solution(['pim', 'pom'], ['999999999', '777888999'], '88999'))








// let ne = {
//     me: 1
// }
// let y = Object.prototype.toString().call(ne)
// console.log(y)

// function ph() {
//     const map = {
//         2: "abc",
//         3: "def",
//         4: "ghi",
//         5: "jkl",
//         6: "mno",
//         7: "pqrs",
//         8: "tuv",
//         9: "wxyz",
//     };
//     let map1 = []
//     let map2 = []
//
//     for(let i of Object.keys(map)){
//         if(i == 2){
//             map1.push(...map[i])
//         }
//         if(i == 3){
//             map2.push(...map[i])
//         }
//     }
//
//     const we = []
//     for(let i = 0; i < map1.length; i++){
//         for(let j = 0; j< map2.length; j++){
//             we.push(map1[i] + map2[j])
//         }
//     }
//     return we
//     // console.log(map2)
// }



// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// const array1 = [1, 2, 3];
//
// console.log(array1.unshift(4, 5));
// // expected output: 5
//
// console.log(array1);
// // expected output: Array [4, 5, 1, 2, 3]


// The shift() method removes the first element from an
// array and returns that removed element. This method changes the length of the array.
// const array1 = [1, 2, 3];
//
// const firstElement = array1.shift();
//
// console.log(array1);
// // expected output: Array [2, 3]
//
// console.log(firstElement);
// // expected output: 1

// let letterCombinations = function(digits) {
//     let letters = {
//         2: ['a', 'b', 'c'],
//         3: ['d', 'e', 'f'],
//         4: ['g', 'h', 'i'],
//         5: ['j', 'k', 'l'],
//         6: ['m', 'n', 'o'],
//         7: ['p', 'q', 'r', 's'],
//         8: ['t', 'u', 'v'],
//         9: ['w', 'x', 'y', 'z']
//     }
//
//     let queue = [""];
//     // queue = [""];
//
//     if(!digits) return queue;
//
//     for(let i = 0; i< digits.length; i++){
//         let digit = digits[i];
//         let n = queue.length;
//
//         for(let j = 0; j<n; j++){
//             let lookUp = letters[digit];
//             let pop = queue.shift();
// // array1 = [1,2,3]
// // console.log(queue)
// // const firstElement = array1.shift();
// //
// // console.log(array1);
// // // expected output: Array [2, 3]
//
//             for(let k = 0; k < lookUp.length; k++){
//
//                 let newData = pop + lookUp[k]
//                 // The trim() method removes whitespace from both ends of a string.
//                 queue.push(newData.trim())
//                 console.log(queue)
//             }
//         }
//     }
//     return queue;
// }
//
//
// console.log(letterCombinations([2,3]))


// const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
//     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}
//
// var letterCombinations = function(D) {
//     let len = D.length, ans = []
//     if (!len) return []
//     const dfs = (pos, str) => {
//         console.log(str)
//         if (pos === len) ans.push(str)
//
//         else {
//             let letters = L[D[pos]]
//
//             for (let i = 0; i < letters.length; i++)
//                 dfs(pos+1,str+letters[i])
//         }
//     }
//     dfs(0,"")
//     return ans
// };
//
// console.log(letterCombinations([2,3]))


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
//         // console.log(idx, neighborIdx)
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





// function MazeSolver(){
//
//     let maze = [
//         [0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,1,1,1,0,0,1,0],
//         [0,1,0,0,0,1,0,0,0,0],
//         [0,1,0,0,0,0,1,0,0,0],
//         [0,1,1,1,1,0,0,0,1,0],
//         [0,0,0,0,1,0,0,0,0,1],
//         [0,0,0,0,1,0,0,0,0,0],
//         [0,0,0,0,1,1,1,1,0,1],
//         [0,0,0,0,0,0,0,1,1,2],
//         [0,0,0,0,0,0,0,0,0,0]
//     ]
//
//
//     let traverse = function (col, row){
//
//         if(maze[col][row] === 2){
//             console.log("we have Successfully exited the maze")
//         } else if(maze[col][row] === 1){
//             // console.log(col, row)
//             maze[col][row] = 'visited'
//             if(col < maze.length){
//                 // console.log(maze[col+1], maze.length)
//                 traverse(col + 1, row)
//             }
//             // if( row < maze[col].length){
//             //     traverse(col, row + 1)
//             // }
//             // if( col > 0){
//             //     traverse(col - 1, row)
//             // }
//             // if(row > 0){
//             //     traverse(col, row - 1)
//             // }
//
//         }
//     // console.log(maze)
//     }
//
//    return traverse(2, 1)
//
// }
//
// console.log(MazeSolver())

// Graph
// https://www.geeksforgeeks.org/implementation-graph-javascript/
// https://www.guru99.com/breadth-first-search-bfs-graph-example.html#3
// https://levelup.gitconnected.com/finding-the-shortest-path-in-javascript-dijkstras-algorithm-8d16451eea34





// function minimumMoves(grid, startRow, startCol, endRow, endCol) {
// // Declare variables
//     const n = grid.length;
//     const queue = [];
//     const visited = [];
//
//     for (let i = 0; i < n; i++) {
//         visited.push([]);
//     }
//
// // Describes moves by 1 unit in each direction
//     const vectorRow = [-1,0,1,0];
//     const vectorCol = [0, 1, 0, -1];
//
//     let numberOfMoves = 0;
//     let numberOfCellsInCurrentLayer = 1;
//     let numberOfCellsInNextLayer = 0;
//     let cellsToAdd = []
//
//     queue.push([startRow, startCol]);
//     visited[startRow][startCol] = 'X';
//
//     console.log(visited, queue)
//     while (queue.length > 0) {
//         let cell = queue.pop();
//         if (cell[0] === endRow && cell[1] === endCol) {
//             break;
//         }
//         traverseNeighbours(cell);
//         numberOfCellsInCurrentLayer--;
//
//         if (numberOfCellsInCurrentLayer === 0) {
//             numberOfCellsInCurrentLayer = numberOfCellsInNextLayer;
//             numberOfCellsInNextLayer = 0;
//             numberOfMoves++;
//             queue.push(...cellsToAdd);
//             cellsToAdd = [];
//         }
//     }
//
//     return numberOfMoves;
//
//     function traverseNeighbours(cell) {
//         // Move in each direction
//         for (let i = 0; i < 4; i++) {
//             // Move by 1 to n cells
//             for (let j = 1; j < n; j++) {
//                 let nextCell = [cell[0] + vectorRow[i] * j, cell[1] + vectorCol[i] * j];
//                 // Check whether is in bounds
//                 if (nextCell[0] >= 0 && nextCell[1] >= 0 && nextCell[0] < n && nextCell[1] < n) {
//                     // Break loop if X is on the way
//                     if (grid[nextCell[0]][nextCell[1]] === 'X') {
//                         break;
//                     };
//                     if (visited[nextCell[0]][nextCell[1]] !== 'X') {
//                         cellsToAdd.push(nextCell);
//                         visited[nextCell[0]][nextCell[1]] = 'X'
//                         numberOfCellsInNextLayer++;
//                     }
//                 }
//             }
//         }
//     }
// }
//
//
// console.log(minimumMoves(['...','.X.','...'],0,0,1,2))

// function minimumMoves(grid, startRow, startCol, goalRow, goalCol) {
//     // initialize a 2d matrix to track visited nodes and its parents
//     const visited = Array(grid.length).fill(false).map(_ => Array(grid[0].length).fill(false).map(_ => ({visited: false, parent: null})));
//
//     // console.log(visited);
//     visited[startRow][startCol].visited = true;
//     // console.log(visited);
//
//
//     const rowQueue = [startRow];
//     const colQueue = [startCol];
//
//     let moves = 0;
//     let parent = null;
//     while  (rowQueue.length !== 0) {
//         const row = rowQueue.shift();
//         const col = colQueue.shift();
//         if (row === goalRow && col === goalCol) {
//             parent = visited[row][col].parent;
//             break;
//         }
//         exploreNeighbours(row, col);
//     }
//
//     // console.log(visited);
//     while (parent !== null) {
//         console.log(parent);
//         moves++;
//         parent = visited[parent[0]][parent[1]].parent;
//     }
//
//     return moves;
//
//     function exploreNeighbours(row, col) {
//         // north, south, east, west direction vectors
//         const dc = [0, 0, -1, +1];
//         const dr = [-1, +1, 0, 0];
//
//         for (let i = 0; i < 4; i++) {
//             let cc = col;
//             let rr = row;
//             while (true) {
//                 cc += dc[i];
//                 rr += dr[i];
//
//                 // stop at out of bounds
//                 if (cc < 0 || rr < 0) break;
//                 if (rr > grid.length - 1 || cc > grid[0].length - 1) break;
//
//                 // stop visited or blocked cells
//                 if (visited[rr][cc].visited) continue;
//                 if (grid[rr][cc] === 'X') break;
//
//                 colQueue.push(cc);
//                 rowQueue.push(rr);
//                 visited[rr][cc].visited = true;
//                 visited[rr][cc].parent = [row, col];
//             }
//         }
//     }
// }



// function minimumMoves(grid, startX, startY, goalX, goalY) {
//
//     if( (grid[startX][startY] === "X") || grid[goalX][goalY] === "X") return 0
//
//     const queue = []
//     const startCell = {
//         position : { x: startX, y: startY},
//         moves: 0
//     }
//     queue.push(startCell)
//     const visited = {};
//     visited[`${startX}_${startY}`] = true;
//
//     const markCellAsVisited = (x, y, moves, parent) => {
//         const cellKey = `${x}_${y}`
//         if(grid[x][y] === 'X' || visited[cellKey]) return null
//         visited[cellKey] = true;
//         const newCell = {
//             position: {x,y},
//             moves,
//             parent
//         }
//         queue.push(newCell)
//         return newCell
//     }
//
//     while (queue.length > 0){
//         const currentCell = queue.shift()
//         if(currentCell.position.x === startX && currentCell.position.y === startY) return currentCell.moves
//
//         // const moves = currentCell.moves + 1
//         // const { position } = currentCell
//
//         const { position } = currentCell
//         // console.log(currentCell.moves)
//         const moves = currentCell.moves + 1
//         // LEFT
//         for (let x = position.x - 1; x >= 0; x--) {
//             if (!markCellAsVisited(x, position.y, moves, currentCell)) break
//         }
//         // TOP
//         for (let y = position.y - 1; y >= 0; y--) {
//             if (!markCellAsVisited(position.x, y, moves, currentCell)) break
//         }
//         // RIGHT
//         for (let x = position.x + 1; x < grid.length; x++) {
//             if (!markCellAsVisited(x, position.y, moves, currentCell)) break
//         }
//         // BOTTOM
//         for (let y = position.y + 1; y < grid.length; y++) {
//             if (!markCellAsVisited(position.x, y, moves, currentCell)) break
//         }
//         console.log(queue)
//     }
//
//     return 0
// }
//
// console.log(minimumMoves(['...','.X.','...'],0,0,1,2))







