import React, { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import FormComponent from './components/FormComponent'
import BadgeComponent from './components/BadgeComponent'

const App = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    userName: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

  }

  return (
    <div>
      <NavbarComponent />
      <FormComponent handleChange = {handleChange}/>
      <BadgeComponent form = {form}/>
    </div>
  )
}


export default App
