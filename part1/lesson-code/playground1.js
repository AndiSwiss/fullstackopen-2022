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
const printInfo2 = ({surname, born}) => console.log(surname + ': ' + born)
printInfo2(obj)

// And delayed:
setTimeout(() => printInfo2(obj), 1000)