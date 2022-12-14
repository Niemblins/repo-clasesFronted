import React, { useState, useEffect } from 'react'
import NavbarComponent from './components/NavbarComponent'
import FormComponent from './components/FormComponent'
import BadgeComponent from './components/BadgeComponent'
import AxiosComponent from './components/AxiosComponent'
import axios from 'axios'


const App = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    userName: ''
  })
    //State
    const [characters, setCharacters] = useState([])

    const fetchApi = ()=>{
      axios.get("https://rickandmortyapi.com/api/character").then(res =>{
        const characters = res.data.results
        setCharacters(characters)
      })
    }
    //useEffect (ciclo de vida de hook)
    useEffect(()=>{
        //se ejecuta cuando se monta y se actualiza props y state
        fetchApi()
        return () =>{
          //se ejecuta cuando se desmonta
        }

    },[])



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
      {
        characters.map((item, index) => {
          return <AxiosComponent item = {item} key = {`${index}-axios`}/>
        })
      }
    </div>
  )
}


export default App
