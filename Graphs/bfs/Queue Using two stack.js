// A queue is an abstract data type that maintains the order in which elements were added to it,
// allowing the oldest elements to be removed from the front and new elements to be added to the rear.
// This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue
// (i.e., the one that has been waiting the longest) is always the first one to be removed.
//
//     A basic queue has the following operations:
//
//     Enqueue: add a new element to the end of the queue.
//     Dequeue: remove the element from the front of the queue and return it.
//     In this challenge, you must first implement a queue using two stacks. Then process  queries, where each query is one of the following  types:
//
//     1 x: Enqueue element  into the end of the queue.
//     2: Dequeue the element at the front of the queue.
//     3: Print the element at the front of the queue.
//     Input Format
//
// The first line contains a single integer, , denoting the number of queries.
//     Each line  of the  subsequent lines contains a single query in the form described in the problem statement above. All three queries start with an integer denoting the query , but only query  is followed by an additional space-separated value, , denoting the value to be enqueued.


// const me = [
//     '1 42', '2',    '1 14',
//     '3',    '1 28', '3',
//     '1 60', '1 78', '2',
//     '2'
// ]
//
//
// const queue = (me) => {
//     let u = []
//
//     for(let i = 0; i<me.length; i++){
//         [num, act] = me[i].split(" ");
//         // console.log(me[i])
//         if(num === "1") u.push(act)
//
//         if(num === "2")u.shift()
//
//         if(num === "3"){
//             console.log(u[0])
//         }
//     }
//
// }
//
// console.log(queue(me))


// function processData(input) {
//     const [s1, s2] = [[],[]];
//     const [_, ...queries] = input.split('\n');
//
//     const enqueue = (n) => s1.push(+n)
//
//     const dequeue = () => {
//         if(!s2.length) {
//             while(s1.length) {
//                 s2.push(s1.pop())
//             }
//         }
//     }
//
//     queries.forEach(query => {
//         const [type, number] = query.split(' ');
//         switch(+type) {
//             case 1:
//                 enqueue(number)
//                 break;
//             case 2:
//                 dequeue()
//                 s2.pop()
//                 break;
//             default:
//                 dequeue()
//                 console.log(s2[s2.length -1])
//                 break;
//         }
//     });
// }
