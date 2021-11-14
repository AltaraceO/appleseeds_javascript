// OBJECT

let timeObj = {};

console.time("objLoop");

for (let i = 0; i < 10; i++) {
  timeObj["key" + i] = "item" + i;
}
console.timeEnd("objLoop");

console.log(timeObj);
// Obj Item
console.time("objGet");
console.log(timeObj.key77777);
console.timeEnd("objGet");

// Obj add

console.time("ObjAdd");
console.log((timeObj.bloop = "bleep"));
console.timeEnd("ObjAdd");
// Obj Remove
console.time("ObjRemove");
console.log(delete timeObj.bloop);
console.timeEnd("ObjRemove");

// ---------------MAP ----

let timeMap = new Map();

console.time("mapLoop");

for (let i = 0; i < 10; i++) {
  timeMap.set("key" + i, "val" + i);
}
console.timeEnd("mapLoop");

console.log(timeMap);
// Map Item
console.time("mapGet");
console.log(timeMap.get("key55555"));
console.timeEnd("mapGet");

// Map add

console.time("mapAdd");
console.log(timeMap.set("bloop", "bleep"));
console.timeEnd("mapAdd");
// Map Remove
console.time("mapRemove");
console.log(timeMap.delete("bloop", "bleep"));
console.timeEnd("mapRemove");
