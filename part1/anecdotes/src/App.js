import {useState} from "react";

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const MostVotesBlock = ({anecdote, votes}) => <>
  <h2>Anecdote with most votes</h2>
  <p>{anecdote}</p>
  <p>has {votes} votes</p>
</>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  // Array of given length, filled with 0
  const initialVotes = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(undefined)
  const [votes, setVotes] = useState(initialVotes)
  const [maxVoteId, setMaxVoteId] = useState(undefined)

  const newRandom = () => {
    const getRandomInt = (max) => Math.floor(Math.random() * max)
    let newSel = selected
    while (newSel === selected) newSel = getRandomInt(anecdotes.length)
    return newSel
  }

  // Get a random quote when starting the app:
  if (selected === undefined) setSelected(newRandom())

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    // Update maxVoteId
    if (maxVoteId === undefined || newVotes[selected] > votes[maxVoteId]) setMaxVoteId(selected)
  }

  return (<>
    <h2>Anecdote of the day</h2>
    <p>{anecdotes[selected]}</p>
    <Button onClick={vote} text="vote"/>
    <Button onClick={() => setSelected(newRandom())} text="next anecdote"/>
    <p>All votes: {votes.join(' - ')}</p>
    {/* Conditional block */}
    {maxVoteId !== undefined && <MostVotesBlock anecdote={anecdotes[maxVoteId]} votes={votes[maxVoteId]} />}
  </>)
}

export default App
