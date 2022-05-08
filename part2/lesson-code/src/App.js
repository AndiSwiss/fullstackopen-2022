/**
 * Code from https://fullstackopen.com/en/part2/rendering_a_collection_modules
 *
 */
const App = (props) => {
  const {notes} = props

  return (<>
    <h1>Notes</h1>
    <ul>
      <li>{notes[0].content}</li>
      <li>{notes[1].content}</li>
      <li>{notes[2].content}</li>
    </ul>
  </>)
}

export default App