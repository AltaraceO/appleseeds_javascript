const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};
const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

//  2 options - they both work

function printHeroes(heroes, printFunc) {
  //   heroes.forEach((e) => {
  //     printFunc.call(e);
  //   });

  for (let i of heroes) {
    printFunc.apply(i);
  }
}

printHeroes(superHeroes, printName);
