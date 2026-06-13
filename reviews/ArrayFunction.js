let names = ["ryy", "yan", "hatdog"]

// map() function same as foreach
const namesUpdate = names.map((name) => {
    return name + " Surname"
})
// for each in java
// for (String name : names) {
//     newArrayList.add(name + " 1");
// }
// return newArrayList;

console.log(namesUpdate[2])

// filter() function means searching in a list/array
let surnames = ["fernandez", "compuesto", "ednalgan"]

surnameExtract = surnames.filter((surname) => {
    return surname === "fernandez";
})

console.log(surnameExtract)

// reduce() function means combine/conditionate all values into one (dli dyud daay kaau usable)
let numbers = [1,2,3,4,5];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0); // even withouth 0, 0 is always the default starting value for other variable except for variable of array value

console.log(total)