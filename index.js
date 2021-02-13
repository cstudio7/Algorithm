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



function repeatedString(s, n) {
    let c = 0,
        ca = 0,
        r = n % s.length;
    // console.log(s.length)
    for (let i = s.length; i-- > 0;) {
        // console.log(i)
        if (s.charAt(i) == 'a') {
            ++c
            if (i < r){
                console.log(i, r)
                ++ca
            }
        }
    }
    console.log(ca)

    return ((n - r) / s.length * c) + ca
}
console.log(repeatedString('abss', 10))
