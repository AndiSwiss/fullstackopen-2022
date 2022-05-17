import axios from "axios";

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => axios
  .get(baseUrl)
  .then(response => response.data)

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
