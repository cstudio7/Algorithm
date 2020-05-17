// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.
//
//     Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.
//
//     For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.
//
//     Function Description
//
// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.
//
//     repeatedString has the following parameter(s):
//
// s: a string to repeat
// n: the number of characters to consider



                 // Javascript Solution

// Efficient JavaScript solution
// The algorithm doesn't count the string a second time, both best and worst case is O(n) where n = length of the string
//
// From my repo https://github.com/gabrielgiordan/HackerRank

    function repeatedString(s, n) {
        let c = 0,
            ca = 0,
            r = n % s.length

        for (let i = s.length; i-- > 0;) {
            if (s.charAt(i) == 'a') {
                ++c

                if (i < r)
                    ++ca
            }
        }

        return ((n - r) / s.length * c) + ca
    }


function repeatedString(s, n) {
    let fracNumber = Math.trunc(n / s.length);
    let reminder = n % s.length;
    let counter = 0;

    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    counter = counter * fracNumber;
    for (let index = 0; index < reminder; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    return counter;
}

return ((s.match(/a/g) || []).length * Math.floor(n / s.length)) + ((s.substring(0,n % s.length)).match(/a/g) || []).length;


JavaScript solution. Using any kind of loop will only make it timeout.

    function repeatedString(s, n) {
    let occurances = (s.split("a").length - 1);
    let max = Math.floor(n / s.length);
    let repeats = occurances * max;
    repeats += (s.slice(0, n % s.length).split("a").length - 1);
    return repeats;
}


Javascript solution with regex:

function repeatedString(s, n) {
    const a = s.match(/a/g);
    const numOfA = a ? a.length : 0;
    const extraA = s.slice(0, n % s.length).match(/a/g);
    return (((n - (n % s.length)) / s.length) * numOfA) + (extraA ? extraA.length : 0);
}
