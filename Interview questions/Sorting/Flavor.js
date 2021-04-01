// function whatFlavors(cost, k) {
//     const flavors = {};
//     for (let index = 0; index < cost.length; index++) {
//         if (flavors[k - cost[index]] !== undefined) {
//             console.log(`${flavors[k - cost[index]]} ${index + 1}`);
//         } else {
//             flavors[cost[index]] = index + 1;
//         }
//     }
//     console.log(flavors)
// }
// console.log(whatFlavors([4,3,2,5,7],8))