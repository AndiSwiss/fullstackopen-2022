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

  const decreaseByOne = () => setCounter(counter - 1)
  // More generic, returns a function (with a default value)
  const setToValue_FunctionReturn = (value = 0) => () => setCounter(value)
  // The function itself (call with  () => setToValue(...))
  const setToValue = (value = 0) => setCounter(value)

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

  // Loosely from
  // https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#function-that-returns-a-function
  const aFunctionFunctionFunction = (first) => (second) => () => console.log('Hi', first ?? '', second ?? '')

  return (<>
    <div>
      <hr/>
      <Display title="Counter" elem={counter}/>
      {/* Four different ways: */}
      {/* 1.: Function reference that returns a function: */}
      <Button onClick={decreaseByOne} text="minus"/>
      {/* 2.: Function reference, but with passing a value, and then still returns a function: */}
      <Button onClick={setToValue_FunctionReturn(counter + 1)} text="plus"/>
      {/* 3.: Calling a regular function */}
      <Button onClick={() => setToValue(counter + 10)} text="plus10"/>
      {/* 4.: Calling a regular function, using the default-value 0: */}
      <Button onClick={() => setToValue()} text="zero"/>
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
    <div>
      <hr/>
      <p>Playing with console:</p>
      <Button onClick={aFunctionFunctionFunction()()} text="Hi"/>
      <Button onClick={aFunctionFunctionFunction('Andi')()} text="Andi"/>
      <Button onClick={aFunctionFunctionFunction('Andi')('Swiss')} text="AndiSwiss"/>
      <Button onClick={aFunctionFunctionFunction()('Swiss')} text="Swiss"/>
      <Button onClick={aFunctionFunctionFunction(clicks)()} text="Clicks-object"/>
    </div>
  </>)
}


export default Counter