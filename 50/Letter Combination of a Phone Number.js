
var letterCombinations = function (digits) {
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    let combs = digits ? [""] : [];
    for (const digit of digits) {
        let newCombs = [];
        for (const comb of combs) {
            for (const letter of map[digit]) {
                newCombs.push(comb + letter);
            }
        }
        combs = newCombs;
    }
    return combs;
};

//Backtracking Solution

var letterCombinations = function (digits) {
    if(digits.length===0 || digits==="") return []
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let result = []
    backtrack([], 0)
    return result;
    function backtrack(arr, index) {
        if (arr.length === digits.length) {
            result.push(arr.join(''));
            return;
        }
        for (let digit of map[digits[index]]) {
            arr.push(digit);
            backtrack(arr, index + 1)
            arr.pop()
        }
    }
}

//dfs
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(digits.length == 0) {
        return [];
    }

    let map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    let answer = [];

    let path = "";

    let index = 0;

    function dfs(digits, index, path, map, answer) {

        if (index == digits.length) {
            answer.push(path);
            return;
        }

        let current = map[digits[index]];

        for(let i = 0; i < current.length; i++) {

            path = path + current[i];
            dfs(digits, index+1, path, map, answer);
            path = path.slice(0, -1);
        }
    }

    dfs(digits, index, path, map, answer);

    return answer;
};


var letterCombinations = function(digits) {
    if(!digits.length) return [];
    var letterMap = [
        "", // 0
        "", // 1
        "abc", // 2
        "def", // 3
        "ghi", // 4
        "jkl", // 5
        "mno", // 6
        "pqrs", // 7
        "tuv", // 8
        "wxyz", // 9
    ];
    var result = [];
    var helper = function(string, index) {
        if(string.length === digits.length) {
            result.push(string);
            return;
        }
        if(index >= digits.length) return;
        var letters = letterMap[digits[index]];
        for(var i = 0; i < letters.length; i++) {
            helper(string + letters[i], index + 1);
        }
    }
    helper("", 0);
    return result;
};


//brute Force

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const mapping = {
        "2": ["a", "b", "c"],
        "3": ["d","e","f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t","u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    digits = digits.split("")
    let result = []
    for(const digit of digits) {
        result = charStringMutiply(mapping[digit], result)
    }
    return result
};

var charStringMutiply = function(chars, strings) {
    const result = []
    if(strings.length ==0) {
        return chars
    }
    for (const character of chars) {
        for (const st of strings) {
            result.push(st+character)
        }
    }
    return result
}

// The question is a dfs question, meaning that each digit is a tree level by itself.
//
//     Take the input '23' for example:
// treeLevel = 0: a ----- b ----- c
// treeLevel = 1: ad, ae, af ----- bd,be,bf ----- cd,ce,cf
//
// So, essentialy, we loop through each level and then call recursion and increase the treeLevel by 1.
// When the digits length equals the helper string, we add it to the result array and return.
//
// var letterCombinations = function(digits) {
//     const letters = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'};
//     const res = [];
//     if(!digits) return res;
//
//     const getCombos = (treeLevel, appendStr) =>{
//         if(appendStr.length === digits.length){
//             res.push(appendStr);
//             return;
//         }
//
//         let num = digits[treeLevel];
//         let numLetters = letters[num];
//
//         for(let i = 0; i < numLetters.length; i++){
//             getCombos(treeLevel + 1, appendStr + numLetters[i]);
//         }
//     }
//     getCombos(0, '');
//     return res;
// };


// Idea:
//     Since each digit can possibly mean one of several characters, we'll need to create code that branches down the different paths as we iterate through the input digit string (D).
//
// This quite obviously calls for a depth-first search (DFS) approach as we will check each permutation of characters and store them in our answer array (ans). For a DFS approach we can use one of several options, but a recursive solution is generally the cleanest.
//
//     But first, we'll need to set up a lookup table (L) to convert a digit to its possible characters. Since the digits are actually low-indexed integers, we can actually choose between an array or map/dictionary here with little difference.
//
// For our DFS function (dfs), we'll have to feed it the current position (pos) in D as well as the string (str) being built. The function will also need to have access to D, L, and ans.
//
// The DFS function itself is fairly simple. It will push a completed str onto ans, otherwise it will look up the characters that match the current pos, and then fire off new recursive functions down each of those paths.
//
//     Once we're done, we should be ready to return ans.
//
// Implementation:
//     Javascript and Python will have scoped access to D, L, and ans inside dfs, so won't need to pass in references via arguments.
//
// Java should make sure to use a char[][] and a StringBuilder for better performance here.
//
//     Javascript Code:
//     The best result for the code below is 68ms / 38.4MB (beats 97% / 92%).
//
// const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
//     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}
//
// var letterCombinations = function(D) {
//     let len = D.length, ans = []
//     if (!len) return []
//     const dfs = (pos, str) => {
//         if (pos === len) ans.push(str)
//         else {
//             let letters = L[D[pos]]
//             for (let i = 0; i < letters.length; i++)
//                 dfs(pos+1,str+letters[i])
//         }
//     }
//     dfs(0,"")
//     return ans
// };


// Python Code:
//     The best result for the code below is 24ms / 14.2MB (beats 95% / 86%).
//
// L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
//     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}
//
// class Solution:
// def letterCombinations(self, D: str) -> List[str]:
// lenD, ans = len(D), []
// if D == "": return []
// def dfs(pos: int, st: str):
// if pos == lenD: ans.append(st)
// else:
// letters = L[D[pos]]
// for letter in letters:
// dfs(pos+1,st+letter)
// dfs(0,"")
// return ans


// Java Code:
//     The best result for the code below is 0ms / 37.5MB (beats 100% / 94%).
//
// class Solution {
//     final char[][] L = {{},{},{'a','b','c'},{'d','e','f'},{'g','h','i'},{'j','k','l'},
// {'m','n','o'},{'p','q','r','s'},{'t','u','v'},{'w','x','y','z'}};
//
// public List<String> letterCombinations(String D) {
//     int len = D.length();
//     List<String> ans = new ArrayList<>();
//     if (len == 0) return ans;
//     dfs(0, len, new StringBuilder(), ans, D);
//     return ans;
// }
//
// public void dfs(int pos, int len, StringBuilder sb, List<String> ans, String D) {
//     if (pos == len) ans.add(sb.toString());
//     else {
//         char[] letters = L[Character.getNumericValue(D.charAt(pos))];
//         for (int i = 0; i < letters.length; i++)
//         dfs(pos+1, len, new StringBuilder(sb).append(letters[i]), ans, D);
//     }
// }
// }


// C++ Code:
//     The best result for the code below is 0ms / 6.4MB (beats 100% / 96%).
//
// unordered_map<char, string> L({{'2',"abc"},{'3',"def"},{'4',"ghi"},
// {'5',"jkl"},{'6',"mno"},{'7',"pqrs"},{'8',"tuv"},{'9',"wxyz"}});
//
// class Solution {
//     public:
//         vector<string> letterCombinations(string D) {
//     int len = D.size();
//     vector<string> ans;
//     if (!len) return ans;
//     dfs(0, len, "", ans, D);
//     return ans;
// }
//
// void dfs(int pos, int &len, string str, vector<string> &ans, string &D) {
//     if (pos == len) ans.push_back(str);
//     else {
//         string letters = L[D[pos]];
//         for (int i = 0; i < letters.size(); i++)
//         dfs(pos+1, len, str+letters[i], ans, D);
//     }
// }
// };
