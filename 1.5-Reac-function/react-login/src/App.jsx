import { useState } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'


import LoginForm from './Components/LoginForm'
import Dashboard from './Components/Dashboard'
import PlanetDetailsRouter from './Components/PlanetDetailsRouter'
import ProtectedRoute from './Components/ProtectedRoute'
import './App.css'

function App() {
  const [isUserLogged, setisUserLogged] = useState(false)
  return (
    <div className="App">
      <Routes>
      {/* Con este redirecciona a login, index, página principal */}
        <Route index element ={ <Navigate replace to="/login"/> } /> 

        <Route 
        path="/login" element={<LoginForm userLogged = {(value) => setisUserLogged(value) } />}/>

        {/* dentro de este padre van a estar dentro las rutas protegidas */}
        <Route element={<ProtectedRoute isAuth={isUserLogged} userLogged = {(value) => 
          setisUserLogged(value)}/>}> 
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/planet/:id" element={<PlanetDetailsRouter/>}></Route>
        </Route>

        {/* <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/shopping-cart" element={<h2>Carrito de compras 🛒 🛍 👛</h2>}></Route>
        </Route> */}


        {/* <Route path="/dashboard" element={
        <>
        <h2>Dashboard</h2>
        <Layout/>
        {/* <nav>
          <Link to="/dashboard">dashboard</Link>
          <Link to="/shopping-cart">shopping-cart</Link>
          <Link to="/payment">payment</Link>
        </nav> 
        </> */}
        
        <Route path="/shopping-cart" element={<h2>carrito de compras🍄</h2>}/>
        <Route path="/payment" element={<h2>Pago</h2>}/>

        {/* Definir ruta 404 Ponerlo siempre al final de nuestras rutas */}
        <Route path="*" element={<h2>Pagina 404</h2>}/>



      {/* <h2>React login 🤖</h2>
      <div className="card">
        {!isUserLogged ? (
          <LoginForm userLogged = {(value) => setisUserLogged(value) } />
        ) : (
          <Dashboard/>
        )}
      </div> */}
      </Routes>
    </div>
  )
}

export default App
