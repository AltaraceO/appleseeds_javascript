console.log(this);
// 1 - 'this' will refer to the window object

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
// 2- 'this' here will refer to the window object because it is invoked in an arrow function, to change this i would make it a function declaration

const myFuncDec = function () {
  console.log(this);
};
//3- if myFuncDec is called .. 'this' will refer to the window object because it is wihtin its execution scope

const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//4- if myFuncDec is called .. 'this' will refer to the window object because it is wihtin its execution scope

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
//5- will refer to the window object instead of the 'event' element. this is because it is an arrow function and it gets the scope of the context in which it was created.
