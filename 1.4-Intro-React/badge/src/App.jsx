import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import FormComponent from './components/FormComponent'
import BadgeComponent from './components/BadgeComponent'



export class App extends Component {

  state = {
    form: {
      firstName: "",
      lastName: "",
      username: "",
      jobTitle: "",
    }
  }

  handleChange = (event) => {
    console.log(event.target.name)
    this.setState({
        form: {
            ...this.state.form,
            [event.target.name]:event.target.value
        }
    })
}

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <NavbarComponent/>
        <FormComponent handleChange = {this.handleChange}/>
        <BadgeComponent 
        firstName={this.state.form.firstName} 
        lastName={this.state.form.lastName}
        username={this.state.form.username}
        jobTitle={this.state.form.jobTitle}/>
      </div>
    )
  }
}

export default App
