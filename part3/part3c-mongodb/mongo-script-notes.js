/*
 * A fun script that does a couple of things on the cloud-mongodb on 'cluster0'
 * From https://fullstackopen.com/en/part3/saving_data_to_mongo_db
 * But heavily changed, and extended with command-line interaction (with choices!)
 *
 * Run with `node mongo-script-notes.js <password>`
 * Or just with `node mongo-script-notes.js`
 */

const mongoose = require('mongoose')
// NOTE: the special notation (...)()  => is already executed!
const prompt = require('prompt-sync')()

const password = process.argv.length > 2
  ? process.argv[2]
  : prompt("Either provide the password as an argument, or provide it now: ")

// from https://cloud.mongodb.com => Button 'Connect' => 'Connect your application'
const url = `mongodb+srv://andiadmin:${password}@cluster0.swbor.mongodb.net/?retryWrites=true&w=majority`

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// For reading console input:
// From https://sebhastian.com/javascript-console-input, further down:
console.log('What would you like to do?')
console.log('1: Post a new note')
console.log('2: Fetch all notes')
console.log('3: Fetch only the important notes')
const choice = prompt('Enter the number: ')
let note = undefined
let filter = {}
switch (choice) {
  case '1':
    const content = prompt('Note content: ')
    // Convert the string to a trueish/falsish value with ! and another !
    const important = !!prompt('Is note important? (1=true, 0=false): ')
    note = new Note({
      content,
      date: new Date(),
      important,
    })
    console.log('Creating the note:', note)
    break
  case '2':
    console.log('Fetching all notes...')
    break
  case '3':
    filter = {important: true}
    console.log('Fetching only the important notes...')
    break
  default:
    console.log("ERROR: Invalid choice")
    process.exit(1)
}

mongoose
  .connect(url)
  .then(result => {
    console.log('connected')
    if (choice === '1') return note.save()
    else {
      return Note.find(filter).then(result => {
        result.forEach(note => console.log(note))
        console.log(`Fetched ${result.length} notes.`)
      })
    }
  })
  .then(() => {
    console.log('Done!')
    return mongoose.connection.close()
  })
  .catch(err => console.log(err))
