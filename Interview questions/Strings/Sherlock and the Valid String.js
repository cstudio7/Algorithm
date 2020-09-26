// Sherlock considers a string to be valid if all characters of the string appear the same number of times.
//     It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times.
//     Given a string , determine if it is valid. If so, return YES, otherwise return NO.

// For example, if s = abc, it is a valid string because frequencies are { a: 1, b: 1, c: 1} .
// So is s = abcc  because we can remove one c and have 1 of each character in the remaining string.
// If  s = abccc however, the string is not valid as we can only remove 1 occurrence of c.
// That would leave character frequencies of {a:1, b: 1, c: 2}.


//Solution

// function isValid(s) {
//     let counter = {};
//     let freq = {};
//
//     // count of occurrences of characters
//     // for example aaabbcc => {a: 3, b: 2, c: 2}
//     Array.from(s).forEach(char => {
//         counter[char] = counter[char] || 0;
//         counter[char]++;
//     })
//
//     // count the frequency of those occurence counts,
//     // for example {a: 3, b: 2, c: 2} => {3: 1, 2: 2}
//     Object.keys(counter).forEach(k => {
//         freq[counter[k]] = freq[counter[k]] || 0;
//         freq[counter[k]]++;
//     })
//
//     // all our frequencies. e.g. [3, 2]
//     let freqArr = Object.keys(freq).map(Number);
//
//     // Simplest case: if there is only one frequency, it's valid
//     if (freqArr.length === 1) {
//         return 'YES'
//     }
//
//     // If not a single frequency string, check next simplest case
//
//     // there are exactly two frequencies
//     // e.g. [3, 2]
//     let twoFrequencies = freqArr.length === 2;
//     let [a, b] = freqArr;

    // frequency occurs only once
    // let oneOccurence = freq[a] === 1 || freq[b] === 1;
    //
    // // the difference is a singleton character
    // // e.g. abbcc
    // let singleton = (freq[a] === 1 && a === 1) || (freq[b] === 1 && b === 1)
    //
    // // differing frequency is exactly 1 more than others
    // // e.g. true if aaabbcc, false if abbcc
    // let diffOfOne = (freq[a] === 1 ? a - b : b - a) === 1;
    //
    // // if single character or frequencies differ by one
    // // and there are exactly two frequencies
    // // and there is only one occurence of the singleton or differing frequency
    // if ((singleton || diffOfOne) && twoFrequencies && oneOccurence) {
    //     return 'YES'
    // }
//
//     return 'NO'
// }

// solution 2

function isValid(s) {
    let isValid = 'YES';

    const cache = {};

    for (let i = 0; i < s.length; i++) {
        cache[s[i]] = (cache[s[i]]||0) + 1;
    }

    const frequency = Object.entries(cache).reduce((acc, curVal) => {
        const [char, freq] = curVal;
        if (!acc[freq]) acc[freq] = 0;
        acc[freq]++;
        return acc;
    }, {});

    const freqEntries = Object.entries(frequency);

    if (freqEntries.length > 2) return 'NO';
    if (freqEntries.length <= 1) return isValid;


    let minFreq = Math.min(+freqEntries[0][0], +freqEntries[1][0]);
    let maxFreq = Math.max(+freqEntries[0][0], +freqEntries[1][0]);

    if (minFreq === maxFreq - 1 && frequency[maxFreq] === 1) return 'YES';

    if (frequency[minFreq] > frequency[maxFreq]) {
        minFreq = maxFreq;
    }

    console.log(frequency, minFreq);
    if (+minFreq > 2) isValid = 'NO';
    if (frequency[minFreq] > 1) isValid = 'NO'

    return isValid;
}

//solution 3

function isValid(s) {
    let h = {};
    let res = "YES";
    let arr = [];
    let count = 0;
    for(let char of s){
        h[char] = h[char]+1 || 1; // if any char appear more than once, value will increament;
    }
    Object.values(h).map( v => {
        arr.push(v);
        //if any value is different than first value;
        if(v !== arr[0]){
            count++;  // count how many values are different
            if( (v > arr[0]) && (v-1 !== arr[0]) ){
                res = "NO";
            } else if ( (v < arr[0]) &&  (v !== (arr[0]-1)) ){
                console.log(v, arr[0])
                res = "NO"
            }
        }
    })

    if(count > 1) res = "NO"; // if more than one values are different
    if(count == 1) res = "YES"; // if only one value is different
    return res;
}

//solution 4

function isValid(s) {
    if(s.length <= 3) {
        return 'YES';
    }

    const counter = Array(26).fill(0);
    for (let i = 0; i < s.length; i += 1) {
        counter[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    }

    const sortedCounter = counter.filter(num => num !== 0).sort((a, b) => a - b);
    const min = sortedCounter[0];
    const max = sortedCounter[sortedCounter.length - 1];

    // [1, 1, 1, 1]
    if (min === max) {
        return 'YES'
    } else {
        // CASE [1, 2, 2, 2] OR [2, 2, 2, 3]
        if ((min === 1 && sortedCounter[1] === max)
            || ((max - min) === 1 && min === sortedCounter[sortedCounter.length - 2])) {
            return 'YES';
        }
    }
    return 'NO';
}

//solution 5


function isValid(s) {
    // build a count of each letter in the string
    let arr = {};
    [...s].forEach(x => arr[x] = x in arr ? arr[x]+1 : 1);
    // build a count of each count value
    let arr2 = {};
    Object.values(arr).forEach(x => arr2[x] = x in arr2 ? arr2[x]+1 : 1);
    // string is valid only if we can match these conditions (x is count, y is no.chars having that count)
    // { 'x': y } (all chars have the same count)
    // { 'x': y, 'x+1': 1 } (exactly one char has a count one higher than all the others)
    // { 'x': y, '1': 1} (exactly one char appears just one time)
    let keys = Object.keys(arr2);
    let vals = Object.values(arr2);
    switch (keys.length) {
        case 1: return "YES";
        case 2: if ((keys[0]-keys[1]==1 && vals[0]==1) ||
            (keys[1]-keys[0]==1 && vals[1]==1)) {return "YES"}
            if ((keys[0]==1 && vals[0]==1) ||
                (keys[1]==1 && vals[1]==1)) {return "YES"}
        default: return "NO";
    }
}
