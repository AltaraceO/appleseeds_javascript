const arr = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const arr2 = arr.join().replace(/[ ,.]/g, "").toLocaleLowerCase();

// console.log(arr2);

const obj = {};

let highest = 0;
let mostLetter;

for (let i = 0; i < arr2.length; i++) {
  if (!obj[arr2[i]]) {
    obj[arr2[i]] = 1;
  } else {
    obj[arr2[i]]++;
  }
  if (obj[arr2[i]] > highest) {
    highest = obj[arr2[i]];
    mostLetter = arr2[i];
  }
  // console.log(obj[arr2[i]]);
}
console.log(highest);
console.log(mostLetter);
console.log(obj);

// console.log(obj.e);
