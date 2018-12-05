import React, { Component } from 'react';
import './App.css';

class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state={product:[],username:"sumit"};
  }

  componentWillMount(){
    const username =this.state.username;
    fetch('http://localhost:9000/test',{
    method:'POST',
    headers : {
      'Accept' : 'application/json',
      'Content-Type':'application/json' 
    },
    body:JSON.stringify({
      username:username
    })
    })
    .then(response => response.json())
    .then(data => this.setState({product:data}))
    console.log('this is my componentWillMount');
  }


  render() {
  	console.log(this.state.product)
    return (
      <div className="App">
        <h1>hello<img src={this.state.product[0]}></img></h1><br/>
        <input type="text" ref="username"/>
      </div>
    );
  }
}

export default ApiCall;