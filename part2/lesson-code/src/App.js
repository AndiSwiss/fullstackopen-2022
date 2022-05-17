/**
 * Code from https://fullstackopen.com/en/part2/rendering_a_collection_modules
 */

import Note from "./components/Note";
import {useEffect, useState} from "react";
import noteService from './services/notes'

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
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        // use 'returnedNote.data, because this will have the auto-generated id from the server!!
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const toggleImportanceOf = (id) => () => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important}
    noteService
      .update(id, changedNote)
      .then(returnedNote => setNotes(notes.map(note => note.id !== id ? note : returnedNote)))
  }

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => setNotes(initialNotes))
  }, [])

  return (<>
    <h1>Notes</h1>
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
    </div>
    <ul>
      {notesToShow.map(note =>
        <Note key={note.id} note={note} toggleImportance={toggleImportanceOf(note.id)}/>
      )}
    </ul>
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} placeholder={'Your new note...'}/>
      <button type="submit">save</button>
    </form>
  </>)
}

export default App
