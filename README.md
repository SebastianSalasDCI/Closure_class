
### Closure

1. In your own words, define closure (1-2 sentences).
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

dansRoll(); //First time
dansRoll(); //Second time
```

* a. Where is closure used in this code? How can you tell?
* b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What changes?
* c. What is the lexical scope of `newRoll`? 

3. Read the following code snippets, analyse them and answer the questions:

* a. What will you see in the console for the following example?
```js
let a = 1; 
function b() { 
    a = 10; 
    return; 
    
} 
b(); 
console.log(a);    
```

* b. What will you see in the console for the following example?
```js
function b() { 
    let a = 10;  
    return; 
    
}
b();
console.log(a);    
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
console.log(result);    
```
* d. What will you change so result is a closure? 
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
console.log(result.getA());     
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
console.log(result) 
```

4. Write a code that would allows you to do this using a closure.

```js
const addSix = createBase(6);
const addTwelve = createBase(12);
addSix(10); // returns 16
addTwelve(20); // returns 32
```

5. *Challenge Exercise* Write a code that would allows you to do this using a closure.
```js
const myTodoList = createTodoList("Sebastian");
myTodoList.addTodo("Send letters") // returns message "todo Added"
myTodoList.addTodo("Learn more javascript")// returns message "todo Added"
myTodoList.showTodos() //returns message: "Sebastian Todos are: Send letters,  Learn more javascript"
myTodoList.deleteTodo("Send letters") //returns "todo:Send letters deleted"
myTodoList.showTodos() //returns message: "Sebastian Todos are: Learn more javascript"
myTodoList.addTodo("Finish exercises about closure")// returns message "todo Added"
myTodoList.showTodos() //returns message: "Sebastian Todos are: Learn more javascript, Finish exercises about closure"
```