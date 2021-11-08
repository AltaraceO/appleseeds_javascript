function dateStr() {
  let str;
  let d = new Date();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (str = `Today is ${days[d.getDay()]} the ${d.getDate()} of ${
    months[d.getMonth()]
  }, ${d.getFullYear()}`);
}

console.log(dateStr());
