import React, { Component } from 'react';
import Student from './Student';

export default class App extends Component {

  constructor(props){
    super(props);
    console.log("APP - Constructor Called")

    this.state = {
      roll : "101"
    };
  }

  static getDerivedStateFromProps(props, state){
    console.log("APP - Get Derived State From Props");
    console.log(props, state);
    return null;
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h1>{this.state.roll}</h1>
        <Student name = "Rahul" />
      </div>
    )
  }
}
