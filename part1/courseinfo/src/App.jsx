
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
const App = () => {
  const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
 const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

/* Part 1.1
  const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.excercise1}</p>
      <p>{props.part2} {props.excercise2}</p>
      <p>{props.part3} {props.excercise3}</p>
    </div>
  )
*/
const Content = (props) => {
  return (
    <div>
    <Part part={props.part1} exercises={props.excercise1}/>
    <Part part={props.part2} exercises={props.excercise2}/>
    <Part part={props.part3} exercises={props.excercise3}/>
    </div>
  )
}
  const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.part1 + props.part2 + props.part3}</p>
    </div>
  )
}
  return (
  <div>
   <Header course={course}/>
      <Content part1={part1} excercise1={exercises1} part2={part2} excercise2={exercises2} part3={part3} excercise3={exercises3}/>
      <Total part1={exercises1} part2={exercises2} part3={exercises3}/>
    </div>
    
  )
}

export default App