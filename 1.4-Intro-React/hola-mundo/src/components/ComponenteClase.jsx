import React from "react";

class ComponenteClase extends React.Component{
    state = {
        name: "Alejandra",
        rol: "Frontend",
        age: 41,
    }

    handleClick = (event) =>{
        this.setState({
            ...this.state,
            age: this.state.age + 1,
        })
    }
    resta = (event) =>{
        this.setState({
            ...this.state,
            age: this.state.age - 1,
        })
    }

    render(){
        return(
            <div className="app">
            <h2>Esto es un componente de clase</h2>
            <h3>{this.state.name}</h3>
            <p>Rol: <span>{this.state.rol}</span> </p>
            <span>Age: {this.state.age}</span>
            <button onClick = {this.handleClick }>Suma</button>
            {/* <button onClick = {this.resta }>Resta</button> */}
            <button onClick = {this.resta }>Click</button>
        </div>
        )
        
    }
}

export default ComponenteClase