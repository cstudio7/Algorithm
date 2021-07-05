
// Umbrellas are available in different sizes that are each able to
// shelter a certain number of people. Given the number of people
//needing shelter and a list of umbrella sizes, determine the minimum number
//of umbrellas necessary to cover exactly the number of
//people given, and no more. If there is no combination that covers
// exactly that number of people, return -1.

// Example
// requirement = 5
// sizes = [3,5]
// One umbrella can cover exactly 5 people, so the function
// should return 1.


//  Failed Solution
// const getUmbrellas = (n, umbrellas) => {
//     let arr = umbrellas.sort((a,b)=> b-a)
//     let sum = 0
//     for(let i = 0; i<arr.length; i++){
//         sum+= arr[i]
//         if(n % arr[i] === 0) return (n/arr[i])
//         if(n % sum === 0) return i+1
//     }
//     return -1
// }
//
// console.log(getUmbrellas(8,[3,5]))

// const Monsoon = (umbrella, n) => {
//     const cache = Array(n+1)
//     cache.fill(n+1)
//     cache[0] = 0
//     for(let i = 1; i<= n; i++){
//         for (let j =0; j<umbrella.length; j++){
//             if(umbrella[j] <= i){
//                 cache[i] = Math.min(cache[i], cache[i - umbrella[j]] + 1);
//             }
//         }
//     }
//
//     console.log(cache)
//     return cache[n] > n ? -1 : cache[n]
// };
//
// console.log(Monsoon([1,5], 8))

