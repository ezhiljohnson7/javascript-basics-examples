// incremental operators
//  let i = 10;

//  console.log(i++);
//  console.log(i);

//  console.log(++i);
//  console.log(i);

// decremental operators
// let i = 10;

//  console.log(i--);
//  console.log(i);
//  console.log(--i);

// Equality operators something that uses '='

// let name1 = 'John';
// let name2 = 'Smith';
// let name3 = 'John';
// let name4 = new String('John');

// console.log(name1 != name2);
// console.log(name1 == name3); //are case sensitive.
// console.log(name1 == name4);

// console.log(typeof name1);
// console.log(typeof name4);

// console.log(typeof name1 == typeof name4);
// console.log(name1 === name4);

// comparison/relational operators
//  let ageOfPerson1 = 25;
//  let ageOfPerson2 = 24;
//  let ageOfPerson3 = 26;
//  let ageOfPerson4 = 25;

//  console.log(ageOfPerson1 > ageOfPerson3); // false
//  console.log(ageOfPerson2 < ageOfPerson3); // true
//  console.log(ageOfPerson3 > ageOfPerson1); // true
//  console.log(ageOfPerson1 >= ageOfPerson4);
//  console.log(ageOfPerson3 >= ageOfPerson1); // true
//  console.log(ageOfPerson2 <= ageOfPerson1); // true

 //conditional/logical operators:

 let ageOfPerson1 = 25;
 let ageOfPerson2 = 24;
 let ageOfPerson3 = 26;
 let ageOfPerson4 = 25;

 let result1 = ageOfPerson1 >= ageOfPerson2;
 let result2 = ageOfPerson2 >= ageOfPerson3;
 let result3 = ageOfPerson3 >= ageOfPerson4;
 let result4 = ageOfPerson4 >= ageOfPerson1;

//  console.log(result1);
//  console.log(result2);
//  console.log(result3);
//  console.log(result4);

// console.log(result1  && result2); // false
// console.log(result2  && result3); // false
// console.log(result4  && result1); // true
// console.log(result1  || result2); // true
// console.log(result2  || result3); // true
// console.log(result4  || result1); // true

console.log(result2  && result1 || result3); // true
console.log(result2  && (result1 || result3)); // false
