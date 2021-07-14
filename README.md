
### Closure

1. In your own words, define closure (1-2 sentences).

Closures are functions with free and independent variables.  the function declared in the closure will remind the lexical environment in which it was created. In other words: inner functions have access to variables of outer functions.

2. Study the following code, then answer the questions below.

```js
function personalDice(param){
  let name = param;
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

dansRoll(); //First time output: "Dan rolled a 'random number between 0 and 5'"
dansRoll(); //Second time output: "Dan rolled a 'random number between 0 and 5'"
```

* a. Where is closure used in this code? How can you tell?
from line 12 to 16. it has a variable, a function and a call

* b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What changes?
the only thing changing is the random number! 

* c. What is the lexical scope of `newRoll`? 
the variable name, coz it's passed to the outer function

3. Read the following code snippets, analyse them and answer the questions:

* a. What will you see in the console for the following example?
```js
let a = 1; 
function b() { 
    a = 10; 
    return; 
    
} 
b(); 
console.log(a);    // 10
```

* b. What will you see in the console for the following example?
```js
function b() { 
    let a = 10;  
    return; 
    
}
b();
console.log(a);    // a is not defined!
```

* c. What will you see in the console for the following example? 
```js
function b() { 
    let a = 10; 
    
    function c() {
     return a += 20
    }

    return c();
    
}
const result = b();  
console.log(result);    // 30
```
* d. What will you change so result is a closure? 
remove the parenthesis from line 69 and put to the result-function in line 73 console.log(result());  
* e. What will you see in the console for the following example? 
```js
let a = 50;
function b() { 
    a = 10; 
    
    return {
      a: 20,
      getA: function () {
        return this.a
      }
    }
    
}
const result = b();  
console.log(result.getA());      // 20
```

* f. What will you see in the console for the following example?
```js
let a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result) // 5
```

4. Write a code that would allow you to do this using a closure.

```js
const addSix = createBase(6);
const addTwelve = createBase(12);
addSix(10); // returns 16
addTwelve(20); // returns 32
```

