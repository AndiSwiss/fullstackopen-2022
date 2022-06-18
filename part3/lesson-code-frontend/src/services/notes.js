import axios from "axios";

/*
 Relative URL '/api/notes'
 - Works when both front- and backend are on Heroku

 For local execution:
 - I tried to add the line "proxy": "http://localhost:3001"
   as explained on https://fullstackopen.com/en/part3/deploying_app_to_internet
   BUT: That gave an error in the console and the app was not working anymore:
        Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
   POSSIBLE SOLUTION: https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object
     => But I found a simpler way: with a local env-variable:
        (NOTE 1: MUST begin with 'REACT_APP_' - and you have to restart the server if you change anything)
        (NOTE 2: Don't use .env => if committed to the heroku repo, it tries to look for it as well when on heroku!
                 => instead use .env.development.local  (then its only active for local development))
        (NOTE 3: If the env is not set, then use the relative URL => works nicely)
*/
const baseUrl = process.env.REACT_APP_LOCAL_BACKEND || '/api/notes'


const getAll = () => {
  const request = axios.get(baseUrl)
  // Smuggling a non-existing note
  // => lets us test the catch-clause in toggleImportanceOf:
  const nonExisting = {
    id: 10000,
    content: '!This note is not saved to server!',
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
