import {useState} from "react";

const Display = ({title, elem}) => <div>{title}: {elem}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const History = ({allClicks}) => (allClicks.length === 0
    ? <div>The app is used by pressing the buttons</div>
    : <Display title="All clicks" elem={allClicks.join(' ')}/>
)

const Counter = () => {
  const initLeftRight = {left: 0, right: 0}
  const [counter, setCounter] = useState(0)
  const [clicks, setClicks] = useState(initLeftRight)
  const [allClicks, setAllClicks] = useState([])

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const handleLeftClick = () => {
    // DON'T DO:  allClicks.push('L')   => NOT IMMUTABLE!
    // INSTEAD: .concat() also creates a copy => immutable
    setAllClicks(allClicks.concat('L'))
    // Note: first copy the object (with ...clicks), then update what has changed:
    setClicks({...clicks, left: clicks.left + 1})
  }
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }
  const handleInitLeftRightClick = () => {
    setAllClicks([])
    setClicks(initLeftRight)
  }

  return (<>
    <div>
      <hr/>
      <Display title="Counter" elem={counter}/>
      <Button onClick={decreaseByOne} text="minus"/>
      <Button onClick={increaseByOne} text="plus"/>
      <Button onClick={setToZero} text="zero"/>
    </div>
    <div>
      <hr/>
      <Display title="Left" elem={clicks.left}/>
      <Display title="Right" elem={clicks.right}/>
      <Button onClick={handleLeftClick} text="left+"/>
      <Button onClick={handleRightClick} text="right+"/>
      <Button onClick={handleInitLeftRightClick} text="Reset left + right"/>
      <History allClicks={allClicks}/>
    </div>
  </>)
}


export default Counter