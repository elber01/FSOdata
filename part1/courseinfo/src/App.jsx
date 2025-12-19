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

  /*
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
} */
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
}


import { useState } from "react";
// Practica 1.c
const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter);

  const increaseByOne = () => {
    console.log('increasing, value before', counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log('resetting to zero, value before', counter);
    setCounter(0);
  };

  const Display = ({ counter }) => (
    // Es buena práctica envolver el div en un Fragment o asegurar que solo hay un elemento raíz
    <div>
      <p>{counter}</p>
    </div>
  );

  // Definición correcta del componente Button
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  );

  return (
    <div>
      <Display counter={counter} />
    
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};*//* Part 1.d
const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
   }*/
/*
import { set } from "mongoose";
import { useState } from "react";
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
const[allClicks, setAll] = useState([])
const [total, setTotal] = useState(0)

  const handleLeftClick = () => { 
   setAll(allClicks.concat('L'))
  const updatedLeft = left + 1
    setLeft(updatedLeft)
   setTotal(left + right)
   }
   
 
  const handleRightClick = () => { 
   setAll(allClicks.concat('R'))
   setRight(right + 1 )
   setTotal(left + right)
   }
   
   
   const Button=({ handleClick, text }) => (
     <button onClick={handleClick}>
       {text}
     </button>
   )
  

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks}/>
      
    </div>
  )
}
   
export default App
*//* Part 1.e 

import { useState } from "react";

const Display =  props => <div>{props.value}</div>

const Button=(props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
 const [value, setValue] = useState(10)


const setToValue = (newValue) => ()=> {
  console.log('value now', newValue)
  setValue(newValue)
}

  return (
    <div>
      <Display value={value} /> 
      <Button handleClick={setToValue(1000)} text="thousand" />
      <Button handleClick={setToValue(0)} text="reset" />
      <Button handleClick={setToValue(value + 1)} text="increment" /> 
    </div>
  )

}*/

//Part 1.5
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
  return (
  <div>
    <Header course={course} />
 <Content course={course} />
    <Total course={course} />
    </div>
    
  )
}

  export default App