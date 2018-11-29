import React from 'react';
import App from './App';
import Productprofile from './Productprofile';
import {BrowserRouter as Router ,Route,Link} from "react-router-dom";

class Home extends React.Component {
	render(){
	  return(	
	  	<Router>
	  	<div>
	  	<Route exact path="/" component={App} />
	  	<Route path="/Productprofile" component={Productprofile} />
	  	</div>
	  	</Router>
	  )	;
	}
}
export default Home;