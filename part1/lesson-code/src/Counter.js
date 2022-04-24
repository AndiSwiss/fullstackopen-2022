import {useState} from "react";

const Display = ({title, elem}) => <div>{title}: {elem}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Counter = () => {
  const initLeftRight = {left: 0, right: 0}
  const [counter, setCounter] = useState(0)
  const [clicks, setClicks] = useState(initLeftRight)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  // Note: first copy the object (with ...clicks), then update what has changed:
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})
  const handleInitLeftRightClick = () => setClicks(initLeftRight)

  return (<>
    <hr/>
    <div>
      <Display title="Counter" elem={counter}/>
      <Button onClick={decreaseByOne} text="minus"/>
      <Button onClick={increaseByOne} text="plus"/>
      <Button onClick={setToZero} text="zero"/>
    </div>
    <div>
      <Display title="Left" elem={clicks.left} />
      <Display title="Right" elem={clicks.right} />
      <Button onClick={handleLeftClick} text="left+" />
      <Button onClick={handleRightClick} text="right+" />
      <Button onClick={handleInitLeftRightClick} text="Reset left + right" />

    </div>
  </>)
}


export default Counter