//Question
//Probblem Statment
// Starting with a




// Another simple solution that passes all tests is like following:
//
//     For the input
//
// 1 5 3
// 4 8 7
// 6 9 1
// Sort the parameters: 1 5 4 8 6 9 -> sort -> 1 4 5 6 8 9
//
// You get the following sequence: (1 (4 5) (6 8) 9)
//
// Then add values: (+3 (+7 -3) (+1 -7) -1)
//
// Sum up the values 3, 10, 7, 8, 1, 0
//
// The maximum value 10 is the result.
//
//     One additional moment is to handle identical params with different values. For them order should be descending.
//
//     Javascript version:
//
//     function arrayManipulation(n, queries) {
//
//         let max = 0;
//         const params = [];
//
//         for(let q=0; q<queries.length; q++){
//
//             const query = queries[q];
//             const qstart = query[0];
//             const qend = query[1];
//             const qval = query[2];
//
//             params.push({
//                 key: qstart,
//                 val: qval
//             });
//
//             params.push({
//                 key: qend,
//                 val: -qval
//             });
//         }
//
//         //sort the parameters by key
//         params.sort((item1, item2) => {
//             if(item1.key === item2. key){
//                 return item2.val - item1.val;
//             }
//
//             return item1.key - item2.key;
//         });
//
//         let sum = 0;
//
//         for(let i=0; i<params.length; i++){
//             const param = params[i];
//             sum += param.val;
//
//             if(sum > max){
//                 max = sum;
//             }
//         }
//
//         return max;
//     }

// function arrayManipulation(n, queries) {
//     let diffs = new Array(n + 1).fill(0);
//
//     queries.forEach(query => {
//         const [range_start, range_end, addend] = query;
//
//
//         diffs[range_start - 1] += addend;
//
//         diffs[range_end] -= addend;
//     });
//
//     return diffs.reduce((acc, cur) => {
//         return {
//             running_total: acc.running_total + cur,
//             max: Math.max(acc.max, acc.running_total + cur)
//         };
//     }, { running_total: 0, max: 0 }).max;
// }


// function arrayManipulation(arraySize, queries) {
//     const arr = Array(arraySize + 1);
//     let maxValue = 0;
//     // console.log(arr)
//
//     queries.forEach(([startRange, endRange, value]) => {
//         arr[startRange] = arr[startRange] || { start: 0, end: 0};
//         arr[endRange] = arr[endRange] || {start: 0, end: 0};
//
//         arr[startRange].start += value;
//         arr[endRange].end += value;
//     });
//
//
//     let currentNumber = 0;
//     arr.forEach((cell) => {
//         if(cell) {
//             currentNumber += cell.start;
//
//             if (currentNumber > maxValue) {
//                 maxValue = currentNumber;
//             }
//
//             currentNumber -= cell.end;
//         }
//     });
//     return maxValue;
// }
//
// console.log(arrayManipulation(7, [[1,2,100],[2,5,100],[3,4,100]]));

// My brute force solution

//     function arrayManipulation(n, queries) {
//         let arr = new Array(n + 1).fill(0);
//         for( let i = 0; i < queries.length; i++){
//             const [ first, last, cons ] = queries[i];
//             for(let j = first; j <= last; j++){
//                 arr.splice(first,1,cons);
//                 arr.splice(last,1,cons)
//                 // console.log(arr)
//             }
//
//         }
//         let total = [];
//         let target = 0
//         for (let i = 0; i < arr.length; i++){
//             let sum = arr[i] + arr[i + 1];
//             total.push(sum)
//         }
//         //  How to factor out Nan, 0, null from an array
//         let final = total.filter( x => x)
//         // let final = total.filter(Boolean)
//         // console.log(total)
//         return Math.max(...final)
//
//     }
//
// console.log(arrayManipulation(10,[[1,5,3],[4,8,7],[6,9,1]]));
//
// console.log(arrayManipulation(5,[[1,2,100],[2,5,100],[3,4,100]]));
