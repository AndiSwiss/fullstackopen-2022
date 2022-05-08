/**
 * Note: This can be done simpler and cleaner with a CSS-class
 */
const MaybeBold = ({content, bold}) => (bold
    ? <strong>{content}</strong>
    : content
)

const Note = ({note}) => <li key={note.id}>
  <MaybeBold content={note.content} bold={note.important}/>
</li>

export default Note