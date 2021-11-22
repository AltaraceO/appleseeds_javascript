// //! mutate the original array //!
//  return < 0 b , a
//  return >= 0 a , b
const arr = [
  { name: "Shani", attendance: false },
  { name: "Hila", attendance: true },
  { name: "Aviad", attendance: false },
  { name: "Harel", attendance: true },
  { name: "Adam", attendance: true },
];

const mySort = (a, b) => {
  if (a.attendance && !b.attendance) {
    return -1;
  } else if (a.attendance && b.attendance && a.name < b.name) {
    return -1;
  } else if (!a.attendance && !b.attendance && a.name < b.name) {
    return -1;
  }
};
// our goal is: // sort arr by names but all truty first /**/
arr.sort(mySort);
console.log(arr);
