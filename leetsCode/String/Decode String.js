
394. Decode String
Medium

4849

230

Add to List

Share
Given an encoded string, return its decoded string.

    The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

    You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

    Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].



Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
Example 4:

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"



const DecodeString = (nums) => {
    let store = []
    let u = []
    for (let i = 0; i <nums.length; i++){
        if(nums[i] === '['){
            let st = [];
            for(let j = i; j<nums.length;j++){
                if(nums[j+1] === ']') break
                st.push(nums[j+1])
            }
            let me
            me = (st.join('').repeat(nums[i-1]))
            store.push(me)
        }

        if(nums[i] === ']' && parseInt(nums[i+1]) != nums[i+1]) {
            for(let h = [i+1]; h<nums.length; h++){
                if(h+1 === '[') return
                u.push(nums[h])
            }
        }
    }
    return store.join('').concat(u.join(''))
}

console.log(DecodeString('3[a]2[bc]'))


const decodeString = (s) => {
    let multiply = [];
    let temp = ''
    let repeatStr = [];
    let solution = '';

//    3[a2[c]]
    for(let char of s) {
        if(!isNaN(char)) {
            temp = `${temp}${char}`  //[31]
        }else if (char === '['){
            multiply.push(temp);   //[31]
            temp = '';
            repeatStr.push(solution) //['']
            solution = '';
        }else if (char === ']'){
            solution = repeatStr.pop() + solution.repeat(multiply.pop())
        } else {
            solution += char;  //''+a
        }
    }
    return solution
}