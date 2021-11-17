// BLOCK    1

function funcA() {
  console.log(a); // This will return undefined because it was declared and initialized with a VAR
  console.log(foo()); //This will return 2 because function

  var a = 1;
  function foo() {
    return 2;
  }
}
console.log(funcA());

// BLOCK    2

var fullName = "John Doe";

var obj = {
  fullName: "Colin Ihrig",

  prop: {
    fullName: "Aurelio De Rosa",

    getFullName: function () {
      return this.fullName;
    },
  },
};

console.log(obj.prop.getFullName()); // is called from within the Object scope and returns the full name assiged in prop..

var test = obj.prop.getFullName; //copies the function and includes the THIS keyword which in the global scope returns John Doe.

console.log(test()); //sees the global scope since the THIS keyword is taken out of context and goes global

// BLOCK    3

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();

console.log(typeof a); //A is scoped to the function and is only accessible from within
console.log(typeof b); //be was declared globally and is accessible from anywhere

// BLOCK    4

function funcC() {
  console.log("1");
}

funcC();

function funcC() {
  console.log("2"); // both functions are hoisted up the first time that JS reads the code and when the code is executed the second occurance overrides the first.
}

funcC();

// BLOCK    5

function funcD1() {
  d = 1;
}

funcD1();

console.log(d); // d is declared globally and is available from anywhere in the code

function funcD2() {
  var e = 1;
}

funcD2();

console.log(e); // e is declared within the function and the value is only availabe within

// BLOCK    6

function funcE() {
  console.log("Value of f in local scope: ", f);
}

console.log("Value of f in global scope: ", f); // when this log happens only the declaration of 'f' appears when the var variable is hoisted and is therefore undefined.

var f = 1;

funcE(); //by the time we get to the function initiation the value of 'f' is known as 1 and is returned from within the function.
