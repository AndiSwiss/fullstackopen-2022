const Header = (props) => <h1>{props.title}</h1>

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Content = (props) => (<>
  <Part part={props.part1}/>
  <Part part={props.part2}/>
  <Part part={props.part3}/>
</>)

const Total = (props) => <p>Number of exercises {props.total}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (<>
    <Header title={course}/>
    <Content part1={part1} part2={part2} part3={part3}/>
    <Total total={part1.exercises + part2.exercises + part3.exercises}/>
  </>)
}

export default App
