import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import Productprofile from './Productprofile';

class App extends Component {
  constructor(props){
    super(props);

    this.state={product:[{product_id:"1001", product_name:"Computer", product_price:"50000",
     product_image:["https://assets.staples-static.com/sbd/cre/products/home-banners/popularcategory/images/dg17721_finalcomputers_380x229.png",
    ]}, {product_id:"1234", product_name:"phone", product_price:"15000", product_image:[
     "https://s.hswstatic.com/gif/white-iphone-4-1.jpg"]},
     {product_id:"10993", product_name:"Head Phone", product_price:"500", product_image:[
     "http://lghttp.50157.nexcesscdn.net/8028284/magento/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/u/audition_1.png"]},
     {product_id:"10993", product_name:"Head Phone", product_price:"500", product_image:[
     "http://lghttp.50157.nexcesscdn.net/8028284/magento/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/u/audition_1.png"]}]}
  }

  render() {
    return (
      <div className="App"> 

        {this.state.product.map(function(xyz,index) {
        return <div>
         <ProductList product_id={xyz.product_id} product_name={xyz.product_name}
          product_price={xyz.product_price} product_image={xyz.product_image} 
          />
          </div>
        })}
      </div>
    );
  }
}

export default App;
