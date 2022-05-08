import {useState} from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456', id: 1},
    {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    {name: 'Dan Abramov', number: '12-43-234345', id: 3},
    {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const filteredPersons = filter
    ? persons.filter(person => {
      return person.name.toLowerCase().includes(filter.toLowerCase())
        || person.number.toLowerCase().includes(filter.toLowerCase());
    })
    : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (<>
    <h1>Phonebook</h1>
    <div>filter shown with <input value={filter} onChange={handleFilterChange}/></div>
    <h2>Add new</h2>
    <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={handleNameChange}/></div>
      <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>

    <h2>Numbers</h2>
    {filteredPersons.map(person => <div key={person.name}>{person.name}: {person.number}</div>)}

    {/* TODO: debugging section */}
    <hr/>
    <div><em>debug: newName={newName}</em></div>
  </>)
}

export default App
