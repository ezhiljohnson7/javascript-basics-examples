let student = {
    name: 'user1',
    age: 25,
    email: 'user1@xyz.com',
    mobile: 9876543212
};

// 2 ways to access data from an object

//1. Using dot notation
// console.log("Student name is : " + student.name);
console.log(`Student name is : ${student.name}`);
console.log(student.age);
console.log(student.email);

//2. Using bracket notation.
console.log(`Student name is : ${student['name']}`);
console.log(student['age']);
console.log(student['email']);

//uses f bracket notation
let userSelectedValue = 'mobile';
console.log(`User has selected : ${student[userSelectedValue]}`);