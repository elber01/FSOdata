import { useState } from "react";

function App() {
  //State initialization with useState hook
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

//Header component
  const Header1 = ({course}) => { 
  return (    
      <h1>{course}</h1>
  )
}
//Button good component
const Button=({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)



/* until part 1.7
//Statistics component
const Header2 = ({state}) => {
  return (
    <div>
      <h2>Statistics</h2>  
      </div>   
  )
}

//Results component
const Result = ({value, text}) => {
  return (
    <div>
      {text}:{value}
    </div>
  )
}

//Statistics component
const Statistics = ({value, text}) => {
  return (
    <div>
     All: {good + bad + neutral} <br/>
     Average: {(good + bad + neutral)/3}<br/>
     Positive: { (good * 100) / (good + bad + neutral) }
  </div>
  )
}*/

const Statistics = ({text}) => {
  return (    
    <div> 
      <h2>{text}</h2>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>All: {good + bad + neutral}</p>
      <p>Average: {(good + bad + neutral)}</p>
      <p>Positive: { (good * 100) / (good + bad + neutral) } %</p>
    </div>
  )
}

return (
    <div>
      <Header1 course="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
   <Statistics text="Statistics" />
    
 </div>
)
}
export default App
