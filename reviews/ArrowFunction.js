BasicDeclaration() //when not arrow function, can access even b4 initialization
// BasicDeclaration1() // doesnt work even if the arrow functions is let/var/const

function BasicDeclaration() {
    console.log("old ways");
    // old ways in defining js function, this looks a lot of java
}

// ARROW FUNCTION
const BasicDeclaration1 = () => {
    console.log("arrow functions with const");
}

BasicDeclaration1()

export default function BasicDeclarationExport() {
    console.log("butngan pala export for usage sa other HAHAAH");
    // exporting...
}

export const BasicDeclaration1Export = () => {
    console.log("mao daw ni lamang sa const, sa exporting")
}

// DIFF BETWEEN VAR, LET, CONST

// VAR
// var = can be reassigned and function scope (typical variable sa java)
var name = "Ryan";
var name = "Jay"; // Allowed

console.log(name); // Jay
if (true) {
    var age = 20;
}

console.log(age); // 20, function scope, can use if block age outside the block


// LET
// let = can be reassigned and only block scope {}
let score = 10;
score = 20; // Allowed

console.log(score); // 20
if (true) {
    let age = 20;
}

console.log(age); // Error, block scope, cant use outside


// CONST
// const = cant be re assigned (array and object can still change their content) and block scope {}
const PI = 3.14159;

// PI = 3.14; // Error

// However, OBJECTS and arrays declared with const can still have their contents changed:

// OBJECT
const person = {
    name: "Ryan"
};

person.name = "Jay"; // Allowed

console.log(person.name); // Jay

// What is forbidden is:

// person = {
//     name = "changing const"
// }; // Error

// const → value should not be reassigned. block
// let → value will change. block
// var → old style; generally avoid in modern JavaScript. globsl