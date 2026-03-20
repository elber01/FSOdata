import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Se crea un nuevp componente Hello
const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
const Footer = (props) => {
  return (
    <div>
      {props.mango}
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
const App = () => {

  const name = 'Peter'
  const age = 10
  const friends = [ 'Peter', 'Maya']
  return (
    <>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name={friends[1]} age={5 + 5} />
<Footer mango="This is a prop value"/>
    </>
    
  )
}
export default App
