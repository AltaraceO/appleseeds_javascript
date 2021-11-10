const arr = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const arr2 = arr.join().replace(/[ ,.]/g, "").toLocaleLowerCase();

const arr3 = "helohe";
// console.log(arr2);
let futureObj = [];
const theDreadedObject = {};

for (let i = 0; i < arr3.length; i++) {
  for (let t = 0; t < futureObj.length; t++) {
    if (arr3[i] === futureObj[t]) {
      console.log("ting");
    }

    for (let j = 0; j < arr3.length; j++) {
      futureObj.push(arr3[j]);
      let counter = 0;
      if (arr3[i] === arr3[j]) {
        counter++;
        console.log(counter, arr3[i]);
      }
    }
  }

  theDreadedObject[arr3[i]] = i;
}

console.log(theDreadedObject);
