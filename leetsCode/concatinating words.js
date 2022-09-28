

Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

    A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.



    Example 1:

Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
"dogcatsdog" can be concatenated by "dog", "cats" and "dog";
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
    Example 2:

Input: words = ["cat","dog","catdog"]
Output: ["catdog"]












var findAllConcatenatedWordsInADict = function(words) {
    words.sort((word1, word2) => word1.length - word2.length);
    let wordsMap = {};
    let result = [];
    if(!words.length || words.length > 10,000) return result;
    const findWord = (word, wordMap) => {
        if(!word.length) return false;
        let dp = new Array(word.length + 1).fill(0);
        dp[0] = 1;
        for(let i = 1; i <= word.length; i++) {
            for(let j = 0; j <= i; j++) {
                if(dp[j]) {
                    let subStr = word.substring(j, i);
                    if(wordMap[subStr] === 1) {
                        dp[i] = 1;
                        break;
                    }
                }
            }
        }
        return dp.pop();
    }
    for(let word of words) {
        if(findWord(word, wordsMap)) {
            result.push(word);
        }
        wordsMap[word] = 1;
    }
    return result;
};
