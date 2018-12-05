import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Productprofile extends React.Component {
	constructor(props){
		super(props);
		this.state={product:[],currentIndex:0,username:"sumit"}
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

	Next = () =>
	{
		this.setState({currentIndex: this.state.currentIndex+1});

		if(this.state.currentIndex === 4){
			this.setState({currentIndex : 0});
		}	
	}

	pre = () =>
	{
		this.setState({currentIndex: this.state.currentIndex-1});
		
		if(this.state.currentIndex === 0){
			this.setState({currentIndex : 4});
		}
	}
	render(){
	  return(
	  	<div className="Productprofile">
	  		<button onClick={this.pre}>pre</button>
	  		 <h1>hello<img src={this.state.product[this.state.currentIndex]} height="500px" width="500px"></img></h1><br/>
	  		<button onClick={this.Next}>Next</button>
	  	</div>
	  )	;
	}
}
export default Productprofile;