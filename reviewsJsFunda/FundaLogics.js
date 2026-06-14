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

const [q,w] = [1,2,3]
console.log(q,w) // q as 1, and w as 2, both just int or depends of arrays element type
const [e,...r] = [4,5,6,7]
console.log(e,r) // so e will get the 4 as int, remains 567, which got by r as array


// ----------- ARRAY SPREADS (MANA SA REVIEWS) ----------- 
console.log("below are sample of array spread")
const t = [8,9,0]
const u = t
u.push("push one str element in U only") // after doing this, madamay si t dafak HAHAHA even though line-by-line read means u lang na addan
console.log(u,t) // without spread
const i = [...t]
i.push("new push with spread, dapat wala sa t")
console.log(t,i) 
// with spread, now the t doesnt affected, logically speaking, si i daw kay equal sa ...t tanan value ni t currently
// while the without spread, logically means, u = t, so si t = u rapud


// ----------- LOOPS ----------- 
console.log("below are sample of loops")