
// A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.
//
//     Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
//
//     Input Format
//
// The first line contains two space-separated integers describing the respective values of (the number of words in the magazine) and (the number of words in the ransom note).
//
// The second line contains space-separated strings denoting the words present in the magazine.
//
//     The third line contains space-separated strings denoting the words present in the ransom note.
//
//     .
//     Each word consists of English alphabetic letters (i.e.,  to  and  to ).
// Output Format
//
// Print Yes if he can use the magazine to create an untraceable replica of his ransom note. Otherwise, print No.
//
//     Sample Input 0
//
// 6 4
// give me one grand today night
// give one grand today
// Sample Output 0
//
// Yes
// Sample Input 1
//
// 6 5
// two times three is not four
// two times two is four
// Sample Output 1
//
// No
// Explanation 1
//
// 'two' only occurs once in the magazine.
//
//     Sample Input 2
//
// 7 4
// ive got a lovely bunch of coconuts
// ive got some coconuts
// Sample Output 2
//
// No
// Explanation 2
//
// Harold's magazine is missing the word .


//Solution

// function checkMagazine(magazine, note) {
//     let map = {};
//     let replicable = true;
//     for (let i of magazine){
//         map[i] = (map[i] || 0) + 1;
//     };
//     for (let i of note ){
//         map[i] = (map[i] || 0) - 1
//     }
//     console.log(map)
//     for (let i in map) {
//         if (map[i] < 0) {
//             replicable = false;
//             break;
//         }
//     }
//     console.log(replicable ? 'Yes' : 'No');
// }
//
// console.log(checkMagazine('give me one grand today night','give one grand today'))













