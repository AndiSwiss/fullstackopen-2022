// Stuff from https://fullstackopen.com/en/part1/java_script
// Run with  node playground1.js

/**
 * Array destructuring:
 */
const t = [1, 2, 3, 4, 5]
const [first, second] = t
const [one, ...others] = t
console.log(`first = `, first)
console.log(`second = `, second)
console.log(`one = `, one)
console.log(`others = `, others)


/**
 * Object destructuring:
 */
const obj = {
  name: "Hans",
  surname: "Müller",
  born: 1954
}

//Instead of
const printInfo = (person) => console.log(person.surname + ': ' + person.born)
printInfo(obj)
// Just take what you are interested in
const printInfo2 = ({surname, born}, optMsg = '') =>
  console.log(`${surname}: ${born}  ${optMsg}`)
printInfo2(obj)

// And delayed:
setTimeout(() => printInfo2(obj, '(1000ms delayed)'), 1000)

/**
 * Immutable way of changing part of an object
 */
let john = {name: 'John', age: 30}
// don't forget to wrap in brackets ( ), otherwise, the {} don't have the meaning of an object, but an execution block !!
const makeOlder = (person) => ({...person, age: person.age + 1})
const olderJohn = makeOlder(john)
// check:
console.log(`john = `, john)
console.log(`olderJohn = `, olderJohn)

/**
 * Immutable way of adding an element to an array
 */
let arr1 = [1, 2, 3, 4]
const arr2 = arr1.concat(5)
const arr3 = [...arr2, 6]
console.log(`arr1 = `, arr1)
console.log(`arr2 = `, arr2)
console.log(`arr3 = `, arr3)