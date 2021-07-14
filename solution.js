/**
 * 1. Closure is a function with a inner function and a lexical scope.
 * 
 * 
 * 2. a. const dansRoll = personalDice("Dan"); this is where the closure is created
 * 2. b. name is the same and the number changes
 * 2. c. " let name = param; " is the lexical scope for newRoll
 * 
 * 3. a. 10, because "a" is a global variable and the value is overwritten when calling b.
 * 3. b. undefined, because is "a" is a local variable and is being called outside the function b.
 * 3. c. 30, because we are returning "the result" of c.
 * 3. d. return c(); --> return c;
 * 3. e. 20, because we return in the getA function "this.a" which makes reference to the property
 *          a from the object
 * 3. f. 5, because the parameters does not change anything. and the lexical scope is fixed 
 *          at the moment of creating the closure
 */

// 4th exercise

const createBase = (number) => {
  const templateBase = (n) => {
    return number + n
  }
  return templateBase
}

const addSix = createBase(6);
const addTwelve = createBase(12);
// console.log('this is addSix',addSix(10)); // returns 16
// console.log('this is addTwelve',addTwelve(20)); // returns 32

// end of solution 4th exercise-------------------
function createTodoList(param) {
  let name = param;
  let todoList = [];

  function templateTodos(action,todo) {
    switch (action) {
      case "add":
          todoList.push(todo)
          console.log("todo Added")
        break;
      case "delete":
          todoList = todoList.filter(item => item!==todo)
          //if todolist = [1,2,3,4,5] and the condition is item!==4 then:
          //   the new todolist will be [1,2,3,5]
          console.log(`todo:${todo} deleted`)
        break;
      default:
        console.log(`${name} Todos are: ${todoList.join(" , ")}`)
        break;
    }
  }

  return {
    addTodo: function (todo) {
      return templateTodos("add",todo)
    },
    deleteTodo: function (todo) {
      return templateTodos("delete",todo)
    },
    showTodos: function () {
      return templateTodos("show")
    }
  }

}

const myTodoList = createTodoList("Sebastian");
myTodoList.addTodo("Send letters") // returns message "todo Added"
myTodoList.addTodo("Learn more javascript")// returns message "todo Added"
myTodoList.showTodos() //returns message: "Sebastian Todos are: Send letters,  Learn more javascript"
myTodoList.deleteTodo("Send letters") //returns "todo:Send letters deleted"
myTodoList.showTodos() //returns message: "Sebastian Todos are: Learn more javascript"
myTodoList.addTodo("Finish exercises about closure")// returns message "todo Added"
myTodoList.showTodos() //returns message: "Sebastian Todos are: Learn more javascript, Finish exercises about closure"


