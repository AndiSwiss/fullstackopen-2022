import {useState} from "react";

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all) {
    const average = ((good - bad) / all).toFixed(1)
    const positive = ((good / all) * 100).toFixed(1) + ' %'

    return (<div>
      <h2>statistics</h2>
      <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>
    </div>)
  } else {
    return (<div>
      <h2>statistics</h2>
      <div>No feedback given</div>
    </div>)
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (<>
    <h2>give feedback</h2>
    <div>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
    </div>
    <Statistics good={good} neutral={neutral} bad={bad}/>
  </>)
}

export default App
