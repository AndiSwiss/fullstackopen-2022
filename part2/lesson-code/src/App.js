/**
 * Code from https://fullstackopen.com/en/part2/rendering_a_collection_modules
 */

import Note from "./components/Note";
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1, // only works, if notes are never deleted!
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  useEffect(() => {
    console.log('start useEffect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  return (<>
    <h1>Notes</h1>
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
    </div>
    <ul>
      {notesToShow.map(note =>
        <Note key={note.id} note={note}/>
      )}
    </ul>
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} placeholder={'Your new note...'}/>
      <button type="submit">save</button>
    </form>
  </>)
}

export default App
