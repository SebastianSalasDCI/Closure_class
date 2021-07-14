//Solution exercise 4.

console.log("\n--=^.^=-----Closures---exercise------=^.^=--\n");

console.log("\n--=^.^=-----Q--1-------=^.^=--\n");

// In your own words, define closure (1-2 sentences).
// Is a function with inner function and a lexical scope.
/* 
Closures is a function that returns another function.
Is a combination of a function object and a scope in which the function's variables are solved.
*/

console.log("\n--=^.^=-----Q--2-------=^.^=--\n");
// Study the following code, then answer the questions below.

function personalDice(param) {
  let name = param;
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

dansRoll(); //First time
dansRoll(); //Second time

//   Where is closure used in this code? How can you tell?

/* In this function the closure is used in the line 19, when it returns the anonymous function*/

// Compare and contrast calling dansRoll the first and second time. What is always the same? What changes?

/* "Dan" will not change, because it's declared as parameter. Only the random number will be printed different. */

// What is the lexical scope of newRoll?

/* Is a local scope from the anonymous function */

console.log("\n--=^.^=-----Q--3--a-----=^.^=--\n");
// Read the following code snippets, analyse them and answer the questions:

/* let a = 1;
function b() {
  a = 10;
  return;
} */
/* b(); //10
console.log(a); //1 */

// a. What will you see in the console for the following example?

/* It will be printed 10. But if I don't call the function b(), the value = 1 wil be printed. */

console.log("\n--=^.^=-----Q--3--b----=^.^=--\n");

// b. What will you see in the console for the following example?

/* function b() { 
    let a = 10;  
    return; 
    
}
b();
console.log(a);  */ // I will get a ReferenceError because "a" is not defined in the global scope. But if I don't comment the line 46, I'll get 1 as result.

console.log("\n--=^.^=-----Q--3--c----=^.^=--\n");
/* 
function b() { 
    let a = 10; 
    
    function c() {
     return a += 20
    }

    return c();
    
}
const result = b();  //30
console.log(result);  */

// c. What will you see in the console for the following example?

/* The value = 30 will be printed. a += 20 = 30 */

console.log("\n--=^.^=-----Q--3--d----=^.^=--\n");

// d. What will you change so result is a closure?

/* return c()--> return c */

console.log("\n--=^.^=-----Q--3--e----=^.^=--\n");

// e. What will you see in the console for the following example?

/* let a = 50;

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
console.log(result.getA());  */ //20

/* The value 20 will be printed. Because a:20 is returned from the function b() */

console.log("\n--=^.^=-----Q--3--f----=^.^=--\n");

let a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2); //5
console.log(result);

// What will you see in the console for the following example?

/* The number 5 will be printed, because is the value is returning from the function (otherFunction) */

console.log("\n--=^.^=-----Q--4-------=^.^=--\n");
// Write a code that would allows you to do this using a closure.

/* function createBase(a) {
  return function (b) {
    return a + b;
  };
}

const addSix = createBase(6);
const addTwelve = createBase(12);
console.log(addSix(10)); // returns 16
console.log(addTwelve(20)); // returns 32
 */
console.log("\n--=^.^=-----Another alternative-------=^.^=--\n");

const createBase = (number) => {
  const templateBase = (n) => {
    return number + n;
  };

  return templateBase;
};

const addSix = createBase(6);
const addTwelve = createBase(12);
console.log("This is addSix: ", addSix(10)); // returns 16
console.log("This is addTwelve: ", addTwelve(20)); // returns 32

console.log("\n--=^.^=-----Q--5-------=^.^=--\n");
// Challenge Exercise Write a code that would allows you to do this using a closure.

const myTodoList = createTodoList("Sebastian");
myTodoList.addTodo("Send letters"); // returns message "todo Added"
myTodoList.addTodo("Learn more javascript"); // returns message "todo Added"
myTodoList.showTodos(); //returns message: "Sebastian Todos are: Send letters,  Learn more javascript"
myTodoList.deleteTodo("Send letters"); //returns "todo:Send letters deleted"
myTodoList.showTodos(); //returns message: "Sebastian Todos are: Learn more javascript"
myTodoList.addTodo("Finish exercises about closure"); // returns message "todo Added"
myTodoList.showTodos(); //returns message: "Sebastian Todos are: Learn more javascript, Finish exercises about closure"

function createTodoList(param) {
  let name = param;
  let todoList = [];

  function templateTodos(action, todo) {
    switch (action) {
      case "add":
        todoList.push(todo);
        console.log("todo Added");
        break;
      case "delete":
        todoList = todoList.filter((item) => item !== todo);
        //if todoList = [1, 2, 3, 4, 5] and the condition is item!==4 then:
        // the new todoList will be [1, 2, 3, 5]
        console.log(`todo: ${todo} deleted`);
        break;
      default:
        console.log(`${name} Todos are: ${todoList.join(", ")}`);
        break;
    }
  }

  return {
    addTodo: function (todo) {
      return templateTodos("add", todo);
    },
    deleteTodo: function (todo) {
      return templateTodos("delete", todo);
    },
    showTodos: function () {
      return templateTodos("show");
    },
  };
}
