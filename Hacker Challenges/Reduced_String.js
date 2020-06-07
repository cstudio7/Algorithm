// Complete this function
var chars = s.split('');
for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i+1]) {
        chars.splice(i, 2);
        return super_reduced_string(chars.join(''))
    }
}
return s.length > 0 ? s : "Empty String";
}
