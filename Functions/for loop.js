// Reference
// https://www.freecodecamp.org/news/the-complete-guide-to-loops-in-javascript-f5e242921d8c/


// For loop
for (initialize; condition; increment);
for (initialize; condition; increment) single statement;
for (initialize; condition; increment) { multiple; statements; }

// 0-index based counter
for (let i = 0;; i++) {
    console.log("loop, i = " + i);
    if (i > 1)
        break;
};


// Infinite Loop
// This will freeze your program
for(;;) console.log("hi"); // Infinite for loop - don't do it


//Multiple Statements
let counter = 0;
function inc() { counter++; }

for (let i = 0; i < 10; i++, inc());
console.log(counter); // 10

//Increment Numbers
let counter = 0;
for (let i = 0; i < 10; i++)
    counter++;

counter;
// 10;

// for loops and let scope.
// Bracket-less for-loop syntax is not good friends with the let keyword. The following code will generate an error:

    for (var i = 0; i < 10; i++) let x = i;

// A let variable cannot be defined without scope brackets. All variables defined using the let keyword require their own local scope. This is fixed by:

    for (var i = 0; i < 10; i++) { let x = i; }


//Nested for Loops

for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        console.log(x, y);

//    Loop’s Length
for (let i = 0; i < 3; i++) console.log(“loop.”);


//Skipping Steps
for (let i = 0; i < 3; i++) { if (i == 1) continue; console.log( i ); }

//Breaking Early
for (let i = 0;; i++) { console.log("loop"); break; };

//Breaking To A Label

let c = 0;
mark: for (let i = 0; i < 5; i++)
    inner: for (let j = 0; j < 5; j++)
        c++; if (i == 2) break mark;
console.log(c); // 11

let c = 0;
mark: for (let i = 0; i < 5; i++)
    inner: for (let j = 0; j < 5; j++)
        c++; if (i == 2) break inner;
console.log(c); // 21


//for…of Loop
// for…of Loops And Generators
// Sometimes you might want to use a for loop with a generator.
// Generator executes a yield statement in an asynchronous way but it will execute only one next yield statement every time the function is called:


// Generator function:
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

for (let value of generator())
    console.log( value );
// output
0
1
2

//for of loop wont work with objects
//But for…of loops work only with iterable values. An object is not an iterable.
let object = { a: 1, b: 2, c: 3 };

for (let value of object) // Error: object is not iterable
    console.log( value );
//Difference between iterating and enumerating
iterating means to "loop over all elements of a set, one by one"
enumerating means to "give each element of a set an ordinal number, one by one

// for…of loops and objects that were converted to iterables
let enumerable = { property : 1, method : () => {} };
for (let key of Object.keys( enumerable )) console.log(key);
for (let value of Object.values( enumerable )) console.log(value);
> 1
> () => {}

for (let entry of Object.entries( enumerable )) console.log(entry);


// While loop
while (condition) { /* do something until condition is false */ }

let c = 0;

while (c++ < 5)
    console.log(c);
// example
while (condition_1) {
    if (condition_2)
        break;
}
//While and continue
let c = 0;
while (c++ < 1000) {
    if (c > 1)
        continue;
    console.log(c);
}

//For each
let fruit = ['pear', 'banana', 'orange', 'apple', 'pineapple'];
fruit.forEach((item, index, object) => {
    console.log(item, index, object);
});

//answer
"pear",      0, (5)["pear","banana","orange","apple","pineapple"]
"banana",    1, (5)["pear","banana","orange","apple","pineapple"]
"orange",    2, (5)["pear","banana","orange","apple","pineapple"]
"apple",     3, (5)["pear","banana","orange","apple","pineapple"]
"pineapple", 4, (5)["pear","banana","orange","apple","pineapple"]


//Array.every

let numbers = [0,1,2,3,4,5,6,7];
let result = numbers.every(value => value < 10 );
result; // true

let numbers = [0,1,256,3,4,5,6,7];
let result = numbers.every(value => value < 10 );
result; // false
