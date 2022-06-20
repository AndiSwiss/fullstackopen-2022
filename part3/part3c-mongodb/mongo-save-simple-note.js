/*
 * A simple script that creates a note on the cloud-mongodb on 'cluster0'
 * From https://fullstackopen.com/en/part3/saving_data_to_mongo_db
 *
 * Run with `node mongo-save-simple-note.js <password>`
 */

const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('ERROR: Please provide the password as an argument: node mongo-save-simple-note.js <password>')
  process.exit(1)
}

const password = process.argv[2]

// from https://cloud.mongodb.com => Button 'Connect' => 'Connect your application'
const url = `mongodb+srv://andiadmin:${password}@cluster0.swbor.mongodb.net/?retryWrites=true&w=majority`

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
  .connect(url)
  .then(result => {
    console.log('connected')
    const note = new Note({
      content: 'HTML is Easy',
      date: new Date(),
      important: true,
    })
    return note.save()
  })
  .then(() => {
    console.log('note saved!')
    return mongoose.connection.close()
  })
  .catch(err => console.log(err))
