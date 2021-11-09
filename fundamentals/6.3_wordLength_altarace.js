const arrStr = ["boo", "fooo", "fa", "weeeee"];
const exp = ["boo", "doooo", "hoo", "ro"];

function leng(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  return newArr;
}

console.log(leng(arrStr));
console.log(leng(exp));
