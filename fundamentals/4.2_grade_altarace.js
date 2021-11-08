const grade = function (x) {
  if (x <= 64) {
    console.log("f");
  } else if (x >= 65 && x <= 69) {
    console.log("d");
  } else if (x >= 70 && x <= 79) {
    console.log("c");
  } else if (x >= 80 && x <= 89) {
    console.log("b");
  } else if (x >= 90 && x <= 100) {
    console.log("a");
  }
};

grade(100);
