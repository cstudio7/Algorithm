// const Joi = require('joi');
//
// const us = {
//     username: 'hau',
//     birth_year: 373737,
//     email: "jidiod@gmail.com"
// }
// const schema = Joi.object({
//     username: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),
//
//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
//
//     birth_year: Joi.number()
//         .integer().required()
//         .required(),
//
//
//     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }})
// })


//
// schema.validate(us);
// // -> { value: { username: 'abc', birth_year: 1994 } }
//
// schema.validate({});
// // -> { value: {}, error: '"username" is required' }
//
// // Also -
// const val = () => {
//     try {
//         const value = await Joi.validate(us,schema );
//         return value
//     }catch (err) {
//         console.log(err)
//     }
// };

// const valentine = () => {
//     const val = 50;
//     const er = val.toString()
//     if(val.toString().length > 1 || val === 50) console.log('we')
//     return 'happy'
// }
//
// console.log(valentine())

//
// function substrCount(n, s) {
//     const a = s.split("").reduce((acc, el, i, arr) => {
//         if (el === acc[0]) {
//             acc[1] = acc[1] + 1;
//         } else {
//             if (acc[0] !== "") acc[2].push([acc[0], acc[1]]);
//             acc[0] = el;
//             acc[1] = 1;
//         }
//         if ((i + 1) === arr.length) {
//             acc[2].push([acc[0], acc[1]])
//         }
//         return acc
//     }, ["", 0, []])[2]
//     //console.table(a);
//     let last = a.length - 1;
//     return a.reduce((acc, el, i, arr) => {
//         acc = acc + (el[1] * (el[1] + 1) / 2)
//         if ((el[1] == 1) && (i != 0) && (i != last) && (arr[i - 1][0] == arr[i + 1][0])) {
//             acc = acc + Math.min(arr[i - 1][1], arr[i + 1][1])
//         }
//         return acc
//     }, 0)
// }
//
// console.log(substrCount(5, 'mnonopoo'))


// Palindrome: A word spelt the same way both forward and backward
//    function palindrome(str) {
//     let regex = /[\W_]/g;
//     let newStr = str.toLowerCase().replace(regex, "")
//        //string does not reverse so we save it in an array
//        console.log(newStr)
//        let word = newStr.split("");
//        let reverse = word.reverse().join("");
//        if ( "sose" !== reverse) return false
//        return "it is a palindrome"
//    }
//
//    console.log(palindrome("sos"));


// const func = arr => {
//     const result = [];
//     const hash = {};
//     const freq = [];
//
//     for (let i = 0; i < arr.length; i += 1) {
//         const [action, value] = arr[i];
//         const initValue = hash[value] || 0;
// console.log(hash)
//         if (action === 1) {
//             hash[value] = initValue + 1;
//
//             freq[initValue] = (freq[initValue] || 0) - 1;
//             freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
//         }
//
//         if (action === 2 && initValue > 0) {
//             hash[value] = initValue - 1;
//
//             freq[initValue - 1] += 1;
//             freq[initValue] -= 1;
//         }
//
//         if (action === 3) result.push(freq[value] > 0 ? 1 : 0);
//     }
//
//     return result;
// };
// console.log(func([[1,1],[2,2],[3,2],[1,1],[1,1],[2,1],[3,2]]));
//

// let k = 1000;
// const mat = 'a';
// let count = 0
// if(mat.length === 1) {
//    return ;
// }
// const mate = mat.split('')
// for (let i = 0; i < k; i++){
//    if(mate.length < k){
//       const first = mate[i]
//       mate.push(first)
//       console.log(mate)
//    }
//
// }
// mate.forEach(e => {
//    if(e === 'a'){
//       count++
//    }
// }
// )


// let arr = [ 4, 1],
//     sorted = false;
//
// while(!sorted) {
//    sorted = true;
//    for(var i=0; i < arr.length; i++) {
//       if(arr[i] < arr[i-1]) {
//          let temp = arr[i];
//          arr[i] = arr[i-1];
//          arr[i-1] = temp;
//          sorted = false;
//       }
//    }
// }
// console.log(arr)

// function countSwaps(a) {
//    let arr = a;
//    let sorted = false;
//    let count = 0
//    while(!sorted){
//       sorted = true;
//       for(let i =0; i < arr.length; i++){
//          if(arr[i] < arr[i -1]){
//             var temp = arr[i];
//             arr[i] = arr[i-1];
//             arr[i-1] = temp;
//             count++
//             sorted = false
//          }
//       }
//    }
//    console.log(count)
// }
// console.log(countSwaps([2, 1, 3, 1, 2]))

const arr = [1,2,3,4,5,6]
const arr1 = [1,2,3,4,5,6]
const arr2 = false
const arr3 = false
if(arr && (arr2 || arr3) === false){
   console.log('happy')
}