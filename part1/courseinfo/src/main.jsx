//Practice 1.1-1.5
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
/*
import ReactDOM from 'react-dom/client'


import App from './App'
import { set } from 'mongoose'
let counter = 1

const refresh = () => {
ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}
setInterval(() => {
    refresh ()
    counter += 1
  
},1000);

*/