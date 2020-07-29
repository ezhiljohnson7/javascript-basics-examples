// const person = {
//     firstName : "John",
//     lastName : "Smith",
//     fullName : function(){
//         console.log(`${person.firstName} ${person.lastName}`);
//     }
// }

// person.fullName();

const person = {
    firstName : 'John',
    lastName : 'Smith',
    get fullName(){
        console.log(`${person.firstName} ${person.lastName}`);
    },
    set fullName(value) {
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName

person.fullName = 'John Doe'

person.fullName