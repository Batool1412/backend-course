let students = [];
function createstudents(name, age, mark) {
  return { sname: name, sage: age, smark: mark };
}
let names = ["Batool", "Hala", "Jana", "zeina", "Sedra"];
let ages = [19, 20, 19, 19, 19];
let marks = [93, 48, 81, 96, 35];
for (let i = 0; i < 5; i++) {
  let student = createstudents(names[i], ages[i], marks[i]);
  students.push(student);
}
let successStudent = [];
let failedStudents = [];
for (let i = 0; i < 5; i++) {
  if (students[i].smark >= 50) {
    successStudent.push(students[i]);
  } else {
    failedStudents.push(students[i]);
  }
}
console.log("Success Students: ");
successStudent.forEach(function (student) {
  console.log(student.sname, student.sage, student.smark);
});
console.log("Failed Students: ");
failedStudents.forEach(function (student) {
  console.log(student.sname, student.sage, student.smark);
});
