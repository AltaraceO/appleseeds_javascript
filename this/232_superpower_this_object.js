const storm = {
  superPower: "flying",
  //   printer: function () {
  //     printSuperPower.apply(storm);
  //   },
  x: printSuperPower,
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.x();

//  -- an exaple of .apply
//https://stackoverflow.com/questions/133973/how-does-this-keyword-work-within-a-function
// function foo(a, b) {
//   console.log(a);
//   console.log(b);
//   console.log(this);
// }
// var args = ["ah", "be"];
// foo.apply(storm, args);
