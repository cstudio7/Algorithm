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

// function filterNumbersFromArray(arr) {
//     // Write the code that goes here
//     for(let i =0; i< arr.length; i++){
//         console.log(typeof arr[i])
//     }
//
// }
//
// console.log(filterNumbersFromArray([2,'3']))

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

// let arr = [1,2,3,2,5,6,6,4,]
// let me = arr.map(x=> arr.indexOf(x) < 3 ? x : 0 )
// console.log(me)
// console.log(arr.splice(0,3))

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


//convert stuff around to water
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

class emp{
    constructor(name, address){
        this.name = name;
        this.address = address
    }

    eat(){
        console.log('I am happy ' + this.name)
    }
}

let food = new emp('Victoria', 'Kano State')

console.log(food.eat())