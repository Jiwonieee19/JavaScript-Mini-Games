// EVERY BASIC THINGS IN A PROGRAMMING LANGUAGE
// (ryan, for more detailed sample, check our JavaScript repo, this is just for review)

const { chownSync } = require("node:fs") // matik imports/orwut after npm install prompt-sync


// ----------- CONSOLE OUTPUT ----------- 
console.log("log: this can also include int: ", 5)
console.error("error: red text")
console.warn("warn: yellow text")


// ----------- CONSOLE OUTPUT WITH FORMAT ----------- 
const sample = 10
console.log(`The value of Sample = ${sample}`) // this ``(backticks) is like printf in java
console.log("The value of Sample = ${sample}") // wrong


// ----------- COMMENT ----------- 
// single line comment
/* multi line */


// ----------- USER INPUT ----------- 
// run npm init -y to create package.json, then npm install prompt-sync to create package-lock.json
// we need these because node.js doesnt have default for user input in backend
// prompt("Hello, Im Modal Prompt: ") // works in frontend lang, rekta popup nga default
const nextInt = require("prompt-sync")()
const result = nextInt("Type Here: ")
console.log(result)


// ----------- DATA TYPES ----------- 
// string // "" '' ``
// boolean // true false 
// number // any number, decimal or not
// undefined // when there is no value or cant the value
// null // u explicitly want it to be nothing
// BigInt // same as "long"
// Symbol // immutable variable

let name = "ryan"; // string, u get it now
// can only use var, let, const and then value depends on you, you dont declare the datatype anymore
const symbolSample = Symbol();
const id = Symbol("id");
console.log(Symbol("username") === Symbol("username")) // same name symbol are still unique to each other, thus returns false


// ----------- VARIABLES ----------- 
var sample1 = "hoisted in top of function, function-scope, changeable";
let sample2 = "hoisted in top of block, block-scope, changeable";
const sample3 = "hoisted in top of block, block-scope, not changeable";
// though if const used in an mutable type (array and objects) you can still change the value of element but not the type of element


// ----------- ARITHMETIC OPERATORS ----------- 
// + //addition
// - //subtraction
// / //division
// * //multiplication
// ** //exponential
// % //modulus
// -- //decrement
// ++ //increment

// +=, -=, /=, *=


// ----------- TYPE COERCION ----------- 
// WHAT HAPPEN IF U USED OPERATORS ON DIFF TYPES? ITS ERROR ON OTHER LANGAUGE BUT ITS A WEIRD THING ON JS
var x = 10
var y = "18"
var z = true

console.log(x + y) //will return a string with 918 value
//to get the real result on this one, if the string is only a number, then use type conversion
console.log(Number(y) + x)
y = "2zxc" //if 2xcse3, it will only return the first numbers it see, and cut it if theres a string
console.log(parseInt(y) + x + " Parsing") //parseint will ignore all NaN and return only the number
console.log(x * y) //if multiplication, the js will try to convert the string into number, this return a number, same with - and /
//but is the string contains a char that is not a number, this will return NaN means Not A Number, use parseInt to extract number
console.log(x + z) //recall that on binary, true is 1 and false is 0, thats why this is 10
console.log(x + Number(true))

console.log(x.toString())
console.log(String(x))
x = x + ""
//same ways on Java
// THIS IS CALLED TYPE COERCION, AN IMPLICIT TYPE CONVERSION WHEN U TRY TO DO AN ARITMETIC OPS ON DIFF TYPES


// ----------- COMPARISON OPERATORS ----------- 
/* 
== equality / loose equality
=== strict equality
!= not equal / loose not equality
!== strict not equal
< lessthan and so on,
>
<=
>= and all of these 4 types are loose operators
*/

//loose equality means that the js will try to convert the other type of not same, into a data type that can be compared
if ('1' == 1) {
    console.log("This is loose equality")
}
if ('1' === 1) {
    //will not go here becoz not true
} else {
    console.log("This is strict equality")
}
// as if ma spam ug gamit ning mga loose shit hayst, what a weird thing


// ----------- LOGICAL OPERATORS ----------- 
/*
&&
||
!
*/

console.log(true && false)
console.log(true || false)
console.log(!(true && false))
//logical operators here become weirder if using/comparing two diff type, check js repo nalang


// ----------- CONDITIONAL STATEMENTS ----------- 
// if else, ternary, switch
let gwapo = 10;
if (gwapo) {
    console.log("tru si num")
} else {
    console.log("haha false rana if undefine/null")
}

gwapo = 10 === false ? 20 : 30;
console.log(gwapo)

switch (gwapo) {
    case 10:
        console.log("no changes?")
        break; //no break will cause a fall through which is common on switch
    case 20:
        console.log("nag tru ang ternary")
        break;
    case 30:
        console.log("nag pulse ang ternary")
        break;
}