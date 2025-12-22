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
 

//States for Anecdote component
 const [selected,setSelected] =  useState(0)
 //Creates a same length array but full with Zeros
 const [votes,setVotes] =  useState(() => new Array(anecdotes.length).fill(0))

  //Randomizing array anecdotes
  const arr = anecdotes
  const selectRandom= () => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  setSelected (randomIndex)
 } 

// Vote function 
const handleVote = () => {
  const newVotes = [...votes]
  newVotes [selected] += 1
  setVotes (newVotes)
}

 // Find anecdote with more votes
 const mostVotedIndex =  votes.indexOf(Math.max(...votes))
 const hasVotes =  votes.some (v => v > 0)



//Header component
  const Header1 = ({course}) => <h1>{course}</h1>
  

//Button good component
const Button=({handleClick, text}) => (
  <button onClick = {handleClick}>{text}</button>
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
     Average: {(good-bad)/(good + bad + neutral)}<br/>
     Positive: { (good * 100) / (good + bad + neutral) }
  </div>
  )
}*/

// StatisticLine component
const StatisticLine = ({text, value}) => (
     <tr>
      <th style={{textAlign: "left"}}> {text}</th>
      <td > {value}</td>
      </tr>
       )


const Statistics = ({text}) => {

  const hasFeedback = good > 0 || bad > 0 ||neutral > 0

  if (!hasFeedback) {
    return  <div>No Feedback Given</div>
  }
return (   
      <> 
      <h2>{text}</h2>
      <table>
        <tbody>
        <StatisticLine text= "Good"  value={good} />
        <StatisticLine text= "Bad"  value={bad} />
        <StatisticLine text= "Neutral"  value={neutral} />
        <StatisticLine text= "All"  value={good + bad + neutral} />
        <StatisticLine text= "Average"  value={(good-bad)/(good + bad + neutral)} />
        <StatisticLine text= "Positive"  value={ (good * 100) / (good + bad + neutral) + "%"} />
        </tbody>
      </table>
      
      </>
     
  )
  }
  
 //Anecdote component
  const Anecdote = () => (
 
 <div>
  <h2>Anecdote of the day</h2>
  <p>{anecdotes[selected]}</p>
  <p>Has {votes[selected]} votes</p>
  <Button handleClick={handleVote} text = "vote"/>
  <Button handleClick={selectRandom} text = "Next anecdote"/>
  </div>   
  
)

//Component to show anecdote with most votes
const MostVotedAnecdote = () => (
  <div>
    <h2>Anecdote with more votes</h2>
    {hasVotes ?(
      <>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>Has {votes [mostVotedIndex]} votes</p>
      </>
    ) : (<p>No votes yet</p>)}
  </div>

)

return (
    <div>
      <Header1 course="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Statistics text="Statistics" />
      <Anecdote />
      <MostVotedAnecdote/>
   
 </div>
)
}
export default App
