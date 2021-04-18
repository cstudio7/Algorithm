// Parking Dilemma
//
// Problem Description
// There are many cars parked in the parking lot. The parking space is a long straight line,
// with one parking space per meter. Many cars are currently parked, and you want to shelter from the rain by building a roof.
// It is required that at least the roofs of k cars are covered by the roofs. What is the minimum length to cover the roofs of k cars?
//     This function has the following parameters:
//
//     cars: an integer array of length, representing the parking space for parking cars
// k: Integer, indicating the number of cars that must be covered by the roof
// Sample
// Example:
//     Input:
//         cars: [2, 10, 8, 17]
// k: 3
// Output: 9
// Explanation: You can build a roof with a length of 9 to cover all parking spaces from the 2nd to the 10th, so you can cover 3 cars at the 2nd, 10th, and 8th positions. There is no shorter one that can cover the roof of 3 cars, so the answer is 9
//
// Precautions
// 1 <= n <= 10^5
// 1 <= k <= n
// 0 <= cars[i] <= 10^14
// The cars above all parking spaces are unique






// function carParkingRoof(cars, k) {
//     // Write your code here
//     let cars2 = cars.sort((a,b)=>a-b)
//     let count = 0
//     count = cars2[k-1] - cars[0];
//     for (let i = 0; i<cars2.length -k; i++ ){
//         if(count > cars2[k-1+i] - cars[i]){
//             count = cars[k-1+i] -cars[i]
//         }
//     }
//     return count + 1
// }
//
// console.log(carParkingRoof([2,10,8,17], 3))