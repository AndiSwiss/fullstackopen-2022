const Hello = (props) => <p>Hello {props.name}!</p>

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <>
      <Hello name="Andi"/>
      <Hello name="George"/>
      <p>Hello world, it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </>)
}

export default App
