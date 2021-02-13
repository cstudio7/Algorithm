
// Given two strings, determine if they share a common substring. A substring may be as small as one character.
//
//     For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.
//
//     Function Description
//
// Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.
//
//     twoStrings has the following parameter(s):
//
// s1, s2: two strings to analyze .
//     Input Format
//
// The first line contains a single integer , the number of test cases.
//
//     The following  pairs of lines are as follows:
//
// The first line contains string .
//     The second line contains string .
//     Constraints
//
// and  consist of characters in the range ascii[a-z].
//     Output Format
//
// For each pair of strings, return YES or NO.
//
//     Sample Input
//
// 2
// hello
// world
// hi
// world
// Sample Output
//
// YES
// NO

// Solution


// this is O(N^2), Remember this is to be avoided
function twoStrings(s1, s2) {
    let count = 0
    for (let i of s1){
        if (s2.includes(i)){
            count++
        }
    }
    console.log(count ? 'YES' : 'NO')
}

// This solution is O(N), which is an efficient solution

function twoStrings2(s1, s2) {
    var map = {};
    for (let i of s1) {
        map[i] = 1;
    }
    for (let i of s2) {
        if (map[i])
            return "YES";
    }
    return "NO";

}
