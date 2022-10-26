import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import "./LoginForm.css"


const LoginForm = ({ userLogged }) => {
    const [credentials, setCredentials] = useState({})
    const credentialsHardcoded = { user: "Ales", password: "12345" }
    const navigate = useNavigate();
    // Tener dos input para el user y password
    // y un boton para validar credenciales
    // si las credenciales son correctas, dar acceso
    // hardcodear credenciales
    
    // const handleFormValue = ({ target: { name, value } }) => {
    //     // console.log(e.target.value)
    //     setCredentials({ ...credentials, [name]: value })
    // }

    const handleFormValue = (event) => {
        const { target: { name, value } } = event
        setCredentials({ ...credentials, [name]:value })
    }

    const submitForm = (event) => {
        event.preventDefault()
        const { user, password } = credentialsHardcoded
        if (credentials.user === user && credentials.password === password) {
            userLogged(true);
            navigate('/dashboard')//Forma de hacer la navegación programaticamente
        }
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="user">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" placeholder="Usuario G17" 
                    name="user" 
                    onChange={handleFormValue} 
                    value={credentials.user || ""}
                     />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    name="password" onChange={handleFormValue} value={credentials.password || ""}
                     />
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={(event) => submitForm(event)} >
                    Login
                </Button>
            </Form>



            {/* <div className='form'>
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
            </div> */}
        </>
    )
}

export default LoginForm