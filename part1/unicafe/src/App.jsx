import { useState } from "react";

function App() {
  //State initialization with useState hook
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  
//Header component
  const Header = ({course}) => { 
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




//Statistics component
const Statistics = ({statistics}) => {
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

return (
    <div>
      <Header course="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Statistics statistics=""/>
      <Result value={good} text="good" />
      <Result value={bad} text="bad" />
      <Result value={neutral} text="neutral" /> 
 </div>
)
}
export default App
