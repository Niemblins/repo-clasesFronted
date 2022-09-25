import React,{ useState }  from "react";

// const string = "Un texto de prueba para agregar al ya escrito"
const ComponenteFuncion = () => {
    const [person,setPerson] = useState({
        name: 'Alejandra',
        rol: 'Frontend',
        age: 41,
    })
    const [age,setAge] = useState(41)
    return(
        <>
        <h2 className="app">Hola desde un componente de funcion nombre: {person.name}</h2>
        <h2 className="app">Aca vemos la edad: {age}</h2>
        <button onClick = {(evento) => { setAge(age + 1) } }>sumar</button>
        </>
    )
}

export default ComponenteFuncion