const originalArr = ["how", "are", "5", "you", 77];
const trueArr = ["how", "are", "you"];

function makeAllCaps(str) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < str.length; i++) {
      if (typeof str[i] !== "string" || Number(str[i])) {
        reject(`${str[i]} is not a string`);
      }
    }
    str = str.join(" ").toUpperCase().split(" ");
    resolve(str);
  });
}

function sortWords(str) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < str.length; i++) {
      if (typeof str[i] !== "string") {
        reject("how have you passed the previous promise?");
      }
    }
    str = str.sort();
    resolve(str);
  });
}

makeAllCaps(trueArr)
  .then((str) => sortWords(str))
  .then((str) => console.log(str))
  .catch((str) => console.log(str));

makeAllCaps(originalArr)
  .then((str) => sortWords(str))
  .then((str) => console.log(str))
  .catch((str) => console.log(str));

makeAllCaps(originalArr)
  .then((str) => {
    return sortWords(str).then((str) => {
      console.log(str);
    });
  })

  .catch((err) => {
    console.log(err);
  });

// makeAllCaps(originalArr).then((str) =>
//   sortWords(str)
//     .then((str) => console.log(str))
//     .catch((err) => console.log(err))
// );
