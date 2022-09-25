import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    // console.log("this props", this.props)
    return (
      <div>
        <h3>Componente botón</h3>
        <span>Counter que llega desde props {this.props.age}</span>
        {/* <p>Darkmode que llega desde props {this.props.darkMode.toString()}</p> */}


        <div>
          {/* <button onClick = {() => this.props.incrementCounter("¡Hola Niemblins!", 23, false, {age:29})}
          > Incrementar Counter</button> */}
          <button onClick = {() => this.props.incrementCounter(3)}
          > Incrementar Counter</button>
          
          <button onClick = {() => this.props.decrementCounter(7)}
          > Decrementar Counter</button>
        </div>
      </div>
    )
  }
}
