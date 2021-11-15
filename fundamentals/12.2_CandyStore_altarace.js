const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// GET CANDY
function getCandy(arr, id) {
  const findCandy = arr.candies.find((element) => element.id === id);
  return findCandy;
}
console.log(getCandy(candyStore, "5hd7y"));

// GET PRICE
function getPrice(arr, id) {
  return getCandy(candyStore, id).price;
}
console.log(getPrice(candyStore, "5hd7y"));

// ADD CANDY

function addCandy(candyStore, id, name, price) {
  const newCandy = candyStore.candies.forEach((el, idx) => {
    // if (candyStore.candies.name !== name) {
    candyStore.candies.push({
      name: name,
      id: id,
      price: price,
      amount: 1,
    });
    // }
  });
}

console.log(addCandy(candyStore, "id", "candy", 4));

console.log(candyStore);

//  BUY

function buy(candyStore, id) {
  let x = getCandy(candyStore, id);
  x.amount--;
  candyStore.cashRegister += x.price;
}
buy(candyStore, "5hd7y");
console.log(candyStore);
