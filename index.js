//
// let arr = [
//     [-9, -9, -9,  1, 1, 1],
//     [0, -9,  0,  4, 3, 2],
//     [-9, -9, -9,  1, 2, 3],
//     [0,  0,  8,  6, 6, 0],
//     [0,  0,  0, -2, 0, 0],
//     [0,  0,  1,  2, 4, 0]
// ];
//
// function hourglassSum(arr) {
//
//     let hourglasses = [];
//
//     if (typeof arr === "object"
//         && arr.length === 6
//         && arr.map(i => i.length).reduce((p, n) => p + n) === 36)
//     {
//
//         for (let row = 0; row <= 3; row++) {
//             for (let col = 0; col <= 3; col++) {
//                 let sum = 0;
//
//                 sum += arr[row][col];
//                 sum += arr[row][col + 1];
//                 sum += arr[row][col + 2];
//                 sum += arr[row + 1][col + 1];
//                 sum += arr[row + 2][col];
//                 sum += arr[row + 2][col + 1];
//                 sum += arr[row + 2][col + 2];
//
//                 hourglasses.push(sum);
//             }
//         }
//     }
//
//     return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
// }
//
// console.log(hourglassSum(arr))

// let a = [1,2,3,4,5]
//
// function rotLeft(a, d) {
//      let a_length = 0;
//      let b =[];
//      let len = a.length
//     for( let i = d; i < len; i++){
//         b[a_length] = a[i]
//         a_length++
//     }
//     for (let i = 0; i < d; i++){
//         b[a_length] = a[i]
//         a_length++
//     }
//     return b
// }
// console.log(rotLeft(a, 2))
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 2, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]


// function minimumBribes(q) {
//     let swaps = 0;
//     let min = q.length;
//     for (let i = q.length - 1; i >= 0; i--){
//         if (q[i] - i > 3 ){
//             return `Too chaotic`;
//         }
//         if(q[i] > i+1) {
//             swaps += (q[i]-(i+1));
//         }
//         else {
//             if (min > q[i]){
//                 min = q[i];
//             } else if (q[i] != min){
//                 swaps++;
//             }
//         }
//     }
//     return swaps;
// }

// let bribeCount = []
// let high = 0;
//
// for (let i = 0; i < q.length; i++) {
//     let val = q[i]
//     bribeCount[val] = 0
//     high = Math.max(val, high)  // update the highest value encountered
//
//     if (val < high) {
//         // if current value < high value, increment value for all bribeCount indices > val
//         for (let j=val+1; j < bribeCount.length; j++) {
//             bribeCount[j]++
//             if (bribeCount[j] > 2) {
//                 console.log("Too chaotic")
//                 return;
//             }
//         }
//     }
// }
// const sum = bribeCount.reduce((a,b) => a + b, 0)  // sum
// console.log(sum);

//Objects

const animal = {
    lion: 'v.strong',
    fowl: "thats foul!!",
    goat: 'v.stubborn'
}

//Object.Entries
const kp = Object.entries(animal);
// console.log(kp)
//Object.keys
animal.lamb = "v.meek";
const we = 'happy';
console.log(Object.values(animal));

for( let prop in animal) {
    console.log(`key: ${prop} and the is value: ${animal[prop]}`)
}
