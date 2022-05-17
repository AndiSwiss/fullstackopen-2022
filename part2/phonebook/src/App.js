import {useEffect, useState} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const resetForm = () => {
    setNewName('')
    setNewNumber('')
  }

  /**
   * Called by addPerson
   */
  const modifyPerson = () => {
    if (window.confirm(`'${newName}' is already added to the phonebook, replace the old number with a new one?`)) {
      const changedPerson = {...persons.find(p => p.name === newName), number: newNumber}
      const id = changedPerson.id
      personService
        .update(id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id === id ? returnedPerson : p))
          resetForm()
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    // check if name is not already in the phonebook
    if (persons.find(person => person.name === newName)) {
      modifyPerson()
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          resetForm()
        })
    }
  }

  /**
   * Note the signature:  = (id) => () => {..}
   * That means, that you can call deletePerson(person.id) => and then, () => {..} is returned
   */
  const deletePerson = (id) => () => {
    const personToDelete = persons.find(person => person.id === id)
    if (window.confirm(`Delete '${personToDelete.name}'?`)) {
      personService
        .remove(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
      // Note: .filter returns a new object => is immutable
    }
  }

  const filteredPersons = filter
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
        || person.number.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleFilterChange = (event) => setFilter(event.target.value)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => console.log('error with axios-call! Error =', error))
  }, [])


  return (<>
    <h1>Phonebook</h1>
    <Filter filter={filter} handleFilterChange={handleFilterChange}/>
    <h2>Add new</h2>
    <PersonForm
      addPerson={addPerson}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
    />
    <h2>Numbers</h2>
    <Persons persons={filteredPersons} deletePersonHandler={deletePerson}/>
  </>)
}

export default App
