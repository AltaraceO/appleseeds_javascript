const nameObj = {
  name: "Liad",

  callMe: function () {
    console.log("ori");
  },

  print: function () {
    console.log(this.name);
  },

  latePrint: function (callMe) {
    setTimeout(
      function () {
        this.callMe();
      }.bind(this),
      1000
    );
  },
};

nameObj.print();
nameObj.latePrint();
