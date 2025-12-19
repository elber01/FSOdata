import { useState } from "react";

function App() {
  //State initialization with useState hook
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  //Anecdote component
  const Anecdote =({arr})=>{
  arr = anecdotes
  const [selected,setSelected] =  useState(0)
  //Randomizing array anecdotes
  const selectRandom= () => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  setSelected (randomIndex)
 } 

return (
  <div>
  <p>{anecdotes[selected]}</p>
  <button onClick={selectRandom}>Next Anecdote</button>
  </div>   
  
)
}
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

// StatisticLine component
const StatisticLine = ({text, value}) => {
  return (
     
      <tr>
      <th style={{textAlign: "left"}}> {text}</th>
      <td > {value}</td>
      </tr>
        
   
  )
}

const Statistics = ({text}) => {

  function SpecialComponent ({good, bad, neutral}) {
  let message;

  if ((good === 0 && bad === 0 && neutral === 0)) {
    message = <p>No Feedback Given</p>
  }
else {
 message =    
      <> 
      <h2>{text}</h2>
      <table>
        <tbody>
        <StatisticLine text= "Good"  value={good} />
        <StatisticLine text= "Bad"  value={bad} />
        <StatisticLine text= "Neutral"  value={neutral} />
        <StatisticLine text= "All"  value={good + bad + neutral} />
        <StatisticLine text= "Average"  value={(good + bad + neutral)/3} />
        <StatisticLine text= "Positive"  value={ (good * 100) / (good + bad + neutral) + "%"} />
        </tbody>
      </table>
      
      </>
     
  
  }
  
  return <div>{message}</div>
  }
  
  return <SpecialComponent good={good} bad={bad} neutral={neutral} />
}



return (
    <div>
      <Header1 course="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Statistics text="Statistics" />
      <Anecdote />
 </div>
)
}
export default App
