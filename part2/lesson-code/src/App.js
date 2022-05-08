/**
 * Code from https://fullstackopen.com/en/part2/rendering_a_collection_modules
 */

import Note from "./components/Note";

const App = ({notes}) => {
  return (<>
    <h1>Notes</h1>
    <ul>
      {notes.map(note =>
        <Note key={note.id} note={note}/>
      )}
    </ul>
  </>)
}

export default App
