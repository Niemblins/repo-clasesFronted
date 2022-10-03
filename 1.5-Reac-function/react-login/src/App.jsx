import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import LoginForm from './Components/LoginForm'
import Dashboard from './Components/Dashboard'
import './App.css'

function App() {
  const [isUserLogged, setisUserLogged] = useState(false)
  return (
    <div className="App">
      <Routes>
      {/* Con este redirecciona a login, index, página principal */}
        <Route index element ={ <Navigate replace to="/login"/> } /> 

        <Route path="/login" element={<LoginForm userLogged = {(value) => setisUserLogged(value) } />}/>
        <Route path="/contacts" element={<h2>Contactos de mi App</h2>}/>
        <Route path="/shopping-cart" element={<h2>carrito de compras</h2>}/>
        <Route path="/payment" element={<h2>Pago</h2>}/>
        {/* Definir ruta 404 Ponerlo siempre al final de nuestras rutas */}
        <Route path="*" element={<h2>Pagina 404</h2>}/>



      <h2>React login 🤖</h2>
      <div className="card">
        {!isUserLogged ? (
          <LoginForm userLogged = {(value) => setisUserLogged(value) } />
        ) : (
          <Dashboard/>
        )}
      </div>
      </Routes>
    </div>
  )
}

export default App
