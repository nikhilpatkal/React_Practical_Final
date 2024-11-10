import { useState } from 'react'
import './App.css'
import Topbar from './Multipage_App/Topbar'
import Map from './Map_dropdown/Map'
import ToggleButton from './Toggle_button/Toggle_button'
import Lifecycle from './Life_cycle_state/Lifecycle'
import Todoapp from './Tolist_app/Todoapp'
import Login from './LoginForm/Login'
function App() {
  const [count, setCount] = useState(0)
  const [flag,setFlag]=useState(true)
  return (
    <>
    {/* <Topbar/> */}

    {/* <Map/> */}

    {/* <ToggleButton/> */}

      {/* Conditionally render the Lifecycle component */}
      {/* {flag && <Lifecycle />}
    <button onClick={()=>(setFlag(!flag))}>{flag ? "Hide" : "Show"}</button> */}

    {/* <Todoapp/> */}
    <Login/>
    </>
  )
}

export default App
