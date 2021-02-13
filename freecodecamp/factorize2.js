// Factorize a number

function factorize(num) {
    let total = 1;
    for (let i = 1; i<=num; i++) {
        total *= i
    }
    return total
}
console.log(factorize(6))

// Recursion

function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

console.log(factorialize(5));
