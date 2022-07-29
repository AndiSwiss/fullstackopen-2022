/*
 * Exercise 3.12
 * =============
 * Command-line database for the phonebook.
 * From https://fullstackopen.com/en/part3/saving_data_to_mongo_db
 *
 * You can do two different things:
 * (a) Query the phonebook-entries (3 arguments):  node mongo-script-persons.js <password>
 * (b) Add a new phonebook-entry (5 arguments):    node mongo-script-persons.js <password> <name> <number>
 * E.g.: node mongo-script-persons.js yourpassword Anna 040-1234556
 */

const mongoose = require('mongoose')

const argSize = process.argv.length
let password, name, number
if (argSize === 3 || argSize === 5) {
  password = process.argv[2]
  if (argSize === 5) {
    name = process.argv[3]
    number = process.argv[4]
  }
} else {
  console.log('ERROR: Wrong input format! You can do two different things:')
  console.log('  (a) Query the phonebook-entries (3 arguments):  node mongo-script-persons.js <password>')
  console.log('  (b) Add a new phonebook-entry (5 arguments):    node mongo-script-persons.js <password> <name> <number>')
  console.log('E.g.: node mongo-script-persons.js yourpassword Anna 040-1234556')
  process.exit(1)
}

// from https://cloud.mongodb.com => Button 'Connect' => 'Connect your application'
const url = `mongodb+srv://andiadmin:${password}@cluster0.swbor.mongodb.net/?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

mongoose
  .connect(url)
  .then(res => {
    const host = res.connections[0]?.host
    const port = res.connections[0]?.port
    console.log(`connected to ${host} on port ${port}`)
    // Create new entry (if name exists) or fetch all Persons:
    return name
      ? new Person({name, number})
        .save()
        .then(result => console.log(`added ${result.name} ${result.number} to phonebook`))
      : Person
        .find({})
        .then(result => {
          console.log('phonebook:')
          result.forEach(person => console.log(`${person.name} ${person.number}`))
        })
  })
  .then(() => {
    return mongoose.connection.close()
  })
  .catch(err => console.log(err))
