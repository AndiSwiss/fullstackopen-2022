import axios from "axios";

const baseUrl = 'http://localhost:3001/notes'

// const getAll = () => axios
//   .get(baseUrl)
//   .then(response => response.data)


const getAll = () => {
  const request = axios.get(baseUrl)
  // Smuggling a non-existing note
  // => lets us test the catch-clause in toggleImportanceOf:
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => axios
  .post(baseUrl, newObject)
  .then(response => response.data)

const update = (id, newObject) => axios
  .put(`${baseUrl}/${id}`, newObject)
  .then(response => response.data)


const notes = {
  getAll,
  create,
  update
}

// The above is a shorthand for the following (is the same):
// const notes = {
//   getAll: getAll,
//   create: create,
//   update: update
// }


export default notes
