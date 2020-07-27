//Naming variables using var reserved 'keyword'
// var username = 'admin';
// var password = 'pass';

let username = 'admin';
let password = 'pass';

console.log("Username is: " + username);
console.log("Password is: " + password);

username = 'admin_new';
password = 'pass_new';

console.log("Modified username is: " + username);
console.log("Modified password is: " + password);

const usernameConst = 'admin1';
const passwordConst = 'pass1';

console.log("Constant Username is: " + usernameConst);
console.log("Constant Password is: " + passwordConst);

//variables-constants.js:23 Uncaught TypeError: Assignment to constant variable.
// usernameConst = 'admin_new';