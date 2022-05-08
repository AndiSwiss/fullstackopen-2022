const Header = ({title}) => <h2>{title}</h2>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => <>{parts.map((p, index) => <Part key={index} part={p}/>)}</>

const calculateTotal = parts => parts.map(p => p.exercises).reduce((a, b) => a + b, 0)

const Total = ({parts}) => <p><strong>total of {calculateTotal(parts)} exercises</strong></p>

const Course = ({course}) => (<>
  <Header title={course.name}/>
  <Content parts={course.parts}/>
  <Total parts={course.parts}/>
</>)

export default Course
