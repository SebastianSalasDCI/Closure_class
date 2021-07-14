// ### Closure

// 1. In your own words, define closure (1-2 sentences).

// Closure gives the access of nested function to parent function's variables.

// 2. Study the following code, then answer the questions below.

// function personalDice(param) {
//     let name = param;
//     return function () {
//         // generate random number between 1 and 6
//         const newRoll = Math.floor(Math.random() * 6);
//         console.log(`${name} rolled a ${newRoll}`);
//     };
// }

// const dansRoll = personalDice("Dan");

// dansRoll(); //First time
// dansRoll(); //Second time

// * a. Where is closure used in this code? How can you tell?

//Line 18

// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What changes?

// Rolled number is changing, the name stays same.

// * c. What is the lexical scope of `newRoll`?

// Access the variable let name from the parent function, and nested function can use it.

// 3. Read the following code snippets, analyse them and answer the questions:

// * a. What will you see in the console for the following example?

// It will be 10, we overwrite it by function execution.

// let a = 1;
// function b() {
//     a = 10;
//     return;
// }
// b();
// console.log(a);

// * b. What will you see in the console for the following example?

// 1 if the first example is active where the variable a is declared globally, if not it will be an error.

// function b() {
//     let a = 10;
//     return;
// }
// b();
// console.log(a);

// * c. What will you see in the console for the following example?

// here the result will be 30, cause function c has access to parent function, and function b return the function c.

// function b() {
//     let a = 10;

//     function c() {
//         return (a += 20);
//     }

//     return c();
// }
// const result = b();
// console.log(result);

// * d. What will you change so result is a closure?
// id removed the () in return c ()

// * e. What will you see in the console for the following example?

// 20

// let a = 50;
// function b() {
//     a = 10;

//     return {
//         a: 20,
//         getA: function () {
//             return this.a;
//         },
//     };
// }
// const result = b();
// console.log(result.getA());

// * f. What will you see in the console for the following example?

// a will be just 5. It doesnt matter we pass in arguments s we never use those arguments. We just made a = 5 when we call function

// let a = 1;

// function someFunction(number) {
//     function otherFunction(input) {
//         return a;
//     }

//     a = 5;

//     return otherFunction;
// }

// var firstResult = someFunction(9);
// var result = firstResult(2);
// console.log(result);

// 4. Write a code that would allow you to do this using a closure.

function createBase(num) {
    let a = num;

    function addNew(b) {
        return num + b;
    }

    return addNew;
}

const addSix = createBase(6);
const addTwelve = createBase(12);

console.log(addSix(10)); // returns 16
console.log(addTwelve(20)); // returns 32
