// BLOCK 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var results = firstResult(2);

someFunction();
console.log(firstResult());

// * both number and input are not being used anywhere. the only thing that is returned in the outer function is the inner and the only thing the inner returns is the value of B that exists inside the outer function scope before the global. there might be an issue with it positioned below the inner function. I think both functions will return b = 5

// BLOCK 2

var a = 1;

function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

//* the outer function hits the RETURN before it goes any further down to the inner function. and a is only re-evaluated within the scope of the function. a will returned as one.

// BLOCK 3

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

// I think that despite the fact that the 'i' is declared outside the scope of the for loop that it will run 3 times. there will be a 100ms time out between each itteration of the 'log' callback function.
