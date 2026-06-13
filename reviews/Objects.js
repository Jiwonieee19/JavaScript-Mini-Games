// read more details in JavaScript repo, i did this to practice my tradcoding in js and review concepts

// normal js object
const person = {
    name: "Jane Doe",
    condition: "Normal",
    age: 20
}
person.name = "Change Name";
console.log(person.name)

const conditionOfPerson = person.condition;
console.log(conditionOfPerson)

// DESTRUCTURING objects (and array too) where it is used alot in REACT
const {name, condition, age, added = "added"} = person;
console.log(added) // undefine if person.added since wala man, but added lang naa, ky variable with value

const animal = {};
const {nameOfAnimal = "dragon", habitat, type} = animal;
// habitat = "asia"; // this is error since we wrap the object variable/key with const
console.log(nameOfAnimal);

// ... called the spread operator
const animal2 = {...animal, nameOfAnimal: "new name for 2nd animal"};
console.log(animal) // prints the curly brace only {}
console.log(animal2) // prints the changed variable inside the {}
console.log(animal2.nameOfAnimal) // print the value/string

const animal3 = {...animal, newKey: "key ang name, tas value ang Jane Doe"} // works like hashmap/hashset
console.log(animal3.newKey) // if wlay same key sa gi copy, matik ma new, if naa, ma change like 2nd animal

// BOTH THIS WORKS THE SAME EVEN IF ITS ARRAY (RATHER THAN OBJECT)
const nums = ['a','b','c'];
// const ['a', 'b', 'c', 'd'] = nums; // you can only destructure into actual variable names, not raw values.
const [first, second, third, fourth = 'd'] = nums; // ang value sa nums, gipang store sa variabe HAHAHAH gets
console.log(nums.a) // no such a exist, since its variable and a inside the array is value
console.log(nums.third) // undefine since its like calling from an object rather than array
console.log(nums[3]) // why fourth works but element doest
// The line fourth = 'd' in your destructuring code does not add 'd' to the array.
// It only creates a separate variable named fourth and assigns 'd' to it as a backup.
// The original nums array remains completely unchanged with a length of 3.
console.log(fourth)
console.log(nums[1])
console.log(third)

const nums2 = [...nums, fifth = 'e'];
console.log(nums[4])
console.log(nums2[3]) // so wla dyud daay sa nums and fourth nga naa sa destructure, e man diri
console.log(nums2[2]) 
console.log(nums2[1])
console.log(nums2[0])