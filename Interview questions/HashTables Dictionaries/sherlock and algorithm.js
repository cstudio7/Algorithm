
// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
//
//     For example , the list of all anagrammatic pairs is  at positions  respectively.
//
//     Function Description
//
// Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in .
//
// sherlockAndAnagrams has the following parameter(s):
//
// s: a string .
//     Input Format
//
// The first line contains an integer , the number of queries.
//     Each of the next  lines contains a string  to analyze.
//
//     Constraints
//
//
//
// String  contains only lowercase letters  ascii[a-z].
//
//     Output Format
//
// For each query, return the number of unordered anagrammatic pairs.
//
//     Sample Input 0
//
// 2
// abba
// abcd
// Sample Output 0
//
// 4
// 0


// Solution

function getAllSubstrings(s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            arr.push(s.slice(i, j));
        }
    }
    return arr;
}

function checkAllSubstrings(ss) {
    const dict = {};
    let count = 0;
    for (let str of ss) {
        const sortedStr = str.split('')
            .sort((a, b) => a.toLowerCase().localeCompare(b))
            .join('');
        if (dict[sortedStr]) {
            count += dict[sortedStr];
            dict[sortedStr] += 1;
        } else {
            dict[sortedStr] = 1;
        }
    }
    return count;
}

function sherlockAndAnagrams(s) {
    // Traverse all substrings within string
    const ss = getAllSubstrings(s);

    // Check if any two substrings of equal length are anagrams
    const count = checkAllSubstrings(ss);

    return count;
}


//Solution 2

function sherlockAndAnagrams(s) {
    var pairs = 0;
    var subStrings = {};

    //find all substrings of our string, count them in a hash
    for(var i = 0; i < s.length; i++){
        for(var j = i; j < s.length; j++){
            let tempSubString = s.substring(i, j+1).split("").sort().join("");
            if(subStrings[tempSubString]){
                subStrings[tempSubString] +=1;
            }else{
                subStrings[tempSubString] = 1;
            }
        }
    }

    //count the pairs of substrings
    for(var keys in subStrings){
        if(subStrings[keys] > 1){
            let temp = (subStrings[keys])*(subStrings[keys]-1)/2;
            pairs += temp;
        }
    }
    return pairs;
}

//Solution 3

function sherlockAndAnagrams (str) {

    let substr_map = new Map()
    for (let i = 0, l = str.length; i < l; i++) {
        for (let j = i; j < l; j++) {
            let substr = [ ...str.slice(i, j+1) ].sort().join('')
            let count = substr_map.get(substr) || 0
            substr_map.set(substr, count + 1)
        }
    }

    return [ ...substr_map.values() ].reduce((a,v) => a += v > 1 ? v * (v - 1)/2 : 0, 0)
}

