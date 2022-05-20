/**
 * Note: This can be done simpler and cleaner with a CSS-class
 */
const MaybeBold = ({content, bold}) => (bold
    ? <strong>{content}</strong>
    : content
)

const Note = ({note, toggleImportance}) => {
  const label = note.important ? 'make not important' : 'make important'

  return (<li className="note" key={note.id}>
    <MaybeBold content={note.content} bold={note.important}/> <button onClick={toggleImportance}>{label}</button>
  </li>)
}

export default Note
