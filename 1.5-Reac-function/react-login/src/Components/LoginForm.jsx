import React, { useState } from 'react'
import "./LoginForm.css"


const LoginForm = ({ userLogged }) => {
    const [credentials, setCredentials] = useState({})
    const credentialsHardcoded = { user: "Ales", password: "12345" }
    // Tener dos input para el user y password
    // y un boton para validar credenciales
    // si las credenciales son correctas, dar acceso
    // hardcodear credenciales
    const handleFormValue = ({ target: { name, value } }) => {
        // console.log(e.target.value)
        setCredentials({ ...credentials, [name]: value })
    }

    const submitForm = () => {
        const { user, password } = credentialsHardcoded
        if(credentials.user === user && credentials.password === password ){
            userLogged(true);
        }
    }

    return (
            <div className='form'>
                <input
                    type="text"
                    name="user"
                    value={credentials.user || ""}
                    onChange={handleFormValue} />

                <input
                    type="password"
                    name="password"
                    value={credentials.password || ""}
                    onChange={handleFormValue} />

                <button onClick={() => submitForm()} >Login</button>
            </div>
    )
}

export default LoginForm