const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (category, id) {
    return this[category].find(function (el) {
      return el.id === id;
    });
  },
  assignStudent: function (subject, id) {
    // x = student object
    let x = this.findPerson("students", id);

    // itetereting all teaches
    this.teachers.forEach(function (el) {
      // el-> specific teacher object
      //loop e.subject.length times
      for (let i = 0; i < el.subjects.length; i++) {
        //check teacher has the subject property
        //check teacher has capacity left in capacity property
        console.log(el.subjects);
        if (el.subjects[i] === subject && el.capacityLeft > 0) {
          //el.student -> array
          el.students.push(x);
          el.capacityLeft--;
          // return;
          console.log(el);
          return;
        }
      }
      console.log("Sorry, no available teachers left");
    });
  },
  assignTeacher: function (newSub, id) {
    // X - is the teacher object that I will use
    let x = this.findPerson("teachers", id);
    // loop over the teachers objects
    this.teachers.forEach(function (el) {
      // find if their ID matches
      if (el.id === id) {
        // loop over the subjects array in teacher obj
        console.log(el.id);
        for (let i = 0; i < el.subjects.length; i++) {
          // see if there no match for NewSub
          if (el.subjects[i] !== newSub) {
            console.log(newSub);
            el.subjects.push(newSub);
            console.log(el);
            return;
          }
        }
      }
    });
  },
};

// console.log(school.findPerson("teachers", 1));
// console.log(school.assignStudent("chemistry", 10));
// console.log(school.assignStudent("history", 13));
// console.log(school.assignStudent("history", 13));
console.log(school.assignTeacher("P.E.", 1));
console.log(school.assignTeacher("Trig", 1));
// console.log(school.teachers[0].students)
