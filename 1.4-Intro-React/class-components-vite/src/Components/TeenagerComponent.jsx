import React, { Component } from 'react'

export default class TeenagerComponent extends Component {

  componentWillMount = ()=>{
    console.log('antes del montaje')
  }
  componentDidMount = () =>{
    console.log('despues del montaje')
  }

  componentWillReceiveProps = (nextProps)=>{
    console.log('nextProps: ', nextProps)
    console.log('se ejecuta justo al recibir la nueva propiedad')
  }
  shouldComponentUpdate = (nextProps,nextState) =>{
    console.log(nextProps)
    console.log('nextState', nextState)
    console.log("se ejecuta antes de empezar a actualizar el componente, cuando llegan las nuevas propiedades(nextProps) y el nuevo estado (nextState) ")
  }
  componentWillUpdate = (nextProps,nextState) =>{
    console.log('una vez que el metodo shouldComponentUpdate nos devuelve un true se ejecuta esta componentWillUpdate')
    console.log(nextProps)
    console.log(nextState)
  }
  componentDidUpdate = (prevProp,prevState) =>{
    console.log('componentDidUpdate')
    console.log(prevProp)
    console.log(prevState)
  }

  componentWillUnmount = () =>{
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
        <p>Eres un adolescente</p>
    )
  }
}
