function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

let firstSquare = new Square(10, 10, 20, 20);

Square.prototype.isSquare = function () {
  if (this.a === this.b && this.c === this.d && this.c === this.a) {
    return true;
  } else {
    return false;
  }
};
console.log(firstSquare.isSquare());
console.log(firstSquare);
