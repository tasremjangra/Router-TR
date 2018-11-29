import React, {Component} from 'react';
import {BrowserRouter as Router ,Route,Link} from "react-router-dom";

const ProductList = ({product_id, product_name, product_price, product_image} ) =>{
	return(
		<div className="ProductList">
			<ul className="list">
          		<li>product_id: {product_id}</li>
          		<li>product_name: {product_name}</li>
          		<li>product_price: {product_price}</li>
          		<li><span className="text">product_image:</span><img src={product_image} height="100px" width="100px"></img></li>
          		<li><button><Link to="/Productprofile">Click</Link></button></li>
       		 </ul>
		</div>
	);
}

export default ProductList;
	