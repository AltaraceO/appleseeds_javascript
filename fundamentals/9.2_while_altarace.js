const arrStr = ["boo", "fooo", "fa", "weeeee"];
const exp = ["boo", "doooo", "hoo", "ro"];

//* Needed to add counter/indexer[I] ,for array position outside the WHILE loop.

function leng(arr) {
  let i = 0;
  let newArr = [];
  while (newArr.length < arr.length) {
    // console.log(arr);
    newArr.push(arr[i].length);
    i++;
  }
  return newArr;
}

console.log(leng(arrStr));
console.log(leng(exp));
