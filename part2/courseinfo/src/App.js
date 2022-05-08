const Header = ({title}) => <h1>{title}</h1>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => <>{parts.map((p, index) => <Part key={index} part={p}/>)}</>

const Total = ({parts}) => <p>Number of exercises {parts.map(p => p.exercises).reduce((a, b) => a + b, 0)}</p>

const Course = ({course}) => (<>
  <Header title={course.name}/>
  <Content parts={course.parts}/>
  <Total parts={course.parts}/>
</>)

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
    <Course course={course}></Course>
  </>)
}

export default App
