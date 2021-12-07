const greaterPromise = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is indeed greater than 10`);
    } else {
      reject(`${num} is less than 10`);
    }
  });
};

greaterPromise(12)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
