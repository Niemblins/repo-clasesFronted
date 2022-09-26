import { Component, Fragment } from 'react'

import './App.css'
import Button from './Components/Button';
import ChildComponent from './Components/ChildComponent';
import PersonComponent from './Components/PersonComponent';
import TeenagerComponent from './Components/TeenagerComponent';
// //1 Extender de Component
// class App extends Component {

class App extends Component {
  //definir un contador de incre y resta y solo llegue hasta el valor cero
  state = {
    counter: 0,
    darkMode: false,
  };
  // se queda blanco y si ponemos true, se pone rojo
  handleClick = (type) => {
    if (type === "inc" && this.state.counter < 30) this.setState({ counter: this.state.counter + 1 })
    else {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1,
        })
      }
    }
  }



  //2 Definir el método render()
  render() {
    //3 Aca ya entra jsx, porque el return ya devuelve código html, dentro de una base js
    return (
      //react fragment
      <Fragment>

        <h3
          style={!this.state.darkMode ? { color: "white" } : { color: "red" }
          }
        >
          React con class components👴🏼 </h3>

        <div className="App">

          <span style={{ fontSize: 25, color: "yellow" }}>
            Ingresa tu edad <b>{this.state.counter}</b>{" "}
          </span>

          <div className="btn-section">
            <button onClick={() => this.handleClick("inc")}>Incrementar</button>
            <button onClick={() => this.handleClick("dec")}>Decrementar</button>
          </div>

        </div>
        {/* {this.state.counter > 4 && <p>Ya puedes ir al kinder</p>}

        {this.state.counter > 12 ? (<h4> Ya pasas a secundaria </h4>
        ) : (
          <h5> Estas pequeño </h5>
        )} */}
        {/* Ejercicio
Mostrar el siguiente mensaje cuando seas mayor de edad (>= 18) ya eres mayor de edad
Mostrar el siguiente mensaje cuando tengas entre 18 y 12 años Eres un adolescente
Mostrar el siguiente mensaje cuando tengas menos de 12 años Eres un niño

         {this.state.counter >= 18 && <p>Eres mayor de edad</p>}
        {this.state.counter > 12 < 18 ? (<p>Eres adolescente</p>
        ):(<p>Eres un niño</p>)} */}

        {this.state.counter >= 18
          ? < PersonComponent />
          : this.state.counter < 18 && this.state.counter >= 12
            ? (< TeenagerComponent test = "recibiendo props"/>
            ) : (
              <>
                < ChildComponent />
                {/* propHtml = valor 
            propCulaquierNombre = valor || state */}

                {/* <button>Botón de html</button> */}
              </>
            )}
        < Button
          age={this.state.counter}
          generation="17"
          dia="Miercóles"
          darkMode={this.state.darkMode}
          // incrementCounter={(saludo,num,isActive,objProp) => console.log(`saludo: ${saludo} - número: ${num} - esta activo: ${isActive} - edad: ${objProp.age}`)}

          // incrementCounter={(value) => console.log(`valor de incremento ${value} `)}
          incrementCounter={(value) => {
            if (this.state.counter < 30) {
              this.setState({ counter: this.state.counter + value })
            }
          }
          }

          decrementCounter={(value) => {
            if (this.state.counter >= 0) {
              this.setState({ counter: this.state.counter - value })
            }

          }
          }

        />

      </Fragment>
    )
  }
}

export default App
