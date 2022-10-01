import { useState } from 'react'
import './App.css'
import LoginForm from './Components/LoginForm'
import Dashboard from './Components/Dashboard'

function App() {
  const [isUserLogged, setisUserLogged] = useState(false)
  return (
    <div className="App">

      <h2>React login 🤖</h2>
      <div className="card">
        {!isUserLogged ? (
          <LoginForm userLogged = {(value) => setisUserLogged(value) } />
        ) : (
          <Dashboard/>
        )}
      </div>

    </div>
  )
}

export default App
