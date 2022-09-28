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
//
// console.log(makeAnagram('abcabc','zabcabce'))
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
//
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
//
//
// let A = [1,2,3,4,5]
// let B = new Set(A)
//
// let total = 1
//
// for(let i of B){
//     total ^= i
//     // console.log(total)
// }
// console.log(total)
//
// // console.log(B)
//
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
//
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
//
//
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
//
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
//
//
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
//
//
//
//
//
//
//
//
// let ne = {
//     me: 1
// }
// let y = Object.prototype.toString().call(ne)
// console.log(y)
//
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
//
//
//
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// const array1 = [1, 2, 3];
//
// console.log(array1.unshift(4, 5));
// // expected output: 5
//
// console.log(array1);
// // expected output: Array [4, 5, 1, 2, 3]
//
//
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
//
//
//
//
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
//
//
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
//
//
//
//
//
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
//
// Graph
// https://www.geeksforgeeks.org/implementation-graph-javascript/
// https://www.guru99.com/breadth-first-search-bfs-graph-example.html#3
// https://levelup.gitconnected.com/finding-the-shortest-path-in-javascript-dijkstras-algorithm-8d16451eea34
//
//
//
//
//
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
//
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
//
//
//
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
//
//
//
//
//
// function union(edge1,edge2,ids){
//     let parent1 = find(edge1, ids);
//     ids[parent1] = find(edge2, ids);
// }
//
// function find (edge, ids){
//     if(ids[edge] !== edge) ids[edge] = find(ids[edge], ids);
//     return ids[edge];
// }
//
// // console.log(find(0,[0,1]))
//
// const countComponent = (edges, n) => {
// let ids = Array(n).fill(0);
//
//     for(let i = 0; i< ids.length; i++) ids[i] = i;
//     console.log(ids)
//     for (let edge of  edges) {
//         union(edge[0], edge[1], ids);
//     }
//     console.log(ids)
//     let set = new Set();
//     for(let i = 0; i < ids.length; i++) set.add(find(i, ids));
//     console.log(ids)
//     return set.size;
// }
//
// console.log(countComponent([[0,1],[1,2],[3,4]], 5))
//
//
//
//
//
//
// 100%
// function solution(A) {
// write your code in JavaScript (Node.js 8.9.4)
// let total = 0
// for(let i of A){
//     total ^= i
// }
// return total
// }
//
// function quicksort(array) {
//     if (array.length <= 1) {
//         return array;
//     }
//     let pivot = array[0];
//
//     let left = [];
//     let right = [];
//
//     for (let i = 1; i < array.length; i++) {
//         array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//     }
//
//     return quicksort(left).concat(pivot, quicksort(right));
// }
//
// let unsorted = [9,8,7,6,5,4,3,2,1];
// let sorted = quicksort(unsorted);
//
// console.log('Sorted array', sorted);
//
//
// const BinarySearch = (arr, target) => {
//     arr.sort((a,b)=>a-b)
//     let left = 0;
//     let right = arr.length -1;
//     while(left <= right){
//
//         let mid = left + (right - left)/2
//         if(target === arr[mid]){
//             return mid
//         } else if (target < arr[mid]){
//             right = mid - 1;
//         }  else {
//             left = mid + 1;
//         }
//     }
//     return -1
// }
//
// console.log(BinarySearch([0,1,2,4,5,6,55], 55))
//
//
//
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
//
//
//
// var allPathsSourceTarget = function(graph) {
//     let resArr = []
//
//     let currPath = [0] // starting path
//     let connectors = graph[0] // different paths to connect to
//     dfs(graph, currPath, connectors, resArr)
//     // console.log("final answer:", resArr)
//     return resArr
//
// };
//
// // this finishes each path array before going to the next one
// function dfs(graph, currPath, connectors, resArr) {
//     // console.log("currPath:", currPath)
//
//     if (currPath[currPath.length-1] === graph.length-1) {
//         // console.log("currPath has ended, moving to the next path...")
//         // console.log()
//         resArr.push(currPath)
//         return
//     }
//
//     // the for loop keeps tracks of which subarray it is iterating. Therefore doesn't need reiterate the given subarrays in graph
//     for (let i=0; i<connectors.length; i++) {
//         // this newArr is to give itself a new array due to it being instances of each other but they would have different values that are its connections
//         let newArr = new Array(...currPath, connectors[i])
//         // console.log("connectors:", connectors)
//         // console.log("connectors[i]:", connectors[i])
//         // console.log("graph[connectors[i]]:", graph[connectors[i]])
//
//         // graph[connectors[i]] because if the current position is in 3, you go to the specific placement in the array to determine its connections
//         // Ex.                  [[4,3,1],[3,2,4],[3],[4],[]].
//         // Index as reference:     0        1     2   3  4
//         // If you are on [0][1] which is #3 in [4,3,1]. You need to go the element 3rd index, which is [4] at the end of the array.
//
//         // then from that [4], you run the for loop again, and when you go to the 4th index, you reach []. Therefore it gets returned
//
//         // so essentially, it gets a index value and pushes it to resArr, then it goes that values index in the graph and connects that value to the resArr. Until the last element of resArr is equal to n-1
//         dfs(graph, newArr, graph[connectors[i]], resArr)
//     }
// }
//
//
// var allPathsSourceTarget = function(graph) {
//     let finalArr = []
//     const goal = graph.length-1
//     let queue = [[0]] // default [0] since the path always starts at 0
//     while (queue.length > 0) {
//         let curr = queue.shift()
//         // console.log(curr)
//
//         let last = curr[curr.length-1] // detects the last element of the current path
//
//         // detects the array's last element, if it is n-1, then push it into the finalArr because it has fround a path from 0 -> n-1 for that specific pathway
//         if (last === goal) finalArr.push(curr)
//
//
//         // creates new instances if there are more paths
//         // graph[last].length detects the paths that specific node has
//         for (let i=0; i<graph[last].length; i++) {
//             // [...curr] so I can create new array instances or else it would add to the previous resulting in [0,1,2,3,3] instead of [0,1,3] and [0,2,3]
//             let newArr = Array(...curr, graph[last][i])
//             queue.push(newArr)
//         }
//     }
//     return finalArr
// }
// console.log(allPathsSourceTarget([[1,2],[3],[1,3],[]]))
//
//
// function solution(A) {
//     let max = Math.max(...A);
//     console.log(max)
//     if (max < 0) return 1;
//     let B = new Array(max).fill(0);
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] > 0) {
//             B[A[i] - 1]++;
//         }
//     }
//     let index = B.indexOf(0);
//     if ((index === -1)) {
//         return max + 1;
//     } else {
//         return index + 1;
//     }
// }
//
// console.log(solution([1, 3, 6, 4, 1, 2]))
//
// const buildAdjList = (n, A,B) => {
//     // const adjList = Array.from({length:n},() => []);
//
//     let edges = []
//     for(let i = 0; i<A.length;i++){
//         edges.push([A[i],B[i]])
//     }
//     //  or
//     let adjList = []
//     for(let i = 0; i<n;i++){
//         adjList.push([])
//     }
//     console.log(adjList, edges)
//
//
//     for(let edge of edges){
//         let[src,dest] = edge;
//         adjList[src].push(dest);
//         adjList[dest].push(src);
//     }
//     return adjList;
// }
//
// const bfs = (node, adjList, visited) => {
//     const queue = [node];
//     visited[node] = true;
//     while(queue.length){
//         let curNode = queue.shift();
//         for(let neighbor of adjList[curNode]){
//             if(!visited[neighbor]){
//                 visited[neighbor] = true;
//                 queue.push(neighbor);
//             }
//         }
//     }
// }
//
// const connectedComp = (n, A,B) => {
//     const adjList = buildAdjList(n,A,B);
//     const visited = {};
//     let numComponent = 0;
//     for(let vertex = 0; vertex< adjList.length; vertex++){
//         if(!visited[vertex]){
//             numComponent++
//             bfs(vertex, adjList, visited)
//         }
//     }
//     return numComponent;
// }
//
// console.log(connectedComp(5,[0,1,2,3],[1,2,0,4]))
//
// let m = 29
// let n = m + ''
// console.log(n[0]+)
//
// console.log([])
//
// function isBeautifulString(inputString) {
//     let num = inputString.split('')
//     let count = new Set([...num])
//     let counts = [...count]
//
//     let map = {};
//     for(let index of inputString){
//         map[index] = (map[index] + 1) || 1;
//     }
// console.log(map)
//     for(let i = 0; i<counts.length; i++){
//         console.log(counts[i+1])
//         console.log(map[counts[i+1]])
//         if(map[counts[]] > map[counts[i]]){
//             return 'false'
//         }
//         if(map[counts[i+1]] > map[counts[i]]){
//             return 'false'
//         }
//         return 'true'
//     }
//
// }
//
// // console.log(isBeautifulString("bbbaacdafe"))
// // console.log(isBeautifulString("aabbb"))
// console.log(isBeautifulString("bbc"))
//
//
// var findAllConcatenatedWordsInADict = function(words) {
//    words.sort((word1, word2) => word1.length - word2.length);
//
//
//     let wordsMap = {};
//     let result = [];
//     if(!words.length || words.length > 10,000) return result;
//     // const findWord = (word, wordMap) => {
//     //     if(!word.length) return false;
//     //     let dp = new Array(word.length + 1).fill(0);
//     //     dp[0] = 1;
//     //     for(let i = 1; i <= word.length; i++) {
//     //         for(let j = 0; j <= i; j++) {
//     //             if(dp[j]) {
//     //                 let subStr = word.substring(j, i);
//     //                 if(wordMap[subStr] === 1) {
//     //                     dp[i] = 1;
//     //                     break;
//     //                 }
//     //             }
//     //         }
//     //     }
//     //     return dp.pop();
//     // }
//     // for(let word of words) {
//     //     if(findWord(word, wordsMap)) {
//     //         result.push(word);
//     //     }
//     //     wordsMap[word] = 1;
//     // }
//     // return result;
// };
//
// console.log(findAllConcatenatedWordsInADict(["catsdogcats","dog","dogcatsdog","cat","cats","hippopotamuses","rat","ratcatdogcat"]))
//
// let letterCombinations = function(digits) {
//
//    Dfs Implementation
//     const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
//     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}
//
// if(!digits.length) return 0
//     let len = digits.length;
//     let ans = [];
//     const dfs = (pos, str) => {
//       if(pos == len) {
//           return ans.push(str)
//       } else {
//           let D = L[digits[pos]];
//           for(let i = 0; i<D.length;i++){
//               dfs(pos+1, str + D[i])
//           }
//       }
//
//
//     }
//  dfs(0,"")
// return ans
//
//    bfs Implementation
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
//
//     if(!digits) return queue;
//
//     for(let i = 0; i< digits.length; i++){
//         let digit = digits[i];
//         let n = queue.length;
//
//         //
//         for(let j = 0; j<n; j++){
//             let lookUp = letters[digit];
//             // console.log(lookUp, digit)
//             let pop = queue.shift();
//             // console.log(pop)
//
// // array1 = [1,2,3]
// // console.log(queue)
// // const firstElement = array1.shift();
// //
// // console.log(array1);
// // // expected output: Array [2, 3]
//
//             for(let k = 0; k < lookUp.length; k++){
//                 let newData = pop + lookUp[k]
//                 // console.log(queue, lookUp)
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
// Question 2
// let codility = (arr) => {
//   let st = []
//     let ans = []
//     let str = [...new Set(arr)]
//   for(let i =0; i< arr.length;i++){
//       let m
//       for(let j = i; j < arr.length; j++ ){
//           m = [...new Set(st)]
//           if(m.length === str.length){
//               ans.push(st.length)
//               st = []
//           }else{
//           st.push(arr[j])
//           }
//       }
//   }
//   return ans
// }
//
// console.log(codility([7,3,7,3,1,3,4,1]))
// console.log(codility([7,5,2,7,2,7,4,7]))
// console.log(codility([7,3,7,3]))
// console.log(codility([2,1,1,3,2,1,1,3]))
//
//
//
// const buildAdjList = (n, edges) => {
//     const adjList = Array.from({length:n},() => []);
//     //  or
//     // let adjList = []
//     // for(let i = 0; i<n;i++){
//     //     adjList.push([])
//     // }
//
//
//     for(let edge of edges){
//         let[src,dest] = edge;
//         adjList[src].push(dest);
//         adjList[dest].push(src);
//     }
//     console.log(adjList)
//     return adjList;
// }
//
//
// const bfs = (node, adjList, visited) => {
//     const queue = [node];
//     visited[node] = true;
//     while(queue.length){
//         let curNode = queue.shift();
//         for(let neighbor of adjList[curNode]){
//             console.log(curNode)
//             if(!visited[neighbor]){
//                 visited[neighbor] = true;
//                 queue.push(neighbor);
//             }
//         }
//     }
// }
//
// const connectedComp = (n, edges) => {
//     const adjList = buildAdjList(n,edges);
//     const visited = {};
//     let numComponent = 0;
//     for(let vertex = 0; vertex< adjList.length; vertex++){
//         console.log(visited)
//         if(!visited[vertex]){
//             numComponent++
//             bfs(vertex, adjList, visited)
//         }
//     }
//     return numComponent;
// }
//
// console.log(connectedComp(5,[[0,1],[1,2],[2,0],[3,4]]))
//
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     stack = new Object();
//     for (let i = 0; i < A.length; i++){
//         console.log(stack)
//         if (stack.hasOwnProperty(A[i])) {
//             delete stack[A[i]];
//         } else {
//             stack[A[i]] = 1;
//         }
//     }
//     console.log(stack)
//     solution = Object.keys(stack);
//     return parseInt(solution[0]);
// }
//
// console.log(solution([9,9,3,3,7]))
//
//
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // let me = S.split('')
//     let count = []
//     let c = 0
//     const A = S.trim()
//     for(let i = 0; i< A.length; i++ ) {
//         if (Number(A[i]) || A[i] === "0") {
//             count.push(A[i]);
//             c++
//         }
//
//         if(c === 3){
//             if(i === A.length -1) break
//             count.push('-')
//             c = 0
//         }
//     }
//         let next = count[count.length - 3];
//     if(count[count.length -2] === '-'){
//         count[count.length - 3] = '-'
//         count[count.length - 2] = next
//
//     }
//
//     return count.join('')
// }
//
// console.log(solution( '555372654'))
// console.log(solution( '00-44 48 5555 8361'))
// console.log(solution( '        0 - 22 1985--324'))
//
//
// function solution(A, B, P) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let map = {};
//     const counts = []
//     let ans = 0
//
//     for (let i = 0; i < B.length; i++){
//         if (B[i].includes(P)){
//             map[A[i].length] = A[i]
//
//             if(A[i].length > ans) {
//                 counts.push(A[i].length)
//             }
//         }
//     }
//     ans = Math.min(...counts)
//     console.log(counts, map, ans)
//     if(counts.length === 0){
//         return 'NO CONTACTS'
//     }
//     if(counts.length > 1){
//         return map[ans]
//     }
//     return map[ans]
// }
// console.log(solution(['pim', 'pom'], ['121212121', '111111111', '444555666'], '112'))
// console.log(solution(['pim', 'pom'], ['999999999', '777888999'], '88999'))
// console.log(solution(['sander', 'amy','ann', 'micheal'], ['123456789', '234567890', '7890123456', '123123123'], '1'))
//
//
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//
//     let count = 0
//     if(A[0] < 0) count+=2
//
//     for(let i = 0; i<A.length;i++){
//         if(A[i] < 0 && A[i+1] <0){
//                 if(A[i]+A[i+1] < 0){
//                     count++
//                     // i+=1
//                 }
//             i+=1
//         }
//         i+=1
//     }
//     return count
// }
// console.log(solution([10,-10,-1,-1,10]))
// console.log(solution([-1,-1,-1,1,1,1,1]))
// console.log(solution([5,-2,-3,1]))
//
// const checkDebt = (array) => {
//     let count = 0;
//     let position = 0;
//     console.log('d')
//     while (position < array.length) {
//         if (array[position] < 0 || array[position] + array[position + 1] < 0) {
//             count += 1;
//             position += 1;
//         }
//         if (array[position] + array[position + 1] >= 0) {
//             position += 2;
//         }
//     }
//     console.log('d')
//     return count;
// };
//
// console.log(checkDebt([-1, -1, -1, 1, 1, 1]));
// console.log(checkDebt([10,-10,-1,-1,10]))
// console.log(checkDebt([-1,-1,-1,1,1,1,1]))
//
//
// const checkDebt = (array) => {
//     let count = 0;
//     let position = 0;
//
//     let sum = 0;
//     // for (let index = 0; index < array.length; index += 1) {
//     //     sum += array[index];
//     // }
//     // if (sum >= 0) {
//     //     return 0;
//     // }
//     for (let index = 0; index < array.length; index += 1) {
//         if (array[index] < 0 || array[index] + array[index + 1] < 0) {
//             count += 1;
//         }
//         if (array[index] + array[index + 1] >= 0) {
//             index += 0;
//         }
//     }
//
//     return count;
// };
//
// console.log(checkDebt([-1, -1, -1, 1, 1, 1]));
// console.log(checkDebt([10,-10,-1,-1,10])) // 1
// console.log(checkDebt([-1,-1,-1,1,1,1,1])) // 3
//
//
// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
//
//     // While there remain elements to shuffle...
//     while (currentIndex != 0) {
//
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//
//         // And swap it with the current element.
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }
//
//     return array;
// }
//
// // Used like so
// var arr = [2, 11,5, 37, 42];
// shuffle(arr);
// console.log(arr);
//
//
// let cards = ['Jack', 'Jack', 8,2,6,'King','King',5,3,'Queen','Queen']
//
// let Numbers = []
// for( let i = 0; i<=cards.length; i++){
//     if(Number(cards[i]) || cards[i] === 0){
//         let cards = ['Jack', 'Jack', 8,2,6,'King','King',5,3,'Queen','Queen']
//         // console.log(cards)
//         let m = Math.min(...cards)
//         console.log(m)
//         // Numbers.push(m)
//         // cards.splice(m, 1)
//     }
//     if (arr[j] > arr[j + 1])
//     {
//         // Swapping the elements.
//         int temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//
//         // updating the value of j = -1
//         // so after getting updated for j++
//         // in the loop it becomes 0 and
//         // the loop begins from the start.
//         j = -1;
//     }
//
//
// }
// // console.log(Numbers)
//
// let num = []
// let result = []
// let q = 0
// let j = 0
// let k = 0
// for(let i = 0; i<=cards.length;i++){
// num.sort()
//     if(Number(cards[i]) || cards[i] === 0){
//         // console.log(cards)
//         num.push(cards[i])
//         // let m = Math.min(...cards)
//         // console.log(m)
//         // Numbers.push(m)
//         // cards.splice(m, 1)
//     }
//     if(cards[i] === 'Jack'){
//         j++
//     }
//     if(cards[i] === 'Queen'){
//         q++
//     }
//     if(cards[i] === 'King'){
//         k++
//     }
// }
//
// let Jack = new Array(j).fill('Jack')
// let King = new Array(k).fill('King')
// let Queen = new Array(q).fill('Queen')
//
// function quicksort(array) {
//     if (array.length <= 1) {
//         return array;
//     }
//     let pivot = array[0];
//
//     let left = [];
//     let right = [];
//
//     for (let i = 1; i < array.length; i++) {
//         array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//     }
//
//     return quicksort(left).concat(pivot, quicksort(right));
// }
// const l = [...Jack,  ...Queen, ...King,]
// quicksort(num)
//
// console.log(num)
// result.push(...num)
// result.push(...l)
// console.log(result)
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
// let cards = ['Jack', 'Jack',1,8,6,'King','King',5,3,'Queen','Queen']
//
// let nums = []
// let q = 0
// let j = 0
// let k = 0
//
// let b = new Array
// let c
// for(let i = 0; i<=cards.length;i++){
//
//     if(Number(cards[i]) || cards[i] === 0){
//         nums.push(cards[i])
//     }
//     if(Number(cards[i]) || cards[i] === 0){
//         b[cards[i]] = cards[i]
//     }
//     if(cards[i] === 'Jack'){
//         j++
//     }
//     if(cards[i] === 'Queen'){
//         q++
//     }
//     if(cards[i] === 'King'){
//         k++
//     }
//     if(i === cards.length - 1){
//         c = Array(8)
//         console.log(Math.max(...nums))
//
//     }
// }
// console.log(c)
//
// let Jack = new Array(j).fill('Jack')
// let King = new Array(k).fill('King')
// let Queen = new Array(q).fill('Queen')
//
// let h = [...new Set(b)]
// h.shift()
// const result = [...h,...Jack,  ...Queen, ...King,]
//
// console.log(result)
//
//
// function carParkingRoof(prices, money) {
// let count = 0;
// const result = []
// let sum = 0
// for(let i = 0; i<prices.length; i++){
//     // console.log(prices[i], 'start1')
//     for(let j = i; j<prices.length; j++){
//         // console.log(prices[j])
//         // console.log(prices[j], 'start')
//
//      if(prices[j] === undefined) break
//         if(prices[j] + prices[j+1] > money) break
//         if(sum >= money){
//             // console.log(sum, 'out')
//             break
//         }
//
//         if(sum < money && prices[j] <= money){
//             console.log()
//             sum+= prices[j]
//             count++
//             // console.log(sum, 'sum',  result)
//         }
//
//
//     }
//     // console.log(result)
//     result.push(count)
//     count = 0
//     sum = 0
//     // console.log(sum, 'dd')
// }
// let left = Math.min(...prices)
// if( left <= money) result.push(1)
// // let k = [...new Set(result)]
// //     if (k.length === 2) return Math.min(...k)
//     console.log(result)
//
//     let m = Math.max(...result)
// return m
//
// }
//
// console.log(carParkingRoof([2,3,5,1,1,2,1], 7))
// console.log(carParkingRoof([10,10,10], 5))
// console.log(carParkingRoof([5,10,10], 5))
//
//
//
//
//
//
// function prison(n, m, h, v) {
//     // Write your code here
//
//     let largest_h_gap = 1
//     let  largest_v_gap = 1
//
//     let v_cell = [1] * m
//     let h_cell = [1] * n
//
//     if (h.length === 0 && v.length === 0){
//         return largest_h_gap * largest_v_gap
//     }
//
//
//     for (let vi in v){
//         v_cell[vi-1] = 0
//     }
//
//     for (let hi in h){
//         h_cell[hi-1] = 0
//     }
//
//
//    let temp_gap = 1
//     for ( let i in v_cell){
//         if(v_cell[i] === 1) temp_gap = 1
//         if (v_cell[i] === 0) temp_gap = temp_gap + 1
//         if (temp_gap > largest_v_gap) largest_v_gap = temp_gap
//     }
//
//
//     temp_gap = 1
//     for(let i = 0; i<h_cell.length; i++){
//     if (h_cell[i] === 1) temp_gap = 1
//     if (h_cell[i] === 0) temp_gap = temp_gap + 1
//     if (temp_gap > largest_h_gap) largest_h_gap = temp_gap
//     }
//
//     return largest_h_gap * largest_v_gap
//
// }
//
//
//
// console.log(prison(6,6,[4],[2]))
//
// function prison() {
//     // Write your code here
//
//
//
// }
//
//
//
// console.log(prison())
//
// const fs = require('fs');
//
// let lyrics = 'But still I\'m having memories of high speeds when the cops crashed\n' +
//     'As I laugh, pushin the gas while my Glocks blast\n' +
//     'We was young and we was dumb but we had heart';
//
// // write to a new file named 2pac.txt
// fs.writeFile('2pac.txt', lyrics, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;
//
//     // success case, the file was saved
//     console.log('Lyric saved!');
// });
//
//
//
//
// const solution = (K,M, A) => {
// let size = A.length;
// let enough = size/2 + 1;
//
// let leader1 = -1;
// let leader2 = -1;
//
// let  occurrences = Array(M + 2);
// for (let i = 0; i < size; i++) {
// occurrences[A[i]]++;
// }
// console.log(occurrences)
// //
// // // incrementing first segment of K elements
// for (let i = 0; i < K; i++) {
// occurrences[A[i]]--;
// occurrences[++A[i]]++;
// }
//
// // checking if a leader exists already
// for (int i = 0; i < M + 2; i++) {
// if (occurrences[i] >= enough) {
// leader1 = i;
// break;
// }
// }
//
// // traversing one by one until reaching the end of
// // the array or until two unique leaders are found
// for (int i = 0; i < size - K; i++) {
// occurrences[A[i]]--;
// occurrences[--A[i]]++;
// occurrences[A[i + K]]--;
// occurrences[++A[i + K]]++;
//
// final int candidateFirst = A[i];
// final int candidateLast = A[i + K];
//
// if (occurrences[candidateLast] >= enough) {
// if (leader1 == -1) {
// leader1 = candidateLast;
// } else if (candidateLast != leader1) {
// leader2 = candidateLast;
// }
//
// if (leader2 != -1) {
// break;
// }
// } else if (occurrences[candidateFirst] >= enough) {
// if (leader1 == -1) {
// leader1 = candidateFirst;
// } else if (candidateFirst != leader1) {
// leader2 = candidateFirst;
// }
//
// if (leader2 != -1) {
// break;
// }
// }
// }
// return buildResultArray(leader1, leader2);
// }
//
// private int[] buildResultArray(final int leader1, final int leader2) {
// if (leader1 == -1 && leader2 == -1) {
// return new int[0];
// } else if (leader2 == -1) {
// return new int[]{leader1};
// } else if (leader1 < leader2) {
// return new int[]{leader1, leader2};
// } else {
// return new int[]{leader2, leader1};
// }
// }
//
// }
//
// console.log(solution(3,3,[1,2,3]))
// console.log(solution(1,1,[1]))
// console.log(solution(3,5,[2, 1, 3, 1, 2, 2, 3]))
//
// Most Accurate
// function solution(A, B, P) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let map = {};
//     const counts = []
//     let ans = 0
//
//     for (let i = 0; i < B.length; i++){
//         if (B[i].includes(P)){
//             map[A[i].length] = A[i]
//
//             if(A[i].length > ans) {
//                 counts.push(A[i].length)
//             }
//         }
//     }
//     ans = Math.min(...counts)
//     console.log(counts, map, ans)
//     if(counts.length === 0){
//         return 'NO CONTACTS'
//     }
//     if(counts.length > 1){
//         return map[ans]
//     }
//     return map[ans]
// }
// console.log(solution(['pim', 'pom'], ['121212121', '111111111', '444555666'], '112'))
// console.log(solution(['pim', 'pom'], ['999999999', '777888999'], '88999'))
//
// function smallestSubstring(a)
// {
//     // Stores all occurences
//     let a1 = [];
//
//     // Generate all the substrings
//     for(let i = 0; i < a.length; i++)
//     {
//         for(let j = i + 1; j <= a.length; j++)
//         {
//
//             // Avoid multiple occurences
//             if (i != j)
//
//                 // Append all substrings
//                 a1.push(a.substring(i, j));
//         }
//     }
//
//     // Take into account
//     // all the substrings
//     let a2 = new Map();
//     for(let s=0;s<a1.length;s++)
//     {
//         if(a2.has(a1[s]))
//             a2.set(a1[s],a2.get(a1[s])+1);
//         else
//             a2.set(a1[s],1);
//     }
//
//     let freshlist = [];
//
//     // Iterate over all
//     // unique substrings
//     for(let s of a2.keys())
//     {
//
//         // If frequency is 1
//         if (a2.get(s) == 1)
//
//             // Append into fresh list
//             freshlist.push(s);
//     }
//
//     // Initialize a dictionary
//     let dictionary = new Map();
//
//     for(let s=0;s<freshlist.length;s++)
//     {
//         // Append the keys
//         dictionary.set(freshlist[s],
//             freshlist[s].length);
//     }
//
//
//     let newlist = [];
//
//     // Traverse the dictionary
//     for(let s of dictionary.keys())
//         newlist.push(dictionary.get(s));
//
//     let ans = Number.MAX_VALUE;
//
//     for(let i=0;i<newlist.length;i++)
//         ans = Math.min(ans, newlist[i]);
//     console.log(ans)
//
//     // Return the minimum of dictionary
//     return ans == Number.MAX_VALUE ? 0 : ans;
// }
// let S = "ababaabba";
//
// console.log(smallestSubstring(S))
//
//
// var solution = function(arr) {
// //Write your code here
//     let res = 0;
//     for( let num in arr) {
//         res ^= arr[num];
//     }
//     return res;
// };
// console.log(solution([1,1,3,3,2]))
//
// function countWaysUtil(n, m) {
//     if (n <= 1)
//         return n;
//     let res = 0;
//     for (let i = 1; i <= m &&
//     i <= n; i++)
//         res += countWaysUtil(n - i, m);
//     return res;
// }
// let s = 4;
// let m = 3;
// // Returns number of ways
// // to reach s'th stair
//
// console.log(countWaysUtil(s + 1, m));
//
//
// Driver Code
//
// console.log("Number of ways = " + countWays(s,m));
//
// const m = (arr, target) => {
//
// for(let i = 0; i<arr.length; i++){
//     // console.log(arr)
//     for(let j = i; j< arr[i].length; j++){
//         console.log(arr[i][j])
//     }
// }
//     let map = {};
//     for(let i = 0; i< arr.length; i++){
//         map[arr[i]] = (map[arr[i]] + 1) || 0
//     }
//     for(let x of Object.values(map)){
//         console.log(x)
//     }
//     console.log(map)
// }
//
//
// console.log(m([1,2,1,3],5))
//
//
//
// const arr = [ [2,3], [4,5] ];
// const arr2 = [ [5,8], [3,1] ]
// const target = 5
//
// const result = []
// const solution2 = (arr, arr2, target) => {
//
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j<arr2.length; j++){
//             if((arr[i][j] * arr2[i][j] + arr[i+1][j] * arr2[i+1][j]) > target){
//                 return [arr[i][j],arr[i+1][j]]
//             }
//             else return -1
//         }
//     }
//
//
// }
//
// console.log(solution2(arr,arr2,target))

// const moment = require('moment')
//
// // const reShape = (arr) => {
// //     // console.log(...arr)
// //   return arr.readingValue
// // }
//
// const daily = () => {
//     const ar =  [
//         {
//             "createdAt": "2021-11-23T09:33:51.495Z",
//             "readingValue": "3-mgl"
//         },
//         {
//             "createdAt": "2021-11-23T09:33:57.493Z",
//             "readingValue": "4-mgl"
//         },
//         {
//             "createdAt": "2021-11-23T11:34:45.940Z",
//             "readingValue": "5-mgl"
//         },
//         {
//             "createdAt": "2021-11-24T11:34:45.940Z",
//             "readingValue": "5-mgl"
//         }
//     ]
//
//     // let no = ar.filter( (num => moment(num.createdAt).day() === 2) )
//     let calWeek = (arr, day) => {
//         let ar = arr.filter( (num => moment(num.createdAt).day() === day) )
//         let sum = 0
//         for(let i = 0; i<ar.length; i++){
//             let co = parseInt(ar[i].readingValue.split('-')[0], 10)
//             sum+= co
//         }
//         return sum
//     }
//     // console.log(cal(ar))
//
//     const Daily = {
//         Tuesday: cal(ar, 2),
//         Wednesday: cal(ar, 3)
//     }
//     console.log(Daily)
// }
//
// console.log(daily())

// let me = [1,2,3,4,5,6,7];
// for(let i = me.length; i>0; i--){
//     console.log(i)
// }

// let me = [1,2,3,4,5,6,7];
// for(let i = 0; i<me.length; i++){
//     console.log(i)
// }


// let m = [
//     {
//         "n":"nemo"
//     },
//     {
//         "n":"nemo"
//     },
//     {
//         "n":"nemo"
//     },
// ]
//
// const uniquePosts = m.filter((value, index) => {
//     const _value = JSON.stringify(value);
//
//     return index === m.findIndex(obj => {
//         console.log(JSON.stringify(obj) === _value)
//     });
// });


// const { performance } = require('perf_hooks');

// var startTime = performance.now()
//
// function numPlayers(k, scores) {
//     let count = 0
//     const arr = scores.sort((a,b)=> b-a).filter(a=>a!==0)
//     let dup = [...new Set(arr)]
//     let map = {}
//     for(let i = 0; i < arr.length; i++){
//         map[arr[i]] = (map[arr[i]] + 1) || 1
//     }
//     console.log(map, dup)
//     for(let i = 0; i<dup.length ;i++){
//         if(count < k){
//             count += map[dup[i]]
//         } else {
//             return count
//         }
//     }
//     return count
// }
// console.log(numPlayers(4, [2, 2,0,3, 4, 5]))
//
// var endTime = performance.now()
//
// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)


// const user = {
//     hello: 'Welcome to Turing',
//     sayWelcome() {
//         console.log(this.hello);
//     }
// }
// setTimeout(user.sayWelcome.bind(user), 1000)
//
// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 0)
// Promise.resolve(3).then(console.log)
// console.log(4)
//
// try {
//     const m = 1;
//     const n = m+z;
//     console.log(n)
// } catch (err) {
//     console.log(err.name)
// }
//


// function getResult(connections) {
//     const branches = [];
//     function f(index, distance) {
//         branches.push([index, distance]);
//         for (let i = 0; i < connections.length; i++) {
//             if (connections[i] === index) {
//                 f(i, distance+1);
//             }
//         }
//     }
//     f(-1, 0);
//     branches.sort((a, b) => b[1] - a[1]);
//     return branches[0][0];
// }
//
// console.log(getResult([1, 2, -1])); // expected 0
// console.log(getResult([1, -1, 1, 2])); // expected 3
// console.log(getResult([2, 1, -1])); // expected 0
// console.log(getResult([3, 4, 1, -1, 3])); // expected 2
// console.log(getResult([1, 0, -1, 2])); // expected 3
// console.log(getResult([3, 2, 1, -1])); // expected 0
// console.log(getResult([2, 2, 1, 5, 3, -1, 4, 5, 2, 3])); // expected 6


// let n =  25

// const nm = (n) => {
//     n = BigInt(n)
//    let count = BigInt(1)
//
//     for(let i = n; i >= 1; i--) {
//         count *= i
//     }
//
// console.log(count.toString())
// }
//
//
//
// console.log(nm(3))
const requestBody = {
    wordsBox: [
        "bcdaaa", "auaabc", "aabcca", "aaxlaa", "opolpp", "sskkzl",
    ]
}

function checkVowels(letter) {
    const vowel = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < vowel.length; i++) {
        if (letter === vowel[i]) {
            return true
        }
    }
    return false
}

// const  wordfunc = (body) => {
//     const words = [...body.wordsBox]
//     const store = []
//
//     for(let word of words){
//         const max = 4
//         let extra = 0
//         if(word.length > max) extra =  word.length - (max - 1)
//         if(extra){
//             for(let i = 0; i< word.length - extra; i++){
//                 if(checkVowels(word[i]) && checkVowels(word[i + 1]) && !(checkVowels(word[i + 2])) && !(checkVowels(word[i + 3]))){
//                     store.push(word[i] + word[i + 1] + word[i + 2] + word[i + 3])
//                 }
//             }
//         }else{
//             for(let i = 0; i< word.length - extra; i++){
//                 if(checkVowels(word[i]) && checkVowels(word[i + 1]) && !(checkVowels(word[i + 2])) && !(checkVowels(word[i + 3]))){
//                     store.push(word[i] + word[i + 1] + word[i + 2] + word[i + 3])
//                 } else break
//             }
//         }
//
//
//     }
//
//
//     return store
// }
//
// console.log(wordfunc(requestBody))


// function getResult(cave) {
//
//     const branches = [];
//     function f(index, distance) {
//         branches.push([index, distance]);
//         for (let i = 0; i < cave.length; i++) {
//             if (cave[i] === index) {
//                 f(i, distance+1);
//             }
//         }
//     }
//     f(-1, 0);
//     branches.sort((a, b) => b[1] - a[1]);
//     return branches[0][0];
// }
//
//
//
//
// console.log(getResult( [2, 2, 1, 5, 3, -1, 4, 5, 2, 3]))


// var countVowelStrings = function (n) {
//     let arr = ['a','e','i','o','u']
//     let result = []
//
//     const dfs = (vowel, chars) => {
//         if(chars.length === 2){
//             result.push(chars)
//         } else {
//             for(let i = vowel; i < arr.length; i++){
//                 dfs(i, chars + arr[i])
//             }
//         }
//     }
//
//     dfs(0,"")
//     return result.length
// }
//
// console.log(countVowelStrings(2))


// let arr = [2,2,3,4,7,6,0,-2,-3]
// let arr = [2,-1,-1,-1]
// let arr = [2, -7, -2, -2, 0]
// let arr = [-2,1]
// let arr = [0,1,2]
// let arr = [-2,3,5,-1,4]
// let arr = [-4,9,-1,1,-1,2,-8,-6,3]


// let arrSort = (arr) => {
//     arr.sort((a,b) => {
//         if(Math.abs(a) <= Math.abs(b)) return -1
//     })
//     return arr
// }


// let arrSort = (arr) => {
//     arr.sort((a,b) => {
//         // return a-b
//         // if (Math.abs(a) === Math.abs(b)) {
//         //     return a - b
//         // }
//         return Math.abs(a) - Math.abs(b);
//     })
//     return arr
// }
//
//
//
// console.log(arrSort(arr))
//
//
// function mergeSort(array) {
//     if(array.length === 1) {
//         //Return once we hit an array with a single item
//         return array
//     }
//
//     const middle = Math.floor(array.length/2)
//
//     const left = array.slice(0, middle)
//     const right = array.slice(middle)
//
//     return merge(mergeSort(left), mergeSort(right))
//
// }
//
// const merge = (left, right) => {
//     let result = []
//     let indexLeft = 0
//     let indexRight = 0
//
//     while (indexLeft < left.length && indexRight < right.length) {
//         if(left[indexLeft] < right[indexRight]) {
//             result.push(left[indexLeft])
//             indexLeft++
//         } else {
//             result.push(right[indexRight])
//             indexRight++
//         }
//     }
//
//     return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
// }
//
// console.log(mergeSort(arr))


// const sumMaxArray = (a, size) => {
//     var maxint = Math.pow(2, 53)
//     var max_so_far = a[1] - 1
//     var max_ending_here = 0
//     console.log(max_so_far)
//     for (var i = 0; i < size; i++) {
//         max_ending_here = max_ending_here + a[i]
//
//         if (max_so_far < max_ending_here)
//             max_so_far = max_ending_here
//
//         if (max_ending_here < 0)
//             max_ending_here = 0
//     }
//     return max_so_far
//
// }
//
// console.log(sumMaxArray([-2, -3, 4, -1, -2, 1, 5, -3], 8))


/* A Naive recursive implementation of
0-1 Knapsack problem */

// A utility function that returns
// maximum of two integers
// function max(a, b) {
//     return (a > b) ? a : b;
// }

// Returns the maximum value that can
// be put in a knapsack of capacity W
// function knapSack(W, wt, val, n) {
//
//     // Base Case
//     if (n == 0 || W == 0)
//         return 0;
//
//     // If weight of the nth item is
//     // more than Knapsack capacity W,
//     // then this item cannot be
//     // included in the optimal solution
//     if (wt[n - 1] > W)
//         return knapSack(W, wt, val, n - 1);
//
//         // Return the maximum of two cases:
//         // (1) nth item included
//     // (2) not included
//     else
//         return max(val[n - 1] +
//             knapSack(W - wt[n - 1], wt, val, n - 1),
//             knapSack(W, wt, val, n - 1));
// }
//
// let val = [20, 10, 5, 15, 10];
// let wt = [2, 1, 2, 3, 4];
// let W = 5;
// let n = val.length;
//
// console.log(knapSack(W, wt, val, n))


// function sayHello() {
//     // i check for the difference and if the difference is in the
//     //array I print the index I saved in the map and the index I found the difference
//
//     let nums = [1, 2, 4]
//     let target = 5
//     let map = {}
//
//     for (let i = 0; i < nums.length; i++) {
//         // If its not null means the value exist in the map
//         // So here we do a check for the difference on the target and the value of the nums we are on
//         if (map[target - nums[i]] != null) {
//             // I return both the index of the saved difference in the map and the index it was found
//             return [map[target - nums[i]], i]
//         }
//         // here we add the value to the map
//         map[nums[i]] = i
//
//     }
// }
//
// console.log(sayHello())


// function twoSum(n, t) {
//     let map = {}
//
//     for (let i = 0; i < n.length; i++) {
//         console.log(map)
//         if (map[t - n[i]] != null) {
//             return [map[t - n[i]], i]
//         }
//         map[n[i]] = i
//     }
//
//     return -1
// }
//
// console.log(twoSum([4, 3, 1], 5))


// function deletionDistance(str1, str2) {
//
//     // let concatenation = (str1.concat(str2)).split("")
//     let hash = {}
//     let count = 0
//     for (let i of str1) {
//         hash[i] = (hash[i] || 0) + 1
//     }
//
//     for (let j of str2) {
//         hash[j] = (hash[j] || 0) - 1
//     }
//     console.log(hash)
//
//     for (let x of Object.values(hash)) {
//         count = count + Math.abs(x)
//     }
//
//     return count
//
// }
//
// console.log(deletionDistance("", ""))


// function arrayOfArrayProducts(arr) {
//
//     if (arr.length <= 1) {
//         return [];
//     }
//     var results = [];
//     var right = [];
//     // always going to start off the left with 1
//     var left = [1];
//     // we need the last item to be 1, because we're going to iterate
//     //from the end of the array
//
//     right[arr.length - 1] = 1;
//
//     //loop over the array, calculating the current value by
//     // everything that is to the left of the current number
//
//     for (var i = 1; i < arr.length; i++) {
//         left[i] = left[i - 1] * arr[i - 1];
//     }
//     console.log(left, right)
//     // same here for the right, but in reverse
//
//     for (var i = arr.length - 2; i > -1; i--) {
//         right[i] = right[i + 1] * arr[i + 1];
//     }
//     // loop over array and calculate the final result numbers!!!
//     for (var i = 0; i < arr.length; i++) {
//         results[i] = left[i] * right[i];
//     }
//     return results;
// }
//
// console.log(arrayOfArrayProducts([2, 7, 3, 4]))


// function maxSubArraySum(a, size) {
//     let max_so_far = a[0];
//     let curr_max = a[0];
//
//     for (let i = 1; i < size; i++) {
//         curr_max = Math.max(a[i], curr_max + a[i]);
//         max_so_far = Math.max(max_so_far, curr_max);
//     }
//
//     return max_so_far;
// }
//
// // Driver code
//
// let a = [-2, -3, 4, -1, -2, 1, 5, -3];
// let n = a.length;
// console.log("Maximum contiguous sum is ", maxSubArraySum(a, n))


// function closestNumber(arr, n) {
//
//     // sort the given array
//     arr.sort(function (a, b) {
//         return a - b
//     });
//
//     arrs = []
//
//     let sums = arr[0]
//
//     for (let i = 1; i < arr.length - 1; i++) {
//         sums = Math.min(sums, Math.abs(arr[i] - arr[i + 1]));
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         if (sums === Math.abs(arr[i] - arr[i + 1])) {
//             arrs.push([arr[i], arr[i + 1]])
//         }
//     }
//     console.log(arrs)
// }
//
//
// let arr = [5, 10, 1, 4, 8, 7];
// // let arr = [6, 2, 4, 10];
//
// console.log(closestNumber(arr));


// function isToeplitzMatrix(matrix) {
//     // [1,2,3,4]
//     // [5,1,2,3]
//     // [9,5,1,2]
//
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (i > 0 && j > 0 && matrix[i][j] !== matrix[i - 1][j - 1]) return false
//         }
//     }
//     return true
// }
//
// const matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]
// console.log(isToeplitzMatrix(matrix))

// function recurse(val) {
//     if (val === 10) return "done"
//
//     console.log(val)
//     return recurse(val + 1)
// }
//
// console.log(recurse(1))

// function maxSumPairWithDifference(arr, k) {
//
//     let counter = 0
//     arr.sort((a, b) => b - a)
//     let left = 0
//     let right = 1
//
//     while (left < arr.length - 1 && right < arr.length) {
//         if (arr[left] - arr[right] < k) {
//             counter += arr[left] + arr[right]
//             left = right + 1
//             right = left + 1
//         } else {
//             left++
//             right++
//         }
//     }
//
//     return counter
// }
//
// console.log(maxSumPairWithDifference([3, 5, 10, 15, 17, 12, 9], 4))

// function besttimetosell(arr) {
//     let left = 0; // Buy
//     let right = 1; // sell
//     let max_profit = 0;
//     while (right < arr.length) {
//         if (arr[left] < arr[right]) {
//             let profit = arr[right] - arr[left]; // our current profit
//
//             max_profit = Math.max(max_profit, profit);
//         } else {
//             left = right;
//         }
//         right++;
//     }
//     console.log(arr)
//     return max_profit;
// }
//
// console.log(besttimetosell([7, 1, 5, 3, 6, 4]))


// var MAX_INDEX = 51;
// var MAX_SUM = 2505;
//
// var dp = Array(MAX_INDEX).fill().map(() => Array(MAX_SUM).fill().map(() => Array(MAX_INDEX).fill(0)));
//
//
// function waysutil(index, sum, count, arr, K) {
//     // Base cases
//     // Index can't be less than 0
//     if (index < 0) {
//         return 0;
//     }
//
//     if (index == 0) {
//
//         // No element is picked hence
//         // average cannot be calculated
//         if (count == 0) {
//             return 0;
//         }
//         var remainder = sum % count;
//
//         // If remainder is non zero, we cannot
//         // divide the sum by count i.e. the average
//         // will not be an integer
//         if (remainder != 0) {
//             return 0;
//         }
//
//         var average = sum / count;
//
//         // If we find an average return 1
//         if (average == K) {
//             return 1;
//         }
//     }
//
//     // If we have already calculated this function
//     // simply return it instead of calculating it again
//     if (dp[index][sum][count] != -1) {
//         return dp[index][sum][count];
//     }
//
//     // If we don't pick the current element
//     // simple recur for index -1
//     var dontpick = waysutil(index - 1, sum, count, arr, K);
//
//     // If we pick the current element add it to
//     // our current sum and increment count by 1
//     var pick = waysutil(index - 1, sum + arr[index], count + 1, arr, K);
//     var total = pick + dontpick;
//
//     // Store the value for the current function
//     dp[index][sum][count] = total;
//     return total;
// }
//
// // Function to return the number of ways
// function ways(N, K, arr) {
//     var Arr = [];
//
//     // Push -1 at the beginning to
//     // make it 1-based indexing
//     Arr.push(-1);
//     for (i = 0; i < N; ++i) {
//         Arr.push(arr[i]);
//     }
//
//     // Initialize dp array by -1
//     for (i = 0; i < MAX_INDEX; i++) {
//         for (j = 0; j < MAX_SUM; j++) {
//             for (l = 0; l < MAX_INDEX; l++) {
//                 dp[i][j][l] = -1;
//             }
//         }
//     }
//
//     // Call recursive function
//     // waysutil to calculate total ways
//     var answer = waysutil(N, 0, 0, Arr, K);
//     return answer;
// }
//
// var arr = [3, 6, 2, 8, 7, 6, 5, 9];
// var N = arr.length;
// var K = 5;
// console.log(ways(N, K, arr))


function Solution(T, R) {
    let nathanMap = {}
    let totalGroups;
    let totalGroupsPassed = 0;
    let score;
    let group

    let newResult;
    for (let i = 0; i < T.length; i++) {
        group = parseTestName(T[i]);
        if (nathanMap[group]) {
            // build a sequence of results e.g "10110"
            newResult = nathanMap[group].concat(convertResult(R[i]));
            nathanMap[group] = newResult;
        } else {
            nathanMap[group] = convertResult(R[i])
        }
    }

    // totalGroups = nathanMap.size();
    // for (String groupResult: nathanMap.values()) {
    //     if (!groupResult.contains("0")) {
    //         totalGroupsPassed=totalGroupsPassed+1;
    //     }
    // }

    // score = Math.round(totalGroupsPassed*100) / (double) totalGroups;
    //
    // System.out.println("Score: "+ (int) score);
    // return (int) score;

}

// function parseTestName(fullTestName) {
//     // "[task name] + [group number]" => task name or group name
//
//     let groupName;
//
//     // console.log(word)
//     // int suffixIndex = word.length - 1;
//     // // check if suffix exists
//     if (containsNumber(fullTestName)) {
//         // chop suffix
//         let word = fullTestName.split("");
//         groupName = fullTestName.substring(0, fullTestName.length - 1);
//     } else {
//         groupName = fullTestName;
//     }
//     console.log(groupName)
//     // //System.out.println(fullTestName + "->" + groupName);
//     // return groupName;
// }

// console.log(parseTestName("yrur1jd"))

// function containsNumber(str) {
//     return /\d/.test(str);
// }

// let T = ["codility1", "codility3", "codility2", "codility4b", "codility4a"]
// let R = ["Wrong answer", "OK", "OK", "Runtime error", "OK"]

// console.log(Solution(T, R))


// function recursion(n) {
//
//     if (n > 0) {
//         recursion(n - 1)
//         console.log(n)
//     }
//
// }
//
// console.log(recursion(100))

// const diskSpaceAnalysis = (arr, m) => {
//     // const result = []
//     // For following array [2, 5, 4, 6, 8] with x = 3, the answer is 4 see below
//     //
//     // The chunks would be:
//     //
//     //     [2, 5, 4] -> min: 2
//     //     [5, 4, 6] -> min: 4
//     //     [4, 6, 8] -> min: 4
//
//     // let n = arr.length
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (i >= n - 2) break
//     //     result.push(Math.min(...arr.slice(i, m + i)))
//     // }
//     // return Math.max(...result)
//
//     let i = 0
//     let j = 0;
//     let count = arr[0];
//     let maxN = [];
//     while (i <= arr.length - m && j < arr.length) {
//         if (j === i + m) {
//             i++
//             j = i
//             maxN.push(count)
//             count = arr[i]
//             continue
//         }
//
//         if (arr[j] <= count) {
//             count = arr[j]
//         }
//         j++
//     }
//     maxN.push(count)
//     return Math.max(...maxN)
// }
// console.log(diskSpaceAnalysis([2, 5, 4, 6, 8], 3))
// console.log(diskSpaceAnalysis([1, 2, 3, 1, 2], 1))
// console.log(diskSpaceAnalysis([8, 2, 4, 6], 2))


// var happy = {
//     hi: function sing(n, result) {
//         result = typeof result !== 'undefined' ? result : [];
//         if (n == 0) {
//             result.push("No more bottles");
//             return result;
//         }
//         var str = n + " bottles";
//         result.push(str);
//         return sing(n - 1, result);
//     }
// }
// console.log(happy.hi(3))


// function buildAdjList(n, edges) {
//     // const adjList = Array.from({length: n}, () => [])
//     const adjList = []
//     for (let i = 0; i < n; i++) {
//         adjList.push([])
//     }
//
//     for (let edge of edges) {
//         let [src, dest] = edge;
//
//         adjList[src].push(dest)
//         adjList[dest].push(src)
//     }
//
//     return adjList
// }


// let n = 5
// const edges = [[0, 1], [1, 2], [3, 4]]
// var adjacentList = buildAdjList(n, edges)
//
// console.log(adjacentList)
//
//
// function buildAdjList(n, edges) {
//     // const adjList = Array.from({length: n}, () => [])
//     const adjList = []
//     for (let i = 0; i < n; i++) {
//         adjList.push([])
//     }
//
//     for (let edge of edges) {
//         let [src, dest] = edge;
//
//         adjList[src].push(dest)
//         adjList[dest].push(src)
//     }
//
//     return adjList
// }


// function carParkingRoof(cars, k) {
//
//     let sortedCars = cars.sort((a, b) => a - b)
//     console.log(sortedCars)
//     let count = sortedCars[sortedCars.length - 1]
//
//     for (let i = 0; i < sortedCars.length - 2; i++) {
//         let j = i, temp = 0
//
//         while (j < i + 3) {
//             temp += sortedCars[j]
//             console.log(sortedCars[j])
//             j++
//
//         }
//         console.log(temp, "temp")
//         if (temp < count) count = temp
//     }
//     console.log(count, "result")
// }
//
// console.log(carParkingRoof([2, 10, 8, 17], 3))

function numPlayers(k, scores) {
    let count = 0
    const arr = scores.sort((a, b) => b - a).filter(a => a !== 0)
    let dup = [...new Set(arr)]
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] + 1) || 1
    }
    for (let i = 0; i < dup.length; i++) {
        if (count < k) {
            count += map[dup[i]]
        } else {
            return count
        }
    }
    return count
}

// console.log(numPlayers(3, [100, 50, 50, 25, 0])) //1,2,2,4
console.log(numPlayers(2, [50, 50, 50, 25, 0])) //1,1,1,4
// console.log(numPlayers(4,[2,2,3,4,5]))
// console.log(numPlayers(4,[20,40,60,80,100]))

