function sum() {
  console.log(arguments);
}

console.log(sum());
//! !! NOT AVAILABLE ON ARROW FUNCTIONS!!
//!arguments has always been there!!!
//* and you can spread em!

function sumToo() {
  console.log([...arguments]);
}

sumToo(12, 3, 4, 2);

//! NOW WE CAN USE REST

function sumThree(...nums) {
  console.log([...nums]);
}

sumThree(12, 3, 4, 2, 4, 5, 6);

//! collect all the REST with a spread after the first two have been claimed!

//! WORKS IN AN ARROW FUNCTION!
function sumThird(firstNum, secondNum, ...allTheOtherNums) {
  console.log("first", firstNum, "second", secondNum, "rest", allTheOtherNums);
}
sumThird(12, 3, 4, 2, 4, 5, 6, 3, 4, 3, 12, 3);
