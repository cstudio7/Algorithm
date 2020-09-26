// You are given a string containing characters A and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
//
//     Your task is to find the minimum number of required deletions.


// For example, given the string s = AABAAB , remove an A at positions 0 and 3 to make s = ABAB  in 2 deletions.


//Solution

function alternatingCharacters(s) {
    const arr = s.split('')
    let deleted = 0
    let last = arr[0]
    for (let i = 1; i < arr.length; ++i) {

        if (arr[i] === last) deleted++
        else last = arr[i]
    }
    return deleted
}

function alternatingCharacters(s) {
    let deletions = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) deletions++;
    }

    return deletions;
}

function alternatingCharacters(s) {
    const multiples = s.match(/(.)+?(?!\1)/g);
    return multiples.reduce((a, c) => a + c.length - 1, 0);
}

function processData(input) {
    input.replace(/\n(.*)/g,function(_,x){console.log((x.match(/(.)(?=\1)/g)||[]).length)})
}
