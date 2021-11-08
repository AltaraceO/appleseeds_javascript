function leapYearChecker(y) {
  if (y % 400 === 0) {
    console.log("This is a leap year");
  } else if (y % 4 === 0 && y % 100 !== 0) {
    console.log("This is a leap year");
  } else {
    console.log("this is NOT a leap year");
  }
}

leapYearChecker(2012);
leapYearChecker(2100);
leapYearChecker(2400);
