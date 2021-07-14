//Solution exercise 4.
function createBase(x){
    let base = x;
    function adder(y){
        return base + y
    }
    return adder
  }
  
const addSix = createBase(6);
const addTwelve = createBase(12);
  
console.log(addSix(10));  
console.log(addTwelve(20)); 