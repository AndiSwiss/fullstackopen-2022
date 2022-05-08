import {useState} from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-1234567'},
    {name: 'Ada Lovelace', number: '034-3928379'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    // check if name is not already in the phonebook
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (<>
    <h2>Phonebook</h2>
    <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={handleNameChange}/></div>
      <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>

    <h2>Numbers</h2>
    {persons.map(person => <div key={person.name}>{person.name}: {person.number}</div>)}

    {/* TODO: debugging section */}
    <hr/>
    <div><em>debug: newName={newName}</em></div>
  </>)
}

export default App
