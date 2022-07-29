import axios from "axios";

/*
 Relative URL '/api/persons'
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
const baseUrl = process.env.REACT_APP_LOCAL_BACKEND || '/api/persons'

const getAll = () => axios
  .get(baseUrl)
  .then(response => response.data)

const create = newObject => axios
  .post(baseUrl, newObject)
  .then(response => response.data)

const update = (id, newObject) => axios
  .put(`${baseUrl}/${id}`, newObject)
  .then(response => response.data)

const remove = (id) => axios
  .delete(`${baseUrl}/${id}`)
  // .then(response => response.data)


const personService = {getAll, create, update, remove}

export default personService
