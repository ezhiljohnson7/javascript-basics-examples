//Value reference
let name = 'Smith';
let anotherName = name; // anotherName = 'Smith'

name = 'Doe'; // Over-rided the 'Smith' to 'Doe'

console.log(name)//
console.log(anotherName)// Smith

//Object reference

let name1 = {val: 'Smith'}; // Object stored in a certain location which can be shared across programs, eg: Address : House no - 144
let anotherName1 = name1; //anotherName1 points to the location where object is stored, eg: Address : House no - 144

name1.val = 'Doe'; // Object in House no - 144 is modified.

console.log(name1.val)
console.log(anotherName1.val)