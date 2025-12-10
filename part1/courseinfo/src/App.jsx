/* Part 1.1 and 1.2
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
*/
/* Part 1.3 
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
*/
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
const Header = (props) => {
console.log(course.parts[0].name); 
  return (
 
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Content = (props) => {

  return (
 
    <div>
      <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>

    </div>
  )
}
  const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
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
/* Part 1.4
  const course = 'Half Stack application development'
  const parts = [
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
  ]*/
 /* Part 1.4 
  const course = 'Half Stack application development';
  const parts = [
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

const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}  
const Content = (props) => {

 const Partes= parts.find(part => part.name === 'Fundamentals of React');
 console.log(parts[0].name);
  return (
 
    <div>
        <p>{props.parts[0].name} {props.parts[0].exercises}</p>
        <p>{props.parts[1].name} {props.parts[1].exercises}</p>
        <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}
  const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}*/
  return (
  <div>
    <Header course={course} />
 <Content course={course} />
    <Total course={course} />
    </div>
    
  )
}

export default App