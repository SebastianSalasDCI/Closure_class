/**
 * Closures
 * topics/concepts:
 * - functions
 * - scope: global scope and local scope
 * - lexical scope
 * - closures
 */
// Functions:
//ES5 Syntax
// function myFunc () {
//   // something here...
// }

// const myFunc2 = function () {
//   // something here...
// }

// const myArrowFunc = () => {
//   // something here...
// }

// Scope

const number_1 = 1; // Global Variable

function getNumber () {

  let number_2 = 2 // Local Variable
  let number_3 = 3

  function addNumber () {
    number_2 += number_3; 
    return number_2;
  }
  //console.log('this is the addNumber Func',addNumber())

  return number_2;
}

const myNumber = getNumber()
//console.log('This is my Number',myNumber)


//----------------------------------

const getNames = () => {
  let firstName = "sebastian"

  const joinNames = () =>{
    let fullName = firstName + ' ' + lastName;
    return fullName
  }
  
  let lastName = "Salas"

  //console.log('this is my full name', joinNames() )

  return;

}

getNames()



// -------- Closures -----------

// Example 1 
const getMessage = () => { //parent function | High order function

    let myMessage = "Hello World"

    const displayMessage = (myParam) => { // child function
      console.log(myMessage,myParam)
      return myParam;
    }
    
    return displayMessage

}

let result;
result = getMessage()

//console.log('result',result)

// result(789)
// result()
// result()
// result()

// End of Example 1

// Example 2
// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

function makeAdder(x) {

  let obtainedBaseNumber = x;

  function templateAdder(y) {
    return obtainedBaseNumber + y;
  }

  return templateAdder
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
var add18 = makeAdder(18);

// console.log('result from add5',add5(2));
// console.log('result from add10',add10(2)); 
// console.log('result from add18',add18(2)); 

//End of Example 2 -----------

// Example 3
// let counter = 0;
const makeCounter = () => {

  let counter = 0

  const templateCounter = (n) =>{
    return counter += n
  }

  return templateCounter

} 

const theCounter = makeCounter()

// console.log('line 139',theCounter(2))

// some code.....
// console.log('line 142',theCounter(2))
// some code.....

// console.log('line 145',theCounter(2))

// End of Example 3 ------------


// Example 4

const myObj = {
  property1: 'hello world',
  property2: 123,
  property3: 'Sebastian',
  functionProperty: function () {
    console.log(this.property1)
  }
}

// console.log(myObj)
// myObj.functionProperty()

const twoWayCounter = () =>{

  let initialValue = 0;

  const templateCounter = (n) =>{
    return initialValue += n
  }

  return {
    increase: function () {
      return templateCounter(1)
    },
    decrease: function () {
      return templateCounter(-1)
    },
    currentValue: function () {
      return initialValue
    }
  }

}

const myNewCounter = twoWayCounter();

console.log(myNewCounter.increase())
console.log(myNewCounter.increase())
console.log(myNewCounter.increase())
console.log(myNewCounter.increase())
console.log(myNewCounter.increase())
console.log(myNewCounter.decrease())

console.log('current value', myNewCounter.currentValue())

