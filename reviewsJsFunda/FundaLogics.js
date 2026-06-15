// (for more detailed sample, check our JavaScript repo, this is just for review)


// ----------- ARRAY ----------- 
// taena ginabasa ra nako sa js repo ang notes, we know js is weird, so use it normally as possible
console.log("below are array results")

const arr1 = [1, 34.5, "hi", true, 'g'];
console.log(arr1)

const arr2 = new Array(5)
console.log(arr2)
console.log(arr2[0])

arr2[0] = "defining"
console.log(arr2[0])

var x
const arr3 = new Array(x) //empty array
console.log(arr3)

const arr4 = Array.from("hello") // array.from() means array of inside that shit, this is an array of char from string
console.log(arr4[1])

arr4[arr4 + 5] = "test error type inside []" //it should be but instead js read the inside of [] as true and make the 6th value into y,e,l,l,o5: 'test'
console.log(arr4)
// array 4 now has [h,e,l,l,o, h,e,l,l,o5: value] i get it since naa nani sa reviews, and the thing is wla na dungagan ang element ni og arr4, arr4[5] empty
arr4[arr4.length + 5] = "test" //isntead of throwing an error here, it adjusted the size of array and inserted an empty value on the gap
console.log(arr4)
/*
[ 'h', 'e', 'l', 'l', 'o', 'h,e,l,l,o5': 'test error type inside []' ]
result sa line 24-25
[
  'h',
  'e',
  'l',
  'l',
  'o',
  <5 empty items>,
  'test',
  'h,e,l,l,o5': 'test error type inside []'
]
result sa line 27-28
*/
//VERY WEIRD, NOT EVERYDAY U'LL ENCOUNTER ON OTHER LANGUAGE


// ----------- ARRAY FUNCTIONS ----------- 
console.log("below are array function samples")

const arrayVariable = new Array(5)
arrayVariable.push() // push a value in last
arrayVariable.pop() // removes the last element and ofc value
arrayVariable.shift() // removes the 1st element and its value
arrayVariable.unshift() // insert in 1st element and adjust the array ofc
arrayVariable.indexOf() // search the index of something
arrayVariable.lastIndexOf() // search the index of something thats in the last
arrayVariable.includes() // return boolean, wether it exist or not

const combineArr = arr1.concat(arr2) // arr1 will be the first to enter in combineArr
const wholeString = arr4.join("|") // joins all the array values with | in between, as a string, if () is empty, comma is the default
const arr5 = arr4.slice(0, 3) //this act the same on .substring(1,3) of java, the last number is to where the index end but not included
console.log(arr5)


// ----------- ARRAY DESTRUCTURING (MANA SA REVIEWS) ----------- 
console.log("below are sample of array destructuring")
// DESTRUCTURING ALLOWS U TO UNPACK VALUES FROM AN ARRAY

const [q, w] = [1, 2, 3]
console.log(q, w) // q as 1, and w as 2, both just int or depends of arrays element type
const [e, ...r] = [4, 5, 6, 7]
console.log(e, r) // so e will get the 4 as int, remains 567, which got by r as array


// ----------- ARRAY SPREADS (MANA SA REVIEWS) ----------- 
console.log("below are sample of array spread")
const t = [8, 9, 0]
const u = t
u.push("push one str element in U only") // after doing this, madamay si t dafak HAHAHA even though line-by-line read means u lang na addan
console.log(u, t) // without spread
const i = [...t]
i.push("new push with spread, dapat wala sa t")
console.log(t, i)
// with spread, now the t doesnt affected, logically speaking, si i daw kay equal sa ...t tanan value ni t currently
// while the without spread, logically means, u = t, so si t = u rapud


// ----------- LOOPS ----------- 
console.log("below are sample of loops")
// do while, while, for, for each 

let p = 0
do {
  console.log("do while")
  p++
} while (p < 3)

while (true) {
  console.log("while")
  break // mag infinite loop ni if wlay break
}

for (let o = 0; o < 3; o++) {
  console.log("for loop: " + o)
}

// const forEachArray = "hello" // strings are just an array of chars
const forEachArray = ["q", "w", "e", "r"]
for (let value of forEachArray) {
  console.log(value)
}
for (let [index, value] of forEachArray.entries()) { // entries wont work if string ra ang array or nka number?
  console.log("index: " + index + " value: " + value)
}


// ----------- OBJECTS (MANA SA REVIEWS) ----------- 
console.log("below are samples of objects")
// OBJECT HAVE PROPERTIES ASSOCIATED WITH VALUES
// Object is simply like ObjectOP in Java

// FUNCTION INSIDE OBJECT
const obj1 = {
  name: "ryy",
  age: 12,
  isTired: true,
  function: objFunction, // ha yawa, if naka function() means already calling the function sa object palang, so dapat no () sa
  // subObj: objInObj
} // property: value

function objFunction() {
  console.log("function as property of an object")
  return "tama return ra daay"
}

console.log(obj1.function) // gana ni in what we intend if naka () sa value ni property
console.log(obj1.function()) // still undefined, super messy, approach it like method inside class in java (goods na, return pala iforgot)

const obj2 = {
  name: "yan",
  age: 22,
  isTired: false,
  obj2Function() {
    console.log("method in java") // rekta mo print
  }
}

console.log(obj2.obj2Function()) // still undefine

// OBJECT INSIDE OBJECT
const obj3 = {
  name: "jiks",
  age: 21,
  subObj: {
    color: "blue",
    fav: "ts",
  }
}

console.log("accessing sub object value: " + obj3.subObj.color)

obj3.newProperty = "can add sa js" // ADDING PROPERTY IN EXISTING OBJECTS
console.log(obj3.newProperty)
delete obj3.age // DELETING PROPERTY IN EXISTING OBJECTS
console.log(obj3.age) // undefined since deleted na

// OBJECT.VALUES AND OBJECT.KEYS, this return all those in an array
console.log(Object.values(obj3))
console.log(Object.keys(obj3))

// FOR EACH IN OBJECT WORKS TOO
for (let key in obj3) { // 'in' sa object, 'of' sa array
  console.log(key)
}
for (let value in obj3) { // whatever the variable name, key/property ra daay iya e return ani
  console.log(value)
}

// SPREAD IN OBJECT, MEANS CAN COMBINE OBJECTS
const obj4 = {
  name: "ling",
  age: 100,
  color: "skyblue",
  info: {}
}
const obj5 = {
  hair: "whiteblue",
  grade: [1, 2, 3],
  name: "tuliling", // if duplicate ang property, ma override sa last na ma run ni code
}
const combine = { ...obj4, ...obj5 } // combining using spread
console.log(combine)

obj4.info.career = "dev" // adding in parent object, then checking if it reflects in combine
console.log(combine)

combine.grade.push(4) // push is different from changing directly, this means updating the array value, thats why reflect in both parent and combine
console.log(combine)
console.log(obj5.grade)
obj4.age = 20
console.log(combine) // 100, since combine happen first before changing the value of age property
console.log(obj4.age) // 20
// coz of the primitive and reference type, array and function are reference type means mutable, while string, number, or any primitve are immutable

// Destructuring on ojbects
const { hair, name } = obj5 //this means it will only get those properties on that object
console.log(hair, name)
// THERE ARE STILL MORE STUFF/FUNTIONS ON JS OBJECTS


// ----------- SETS FUNCTION -----------
console.log("below are sample of sets")
// WAYS OF DECLARING SETS

const mySet = new Set([1, 2, 3]) //direct

var set = [4, 5, 6]
const mySet1 = new Set(set) //from variable

const emptySet = new Set()
emptySet.add(2) //add a value
emptySet.delete(1) //delete a value, not index, but value
emptySet.has(1) //return boolean, its a search
console.log(emptySet, emptySet.has(1))
emptySet.clear()
emptySet.size
for (const value of emptySet) { //of for set
}

// convert sets to array
const arrayy = Array.from(emptySet)
const arrayy1 = [...emptySet]
const arrayy2 = [...new Set([1, 2, 3])]

mySet1.delete(4) // if the number/value doesnt exist in set, nothing happens
console.log(mySet1)

// diff between sets and array: sets does not allowed dupli and no index too, so set is just a hashset on java, u cant forloop it but can foreachloop


// ----------- MAPS FUNCTION ----------- 
console.log("below are sample of maps")
// WAYS OF DECLARING MAPS, SO SET AND MAP IN JS ARE JUST HASHSET AND HASHMAP ON JAVA
const Map0 = new Map()
const Map1 = new Map([[1, "1"], [2, "2"]]) //map consist a key and a value, diff from array that uses index 

Map1.set(3, "3") //adding a map
Map1.delete(1) //using a key here, not value(set) nor index(array)
Map1.get(2)
console.log(Map1.get(2))
Map1.has(5)
Map1.clear()
Map1.size
console.log(Map1.get(2)) // undefine since nag clear nata b4 ni

for (const [key, value] of Map1) {

}

for (const key of Map1.keys()) { //works on values only too, Map1.values()

}

const Map2 = new Map([["hi", "ryy"], ["hello", "yan"]])
// make an array of this map
const arrayy3 = Array.from(Map2)
const arrayy4 = [...Map2]
// this value of array looks like this [1, "1"] , [2,"2"], and so on
console.log(arrayy4[1]) // ang value sa element 1 is the keyvalue of the map (["hi", "ryy"]) mao ni ratherthan ngaa ang value lang

// diff of map in array is just it uses a key instead of index, so you can manipulate the key also


// ----------- ERROR HANDLING ----------- 
console.log("below are sample of error handling")
// the error handling in js is generalize, unlike java that is very specific

try {
  riskyfunction();
} catch (error) {
  console.error("An error occured: " + error.message);
} finally {
  console.log("try another way :> (this is a clean up code) ") //this one always run
}

try {
  divide(10, 0)
} catch (error) {
  console.log(error.message)
}

function divide(x, y) {
  throw new Error("Customize the Error Response") // somewhere you think error may occur and customize the message there
}
// catch can be naked like catch() // in 2nd catch


// ----------- FUNCTIONS ----------- 
console.log("below are function sample")
// WAYS OF DEFINING FUNCTIONS

function greet(name, age) { //those are parameters ofc
  console.log("HAPPY BDAY" + name)
}

function returnSomething(age) {

  var anything = true; //can be a number, string, etc

  if (age > 10) {
    anything = false
  }
  return anything
}

// expressing a function
const greet2 = function (parameter) {
  console.log("hi")
}
console.log("greet2, the expressive function: " + greet2)

//relatively new type of function in js with es6 know as ARROW function WHICH IS MAO GINAGAMIT SA REACT
const greet3 = (parameter3) => { parameter3 + " body of function" }
const greet4 = (parameter4) => { return () => parameter4 }

greet4("Hi")() //returns the Hi 
console.log(greet4("Hi"))
console.log(greet4("Hi")())
// same as
// const fn = greet4("Hi");
// fn; // return the function
// fn(); // return what the function does

// my usage of function inside a function (recursive)
const recu1 = (parameterRecu) => { if (parameterRecu === 0) { return 0 } return parameterRecu + recu1(parameterRecu - 1) }
console.log(recu1(5))

// REST PARAMETERS allows a function to accept an INDEFINITE number of ARGUMENTS as an ARRAY
let total = 0
console.log(addNums(6, 9, 8))
function addNums(...number) { // Collect all arguments passed into this function and put them inside an array.
  total += number // error, but you know how to expand this
  return [number[1], number[2]] // if no [], first number ra e return, if naa [] for both, kato tanan e return
  //when it comes to returning value, u can return single value or multiple
}
console.log(total)


// ----------- COMMON FUNCTIONS (MANA IN REVIEWS) ----------- 
console.log("below are sample of common functions")
// map() , filter() , reduce() HAHAHAHA tama dyud daay tong first vid

// map() apply functions to every single value inside the array
const arr = [1, 2, 3, 4]
const double = arr.map((num) => num * 2)
console.log("MAP(): " + double) //[2,4,6,8]

const users = [ //nested properties
  { name: "Huhu", age: 21 },
  { name: "Alice", age: 23 }
]
//so {} for single, [] for multiple 
const usernames = users.map((user) => user.name) //array of names inside that object
console.log(usernames)

//reduce() used when u want to take an array and reduce that down to single value
const numbers = [5, 6, 7]
const sum = numbers.reduce((acc, num) => acc + num, 0) //acc means accumulator, 0 here is where the acc value starts from SHIT JS IS WEIRD
// and acc + num returns an acc with added num, then why its not  written as acc += num
console.log(sum)

//filter() works like map() but the diff is that it just take all the values from an array that match a specific criteria/function means if true or not
const numbersToFilter = [1, 2, 3, 4, 5, 6]
const evenNums = numbersToFilter.filter((num) => num % 2 === 0) //returns boolean
console.log(evenNums) //create an array with value from array that is true to the function

// REACT USES MAP() THAT RETURNS COMPONENTS ON THE FUNCTION TO DYNAMICALLY CHANGE/RENDER THE SCREEN/UI


// ----------- THIS KEYWORDS ----------- 
console.log("below are sample of this keyword")
// its important bcoz this function differs from the arrow function in their SCOPING and ACCESSING this variable
// this refers to the object which something is acting upon

let thisName = "Arrow Function Name"

const person = {
    name: "First",
    age: 22,
    greet() {
        console.log("HI " + this.name)
        console.log(`Hi ${this.name}`)
    },
    hatdog: function () {
        console.log("HAHATDOG")
    },
    greetArrow: () => { //ARROW FUNCTION USES THIS KEYWORD
        console.log("Arrow this keyword: " + this.name)
    }
}

console.log(person.greet) // output [function: greet]

console.log(person.hatdog) // same output [function: hatdog]
console.log(person.hatdog.info)

person.greet()
person.hatdog()

// THIS keyword DOESNT work on arrow function coz of how this keyword is inherited
person.greetArrow() //results to undefined
// THE REASON IS THAT ARROW FUNCTION INHERIT THE THIS KEYWORD AT THE TIME WHICH TEY ARE DEFINED, NOT WHEN THEY ARE CALLED


// ----------- PROMISES ----------- 
console.log("below are samples of promises")
// THIS IS NOT SOMETHING THAT IS DESIGNED TO BE TAUGHT QUICKLY, RECOMMENDED TO WATCH A LONG VID FOR THIS ONE DAW
// FAST OVERVIEW ONLY, COZ IT MIGHT BE CONFUSING AND JUST LOOK FOR IN-DEPTH TUTS

// a PROMISE is an object tha represents the eventual completion or failure of an asynchronous operation
// so its used when u dont know how long is something gonna take
// like file operation, writing in disk, sending network request, http request, APIs and so on

const myPromise = new Promise((resolve, reject) => {
    //Asynchronous Operation
    if (false) {
        value = "good"
        resolve(value); //Fullfill the promise (fullfill state)
    } else {
        error = "bad"
        reject(error); //Reject the promise (reject state)
    }
});

// PROMISE HAS 3 STATE, PENDING STATE , FULLFILL STATE , REJECT STATE

// myPromise //Pending state if wla pa sa fullfill or reject

// .then() if the function if its resolve
// .catch() if rejected
// .finally() for clean up code, runs everytime
myPromise.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Always and Forever")
})

//SUPER COMMON WHEN WORKING ON LARGE JS PROJECT OR JS FRAMEWORKS



// ---- TO SPEED UP OPERATIONS USING PROMISES ------
const pro1 = Promise.resolve(3)
const pro2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "foo")); //100 milliseconds
// const pro3 = new Promise((resolve, reject) => setTimeout(reject, 500, "bar")); //500 milliseconds
const pro3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, "bar"));
//this runs line by line in total of 600 milliseconds

Promise.all([pro1, pro2, pro3]) // .all() makes all the promises inside the function runs in a parallel line, and pro3 always come
    .then((results) => {
        console.log(results) // this will not run due to pro3 rejecting
    })
    .catch((error) => {
        console.error(error) // "bar"
    });

// WATCH IN-DEPTH KNOWLEDGE ON PROMISE APPLICATION ON WEB DEV OR JS FRAMEWORK