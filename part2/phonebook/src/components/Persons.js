import Person from "./Person";

const Persons = ({persons, deletePersonHandler}) => persons.map(person =>
  (<Person
    key={person.name}
    person={person}
    deletePersonHandler={deletePersonHandler(person.id)}
  />)
)

export default Persons
