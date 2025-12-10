/* Part 1.1 and 1.2
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
*/
const course = 'Half Stack application development'
 const part1 ={
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 ={
  name: 'Using props to pass data',
  exercises: 7
}
const part3 ={
  name: 'State of a component',
  exercises: 14
}

const App = () => {
 
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}  
const Content = (props) => {
  return (
    <div>
       {props.part1.name} {props.part1.exercises} <br/>
       {props.part2.name} {props.part2.exercises} <br/>
      {props.part3.name} {props.part3.exercises} <br/>
    </div>
  )
}
  const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
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

/* Part 1.2
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
}*/
  return (
  <div>
    <Header course={course} />
   <Content part1={part1} part2={part2} part3={part3}/>
    <Total part1={part1} part2={part2} part3={part3}/>
    </div>
    
  )
}

export default App