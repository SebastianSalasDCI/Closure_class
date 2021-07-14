//1. 
/* Closure is a specific surrounding inside of a parent function. there is variable, which is given in a lexical scope, there is a child function, that returns the function itself(for that one should type a function without parentheses). it is possible to create a new function, which will be equal to parent function. 
 */

//2.
/* 
a. const dansRoll = personalDice("Dan"); Here const dansRoll is a closure. Because this is a new function created here and I see only the name of the function, no arguments or parenthesis.
b. The name of the function stays the same, but when we call a function it should have a pair of parenthesis.
c. The lexical scope of 'newRoll' is 'let name = param;'
*/
//3.
/* 
a. 10
b. 10
c. 30
d. I need to get rid of parenthesis of c, in line 61. It should be 'return c;'
e. 20
f. 5
*/

//Solution exercise 4.

function createBase(n) {
    let a = n;

    function someFunction(x) {
        return a + x;
    }
    return someFunction;

}

const addSix = createBase(6);
const addTwelve = createBase(12);
console.log(addSix(10)); // returns 16
console.log(addTwelve(20)); // returns 32
