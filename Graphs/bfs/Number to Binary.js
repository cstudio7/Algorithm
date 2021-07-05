

// There is a method in solving this, Although the data structure is queue,
// See the catch
// 1) Create an empty queue of strings
// 2) Enqueue the first binary number "1" to queue.
// 3) Now run a loop for generating and printing n binary numbers.
// ......a) Dequeue and Print the front of queue.
// ......b) Append "0" at the end of front item and enqueue it.
// ......c) Append "1" at the end of front item and enqueue it.

// [
//     '1',
//     '10',
//     '11',
//     '100',
//     '101',
//     '110',
//     '111',
//     '1000',
//     '1001',
//     '1010'
// ]



// const generatePrintBinary = (n) => {
//
//     // Create an empty queue of strings
//     var q = [];
//     const result = []
//
//     // Enqueue the first binary number
//     q.push("1");
//
//     // This loops is like BFS of a tree with 1 as root
//     // 0 as left child and 1 as right child and so on
//     while (n--) {
//         // console.log(q)
//         // // print the front of queue
//         var s1 = q[0];
//         // console.log(q)
//         q.shift();
//         result.push(s1)
//
//         var s2 = s1; // Store s1 before changing it
//         // console.log(s2)
//
//         // Append "0" to s1 and enqueue it
//         q.push(s1+"0");
//
//
//         // Append "1" to s2 and enqueue it. Note that s2
//         // contains the previous front
//         q.push(s2+"1");
//     }
//
//
//     return result
// }


// // Driver program to test above function

// console.log(generatePrintBinary(10));

