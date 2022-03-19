//* will not modify the original array creates a new array
let foods = ["water", "ice", "everything", "nice", "beige"];

//! first argument where to start 2nd is where to stop --WILL CUT 3! --
//* BELOW -- WILL INCLUDE 0 AND NOT INCLUDE 3
console.log(foods.slice(0, 3));

//* will slice from 3 all the way to the end!
console.log(foods.slice(3));

//*will cut from the end when -
console.log(foods.slice(-3 - 1));

//*this will create a  copy of the array as it is!
foods.slice();
