function camelcase(s) {
    let letter = s.split('');
    let upper = s.toUpperCase().split('');
    let count = 1;
    for (let i = 0; i < letter.length; i++){

        if (letter[i] === upper[i]){
            count++;
        }

    }
    return count;
}
console.log(camelcase('saveChangesInTheEditorYes'))
