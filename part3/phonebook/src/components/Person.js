
const Person = ({person, deletePersonHandler}) => (<div>
  {person.name}: {person.number} <button onClick={deletePersonHandler}>delete</button>
</div>)

export default Person
