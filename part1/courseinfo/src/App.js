const Header = (props) => <h1>{props.title}</h1>

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Content = (props) => <>{props.parts.map((p, index) => <Part key={index} part={p}/>)}</>

const Total = (props) => <p>Number of exercises {props.parts.map(p => p.exercises).reduce((a, b) => a + b, 0)}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (<>
    <Header title={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </>)
}

export default App
