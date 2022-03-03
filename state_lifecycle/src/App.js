import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props);
    console.log("APP - Constructor Called")
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    )
  }
}
