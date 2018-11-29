import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Productprofile extends React.Component {
	constructor(props){
		super(props);
		this.state={image:["https://image.shutterstock.com/image-photo/headphones-isolated-on-white-background-260nw-377641141.jpg",
		"http://lghttp.50157.nexcesscdn.net/8028284/magento/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/u/audition_1.png",
		"http://pngimg.com/uploads/headphones/headphones_PNG7631.png"],currentIndex:0}
	}

	Next = (e) =>
	{
		let currentIndex = 0;
		 this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
		
	}
	render(){
		let index = 0;
	  return(
	  	<div className="Productprofile">
	  		
	  		<img src={this.state.image[index]} ></img>
	  		{this.state.image.map(function(abc,index){
	  			return <div>
	  				<img src={abc.image}></img>
	  				</div>
	  		}
	  			
	  			)}
	  			<button onClick={this.Next}>Next</button>
	  	</div>
	  )	;
	}
}
export default Productprofile;