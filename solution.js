/* /* //Solution exercise 4.
//Q1
//===>Closure is a concept used when an inner function has always access to the variables has been created in the outer function even after the outer function has executed.

//Q2

a// the close is in the line 17
b////dansRoll(); //First time ==>'Dan rolled a (num between 1 and 6)'
//dansRoll(); //Second time==>'Dan rolled a (num between 1 and 6)'
//here the param is always the same and the random number should change in every call
c//the lexical scope is in the line 9 (let name = param;)

//Q3
a//b(); ==> output=nothing;
  //console.log(a); ==>  output=10;
b//b(); ==> output=nothing;
  //console.log(a); ==>  nothing since a is local variable it can be accessed only via the b() function it is considered as undefined outside the function itself;
c//30 */
//d// we should return the function as variable without ().the we should call the result as a function with console log to print the result see following modifications: */
/* function b() { 
    let a = 10; 
    
    function c() {
     return a += 20
    }

    return c;
    
}
const result = b();  
console.log(result()); 

e//20 */
//f//5
//Q4

function createBase (a) {
    function otherFn(b) {
         console.log(a+b); 
    }
  return otherFn;
}
const addSix = createBase(6);
const addTwelve = createBase(12);
addSix(10); // returns 16
addTwelve(20); // returns 32